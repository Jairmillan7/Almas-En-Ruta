// =====================================================
// Almas en Ruta — Supabase API (Storage + DB queries)
// Depends on: auth.js (sb client)
// =====================================================

window.AlmasDB = (function () {
  "use strict";

  function client() {
    return window.AlmasAuth ? window.AlmasAuth.supabase : null;
  }

  // ── Get current traveler profile from DB ──
  async function getProfile() {
    const s = client();
    if (!s) return null;
    const { data: { user } } = await s.auth.getUser();
    if (!user) return null;
    const { data } = await s.from("travelers").select("*").eq("auth_id", user.id).single();
    return data;
  }

  // ── Update avatar URL in travelers table ──
  async function uploadAvatar(file) {
    const s = client();
    if (!s) throw new Error("No Supabase client");
    const profile = await getProfile();
    if (!profile) throw new Error("No profile");

    const ext = file.name.split(".").pop();
    const path = `${profile.auth_id}/avatar.${ext}`;

    const { error: upErr } = await s.storage.from("avatars").upload(path, file, {
      upsert: true,
      contentType: file.type
    });
    if (upErr) throw upErr;

    const { data: urlData } = s.storage.from("avatars").getPublicUrl(path);
    const url = urlData.publicUrl;

    const { error: dbErr } = await s.from("travelers").update({ avatar_url: url }).eq("id", profile.id);
    if (dbErr) throw dbErr;

    return url;
  }

  // ── Get avatar URL ──
  async function getAvatarUrl() {
    const profile = await getProfile();
    return profile ? profile.avatar_url : null;
  }

  // ── Upload document ──
  async function uploadDocument(file, tipo) {
    const s = client();
    if (!s) throw new Error("No Supabase client");
    const profile = await getProfile();
    if (!profile) throw new Error("No profile");

    const ts = Date.now();
    const ext = file.name.split(".").pop();
    const path = `${profile.auth_id}/${tipo}_${ts}.${ext}`;

    const { error: upErr } = await s.storage.from("documentos").upload(path, file, {
      contentType: file.type
    });
    if (upErr) throw upErr;

    const { data: urlData } = await s.storage.from("documentos").createSignedUrl(path, 60 * 60 * 24 * 365);
    const url = urlData ? urlData.signedUrl : path;

    const { data, error: dbErr } = await s.from("documentos_usuario").insert({
      traveler_id: profile.id,
      tipo: tipo,
      nombre_archivo: file.name,
      url_archivo: url,
      estado: "pendiente"
    }).select().single();

    if (dbErr) throw dbErr;
    return data;
  }

  // ── Get my documents ──
  async function getMyDocuments() {
    const s = client();
    if (!s) return [];
    const profile = await getProfile();
    if (!profile) return [];

    const { data, error } = await s.from("documentos_usuario")
      .select("*")
      .eq("traveler_id", profile.id)
      .order("created_at", { ascending: false });

    return error ? [] : data;
  }

  // ── Upload comprobante ──
  async function uploadComprobante(file, monto) {
    const s = client();
    if (!s) throw new Error("No Supabase client");
    const profile = await getProfile();
    if (!profile) throw new Error("No profile");

    const ts = Date.now();
    const ext = file.name.split(".").pop();
    const path = `${profile.auth_id}/comp_${ts}.${ext}`;

    const { error: upErr } = await s.storage.from("comprobantes").upload(path, file, {
      contentType: file.type
    });
    if (upErr) throw upErr;

    const { data: urlData } = await s.storage.from("comprobantes").createSignedUrl(path, 60 * 60 * 24 * 365);
    const url = urlData ? urlData.signedUrl : path;

    const { data, error: dbErr } = await s.from("comprobantes_pago").insert({
      traveler_id: profile.id,
      url_archivo: url,
      nombre_archivo: file.name,
      monto: monto,
      estado: "en_revision"
    }).select().single();

    if (dbErr) throw dbErr;
    return data;
  }

  // ── Get my comprobantes ──
  async function getMyComprobantes() {
    const s = client();
    if (!s) return [];
    const profile = await getProfile();
    if (!profile) return [];

    const { data, error } = await s.from("comprobantes_pago")
      .select("*")
      .eq("traveler_id", profile.id)
      .order("created_at", { ascending: false });

    return error ? [] : data;
  }

  // ── Admin: Get ALL travelers from DB ──
  async function getAllTravelers() {
    const s = client();
    if (!s) return [];

    const { data, error } = await s.from("travelers")
      .select("*")
      .order("name", { ascending: true });

    return error ? [] : data;
  }

  // ── Admin: Update traveler payment ──
  async function updateTravelerPayment(travelerId, newPaid, newPoints) {
    const s = client();
    if (!s) throw new Error("No Supabase client");

    const { error } = await s.from("travelers").update({
      paid: newPaid,
      points: newPoints
    }).eq("id", travelerId);

    if (error) throw error;
  }

  // ── Admin: Get all comprobantes with traveler info ──
  async function getAllComprobantes() {
    const s = client();
    if (!s) return [];

    const { data, error } = await s.from("comprobantes_pago")
      .select("*, travelers(name, username)")
      .order("created_at", { ascending: false });

    return error ? [] : data;
  }

  // ── Admin: Update comprobante status ──
  async function updateComprobanteStatus(id, estado, notas) {
    const s = client();
    if (!s) throw new Error("No Supabase client");

    const { error } = await s.from("comprobantes_pago").update({
      estado: estado,
      notas_admin: notas || null,
      reviewed_at: new Date().toISOString()
    }).eq("id", id);

    if (error) throw error;
  }

  // ── Admin: Get all documents with traveler info ──
  async function getAllDocuments() {
    const s = client();
    if (!s) return [];

    const { data, error } = await s.from("documentos_usuario")
      .select("*, travelers(name, username)")
      .order("created_at", { ascending: false });

    return error ? [] : data;
  }

  // ── Admin: Update document status ──
  async function updateDocumentStatus(id, estado) {
    const s = client();
    if (!s) throw new Error("No Supabase client");

    const { error } = await s.from("documentos_usuario").update({ estado }).eq("id", id);
    if (error) throw error;
  }

  // ── Save selected extras to travelers.selected_addons ──
  async function saveExtras(addonIds) {
    const s = client();
    if (!s) throw new Error("No Supabase client");
    const profile = await getProfile();
    if (!profile) throw new Error("No profile");

    const { error } = await s.from("travelers")
      .update({ selected_addons: addonIds })
      .eq("id", profile.id);

    if (error) throw error;
  }

  // ── Get selected extras ──
  async function getExtras() {
    const profile = await getProfile();
    return profile && profile.selected_addons ? profile.selected_addons : [];
  }

  // Public API
  return {
    getProfile,
    uploadAvatar,
    getAvatarUrl,
    uploadDocument,
    getMyDocuments,
    uploadComprobante,
    getMyComprobantes,
    getAllTravelers,
    updateTravelerPayment,
    getAllComprobantes,
    updateComprobanteStatus,
    getAllDocuments,
    updateDocumentStatus,
    saveExtras,
    getExtras
  };
})();
