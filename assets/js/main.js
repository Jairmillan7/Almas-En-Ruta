const BANK = { bank: 'BBVA', holder: 'David Brandon Lagunas Arriaga', account: '0123 4567 8901 2345', clabe: '012 180 00 01234567 89' };

const ADDONS = [
  { id: 'room_single', cat: 'Alojamiento', name: 'Habitación individual', desc: 'Suplemento por cuarto privado en todo el recorrido', price: 8000, lucide: 'bed-double' },
  { id: 'room_triple', cat: 'Alojamiento', name: 'Habitación triple', desc: 'Descuento al compartir habitación con 2 personas más', price: -2000, lucide: 'building-2' },
  { id: 'extra_rome', cat: 'Destinos adicionales', name: 'Día extra en Roma', desc: 'Una noche adicional para explorar más la Ciudad Eterna', price: 4000, lucide: 'landmark' },
  { id: 'extra_paris', cat: 'Destinos adicionales', name: 'Día extra en París', desc: 'Una noche adicional en la Ciudad de la Luz', price: 4500, lucide: 'tower-control' },
  { id: 'florence', cat: 'Destinos adicionales', name: 'Excursión a Florencia', desc: 'El David, Galería Uffizi y Ponte Vecchio', price: 3500, lucide: 'frame' },
  { id: 'venice', cat: 'Destinos adicionales', name: 'Excursión a Venecia', desc: 'Góndola, Plaza San Marcos y el Gran Canal', price: 4200, lucide: 'sailboat' },
  { id: 'disney', cat: 'Atracciones especiales', name: 'Disneyland París', desc: 'Un día completo en el parque más mágico de Europa', price: 3800, lucide: 'ferris-wheel' },
  { id: 'eiffel_night', cat: 'Atracciones especiales', name: 'Tour nocturno Torre Eiffel', desc: 'Subida nocturna con la ciudad iluminada a tus pies', price: 1500, lucide: 'moon-star' },
  { id: 'vatican_vip', cat: 'Atracciones especiales', name: 'VIP Museos Vaticanos', desc: 'Entrada sin filas + audioguía premium', price: 1200, lucide: 'church' },
  { id: 'assisi', cat: 'Atracciones especiales', name: 'Asís · Beato Carlo Acutis', desc: 'Tumba del primer millennial en camino a la santidad', price: 2500, lucide: 'heart-handshake' },
  { id: 'photo_session', cat: 'Fotografía profesional', name: 'Sesión de fotos profesional', desc: 'Fotografías con cámara profesional en los destinos del viaje', price: 3000, lucide: 'camera' },
  { id: 'photo_album', cat: 'Fotografía profesional', name: 'Álbum fotográfico impreso', desc: '30 fotos impresas en álbum premium de colección', price: 1800, lucide: 'book-open' },
  { id: 'photo_digital', cat: 'Fotografía profesional', name: 'Paquete digital completo', desc: 'Todas las fotos editadas en alta resolución en formato digital', price: 900, lucide: 'hard-drive-download' },
  { id: 'insurance_p', cat: 'Servicios adicionales', name: 'Seguro viaje premium', desc: 'Cobertura total + cancelación por cualquier motivo', price: 2500, lucide: 'shield-check' },
  { id: 'kit', cat: 'Servicios adicionales', name: 'Kit viajero Almas en Ruta', desc: 'Mochila, libreta, guías de destino y accesorios exclusivos', price: 800, lucide: 'backpack' },
];

const ITINERARY = [
  { day: 1, city: 'Llegada a Roma', lucide: 'plane', items: ['Vuelo Ciudad de México → Roma (FCO)', 'Traslado al hotel', 'Descanso y bienvenida en grupo'] },
  { day: 2, city: 'El Vaticano', lucide: 'church', items: ['Basílica de San Pedro', 'Museos Vaticanos', 'Capilla Sixtina', 'Misa especial'] },
  { day: 3, city: 'Roma Clásica', lucide: 'landmark', items: ['Coliseo Romano', 'Foro Romano', 'Fontana di Trevi', 'Plaza Navona'] },
  { day: 4, city: 'Roma Espiritual', lucide: 'heart-handshake', items: ['Catacumbas de San Calixto', 'Basílica de San Pablo extramuros', 'Tarde libre'] },
  { day: 5, city: 'Roma → París', lucide: 'train-front', items: ['Traslado al aeropuerto', 'Vuelo Roma → París CDG', 'Check-in y paseo nocturno'] },
  { day: 6, city: 'París Monumental', lucide: 'tower-control', items: ['Torre Eiffel (subida)', 'Crucero por el Sena', 'Campos Elíseos', 'Arco del Triunfo'] },
  { day: 7, city: 'Arte y Fe en París', lucide: 'palette', items: ['Museo del Louvre', 'Catedral de Notre-Dame', 'Barrio de Montmartre'] },
  { day: 8, city: 'Versalles', lucide: 'crown', items: ['Palacio de Versalles', 'Jardines reales', 'Tarde libre en París'] },
  { day: 9, city: 'Último día en París', lucide: 'shopping-bag', items: ['Mañana libre', 'Sacré-Cœur (opcional)', 'Cena de despedida grupal'] },
  { day: 10, city: 'Regreso a México', lucide: 'home', items: ['Traslado aeropuerto CDG', 'Vuelo de regreso', 'Bienvenidos de vuelta'] },
];

const TRIPS = [
  { id: 'sep26', name: 'Roma & París', sub: 'Peregrinación y cultura · 2026', dates: 'Sep 24 – Oct 4, 2026', days: 10, price: 52000, spots: 27, avail: 24, status: 'open', img: 'assets/images/hero-roma-paris.png', flag: '🇮🇹🇫🇷', desc: 'Vive la historia, el arte y la fe en dos de las ciudades más hermosas del mundo. Del Vaticano a la cima de la Torre Eiffel.', highlights: ['Audiencia Papal', 'Museos Vaticanos', 'Coliseo Romano', 'Torre Eiffel', 'Versalles'], includes: ['Vuelo redondo Ciudad de México', 'Hospedaje en hoteles seleccionados', 'Todos los traslados terrestres', 'Entradas al itinerario', 'Seguro de viaje internacional', 'Guía de acompañamiento'], itinerary: ITINERARY },
  { id: 'jan27', name: 'Roma & París', sub: 'Segunda edición · Enero 2027', dates: 'Ene 14 – 24, 2027', days: 11, price: 54000, spots: 27, avail: 27, status: 'coming', img: 'assets/images/notre-dame.png', flag: '🇮🇹🇫🇷', desc: 'Para quienes no alcanzaron lugar en septiembre. La misma experiencia única de Roma y París, ahora en invierno europeo.', highlights: ['Vaticano', 'Coliseo Romano', 'Museo del Louvre', 'Torre Eiffel', 'Versalles'], includes: ['Vuelo redondo', 'Hospedaje seleccionado', 'Traslados terrestres', 'Entradas al itinerario', 'Seguro de viaje', 'Guía de acompañamiento'], itinerary: [] },
  { id: 'korea27', name: 'Corea del Sur', sub: 'K-Culture y tradición milenaria', dates: '2027 · Fechas por confirmar', days: 12, price: null, spots: 25, avail: 25, status: 'soon', img: 'assets/images/trip-korea.png', flag: '🇰🇷', desc: 'Seúl, Busan y los templos milenarios. K-pop, gastronomía, tecnología y tradición en perfecta armonía.', highlights: ['Palacio Gyeongbokgung', 'Bukchon Hanok', 'Isla Jeju', 'Busan', 'Street Food Tour'], includes: [], itinerary: [] },
  { id: 'israel27', name: 'Tierra Santa', sub: 'Israel · Peregrinación espiritual', dates: '2027 · Fechas por confirmar', days: 10, price: null, spots: 25, avail: 25, status: 'soon', img: 'assets/images/trip-israel.png', flag: '🇮🇱', desc: 'Un viaje espiritual profundo por los lugares más sagrados: Jerusalén, Belén, Nazareth y el Mar de Galilea.', highlights: ['Jerusalén', 'Belén', 'Nazareth', 'Mar de Galilea', 'Mar Muerto'], includes: [], itinerary: [] },
  { id: 'japan28', name: 'Japón', sub: 'Sakura, templos y modernidad', dates: '2028 · Próximamente', days: 14, price: null, spots: 20, avail: 20, status: 'future', img: 'assets/images/trip-japan.png', flag: '🇯🇵', desc: 'Tokio, Kioto, Osaka y el Monte Fuji. Lo ancestral y lo ultramoderno en perfecta armonía.', highlights: ['Tokio', 'Kioto', 'Monte Fuji', 'Osaka', 'Fushimi Inari'], includes: [], itinerary: [] },
];

const PRICE = 52000;

const TRAVELERS = [
  { id: 1, name: 'María González', username: 'maria', password: 'almas2026', paid: 25000, cost: PRICE, points: 250, addons: [], docs: [{ n: 'Pasaporte', ok: true }, { n: 'INE', ok: true }, { n: 'Foto', ok: false }, { n: 'CURP', ok: false }], tripDocs: [{ type: 'Boleto de avión', detail: 'AM456 · CDMX → FCO · Sep 24', lucide: 'plane' }], comprobantes: [{ id: 1, fecha: '2026-03-15', monto: 25000, estado: 'aceptado', archivo: 'comprobante_maria_1.jpg' }] },
  { id: 2, name: 'Carlos Ramírez', username: 'carlos', password: 'almas2026', paid: 5000, cost: PRICE, points: 50, addons: [], docs: [{ n: 'Pasaporte', ok: false }, { n: 'INE', ok: true }, { n: 'Foto', ok: false }, { n: 'CURP', ok: false }], tripDocs: [], comprobantes: [{ id: 2, fecha: '2026-04-01', monto: 5000, estado: 'en_revision', archivo: 'comprobante_carlos_1.png' }] },
  { id: 3, name: 'Ana Martínez', username: 'ana', password: 'almas2026', paid: 52000, cost: PRICE, points: 520, addons: ['photo_session', 'photo_album'], docs: [{ n: 'Pasaporte', ok: true }, { n: 'INE', ok: true }, { n: 'Foto', ok: true }, { n: 'CURP', ok: true }], tripDocs: [{ type: 'Boleto de avión', detail: 'AM456 · CDMX → FCO · Sep 24', lucide: 'plane' }, { type: 'Hospedaje Roma', detail: 'Hotel Nazionale · 4 noches', lucide: 'building-2' }, { type: 'Hospedaje París', detail: 'Hôtel du Louvre · 4 noches', lucide: 'building-2' }, { type: 'Seguro de viaje', detail: 'Cobertura internacional completa', lucide: 'shield-check' }], comprobantes: [{ id: 3, fecha: '2026-01-10', monto: 25000, estado: 'aceptado', archivo: 'comp_ana_1.jpg' }, { id: 4, fecha: '2026-03-20', monto: 27000, estado: 'aceptado', archivo: 'comp_ana_2.jpg' }] },
];

const MEETINGS = [
  { id: 1, title: 'Reunión informativa #1', date: '2026-04-20', time: '18:00', place: 'Parroquia de la Santísima Trinidad' },
  { id: 2, title: 'Entrega de documentos', date: '2026-05-15', time: '17:00', place: 'Parroquia de la Santísima Trinidad' },
  { id: 3, title: 'Reunión final pre-viaje', date: '2026-09-10', time: '18:30', place: 'Parroquia de la Santísima Trinidad' },
];

/* ═══════════════════════════════════════════
   ICON HELPER
   ═══════════════════════════════════════════ */

function LI(name, cls = '') {
  return `<i data-lucide="${name}"${cls ? ` class="${cls}"` : ''}></i>`;
}

/* ═══════════════════════════════════════════
   STATE
   ═══════════════════════════════════════════ */

const state = {
  currentView: 'home',
  travelerId: null,
  selectedTripId: null,
  travelers: JSON.parse(JSON.stringify(TRAVELERS)),
  meetings: JSON.parse(JSON.stringify(MEETINGS)),
  bank: { ...BANK },
  addonList: JSON.parse(JSON.stringify(ADDONS)),
  tripConfig: { price: 52000, deposit: 5000, lockAmount: 25000, spots: 27 },
  tripList: JSON.parse(JSON.stringify(TRIPS)),
  travelerTab: 'resumen',
  adminTab: 'viajeros',
  adminConfigSection: 'precio',
  countdown: { d: 0, h: 0, m: 0, s: 0 },
  travelerExtrasSelected: [],
  pendingUploadFile: null,
};

/* ═══════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════ */

function waLink(msg = '') {
  return `https://wa.me/527226746796${msg ? '?text=' + encodeURIComponent(msg) : ''}`;
}

function getStatusBadge(t) {
  const rem = t.cost - t.paid;
  if (rem === 0) return `<span class="status-badge status-badge--paid">${LI('check-circle')} Liquidado</span>`;
  if (t.paid >= 25000) return `<span class="status-badge status-badge--locked">${LI('lock')} Bloqueado</span>`;
  return `<span class="status-badge status-badge--pending">${LI('alert-triangle')} Inicial</span>`;
}

function progressBar(pct, cls = '') {
  return `<div class="progress-bar ${cls}"><div class="progress-bar-fill" style="width:${Math.min(pct, 100)}%"></div></div>`;
}

function formatDate(dateStr) {
  return new Date(dateStr + 'T12:00:00').toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function getInitials(name) {
  return name.split(' ').filter(Boolean).map(w => w[0]).slice(0, 2).join('').toUpperCase();
}

function getComprobanteStatusChip(estado) {
  const map = {
    'en_revision': { cls: 'status-chip--review', icon: 'clock', label: 'En revisión' },
    'aceptado': { cls: 'status-chip--accepted', icon: 'check-circle', label: 'Aceptado' },
    'denegado': { cls: 'status-chip--denied', icon: 'x-circle', label: 'Denegado' },
  };
  const s = map[estado] || map['en_revision'];
  return `<span class="status-chip ${s.cls}">${LI(s.icon)} ${s.label}</span>`;
}

/* ═══════════════════════════════════════════
   VIEW ROUTER
   ═══════════════════════════════════════════ */

function navigateTo(view) {
  state.currentView = view;
  document.querySelectorAll('.app-view').forEach(v => v.classList.remove('active'));
  const el = document.getElementById('view-' + view);
  if (el) {
    el.classList.add('active');
    window.scrollTo(0, 0);
  }

  // Render dynamic views
  switch (view) {
    case 'home': renderTrips(); break;
    case 'trip-detail': renderTripDetail(); break;
    case 'login':
      if (state.travelerId) return navigateTo('traveler');
      renderLogin();
      break;
    case 'traveler': renderTravelerDashboard(); break;
    case 'admin-login': renderAdminLogin(); break;
    case 'admin': renderAdminDashboard(); break;
  }

  // Re-initialize icons for new content
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

/* ═══════════════════════════════════════════
   RENDER: TRIPS LIST (Home)
   ═══════════════════════════════════════════ */

function renderTrips() {
  const el = document.getElementById('trips-list');
  if (!el) return;

  el.innerHTML = state.tripList.map(trip => {
    const statusLabels = { open: 'ABIERTO', coming: 'PRÓXIMAMENTE', soon: 'EN PLANEACIÓN', future: 'PRÓXIMAMENTE' };
    const sl = statusLabels[trip.status] || 'PRÓXIMAMENTE';

    return `
      <div class="trip-card" data-trip-id="${trip.id}">
        <div class="trip-card-image">
          <img src="${trip.img}" alt="${trip.name}" loading="lazy">
          <div class="trip-card-overlay"></div>
          <div class="trip-card-overlay-content">
            <div style="display:flex;justify-content:flex-end">
              <span class="trip-card-status trip-card-status--${trip.status}">${trip.status === 'open' ? '● ' : ''}${sl}</span>
            </div>
            <div class="trip-card-bottom">
              <div>
                <div class="trip-card-flag">${trip.flag}</div>
                <h3 class="trip-card-name">${trip.name}</h3>
                <p class="trip-card-dates">${trip.dates} · ${trip.days} días</p>
              </div>
              ${trip.price ? `<div class="trip-card-price-badge"><div class="price">$${(trip.price / 1000).toFixed(0)}k</div><div class="unit">MXN / persona</div></div>` : ''}
            </div>
          </div>
        </div>
        <div class="trip-card-footer">
          <p class="trip-card-desc">${trip.desc.substring(0, 72)}…</p>
          <span class="trip-card-arrow">›</span>
        </div>
      </div>
    `;
  }).join('');

  // Click handlers
  el.querySelectorAll('.trip-card').forEach(card => {
    card.addEventListener('click', () => {
      state.selectedTripId = card.dataset.tripId;
      navigateTo('trip-detail');
    });
  });
}

/* ═══════════════════════════════════════════
   RENDER: TRIP DETAIL
   ═══════════════════════════════════════════ */

function renderTripDetail() {
  const el = document.getElementById('view-trip-detail');
  const trip = state.tripList.find(t => t.id === state.selectedTripId);
  if (!el || !trip) return;

  let html = `
    <div style="background:var(--bg-dark);padding:14px 22px;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;z-index:100;box-shadow:var(--shadow-lg)">
      <span class="logo-display">Almas en Ruta</span>
      <button onclick="navigateTo('home')" class="portal-logout-btn">${LI('arrow-left')} Volver</button>
    </div>
    <div class="trip-detail-hero">
      <img src="${trip.img}" alt="${trip.name}">
      <div class="trip-detail-overlay"></div>
      <div class="trip-detail-info">
        <p class="trip-detail-dates">${trip.flag} ${trip.dates}</p>
        <h1 class="trip-detail-name">${trip.name}</h1>
        <p class="trip-detail-sub">${trip.sub}</p>
        ${trip.price ? `<p class="trip-detail-price">$${trip.price.toLocaleString()} <span>MXN / persona</span></p>` : `<div class="trip-detail-price-tbd">Precio por confirmar · Registra tu interés</div>`}
      </div>
    </div>
    <div class="trip-detail-body">
      <div class="portal-card"><p style="font-size:var(--text-base);line-height:1.75;margin:0">${trip.desc}</p></div>
      <div class="portal-card">
        <h3>Puntos destacados</h3>
        <div class="highlight-badges">${trip.highlights.map(h => `<span class="highlight-badge">${LI('star')} ${h}</span>`).join('')}</div>
      </div>
  `;

  if (trip.includes.length > 0) {
    html += `<div class="portal-card"><h3>¿Qué incluye?</h3>${trip.includes.map(item => `<div class="includes-dot-row"><div class="includes-dot"></div><span style="font-size:var(--text-sm)">${item}</span></div>`).join('')}<p style="color:var(--text-muted);font-size:var(--text-xs);margin-top:var(--space-md);margin-bottom:0">* No incluye alimentos salvo lo indicado en el itinerario</p></div>`;
  }

  if (trip.itinerary && trip.itinerary.length > 0) {
    html += `<div class="portal-card"><h3>Itinerario día a día</h3>${trip.itinerary.map((day, i) => `
      <div class="trip-itin-day" data-itin-idx="${i}">
        <span class="trip-itin-badge">DÍA ${day.day}</span>
        <span class="portal-itin-emoji">${LI(day.lucide)}</span>
        <span class="trip-itin-city">${day.city}</span>
        <span class="trip-itin-chevron" id="itin-chevron-${i}">${LI('chevron-down')}</span>
      </div>
      <div class="trip-itin-items" id="itin-items-${i}" style="display:none">${day.items.map(it => `<div class="trip-itin-item">· ${it}</div>`).join('')}</div>
    `).join('')}</div>`;
  }

  if (trip.price) {
    html += `<div class="portal-card"><h3>Plan de pagos</h3>
      ${[{ n: '1', title: 'Depósito inicial', amount: '$5,000 MXN', desc: 'Reserva tu lugar (el precio puede cambiar)' }, { n: '2', title: 'Bloqueo de precio', amount: '$25,000 MXN', desc: `Vuelos + 50% hospedaje. Precio de $${trip.price.toLocaleString()} garantizado` }, { n: '3', title: 'Liquidación', amount: 'Saldo restante', desc: 'A convenir según fecha límite previa al viaje' }].map(p => `
        <div class="payment-plan-step">
          <div class="payment-plan-number">${p.n}</div>
          <div><div class="payment-plan-title">${p.title} – <span>${p.amount}</span></div><div class="payment-plan-desc">${p.desc}</div></div>
        </div>`).join('')}
    </div>`;
  }

  html += `
    <div class="trip-cta-banner">
      <img src="${trip.img}" alt="">
      <div class="trip-cta-overlay">
        <h3>¿Te animas a viajar?</h3>
        <p>${trip.avail < 27 ? `Solo quedan ${trip.avail} lugares.` : 'Regístranos tu interés y te avisamos al abrir inscripciones.'}</p>
        <a href="${waLink(`Hola, me interesa el viaje ${trip.name} (${trip.dates}). ¿Me pueden dar más información?`)}" class="btn-whatsapp-full" style="display:inline-block;border-radius:var(--radius-md);padding:13px 26px;width:auto" target="_blank" rel="noopener noreferrer">${LI('message-circle')} Escribir por WhatsApp</a>
      </div>
    </div>
  </div>`;

  el.innerHTML = html;

  // Itinerary toggle
  el.querySelectorAll('.trip-itin-day').forEach(dayEl => {
    dayEl.addEventListener('click', () => {
      const idx = dayEl.dataset.itinIdx;
      const items = document.getElementById('itin-items-' + idx);
      const chevron = document.getElementById('itin-chevron-' + idx);
      if (items) {
        const isOpen = items.style.display !== 'none';
        // Close all
        el.querySelectorAll('.trip-itin-items').forEach(it => it.style.display = 'none');
        el.querySelectorAll('.trip-itin-chevron').forEach(ch => ch.classList.remove('open'));
        if (!isOpen) {
          items.style.display = 'block';
          if (chevron) chevron.classList.add('open');
        }
      }
    });
  });
}

/* ═══════════════════════════════════════════
   RENDER: LOGIN
   ═══════════════════════════════════════════ */

function renderLogin() {
  const el = document.getElementById('view-login');
  if (!el) return;

  el.innerHTML = `
    <div class="login-hero">
      <img src="assets/images/hero-roma-paris.png" alt="Roma">
      <div class="login-hero-overlay">
        <span class="logo-display">Almas en Ruta</span>
        <p class="login-subtitle">Portal del Viajero</p>
      </div>
      <button onclick="navigateTo('home')" style="position:absolute;top:16px;left:16px" class="portal-logout-btn">${LI('arrow-left')} Inicio</button>
    </div>
    <div class="login-container">
      <div class="login-card">
        <h2>Iniciar sesión</h2>
        <p class="login-desc">Ingresa tus credenciales de acceso</p>
        <div id="login-error" class="alert-error" style="display:none"></div>
        <div class="form-group">
          <label class="form-label">USUARIO</label>
          <input type="text" id="login-user" class="form-input" placeholder="Solo tu usuario, ej: maria" autocomplete="username">
        </div>
        <div class="form-group">
          <label class="form-label">CONTRASEÑA</label>
          <input type="password" id="login-pass" class="form-input" placeholder="Tu contraseña de acceso" autocomplete="current-password">
        </div>
        <button class="btn btn-primary btn-full" id="login-btn" style="width:100%">Entrar al portal</button>
      </div>
      <div style="text-align:center;margin-top:var(--space-md)">
        <p style="color:var(--text-muted);font-size:var(--text-sm);margin:0 0 var(--space-xs)">¿Olvidaste tu acceso?</p>
        <a href="${waLink('Hola, olvidé mis credenciales del portal de viajero')}" style="color:var(--color-primary);font-weight:700;font-size:var(--text-sm)" target="_blank" rel="noopener noreferrer">${LI('message-circle')} Contactar por WhatsApp</a>
      </div>
    </div>
  `;

  // Conectar con Supabase Auth (auth.js expone esta función)
  if (window.AlmasAuth && window.AlmasAuth.initTravelerLogin) {
    window.AlmasAuth._syncTraveler = function (profile) {
      // Buscar viajero local por username para mantener compatibilidad con el dashboard
      var local = state.travelers.find(function (t) { return t.username === profile.username; });
      if (!local) {
        // Crear entrada temporal para viajeros nuevos (no demo)
        local = {
          id: Date.now(),
          name: profile.name,
          username: profile.username,
          password: '',
          paid: 0,
          cost: state.tripConfig.price,
          points: 0,
          addons: [],
          docs: [{ n: 'Pasaporte', ok: false }, { n: 'INE', ok: false }, { n: 'Foto', ok: false }, { n: 'CURP', ok: false }],
          tripDocs: [],
          comprobantes: []
        };
        state.travelers.push(local);
      }
      state.travelerId = local.id;
      state.travelerTab = 'resumen';
      state.travelerExtrasSelected = local.addons ? [].concat(local.addons) : [];
    };
    window.AlmasAuth.initTravelerLogin();
  } else {
    console.error("[Main] AlmasAuth no disponible — verifica que auth.js cargó antes de main.js");
  }
}

/* ═══════════════════════════════════════════
   RENDER: TRAVELER DASHBOARD
   ═══════════════════════════════════════════ */

function renderTravelerDashboard() {
  const el = document.getElementById('view-traveler');
  const t = state.travelers.find(x => x.id === state.travelerId);
  if (!el || !t) return;

  const rem = t.cost - t.paid;
  const pct = Math.round((t.paid / t.cost) * 100);
  const firstName = t.name.split(' ')[0];
  const initials = getInitials(t.name);
  const addonTotal = t.addons.reduce((s, id) => { const a = state.addonList.find(x => x.id === id); return a ? s + a.price : s; }, 0);
  const nextMeeting = state.meetings.filter(m => new Date(m.date + 'T23:59:00') >= new Date()).sort((a, b) => new Date(a.date) - new Date(b.date))[0];
  const cd = state.countdown;

  const TABS = [
    { id: 'resumen', l: 'Inicio', icon: 'home' },
    { id: 'extras', l: 'Extras', icon: 'sparkles' },
    { id: 'pagos', l: 'Pagos', icon: 'credit-card' },
    { id: 'docs', l: 'Mis Docs', icon: 'file-text' },
    { id: 'boletos', l: 'Boletos', icon: 'ticket' },
    { id: 'itinerario', l: 'Itinerario', icon: 'map' },
    { id: 'juntas', l: 'Reuniones', icon: 'calendar' }
  ];

  let content = '';
  const tab = state.travelerTab;

  if (tab === 'resumen') {
    content = `
      <div class="countdown-card" style="cursor:pointer" onclick="navigateTo('roma')">
        <img src="assets/images/paris-eiffel.png" alt="París">
        <div class="countdown-card-overlay">
          <div>
            <p class="countdown-mini-label">${LI('plane')} TU VIAJE COMIENZA EN</p>
            <div class="countdown-mini-grid">
              ${[['DÍAS', cd.d], ['HRS', cd.h], ['MIN', cd.m], ['SEG', cd.s]].map(([l, v]) => `<div class="countdown-mini-item"><div class="countdown-mini-value">${String(v).padStart(2, '0')}</div><div class="countdown-mini-unit">${l}</div></div>`).join('')}
            </div>
            <p class="countdown-mini-date">Sep 24 → Oct 4 · Roma & París <span style="display:block;margin-top:4px;font-size:var(--text-xs);text-decoration:underline;color:rgba(255,255,255,0.8)">Ver presentación del viaje ></span></p>
          </div>
        </div>
      </div>
      <div class="portal-card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-lg)"><h3 style="margin:0">Estado de pago</h3>${getStatusBadge(t)}</div>
        ${progressBar(pct)}
        <div class="payment-summary">
          <div class="payment-summary-item"><div class="amount" style="color:var(--color-success)">$${t.paid.toLocaleString()}</div><div class="label">ABONADO</div></div>
          ${rem > 0 ? `<div class="payment-summary-item" style="text-align:right"><div class="amount" style="color:var(--color-error)">$${rem.toLocaleString()}</div><div class="label">PENDIENTE</div></div>` : ''}
        </div>
        ${addonTotal !== 0 ? `<div style="margin-top:var(--space-md);padding:var(--space-sm) var(--space-md);background:var(--bg-surface-alt);border-radius:var(--radius-md);font-size:var(--text-xs);color:var(--color-primary-dark);border:1px solid var(--color-primary-light)">${LI('sparkles')} Extras: ${addonTotal > 0 ? '+' : ''}${addonTotal.toLocaleString()} MXN</div>` : ''}
      </div>
      <div class="portal-card portal-card--gold">
        <div class="points-card">
          <div class="points-icon">${LI('star')}</div>
          <div class="points-info"><div class="points-title">Puntos Almas</div><p class="points-desc">Acumula 1,000 pts y gana descuento especial</p></div>
          <div class="points-value">${t.points}</div>
        </div>
        ${progressBar((t.points / 1000) * 100, 'progress-bar--sm')}
        <p style="font-size:var(--text-xs);color:var(--text-muted);margin:7px 0 0">Cada $1,000 MXN abonado = 10 puntos · Meta: 1,000 pts</p>
      </div>
    `;

    if (t.tripDocs.length > 0) {
      content += `<div class="portal-card"><h3>Documentos disponibles</h3>${t.tripDocs.map(d => `<div class="boleto-item"><div class="boleto-icon">${LI(d.lucide)}</div><div class="boleto-info"><div class="boleto-type">${d.type}</div><div class="boleto-detail">${d.detail}</div></div><span class="status-badge status-badge--paid">${LI('check')}</span></div>`).join('')}</div>`;
    }

    if (nextMeeting) {
      content += `<div class="portal-card" style="border:1.5px solid rgba(45,42,38,0.08)"><h3>Próxima reunión</h3><div style="font-weight:700;font-size:var(--text-sm);color:var(--text-primary);margin-bottom:var(--space-sm)">${nextMeeting.title}</div><div class="meeting-details"><div>${LI('calendar-days')} ${formatDate(nextMeeting.date)}</div><div>${LI('clock')} ${nextMeeting.time} hrs · ${LI('map-pin')} ${nextMeeting.place}</div></div></div>`;
    }
  }

  else if (tab === 'extras') {
    const cats = [...new Set(state.addonList.map(a => a.cat))];
    const sel = state.travelerExtrasSelected;
    const total = sel.reduce((s, id) => { const a = state.addonList.find(x => x.id === id); return a ? s + a.price : s; }, 0);

    content = cats.map(cat => `
      <h3 class="extras-category-title">${LI('layers')} ${cat}</h3>
      ${state.addonList.filter(a => a.cat === cat).map(addon => {
      const isOn = sel.includes(addon.id);
      return `<div class="extras-card ${isOn ? 'selected' : ''}" data-addon-id="${addon.id}">
          <div class="extras-card-inner">
            <span class="extras-card-icon">${LI(addon.lucide)}</span>
            <div class="extras-card-info"><div class="extras-card-name">${addon.name}</div><div class="extras-card-desc">${addon.desc}</div></div>
            <div class="extras-card-right">
              <div class="extras-card-price ${addon.price < 0 ? 'extras-card-price--negative' : 'extras-card-price--positive'}">${addon.price < 0 ? '−' : '+'} $${Math.abs(addon.price).toLocaleString()}</div>
              <span class="extras-card-toggle ${isOn ? 'extras-card-toggle--active' : 'extras-card-toggle--inactive'}">${isOn ? LI('check') + ' Seleccionado' : 'Agregar'}</span>
            </div>
          </div>
        </div>`;
    }).join('')}
    `).join('');

    content += `
      <div class="portal-card portal-card--sticky">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-lg)">
          <div><div style="font-size:var(--text-xs);color:var(--text-muted);margin-bottom:2px">${sel.length} extra(s) seleccionado(s)</div><div style="font-size:var(--text-xl);font-weight:800;color:${total < 0 ? 'var(--color-success)' : 'var(--color-primary)'}">${total < 0 ? '−' : '+'} $${Math.abs(total).toLocaleString()} MXN</div></div>
          <button class="btn btn-primary btn-sm" id="save-extras-btn">Guardar</button>
        </div>
        <a href="${waLink(`Hola, soy ${t.name} y me gustaría agregar extras al viaje.`)}" class="btn-whatsapp-full" target="_blank" rel="noopener noreferrer">${LI('message-circle')} Solicitar cotización por WhatsApp</a>
      </div>
    `;
  }

  else if (tab === 'pagos') {
    const comprobantes = t.comprobantes || [];
    content = `
      <div class="portal-card">
        <h3>Estado de pago</h3>
        <div class="stats-grid">
          ${[{ l: 'Total viaje', v: `$${t.cost.toLocaleString()}`, c: 'navy' }, { l: 'Abonado', v: `$${t.paid.toLocaleString()}`, c: 'success' }, { l: 'Pendiente', v: `$${rem.toLocaleString()}`, c: rem > 0 ? 'danger' : 'success' }].map(({ l, v, c }) => `<div class="stat-item"><div class="stat-value stat-value--${c}">${v}</div><div class="stat-label">${l}</div></div>`).join('')}
        </div>
        ${progressBar(pct, 'progress-bar--lg')}
        <p style="font-size:var(--text-xs);color:var(--text-muted);text-align:center;margin-top:var(--space-sm)">${pct}% pagado</p>
        ${addonTotal !== 0 ? `<div style="margin-top:var(--space-md);padding:var(--space-md);background:var(--bg-surface-alt);border-radius:var(--radius-md);border:1px solid var(--color-primary-light);display:flex;justify-content:space-between;align-items:center"><span style="font-size:var(--text-sm);color:#92400E">${LI('sparkles')} Extras seleccionados</span><span style="font-size:var(--text-sm);font-weight:800;color:var(--color-primary)">${addonTotal > 0 ? '+' : ''}${addonTotal.toLocaleString()} MXN</span></div>` : ''}
      </div>
      <div class="portal-card">
        <h3>Estado de tu reserva</h3>
        ${rem === 0 ? `<div class="alert-success"><strong>${LI('check-circle')} Viaje 100% pagado</strong><p style="margin:6px 0 0">Tu lugar está confirmado. Nos vemos en septiembre.</p></div>` : t.paid >= state.tripConfig.lockAmount ? `<div class="alert-info"><strong>${LI('lock')} Precio bloqueado a $${t.cost.toLocaleString()} MXN</strong><p style="margin:6px 0 0">Tus vuelos y parte del hospedaje están cubiertos. Precio garantizado.</p></div>` : `<div class="alert-warning"><strong>${LI('alert-triangle')} Precio no bloqueado aún</strong><p style="margin:6px 0 0">Para bloquear precio necesitas $${state.tripConfig.lockAmount.toLocaleString()} MXN. Te faltan $${(state.tripConfig.lockAmount - t.paid).toLocaleString()} MXN.</p></div>`}
      </div>

      <div class="portal-card">
        <h3>${LI('upload')} Subir comprobante de pago</h3>
        <div class="comprobante-upload-card" id="comprobante-upload-area">
          ${LI('cloud-upload')}
          <h4>Seleccionar archivo</h4>
          <p>Imagen o PDF de tu comprobante (máx. 10MB)</p>
        </div>
        <input type="file" id="comprobante-file-input" accept=".jpg,.jpeg,.png,.pdf" style="display:none">
        <div class="comprobante-preview" id="comprobante-preview">
          <div class="comprobante-preview-inner">
            <div class="comprobante-preview-thumb" id="comprobante-thumb">${LI('file-text')}</div>
            <div class="comprobante-preview-info">
              <div class="comprobante-preview-name" id="comprobante-name">archivo.jpg</div>
              <div class="comprobante-preview-size" id="comprobante-size">0 KB</div>
            </div>
            <button class="comprobante-preview-remove" id="comprobante-remove">${LI('x')}</button>
          </div>
        </div>
        <div class="comprobante-amount-row" id="comprobante-amount-row" style="display:none">
          <div class="form-group" style="margin:0">
            <label class="form-label">Monto del depósito ($MXN)</label>
            <input type="number" class="form-input" id="comprobante-monto" placeholder="Ej: 5000">
          </div>
          <button class="btn btn-primary btn-sm" id="comprobante-send-btn">${LI('send')} Enviar</button>
        </div>
      </div>

      <div class="portal-card portal-card--bank">
        <h3>${LI('building-2')} Datos para depósito</h3><div class="gold-divider"></div>
        <div class="bank-info-grid">
          ${[{ l: 'Banco', v: state.bank.bank }, { l: 'Titular de la cuenta', v: state.bank.holder }, { l: 'Número de cuenta', v: state.bank.account }, { l: 'CLABE interbancaria', v: state.bank.clabe }, { l: 'Concepto de pago', v: 'Tu nombre + Roma París 2026' }].map(({ l, v }) => `<div class="bank-info-row"><span class="bank-info-label">${l}</span><span class="bank-info-value">${v}</span></div>`).join('')}
        </div>
        <p style="font-size:var(--text-xs);color:var(--text-muted);margin-top:var(--space-md);margin-bottom:var(--space-lg)">${LI('alert-triangle')} Una vez realizado el depósito, sube tu comprobante arriba o envíalo por WhatsApp.</p>
        <a href="${waLink('Hola, quiero enviar mi comprobante de pago para el viaje Roma & París 2026')}" class="btn-whatsapp-full" target="_blank" rel="noopener noreferrer">${LI('message-circle')} Enviar comprobante por WhatsApp</a>
      </div>

      ${comprobantes.length > 0 ? `
      <div class="portal-card">
        <h3>${LI('receipt')} Historial de comprobantes</h3>
        ${comprobantes.map(c => `
          <div class="comprobante-item">
            <div class="comprobante-item-icon" style="background:${c.estado === 'aceptado' ? 'var(--color-success-light)' : c.estado === 'denegado' ? 'var(--color-error-light)' : 'var(--color-warning-light)'}">${LI(c.estado === 'aceptado' ? 'check-circle' : c.estado === 'denegado' ? 'x-circle' : 'clock')}</div>
            <div class="comprobante-item-info">
              <div class="comprobante-item-date">${formatDate(c.fecha)}</div>
              <div class="comprobante-item-amount">$${c.monto.toLocaleString()} MXN</div>
            </div>
            ${getComprobanteStatusChip(c.estado)}
          </div>
        `).join('')}
      </div>` : ''}
    `;
  }

  else if (tab === 'docs') {
    const pending = t.docs.filter(d => !d.ok).length;
    content = `
      <div class="portal-card">
        <h3>Mis documentos personales</h3>
        <p style="color:var(--text-muted);font-size:var(--text-sm);margin-bottom:var(--space-sm)">Documentos que necesitamos de tu parte para tramitar el viaje</p>
        ${pending > 0 ? `<div class="alert-warning">${LI('alert-triangle')} Tienes ${pending} documento(s) pendiente(s)</div>` : ''}
        ${t.docs.map((d, i) => `
          <div class="doc-row">
            <div class="doc-row-left">
              <div class="doc-icon-box ${d.ok ? 'doc-icon-box--ok' : 'doc-icon-box--pending'}">${d.ok ? LI('check') : LI('clock')}</div>
              <span class="doc-name">${d.n}</span>
            </div>
            <div class="doc-actions">
              ${d.ok ? `<button class="doc-btn doc-btn--view" data-doc-url="${d.url || ''}" data-doc-tipo="${d.n.toLowerCase()}">${LI('eye')} Ver</button>` : `<button class="doc-btn doc-btn--upload" data-doc-idx="${i}">${LI('upload')} Subir</button>`}
              <span class="status-badge ${d.ok ? 'status-badge--received' : 'status-badge--waiting'}">${d.ok ? 'Recibido' : 'Pendiente'}</span>
            </div>
          </div>
        `).join('')}
      </div>
      ${pending > 0 ? `<div class="portal-card"><p style="color:var(--text-muted);font-size:var(--text-sm);margin-bottom:var(--space-lg)">Envíanos tus documentos faltantes por WhatsApp y los registramos de inmediato.</p><a href="${waLink('Hola, quiero enviar mis documentos para el viaje Roma & París 2026')}" class="btn btn-primary btn-full" style="width:100%;text-decoration:none" target="_blank" rel="noopener noreferrer">${LI('message-circle')} Enviar documentos por WhatsApp</a></div>` : ''}
    `;
  }

  else if (tab === 'boletos') {
    if (t.tripDocs.length === 0) {
      content = `<div class="portal-card boleto-empty"><div class="boleto-empty-icon">${LI('ticket')}</div><h3>Sin boletos disponibles aún</h3><p style="color:var(--text-muted);font-size:var(--text-sm)">Aquí aparecerán tus boletos, vouchers de hospedaje y más cuando estén listos.</p></div>`;
    } else {
      content = `<div class="portal-card"><h3>Boletos y documentos del viaje</h3>${t.tripDocs.map(d => `<div class="boleto-item"><div class="boleto-icon">${LI(d.lucide)}</div><div class="boleto-info"><div class="boleto-type">${d.type}</div><div class="boleto-detail">${d.detail}</div></div><span class="status-badge status-badge--paid">${LI('check')} Listo</span></div>`).join('')}</div>`;
    }
  }

  else if (tab === 'itinerario') {
    content = `<div class="portal-card">
      <div class="portal-itin-header">
        <img src="assets/images/roma-coliseo.png" alt="Roma">
        <div class="portal-itin-header-overlay"><div><h3 class="portal-itin-title">Tu itinerario</h3><p class="portal-itin-subtitle">10 días · Sep 24 – Oct 4, 2026</p></div></div>
      </div>
      ${ITINERARY.map((day, i) => `
        <div class="portal-itin-day">
          <div class="portal-itin-day-left">
            <div class="portal-itin-day-badge">DÍA ${day.day}</div>
            <div class="portal-itin-emoji">${LI(day.lucide)}</div>
            ${i < ITINERARY.length - 1 ? '<div class="portal-itin-connector"></div>' : ''}
          </div>
          <div>
            <div class="portal-itin-day-city">${day.city}</div>
            ${day.items.map(it => `<div class="portal-itin-day-item">· ${it}</div>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>`;
  }

  else if (tab === 'juntas') {
    content = `<div class="portal-card"><h3>Reuniones informativas</h3><p style="color:var(--text-muted);font-size:var(--text-sm);margin-bottom:var(--space-xl)">Asiste a todas las reuniones para estar al día con cada detalle</p>
    ${state.meetings.length === 0 ? '<p style="color:var(--text-muted);text-align:center;padding:var(--space-xl)">Sin reuniones programadas aún.</p>' : ''}
    ${state.meetings.map(m => {
      const isPast = new Date(m.date + 'T23:59:00') < new Date();
      return `<div class="meeting-card ${isPast ? 'meeting-card--past' : 'meeting-card--upcoming'}"><div class="meeting-card-header"><span class="meeting-title ${isPast ? 'meeting-title--past' : 'meeting-title--upcoming'}">${m.title}</span><span class="status-badge ${isPast ? 'status-badge--past' : 'status-badge--upcoming'}">${isPast ? 'Pasada' : 'Próxima'}</span></div><div class="meeting-details"><div>${LI('calendar-days')} ${formatDate(m.date)}</div><div>${LI('clock')} ${m.time} hrs · ${LI('map-pin')} ${m.place}</div></div></div>`;
    }).join('')}</div>`;
  }

  el.innerHTML = `
    <div class="portal-header">
      <div class="portal-header-top">
        <span class="logo-display">Almas en Ruta</span>
        <button class="portal-logout-btn" onclick="state.travelerId=null;if(window.AlmasAuth){window.AlmasAuth.logout()}else{navigateTo('home')}">${LI('log-out')} Cerrar sesión</button>
      </div>
      <div class="portal-tabs">
        ${TABS.map(({ id, l, icon }) => `<button class="portal-tab ${tab === id ? 'active' : ''}" data-tab="${id}">${LI(icon)} ${l}</button>`).join('')}
      </div>
    </div>
    <div class="portal-body">
      <div class="portal-welcome" style="padding:var(--space-xl) 0 var(--space-md)">
        <div class="portal-welcome-row">
          <div class="portal-avatar" id="portal-avatar-btn" style="cursor:pointer" title="Cambiar foto de perfil">
            <div class="portal-avatar-placeholder" id="portal-avatar-content">${initials}</div>
          </div>
          <input type="file" id="avatar-file-input" accept=".jpg,.jpeg,.png,.webp" style="display:none">
          <div class="portal-welcome-info">
            <p class="portal-welcome-label">BIENVENID@,</p>
            <p class="portal-welcome-name" style="color:var(--text-primary)">${firstName}</p>
          </div>
        </div>
        <div class="portal-points-badge" style="margin-top:var(--space-sm)"><span class="star">${LI('star')}</span> ${t.points} puntos Almas</div>
      </div>
      ${content}
    </div>
  `;

  // ── Avatar: click to upload + load from Supabase ──
  const avatarBtn = document.getElementById('portal-avatar-btn');
  const avatarInput = document.getElementById('avatar-file-input');
  const avatarContent = document.getElementById('portal-avatar-content');

  if (avatarBtn && avatarInput) {
    avatarBtn.addEventListener('click', () => avatarInput.click());
    avatarInput.addEventListener('change', async () => {
      if (!avatarInput.files.length) return;
      const file = avatarInput.files[0];
      if (file.size > 5 * 1024 * 1024) { alert('La imagen no puede ser mayor a 5MB.'); return; }
      try {
        avatarContent.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:var(--text-xs);color:rgba(255,255,255,0.7)">...</div>';
        const url = await window.AlmasDB.uploadAvatar(file);
        if (url && avatarContent) avatarContent.innerHTML = `<img src="${url}" alt="Avatar" style="width:100%;height:100%;object-fit:cover">`;
      } catch (err) {

        avatarContent.textContent = initials;
        alert('Error al subir la foto. Verifica que el bucket "avatars" existe en Supabase.');
      }
    });

    // Load existing avatar async
    if (window.AlmasDB) {
      window.AlmasDB.getAvatarUrl().then(url => {
        if (url && avatarContent) {
          avatarContent.innerHTML = `<img src="${url}" alt="Avatar" style="width:100%;height:100%;object-fit:cover">`;
        }
      }).catch(() => {});
    }
  }

  // Tab clicks
  el.querySelectorAll('.portal-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      state.travelerTab = btn.dataset.tab;
      const currentT = state.travelers.find(x => x.id === state.travelerId);
      if (currentT && btn.dataset.tab === 'extras') {
        state.travelerExtrasSelected = [...currentT.addons];
      }
      renderTravelerDashboard();
      if (typeof lucide !== 'undefined') lucide.createIcons();
    });
  });

  // Extras click handler
  if (tab === 'extras') {
    el.querySelectorAll('.extras-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.addonId;
        if (state.travelerExtrasSelected.includes(id)) {
          state.travelerExtrasSelected = state.travelerExtrasSelected.filter(x => x !== id);
        } else {
          state.travelerExtrasSelected.push(id);
        }
        renderTravelerDashboard();
        if (typeof lucide !== 'undefined') lucide.createIcons();
      });
    });

    const saveBtn = document.getElementById('save-extras-btn');
    if (saveBtn) {
      saveBtn.addEventListener('click', async () => {
        const trav = state.travelers.find(x => x.id === state.travelerId);
        if (trav) trav.addons = [...state.travelerExtrasSelected];

        // Save to Supabase
        try {
          if (window.AlmasDB) {
            saveBtn.textContent = 'Guardando...';
            saveBtn.disabled = true;
            await window.AlmasDB.saveExtras(state.travelerExtrasSelected);
          }
        } catch (err) {

        }

        renderTravelerDashboard();
        if (typeof lucide !== 'undefined') lucide.createIcons();
      });
    }
  }

  // Comprobante upload handler
  if (tab === 'pagos') {
    initComprobanteUpload(t);
  }

  // Doc upload handler
  if (tab === 'docs') {
    el.querySelectorAll('.doc-btn--upload').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.docIdx);
        const trav = state.travelers.find(x => x.id === state.travelerId);
        if (trav && trav.docs[idx]) {
          const docName = trav.docs[idx].n;
          const input = document.createElement('input');
          input.type = 'file';
          input.accept = 'image/jpeg,image/png,.jpg,.jpeg,.png';
          input.addEventListener('change', async () => {
            if (input.files.length > 0) {
              const file = input.files[0];

              // Validate file type (JS-side, not just accept)
              const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
              if (!validTypes.includes(file.type)) {
                alert('Solo se aceptan imágenes JPG o PNG.\n\nEl archivo que seleccionaste es de tipo: ' + (file.type || 'desconocido'));
                return;
              }

              if (file.size > 10 * 1024 * 1024) { alert('La imagen no puede ser mayor a 10MB.'); return; }
              if (file.size < 20 * 1024) { alert('La imagen parece demasiado pequeña. Sube una foto clara y legible de tu ' + docName + '.'); return; }

              // Validate image dimensions
              const img = new Image();
              const objectUrl = URL.createObjectURL(file);
              img.src = objectUrl;

              img.onload = async () => {
                if (img.width < 400 || img.height < 400) {
                  URL.revokeObjectURL(objectUrl);
                  alert('La imagen es demasiado pequeña (' + img.width + 'x' + img.height + ').\n\nNecesitamos una foto clara de al menos 400x400 píxeles de tu ' + docName + '.');
                  return;
                }

                // Show preview modal
                const overlay = document.createElement('div');
                overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;padding:20px';
                overlay.innerHTML = `
                  <div style="background:white;border-radius:16px;max-width:420px;width:100%;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.4)">
                    <div style="padding:20px 20px 12px;text-align:center">
                      <h3 style="margin:0 0 4px;font-size:16px;color:#1B2A4A">¿Es tu ${docName}?</h3>
                      <p style="margin:0;font-size:13px;color:#6B7280">Verifica que la imagen sea legible y corresponda a tu documento</p>
                    </div>
                    <div style="padding:0 20px">
                      <img src="${objectUrl}" style="width:100%;border-radius:8px;max-height:300px;object-fit:contain;border:1px solid #E5E7EB" alt="Preview">
                    </div>
                    <div style="padding:16px 20px;display:flex;gap:10px">
                      <button id="doc-preview-cancel" style="flex:1;padding:10px;border-radius:8px;border:1px solid #D1D5DB;background:white;cursor:pointer;font-weight:600;color:#6B7280;font-size:14px">Cambiar</button>
                      <button id="doc-preview-confirm" style="flex:1;padding:10px;border-radius:8px;border:none;background:linear-gradient(135deg,#C8932E,#A67724);color:white;cursor:pointer;font-weight:600;font-size:14px">Sí, subir</button>
                    </div>
                  </div>
                `;
                document.body.appendChild(overlay);

                document.getElementById('doc-preview-cancel').addEventListener('click', () => {
                  URL.revokeObjectURL(objectUrl);
                  overlay.remove();
                  input.click(); // Re-open file picker
                });

                document.getElementById('doc-preview-confirm').addEventListener('click', async () => {
                  URL.revokeObjectURL(objectUrl);
                  overlay.remove();

                  btn.textContent = 'Subiendo...';
                  btn.disabled = true;

                  try {
                    if (window.AlmasDB) {
                      const result = await window.AlmasDB.uploadDocument(file, trav.docs[idx].n.toLowerCase());
                      trav.docs[idx].ok = true;
                      trav.docs[idx].url = result.url_archivo;
                    } else {
                      trav.docs[idx].ok = true;
                    }
                    renderTravelerDashboard();
                    if (typeof lucide !== 'undefined') lucide.createIcons();
                  } catch (err) {
                    alert('Error al subir documento: ' + (err.message || 'Error desconocido'));
                    btn.textContent = 'Subir';
                    btn.disabled = false;
                    if (typeof lucide !== 'undefined') lucide.createIcons();
                  }
                });
              };

              img.onerror = () => {
                URL.revokeObjectURL(objectUrl);
                alert('No se pudo leer la imagen. Intenta con otro archivo.');
              };
            }
          });
          input.click();
        }
      });
    });

    // View button handler
    el.querySelectorAll('.doc-btn--view').forEach(btn => {
      btn.addEventListener('click', async () => {
        const url = btn.dataset.docUrl;
        if (url && url !== '') {
          window.open(url, '_blank');
        } else {
          // Try to fetch from Supabase
          const tipo = btn.dataset.docTipo;
          if (window.AlmasDB) {
            btn.textContent = 'Cargando...';
            try {
              const docs = await window.AlmasDB.getMyDocuments();
              const match = docs.find(d => d.tipo === tipo);
              if (match && match.url_archivo) {
                window.open(match.url_archivo, '_blank');
              } else {
                alert('No se encontró el archivo en la base de datos.');
              }
            } catch (err) {

              alert('Error al obtener el documento.');
            }
            btn.innerHTML = LI('eye') + ' Ver';
            if (typeof lucide !== 'undefined') lucide.createIcons();
          } else {
            alert('Documento guardado localmente. Inicia sesión para ver archivos.');
          }
        }
      });
    });
  }
}

/* ═══════════════════════════════════════════
   COMPROBANTE UPLOAD
   ═══════════════════════════════════════════ */

function initComprobanteUpload(traveler) {
  const uploadArea = document.getElementById('comprobante-upload-area');
  const fileInput = document.getElementById('comprobante-file-input');
  const preview = document.getElementById('comprobante-preview');
  const amountRow = document.getElementById('comprobante-amount-row');
  const removeBtn = document.getElementById('comprobante-remove');
  const sendBtn = document.getElementById('comprobante-send-btn');

  if (!uploadArea || !fileInput) return;

  state.pendingUploadFile = null;

  uploadArea.addEventListener('click', () => fileInput.click());

  fileInput.addEventListener('change', () => {
    if (fileInput.files.length === 0) return;
    const file = fileInput.files[0];

    // Validate
    const allowed = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!allowed.includes(file.type)) {
      alert('Solo se permiten archivos JPG, PNG o PDF.');
      fileInput.value = '';
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      alert('El archivo no puede ser mayor a 10MB.');
      fileInput.value = '';
      return;
    }

    state.pendingUploadFile = file;

    // Show preview
    const nameEl = document.getElementById('comprobante-name');
    const sizeEl = document.getElementById('comprobante-size');
    const thumbEl = document.getElementById('comprobante-thumb');
    if (nameEl) nameEl.textContent = file.name;
    if (sizeEl) sizeEl.textContent = (file.size / 1024).toFixed(0) + ' KB';

    if (file.type.startsWith('image/') && thumbEl) {
      const reader = new FileReader();
      reader.onload = e => { thumbEl.innerHTML = `<img src="${e.target.result}" alt="Preview">`; };
      reader.readAsDataURL(file);
    } else if (thumbEl) {
      thumbEl.innerHTML = LI('file-text');
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    uploadArea.style.display = 'none';
    if (preview) preview.classList.add('active');
    if (amountRow) amountRow.style.display = 'flex';
  });

  if (removeBtn) {
    removeBtn.addEventListener('click', () => {
      state.pendingUploadFile = null;
      fileInput.value = '';
      uploadArea.style.display = '';
      if (preview) preview.classList.remove('active');
      if (amountRow) amountRow.style.display = 'none';
    });
  }

  if (sendBtn) {
    sendBtn.addEventListener('click', async () => {
      const montoInput = document.getElementById('comprobante-monto');
      const monto = parseInt(montoInput?.value);

      if (!state.pendingUploadFile) {
        alert('Selecciona un archivo primero.');
        return;
      }
      if (!monto || monto <= 0) {
        alert('Ingresa el monto del depósito.');
        return;
      }

      sendBtn.textContent = 'Enviando...';
      sendBtn.disabled = true;

      try {
        if (window.AlmasDB) {
          await window.AlmasDB.uploadComprobante(state.pendingUploadFile, monto);
        }

        // Update local state
        if (!traveler.comprobantes) traveler.comprobantes = [];
        traveler.comprobantes.push({
          id: Date.now(),
          fecha: new Date().toISOString().split('T')[0],
          monto: monto,
          estado: 'en_revision',
          archivo: state.pendingUploadFile.name
        });

        state.pendingUploadFile = null;
        renderTravelerDashboard();
        if (typeof lucide !== 'undefined') lucide.createIcons();
      } catch (err) {

        alert('Error al subir comprobante: ' + (err.message || 'Error desconocido') + '\n\nVerifica que el bucket "comprobantes" existe en Supabase Storage.');
        sendBtn.textContent = 'Enviar';
        sendBtn.disabled = false;
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }
    });
  }
}

/* ═══════════════════════════════════════════
   RENDER: ADMIN LOGIN
   ═══════════════════════════════════════════ */

function renderAdminLogin() {
  const el = document.getElementById('view-admin-login');
  if (!el) return;

  el.innerHTML = `
    <div style="background:var(--bg-dark);padding:14px 22px;display:flex;justify-content:space-between;align-items:center">
      <span class="logo-display">Almas en Ruta</span>
      <button onclick="navigateTo('home')" class="portal-logout-btn">${LI('arrow-left')} Inicio</button>
    </div>
    <div style="max-width:400px;margin:52px auto;padding:0 20px">
      <div class="login-card">
        <div style="text-align:center;margin-bottom:var(--space-2xl)">
          <div class="admin-login-icon">${LI('settings')}</div>
          <h2>Panel Administrativo</h2>
          <p class="login-desc">Acceso exclusivo para el equipo</p>
        </div>
        <div id="admin-login-error" class="alert-error" style="display:none"></div>
        <div class="form-group">
          <label class="form-label">CONTRASEÑA</label>
          <input type="password" id="admin-login-pass" class="form-input" placeholder="Contraseña">
        </div>
        <button class="btn btn-primary btn-full" id="admin-login-btn" style="width:100%">Entrar</button>
      </div>
    </div>
  `;

  // Conectar con Supabase Auth
  if (window.AlmasAuth && window.AlmasAuth.initAdminLogin) {
    window.AlmasAuth.initAdminLogin();
  } else {
    console.error("[Main] AlmasAuth no disponible para admin login");
  }
}

/* ═══════════════════════════════════════════
   RENDER: ADMIN DASHBOARD
   ═══════════════════════════════════════════ */

async function renderAdminDashboard() {
  const el = document.getElementById('view-admin');
  if (!el) return;

  // Show loading on first render
  if (!state._adminLoaded) {
    el.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;min-height:60vh;color:var(--text-muted);font-size:var(--text-sm)"><div style="text-align:center"><div style="font-size:2rem;margin-bottom:var(--space-md)">${LI('loader')}</div>Cargando datos...</div></div>`;
    if (typeof lucide !== 'undefined') lucide.createIcons();

    // Load from Supabase
    if (window.AlmasDB) {
      try {
        const dbTravelers = await window.AlmasDB.getAllTravelers();
        if (dbTravelers.length > 0) {
          state.travelers = dbTravelers.map(t => ({
            id: t.id,
            name: t.name || 'Sin nombre',
            username: t.username || '',
            password: '',
            paid: Number(t.paid) || 0,
            cost: Number(t.total_cost) || 52000,
            points: t.points || 0,
            addons: t.selected_addons || [],
            docs: [{ n: 'Pasaporte', ok: false }, { n: 'INE', ok: false }, { n: 'Foto', ok: false }, { n: 'CURP', ok: false }],
            tripDocs: [],
            comprobantes: [],
            avatar_url: t.avatar_url,
            role: t.role,
            auth_id: t.auth_id
          }));
        }

        // Load comprobantes
        const dbComp = await window.AlmasDB.getAllComprobantes();
        if (dbComp.length > 0) {
          state._adminComprobantes = dbComp;
        }

        // Load documents
        const dbDocs = await window.AlmasDB.getAllDocuments();
        if (dbDocs.length > 0) {
          state._adminDocuments = dbDocs;
          // Update traveler doc status based on real uploads
          dbDocs.forEach(doc => {
            const trav = state.travelers.find(t => t.id === doc.traveler_id);
            if (trav) {
              const docTypes = { 'pasaporte': 0, 'ine': 1, 'foto': 2, 'curp': 3 };
              const idx = docTypes[doc.tipo];
              if (idx !== undefined && trav.docs[idx]) {
                trav.docs[idx].ok = true;
                trav.docs[idx].url = doc.url_archivo;
              }
            }
          });
        }
      } catch (err) {
        // Silently fall back to local data
      }
    }
    state._adminLoaded = true;
  }

  const TABS = [
    { id: 'viajeros', l: 'Viajeros', icon: 'users' },
    { id: 'comprobantes', l: 'Comprobantes', icon: 'receipt' },
    { id: 'juntas', l: 'Juntas', icon: 'calendar' },
    { id: 'resumen', l: 'Resumen', icon: 'bar-chart-3' },
    { id: 'config', l: 'Config', icon: 'settings' }
  ];
  const tab = state.adminTab;
  let content = '';

  if (tab === 'viajeros') {
    const travelers = state.travelers.filter(t => t.role !== 'admin');
    content = travelers.map(t => {
      const pctA = Math.round((t.paid / t.cost) * 100);
      const remA = t.cost - t.paid;
      const addons = t.addons || [];
      return `
        <div class="admin-traveler-card" id="admin-trav-${t.id}">
          <div class="admin-traveler-header"><div><div class="admin-traveler-name">${t.name}</div><div class="admin-traveler-username">@${t.username} · ${LI('star')} ${t.points} pts</div></div>${getStatusBadge(t)}</div>
          <div class="stats-grid">
            ${[{ l: 'Abonado', v: `$${t.paid.toLocaleString()}`, c: 'success' }, { l: 'Pendiente', v: `$${remA.toLocaleString()}`, c: remA > 0 ? 'danger' : 'success' }, { l: 'Total', v: `$${t.cost.toLocaleString()}`, c: 'navy' }].map(({ l, v, c }) => `<div class="stat-item"><div class="stat-value stat-value--${c}">${v}</div><div class="stat-label">${l}</div></div>`).join('')}
          </div>
          ${progressBar(pctA)}
          ${addons.length > 0 ? `<div class="admin-addons-box"><div class="admin-addons-title">${LI('sparkles')} Extras:</div><div class="admin-addon-tags">${addons.map(id => { const a = ADDONS.find(x => x.id === id); return a ? `<span class="admin-addon-tag">${LI(a.lucide)} ${a.name}</span>` : `<span class="admin-addon-tag">${id}</span>`; }).join('')}</div></div>` : ''}
          <div style="margin:var(--space-lg) 0 var(--space-md)"><div style="font-size:var(--text-xs);font-weight:700;color:var(--text-primary);margin-bottom:var(--space-sm)">Documentos</div>
            <div class="admin-doc-badges">${t.docs.map((d, i) => `<span class="admin-doc-badge ${d.ok ? 'admin-doc-badge--ok' : 'admin-doc-badge--pending'}">${d.ok ? LI('check') : LI('clock')} ${d.n}</span>`).join('')}</div>
          </div>
          <div class="admin-action-buttons">
            <button class="btn btn-primary btn-sm" data-action="pay" data-trav-id="${t.id}" style="font-size:var(--text-sm)">${LI('credit-card')} Registrar pago</button>
          </div>
          <div id="admin-pay-${t.id}" style="display:none" class="payment-input-row">
            <input type="number" class="form-input" id="admin-pay-amount-${t.id}" placeholder="Monto ($)">
            <button class="btn btn-primary btn-sm" data-confirm-pay="${t.id}">Registrar</button>
            <button class="btn btn-outline btn-sm" data-cancel-pay="${t.id}" style="color:var(--text-muted)">${LI('x')}</button>
          </div>
        </div>
      `;
    }).join('');

    if (travelers.length === 0) {
      content = `<div class="portal-card" style="text-align:center;padding:var(--space-3xl)"><h3>Sin viajeros registrados</h3><p style="color:var(--text-muted)">Los viajeros aparecerán aquí cuando se registren.</p></div>`;
    }
  }

  else if (tab === 'comprobantes') {
    // Use Supabase data if available
    const allComprobantes = state._adminComprobantes || [];

    if (allComprobantes.length === 0) {
      content = `<div class="portal-card" style="text-align:center;padding:var(--space-3xl)"><div class="boleto-empty-icon" style="margin:0 auto var(--space-lg)">${LI('receipt')}</div><h3>Sin comprobantes</h3><p style="color:var(--text-muted);font-size:var(--text-sm)">Los comprobantes de pago aparecerán aquí cuando los viajeros los suban.</p></div>`;
    } else {
      content = allComprobantes.map(c => {
        const travName = c.travelers ? c.travelers.name : 'Viajero';
        const fecha = c.created_at ? c.created_at.split('T')[0] : '';
        const monto = Number(c.monto) || 0;
        return `
        <div class="admin-comprobante-card">
          <div class="admin-comprobante-header">
            <div>
              <div class="admin-comprobante-user">${travName}</div>
              <div class="admin-comprobante-date">${fecha ? formatDate(fecha) : ''} · $${monto.toLocaleString()} MXN</div>
            </div>
            ${getComprobanteStatusChip(c.estado)}
          </div>
          <div class="admin-comprobante-thumb" style="cursor:pointer" data-comp-url="${c.url_archivo || ''}">${LI('file-text')} <span style="margin-left:8px;color:var(--text-muted);font-size:var(--text-xs)">${c.nombre_archivo || 'archivo'}</span></div>
          ${c.estado === 'en_revision' ? `
            <div class="admin-comprobante-actions">
              <button class="btn btn-primary btn-sm" data-approve-comp="${c.id}">${LI('check-circle')} Aceptar</button>
              <button class="btn btn-outline btn-sm" style="color:var(--color-error);border-color:var(--color-error)" data-deny-comp="${c.id}">${LI('x-circle')} Denegar</button>
            </div>
          ` : ''}
        </div>
      `}).join('');
    }
  }

  else if (tab === 'juntas') {
    content = `
      <div class="portal-card"><h3>Reuniones programadas</h3>
        ${state.meetings.length === 0 ? '<p style="color:var(--text-muted);text-align:center;padding:var(--space-lg)">Sin reuniones aún.</p>' : ''}
        ${state.meetings.map(m => `<div class="admin-meeting-row"><div><div class="admin-meeting-title">${m.title}</div><div class="admin-meeting-details">${LI('calendar-days')} ${m.date} · ${LI('clock')} ${m.time} · ${LI('map-pin')} ${m.place}</div></div><button class="admin-meeting-delete" data-meeting-id="${m.id}">${LI('x')}</button></div>`).join('')}
      </div>
      <div class="portal-card"><h3>Nueva reunión</h3>
        <input class="form-input" id="admin-mt-title" placeholder="Título de la reunión" style="margin-bottom:var(--space-md)">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-md);margin-bottom:var(--space-md)">
          <input type="date" class="form-input" id="admin-mt-date">
          <input type="time" class="form-input" id="admin-mt-time" value="18:00">
        </div>
        <input class="form-input" id="admin-mt-place" placeholder="Lugar" value="Parroquia de la Santísima Trinidad" style="margin-bottom:var(--space-lg)">
        <button class="btn btn-primary" id="admin-add-meeting-btn">Agregar reunión</button>
      </div>
    `;
  }

  else if (tab === 'resumen') {
    const totalRaised = state.travelers.reduce((s, t) => s + t.paid, 0);
    const locked = state.travelers.filter(t => t.paid >= 25000).length;
    content = `
      <div class="portal-card"><h3>Resumen del viaje</h3>
        <div class="admin-stats-grid">
          ${[{ icon: 'users', l: 'Viajeros registrados', v: state.travelers.length }, { icon: 'lock', l: 'Con precio bloqueado', v: locked }, { icon: 'banknote', l: 'Total recaudado', v: `$${totalRaised.toLocaleString()}` }, { icon: 'armchair', l: 'Lugares libres', v: `${27 - state.travelers.length}/27` }].map(({ icon, l, v }) => `<div class="admin-stat"><div class="admin-stat-emoji">${LI(icon)}</div><div class="admin-stat-value">${v}</div><div class="admin-stat-label">${l}</div></div>`).join('')}
        </div>
      </div>
      <div class="portal-card"><h3>Pagos por viajero</h3>
        ${state.travelers.map(t => { const pctB = Math.round((t.paid / t.cost) * 100); return `<div style="margin-bottom:var(--space-xl)"><div style="display:flex;justify-content:space-between;margin-bottom:var(--space-xs)"><span style="font-weight:700;font-size:var(--text-sm)">${t.name}</span><span style="font-size:var(--text-sm);color:var(--text-muted)">$${t.paid.toLocaleString()} (${pctB}%)</span></div>${progressBar(pctB, 'progress-bar--sm')}</div>`; }).join('')}
        <div style="border-top:1px solid var(--bg-surface);padding-top:var(--space-lg);margin-top:var(--space-xs);display:flex;justify-content:space-between;align-items:center"><span style="font-weight:700;color:var(--text-primary);font-size:var(--text-sm)">Total recaudado</span><span style="font-weight:800;color:var(--color-primary);font-size:var(--text-xl)">$${totalRaised.toLocaleString()} MXN</span></div>
      </div>
    `;
  }

  else if (tab === 'config') {
    content = renderAdminConfig();
  }

  el.innerHTML = `
    <div class="admin-header">
      <div class="admin-header-top">
        <div class="admin-header-title"><span class="logo-display">Almas en Ruta</span><span class="admin-label">· Admin</span></div>
        <button onclick="if(window.AlmasAuth){window.AlmasAuth.logout()}else{navigateTo('home')}" class="portal-logout-btn">${LI('log-out')} Salir</button>
      </div>
      <div class="admin-tabs">${TABS.map(({ id, l, icon }) => `<button class="admin-tab ${tab === id ? 'active' : ''}" data-admin-tab="${id}">${LI(icon)} ${l}</button>`).join('')}</div>
    </div>
    <div class="admin-body">${content}</div>
  `;

  // Tab clicks
  el.querySelectorAll('.admin-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      state.adminTab = btn.dataset.adminTab;
      renderAdminDashboard();
      if (typeof lucide !== 'undefined') lucide.createIcons();
    });
  });

  // Event bindings for traveler tab
  if (tab === 'viajeros') {
    // Doc toggle
    el.querySelectorAll('.admin-doc-badge').forEach(badge => {
      badge.addEventListener('click', () => {
        const tId = parseInt(badge.dataset.travId);
        const idx = parseInt(badge.dataset.docIdx);
        const trav = state.travelers.find(x => x.id === tId);
        if (trav && trav.docs[idx] !== undefined) {
          trav.docs[idx].ok = !trav.docs[idx].ok;
          renderAdminDashboard();
          if (typeof lucide !== 'undefined') lucide.createIcons();
        }
      });
    });

    // Payment
    el.querySelectorAll('[data-action="pay"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const tId = btn.dataset.travId;
        const payEl = document.getElementById('admin-pay-' + tId);
        if (payEl) payEl.style.display = 'flex';
      });
    });
    // Payment confirm → save to Supabase
    el.querySelectorAll('[data-confirm-pay]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const tId = parseInt(btn.dataset.confirmPay);
        const amt = parseInt(document.getElementById('admin-pay-amount-' + tId).value);
        if (!isNaN(amt) && amt > 0) {
          const trav = state.travelers.find(x => x.id === tId);
          if (trav) {
            trav.paid = Math.min(trav.paid + amt, trav.cost);
            trav.points += Math.floor(amt / 1000) * 10;

            // Save to Supabase
            if (window.AlmasDB) {
              try {
                await window.AlmasDB.updateTravelerPayment(tId, trav.paid, trav.points);
              } catch (err) { /* silent */ }
            }
          }
          renderAdminDashboard();
          if (typeof lucide !== 'undefined') lucide.createIcons();
        }
      });
    });
    el.querySelectorAll('[data-cancel-pay]').forEach(btn => {
      btn.addEventListener('click', () => {
        const payEl = document.getElementById('admin-pay-' + btn.dataset.cancelPay);
        if (payEl) payEl.style.display = 'none';
      });
    });
  }

  // Comprobantes tab
  if (tab === 'comprobantes') {
    // View comprobante file
    el.querySelectorAll('[data-comp-url]').forEach(el2 => {
      el2.addEventListener('click', () => {
        const url = el2.dataset.compUrl;
        if (url) window.open(url, '_blank');
      });
    });

    // Approve
    el.querySelectorAll('[data-approve-comp]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const compId = btn.dataset.approveComp;
        btn.textContent = '...';
        btn.disabled = true;
        try {
          if (window.AlmasDB) {
            await window.AlmasDB.updateComprobanteStatus(compId, 'aceptado');
          }
          // Update local state
          if (state._adminComprobantes) {
            const c = state._adminComprobantes.find(x => x.id === compId);
            if (c) c.estado = 'aceptado';
          }
        } catch (err) { /* silent */ }
        renderAdminDashboard();
        if (typeof lucide !== 'undefined') lucide.createIcons();
      });
    });

    // Deny
    el.querySelectorAll('[data-deny-comp]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const compId = btn.dataset.denyComp;
        btn.textContent = '...';
        btn.disabled = true;
        try {
          if (window.AlmasDB) {
            await window.AlmasDB.updateComprobanteStatus(compId, 'denegado');
          }
          if (state._adminComprobantes) {
            const c = state._adminComprobantes.find(x => x.id === compId);
            if (c) c.estado = 'denegado';
          }
        } catch (err) { /* silent */ }
        renderAdminDashboard();
        if (typeof lucide !== 'undefined') lucide.createIcons();
      });
    });
  }

  // Meetings tab
  if (tab === 'juntas') {
    el.querySelectorAll('.admin-meeting-delete').forEach(btn => {
      btn.addEventListener('click', () => {
        const mId = parseInt(btn.dataset.meetingId);
        state.meetings = state.meetings.filter(m => m.id !== mId);
        renderAdminDashboard();
        if (typeof lucide !== 'undefined') lucide.createIcons();
      });
    });

    const addBtn = document.getElementById('admin-add-meeting-btn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const title = document.getElementById('admin-mt-title').value;
        const date = document.getElementById('admin-mt-date').value;
        const time = document.getElementById('admin-mt-time').value;
        const place = document.getElementById('admin-mt-place').value;
        if (title && date) {
          state.meetings.push({ id: Date.now(), title, date, time, place });
          renderAdminDashboard();
          if (typeof lucide !== 'undefined') lucide.createIcons();
        }
      });
    }
  }

  // Config tab
  if (tab === 'config') {
    bindConfigEvents(el);
  }
}

function renderAdminConfig() {
  const sec = state.adminConfigSection;
  const SECS = [
    { id: 'precio', l: 'Precio', icon: 'banknote' },
    { id: 'banco', l: 'Banco', icon: 'building-2' },
    { id: 'extras', l: 'Extras', icon: 'sparkles' },
    { id: 'viajeros', l: 'Viajeros', icon: 'users' }
  ];

  let secContent = '';

  if (sec === 'precio') {
    secContent = `<div class="portal-card"><h3>${LI('banknote')} Precio del viaje</h3>
      ${[{ f: 'price', l: 'Precio total por persona ($MXN)', h: 'El precio que ven los viajeros' }, { f: 'deposit', l: 'Depósito inicial ($MXN)', h: 'Monto mínimo para apartar lugar' }, { f: 'lockAmount', l: 'Monto para bloquear precio ($MXN)', h: 'Bloquea vuelos y precio garantizado' }, { f: 'spots', l: 'Cupo máximo', h: 'Número total de lugares' }].map(({ f, l, h }) => `<div class="form-group"><label class="form-label">${l.toUpperCase()}</label><input type="number" class="form-input" data-config-field="${f}" value="${state.tripConfig[f]}"><p style="font-size:var(--text-xs);color:var(--text-muted);margin:4px 0 0">${h}</p></div>`).join('')}
      <div class="alert-warning">${LI('alert-triangle')} Cambiar el precio no afecta a viajeros ya registrados.</div>
    </div>`;
  }

  else if (sec === 'banco') {
    secContent = `<div class="portal-card"><h3>${LI('building-2')} Datos bancarios</h3>
      ${[{ f: 'bank', l: 'Banco', p: 'BBVA' }, { f: 'holder', l: 'Titular', p: 'Tu nombre' }, { f: 'account', l: 'Número de cuenta', p: '0000 0000 0000 0000' }, { f: 'clabe', l: 'CLABE interbancaria', p: '000 000 00 00000000 00' }].map(({ f, l, p }) => `<div class="form-group"><label class="form-label">${l.toUpperCase()}</label><input class="form-input" data-bank-field="${f}" value="${state.bank[f]}" placeholder="${p}"></div>`).join('')}
    </div>`;
  }

  else if (sec === 'extras') {
    secContent = `<div class="portal-card"><h3>${LI('sparkles')} Precios de extras</h3>
      ${state.addonList.map(addon => `<div class="admin-extras-row"><span class="admin-extras-icon">${LI(addon.lucide)}</span><div class="admin-extras-info"><div class="admin-extras-name">${addon.name}</div><div class="admin-extras-cat">${addon.cat}</div></div><div class="admin-extras-price-input"><span style="font-size:var(--text-sm);color:var(--text-muted)">$</span><input type="number" class="form-input" data-addon-price="${addon.id}" value="${addon.price}"></div></div>`).join('')}
    </div>`;
  }

  else if (sec === 'viajeros') {
    secContent = `
      <div class="portal-card"><h3>${LI('users')} Cuentas de viajeros</h3>
        ${state.travelers.map(t => `<div style="padding:var(--space-lg) 0;border-bottom:1px solid var(--bg-surface)">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:var(--space-sm)"><div><div style="font-weight:700;font-size:var(--text-sm);color:var(--text-primary)">${t.name}</div><div style="font-size:var(--text-sm);color:var(--text-muted)">${LI('user')} @${t.username}</div></div>${getStatusBadge(t)}</div>
          <div class="password-field"><div class="password-display">${LI('key-round')} ${'•'.repeat(t.password.length)}</div></div>
        </div>`).join('')}
      </div>
      <div class="portal-card"><h3>${LI('user-plus')} Agregar viajero</h3>
        <div class="form-group"><label class="form-label">NOMBRE COMPLETO</label><input class="form-input" id="admin-nt-name" placeholder="Ej: Juan Pérez García"></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-md);margin-bottom:var(--space-lg)">
          <div><label class="form-label">USUARIO</label><input class="form-input" id="admin-nt-user" placeholder="juan"></div>
          <div><label class="form-label">CONTRASEÑA</label><input class="form-input" id="admin-nt-pass" placeholder="Contraseña"></div>
        </div>
        <div id="admin-nt-msg" style="display:none"></div>
        <button class="btn btn-primary btn-full" id="admin-add-traveler-btn" style="width:100%">Agregar viajero</button>
      </div>
    `;
  }

  return `
    <div class="portal-card" style="background:linear-gradient(135deg,var(--bg-dark),var(--bg-dark-secondary));padding:18px 22px"><h2 style="font-family:var(--font-display);font-weight:700;color:white;margin:0;font-size:var(--text-xl)">${LI('settings')} Configuración</h2><p style="color:rgba(255,255,255,0.55);font-size:var(--text-sm);margin:4px 0 0">Precios, banco, extras y viajeros</p></div>
    <div class="config-nav">${SECS.map(({ id, l, icon }) => `<button class="config-nav-btn ${sec === id ? 'active' : ''}" data-config-section="${id}">${LI(icon)} ${l}</button>`).join('')}</div>
    ${secContent}
  `;
}

function bindConfigEvents(el) {
  // Config section nav
  el.querySelectorAll('.config-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.adminConfigSection = btn.dataset.configSection;
      renderAdminDashboard();
      if (typeof lucide !== 'undefined') lucide.createIcons();
    });
  });

  // Price config
  el.querySelectorAll('[data-config-field]').forEach(inp => {
    inp.addEventListener('blur', () => {
      state.tripConfig[inp.dataset.configField] = parseInt(inp.value) || state.tripConfig[inp.dataset.configField];
    });
  });

  // Bank config
  el.querySelectorAll('[data-bank-field]').forEach(inp => {
    inp.addEventListener('blur', () => {
      state.bank[inp.dataset.bankField] = inp.value;
    });
  });

  // Addon prices
  el.querySelectorAll('[data-addon-price]').forEach(inp => {
    inp.addEventListener('blur', () => {
      const addon = state.addonList.find(a => a.id === inp.dataset.addonPrice);
      if (addon) addon.price = parseInt(inp.value) || addon.price;
    });
  });

  // Add traveler
  const addBtn = document.getElementById('admin-add-traveler-btn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const name = document.getElementById('admin-nt-name').value;
      const user = document.getElementById('admin-nt-user').value.toLowerCase();
      const pass = document.getElementById('admin-nt-pass').value;
      const msgEl = document.getElementById('admin-nt-msg');

      if (!name || !user || !pass) {
        msgEl.innerHTML = `<div class="alert-error">Completa todos los campos</div>`;
        msgEl.style.display = 'block';
        return;
      }
      if (state.travelers.find(t => t.username === user)) {
        msgEl.innerHTML = `<div class="alert-error">Ese usuario ya existe</div>`;
        msgEl.style.display = 'block';
        return;
      }

      state.travelers.push({
        id: Date.now(), name, username: user, password: pass,
        paid: 0, cost: state.tripConfig.price, points: 0, addons: [],
        docs: [{ n: 'Pasaporte', ok: false }, { n: 'INE', ok: false }, { n: 'Foto', ok: false }, { n: 'CURP', ok: false }],
        tripDocs: [],
        comprobantes: []
      });

      msgEl.innerHTML = `<div class="alert-success">${LI('check-circle')} Viajero "${name}" agregado</div>`;
      msgEl.style.display = 'block';
      document.getElementById('admin-nt-name').value = '';
      document.getElementById('admin-nt-user').value = '';
      document.getElementById('admin-nt-pass').value = '';
      setTimeout(() => { if (msgEl) msgEl.style.display = 'none'; }, 3500);
    });
  }
}

/* ═══════════════════════════════════════════
   COUNTDOWN
   ═══════════════════════════════════════════ */

function initCountdownGlobal() {
  const tripDate = new Date('2026-09-24T06:00:00');

  function update() {
    const diff = tripDate - new Date();
    if (diff <= 0) return;
    state.countdown = {
      d: Math.floor(diff / 864e5),
      h: Math.floor((diff % 864e5) / 36e5),
      m: Math.floor((diff % 36e5) / 6e4),
      s: Math.floor((diff % 6e4) / 1e3),
    };

    // Update landing countdown
    const el = document.getElementById('countdown');
    if (el) {
      const { d, h, m } = state.countdown;
      el.innerHTML = `
        <span class="countdown-item"><strong>${d}</strong> días</span>
        <span class="countdown-separator">·</span>
        <span class="countdown-item"><strong>${h}</strong> horas</span>
        <span class="countdown-separator">·</span>
        <span class="countdown-item"><strong>${m}</strong> min</span>
      `;
    }

    // Update portal countdown if visible
    if (state.currentView === 'traveler' && state.travelerTab === 'resumen') {
      document.querySelectorAll('.countdown-mini-value').forEach((el, i) => {
        const vals = [state.countdown.d, state.countdown.h, state.countdown.m, state.countdown.s];
        el.textContent = String(vals[i]).padStart(2, '0');
      });
    }
  }

  update();
  setInterval(update, 1000);
}

/* ═══════════════════════════════════════════
   RESERVATION FORM
   ═══════════════════════════════════════════ */

function initReservaForm() {
  const form = document.getElementById('reserva-form');
  const select = document.getElementById('reserva-viaje');
  if (!form || !select) return;

  // Populate dropdown from TRIPS
  state.tripList.forEach(trip => {
    const opt = document.createElement('option');
    opt.value = trip.name + ' (' + trip.dates + ')';
    opt.textContent = trip.name + ' — ' + trip.dates;
    select.appendChild(opt);
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre = document.getElementById('reserva-nombre').value.trim();
    const telefono = document.getElementById('reserva-telefono').value.trim();
    const correo = document.getElementById('reserva-correo').value.trim();
    const viaje = document.getElementById('reserva-viaje').value;
    const errBox = document.getElementById('reserva-error');
    const submitBtn = document.getElementById('reserva-submit-btn');

    // Validate
    if (!nombre || !telefono || !correo || !viaje) {
      errBox.textContent = 'Por favor complete todos los campos.';
      errBox.style.display = 'block';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      errBox.textContent = 'Por favor ingrese un correo electrónico válido.';
      errBox.style.display = 'block';
      return;
    }

    errBox.style.display = 'none';

    // Show loading
    if (submitBtn) { submitBtn.textContent = 'Enviando...'; submitBtn.disabled = true; }

    // Save to Supabase
    try {
      if (window.AlmasAuth && window.AlmasAuth.supabase) {
        await window.AlmasAuth.supabase.from('reservas').insert({
          nombre: nombre,
          telefono: telefono,
          correo: correo,
          viaje: viaje
        });
      }
    } catch (err) { /* WhatsApp is the backup */ }

    // Generate WhatsApp link
    const waMsg = `Hola, me interesa apartar mi lugar.\n\nNombre: ${nombre}\nTeléfono: ${telefono}\nCorreo: ${correo}\nViaje: ${viaje}`;
    const waUrl = waLink(waMsg);

    // Show success
    document.getElementById('reserva-form-container').style.display = 'none';
    const successEl = document.getElementById('reserva-success');
    successEl.classList.add('active');

    const waConfirm = document.getElementById('reserva-wa-confirm');
    if (waConfirm) waConfirm.href = waUrl;

    if (submitBtn) { submitBtn.textContent = 'Enviar solicitud'; submitBtn.disabled = false; }
    if (typeof lucide !== 'undefined') lucide.createIcons();
  });

  // Reset button
  const resetBtn = document.getElementById('reserva-reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      document.getElementById('reserva-form-container').style.display = '';
      document.getElementById('reserva-success').classList.remove('active');
      form.reset();
    });
  }
}

/* ═══════════════════════════════════════════
   INIT (Original functions preserved)
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  initLucideIcons();
  initMobileMenu();
  initStickyHeader();
  initFontSizeToggle();
  initScrollReveal();
  initSmoothScroll();
  initGalleryModal();
  initCountdownGlobal();
  initNavPortal();
  initReservaForm();
  initScrollSpy();
  renderTrips();
});

/* ── Initialize Lucide SVG Icons ── */
function initLucideIcons() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

/* ── Mobile Menu ── */
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  const overlay = document.getElementById('nav-overlay');

  if (!toggle || !nav) return;

  function closeMenu() {
    toggle.classList.remove('open');
    nav.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    toggle.classList.add('open');
    nav.classList.add('open');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  // Close menu on nav link click
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      closeMenu();
    }
  });
}

/* ── Sticky Header Shadow ── */
function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  const observer = () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', observer, { passive: true });
  observer();
}

/* ── Font Size Toggle ── */
function initFontSizeToggle() {
  const buttons = document.querySelectorAll('.font-toggle-btn');
  if (!buttons.length) return;

  // Restore saved preference
  const saved = localStorage.getItem('almas-font-size');
  if (saved) {
    document.documentElement.setAttribute('data-font-size', saved);
    updateActiveButton(saved);
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const size = btn.dataset.size;
      document.documentElement.setAttribute('data-font-size', size);
      localStorage.setItem('almas-font-size', size);
      updateActiveButton(size);
    });
  });

  function updateActiveButton(size) {
    buttons.forEach(b => {
      b.classList.toggle('active', b.dataset.size === size);
      b.setAttribute('aria-pressed', b.dataset.size === size);
    });
  }
}

/* ── Scroll Reveal Animation ── */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ── Smooth Scroll for Anchor Links ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
        window.scrollTo({ top, behavior: 'smooth' });
        // Update active nav link
        if (link.classList.contains('nav-link')) {
          document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  });
}

/* ── Scroll Spy (auto-highlight nav on scroll) ── */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  if (!sections.length) return;

  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  if (!navLinks.length) return;

  const headerH = () => document.querySelector('.header')?.offsetHeight || 80;

  function onScroll() {
    if (state.currentView !== 'home') return;
    const scrollY = window.scrollY + headerH() + 60;
    let currentId = '';
    sections.forEach(sec => {
      if (sec.offsetTop <= scrollY) currentId = sec.id;
    });
    // Map section id to nav href
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === '#' + currentId || (currentId === '' && href === '#inicio')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Gallery Modal / Lightbox ── */
function initGalleryModal() {
  const items = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('gallery-modal');
  const modalImg = document.getElementById('gallery-modal-img');
  const modalClose = document.getElementById('gallery-modal-close');

  if (!items.length || !modal) return;

  items.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img && modalImg) {
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ── Nav Portal Button & Admin Link ── */
function initNavPortal() {
  const portalBtn = document.getElementById('nav-portal-btn');
  if (portalBtn) {
    portalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('login');
    });
  }

  const adminLink = document.getElementById('footer-admin-link');
  if (adminLink) {
    adminLink.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('admin-login');
    });
  }
}

window.AlmasRouter = {
  goHome:     function ()     { navigateTo("home"); },
  goTraveler: function (prof) { state.travelerId = prof.id; state.travelerTab = 'resumen'; navigateTo("traveler"); },
  goAdmin:    function (prof) { state.adminTab = 'viajeros'; navigateTo("admin"); }
};