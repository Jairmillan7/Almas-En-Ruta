// =====================================================
// Almas en Ruta — Auth bridge (Supabase)
// =====================================================

const SUPABASE_URL      = "https://fmhlzvvqbqqijaycxpwn.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtaGx6dnZxYnFxaWpheWN4cHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzMjU1NDcsImV4cCI6MjA5MTkwMTU0N30.awjs_qTWvouVkOGlOOzN1aK4sky9LCRm5SAIuAUhtp0";
const EMAIL_DOMAIN      = "almasenruta.app";

// Inicializar cliente Supabase
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false
  }
});

// =====================================================
// API publica — main.js llama estas funciones
// =====================================================
window.AlmasAuth = {
  supabase: sb,

  /**
   * Inicializa el login de viajeros.
   * Se llama DESPUES de que renderLogin() crea el HTML del form.
   */
  initTravelerLogin: function () {
    var userEl = document.getElementById("login-user");
    var passEl = document.getElementById("login-pass");
    var btn    = document.getElementById("login-btn");
    var errBox = document.getElementById("login-error");

    if (!userEl || !passEl || !btn || !errBox) return;

    var doLogin = async function () {
      errBox.style.display = "none";
      var raw  = userEl.value.trim().toLowerCase();
      var pass = passEl.value;

      if (!raw || !pass) {
        errBox.textContent = "Escribe tu usuario y contrasena.";
        errBox.style.display = "block";
        return;
      }

      // Tolerante: si ya trae @, usalo tal cual
      var email = raw.includes("@") ? raw : raw + "@" + EMAIL_DOMAIN;

      btn.disabled = true;
      btn.textContent = "Entrando...";

      try {
        // 1) Autenticar con Supabase
        var result = await sb.auth.signInWithPassword({ email: email, password: pass });
        var authData = result.data;
        var authErr  = result.error;

        if (authErr) {
          if (authErr.message.includes("Email not confirmed")) {
            errBox.textContent = "Tu cuenta no ha sido confirmada. Contacta al administrador.";
          } else {
            errBox.textContent = "Usuario o contrasena incorrectos.";
          }
          errBox.style.display = "block";
          return;
        }

        // 2) Buscar perfil en tabla travelers
        var profResult = await sb
          .from("travelers")
          .select("id, username, name, role")
          .eq("auth_id", authData.user.id)
          .single();

        var profile = profResult.data;
        var profErr = profResult.error;

        if (profErr || !profile) {
          await sb.auth.signOut();
          errBox.textContent = "Tu cuenta existe pero no tiene perfil de viajero. Contacta al administrador.";
          errBox.style.display = "block";
          return;
        }

        // 3) Redirigir segun rol
        if (profile.role === "admin") {
          if (typeof navigateTo === "function") navigateTo("admin");
        } else {
          // Sincronizar con el state de main.js
          if (window.AlmasAuth._syncTraveler) {
            window.AlmasAuth._syncTraveler(profile);
          }
          if (typeof navigateTo === "function") navigateTo("traveler");
        }

      } catch (err) {
        errBox.textContent = "Error de conexion. Revisa tu internet e intenta de nuevo.";
        errBox.style.display = "block";
      } finally {
        btn.disabled = false;
        btn.textContent = "Entrar al portal";
      }
    };

    // Event listeners
    btn.addEventListener("click", doLogin);
    userEl.addEventListener("keydown", function (e) {
      if (e.key === "Enter") doLogin();
      errBox.style.display = "none";
    });
    passEl.addEventListener("keydown", function (e) {
      if (e.key === "Enter") doLogin();
      errBox.style.display = "none";
    });
  },

  /**
   * Inicializa el login de admin.
   * Se llama DESPUES de que renderAdminLogin() crea el HTML.
   */
  initAdminLogin: function () {
    var passEl = document.getElementById("admin-login-pass");
    var btn    = document.getElementById("admin-login-btn");
    var errBox = document.getElementById("admin-login-error");

    if (!passEl || !btn || !errBox) return;

    var doLogin = async function () {
      errBox.style.display = "none";
      var pass = passEl.value;

      if (!pass) {
        errBox.textContent = "Escribe la contrasena.";
        errBox.style.display = "block";
        return;
      }

      btn.disabled = true;
      btn.textContent = "Entrando...";

      try {
        var email = "admin@" + EMAIL_DOMAIN;

        var result = await sb.auth.signInWithPassword({ email: email, password: pass });
        var authData = result.data;
        var authErr  = result.error;

        if (authErr) {
          errBox.textContent = "Contrasena incorrecta.";
          errBox.style.display = "block";
          return;
        }

        // Verificar que es admin en la tabla
        var profResult = await sb
          .from("travelers")
          .select("id, username, name, role")
          .eq("auth_id", authData.user.id)
          .single();

        var profile = profResult.data;

        if (!profile || profile.role !== "admin") {
          await sb.auth.signOut();
          errBox.textContent = "Esta cuenta no tiene permisos de administrador.";
          errBox.style.display = "block";
          return;
        }

        if (typeof navigateTo === "function") navigateTo("admin");

      } catch (err) {
        errBox.textContent = "Error de conexion.";
        errBox.style.display = "block";
      } finally {
        btn.disabled = false;
        btn.textContent = "Entrar";
      }
    };

    btn.addEventListener("click", doLogin);
    passEl.addEventListener("keydown", function (e) {
      if (e.key === "Enter") doLogin();
      errBox.style.display = "none";
    });
  },

  /**
   * Cerrar sesion
   */
  logout: async function () {
    await sb.auth.signOut();
    if (typeof navigateTo === "function") navigateTo("home");
  },

  /**
   * Verificar si hay sesion activa (para auto-login)
   */
  checkSession: async function () {
    try {
      var sessionResult = await sb.auth.getSession();
      var session = sessionResult.data.session;
      if (!session) return null;

      var profResult = await sb
        .from("travelers")
        .select("id, username, name, role")
        .eq("auth_id", session.user.id)
        .single();

      return profResult.data || null;
    } catch (err) {
      return null;
    }
  }
};
