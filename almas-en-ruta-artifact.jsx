import { useState, useEffect } from "react";

const C = {
  navy:"#0F1E3C", navyMid:"#1B2B4B", navyLight:"#243a60",
  gold:"#C9974A", goldLight:"#E4C07A", goldBg:"#FEF8EE",
  cream:"#FAF8F4", white:"#FFFFFF", text:"#12172B", muted:"#6B7280",
  success:"#166534", successBg:"#DCFCE7", warn:"#92400E", warnBg:"#FEF3C7",
  danger:"#991B1B", dangerBg:"#FEE2E2", border:"#E5DDD0",
};
const GF = `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,600&family=Nunito:wght@400;600;700;800&display=swap');*{box-sizing:border-box;-webkit-tap-highlight-color:transparent;}::-webkit-scrollbar{display:none;}*{scrollbar-width:none;}input:focus,select:focus{border-color:#C9974A!important;outline:none!important;box-shadow:0 0 0 3px rgba(201,151,74,0.15);}`;
const S = {
  app:{fontFamily:"'Nunito',sans-serif",background:C.cream,minHeight:"100vh",color:C.text},
  card:{background:C.white,borderRadius:18,padding:22,marginBottom:16,boxShadow:"0 2px 20px rgba(15,30,60,0.07)"},
  h:{fontFamily:"'Cormorant Garamond',serif",fontWeight:700,color:C.navy},
  btnGold:{background:`linear-gradient(135deg,${C.gold},#B8843A)`,color:C.white,border:"none",borderRadius:10,padding:"13px 22px",fontFamily:"'Nunito',sans-serif",fontWeight:700,fontSize:14,cursor:"pointer",boxShadow:"0 4px 14px rgba(201,151,74,0.3)"},
  btnNavy:{background:`linear-gradient(135deg,${C.navy},${C.navyLight})`,color:C.white,border:"none",borderRadius:10,padding:"13px 22px",fontFamily:"'Nunito',sans-serif",fontWeight:700,fontSize:14,cursor:"pointer"},
  btnOut:{background:"transparent",color:C.navy,border:`2px solid ${C.border}`,borderRadius:10,padding:"11px 20px",fontFamily:"'Nunito',sans-serif",fontWeight:700,fontSize:14,cursor:"pointer"},
  inp:{width:"100%",padding:"13px 15px",border:`1.5px solid ${C.border}`,borderRadius:10,fontSize:15,fontFamily:"'Nunito',sans-serif",outline:"none",background:C.white,transition:"border-color 0.2s, box-shadow 0.2s"},
  label:{fontSize:11,fontWeight:800,color:C.muted,display:"block",marginBottom:6,letterSpacing:1.5},
};
const BANK = {bank:"BBVA",holder:"David Brandon Lagunas Arriaga",account:"0123 4567 8901 2345",clabe:"012 180 00 01234567 89"};
const ADDONS = [
  {id:"room_single",cat:"Alojamiento",name:"Habitación individual",desc:"Suplemento por cuarto privado en todo el recorrido",price:8000,icon:"🛏️"},
  {id:"room_triple",cat:"Alojamiento",name:"Habitación triple",desc:"Descuento al compartir habitación con 2 personas más",price:-2000,icon:"🏨"},
  {id:"extra_rome",cat:"Destinos adicionales",name:"Día extra en Roma",desc:"Una noche adicional para explorar más la Ciudad Eterna",price:4000,icon:"🏛️"},
  {id:"extra_paris",cat:"Destinos adicionales",name:"Día extra en París",desc:"Una noche adicional en la Ciudad de la Luz",price:4500,icon:"🗼"},
  {id:"florence",cat:"Destinos adicionales",name:"Excursión a Florencia",desc:"El David, Galería Uffizi y Ponte Vecchio",price:3500,icon:"🖼️"},
  {id:"venice",cat:"Destinos adicionales",name:"Excursión a Venecia",desc:"Góndola, Plaza San Marcos y el Gran Canal",price:4200,icon:"🚣"},
  {id:"disney",cat:"Atracciones especiales",name:"Disneyland París",desc:"Un día completo en el parque más mágico de Europa",price:3800,icon:"🎢"},
  {id:"eiffel_night",cat:"Atracciones especiales",name:"Tour nocturno Torre Eiffel",desc:"Subida nocturna con la ciudad iluminada a tus pies",price:1500,icon:"🌃"},
  {id:"vatican_vip",cat:"Atracciones especiales",name:"VIP Museos Vaticanos",desc:"Entrada sin filas + audioguía premium",price:1200,icon:"⛪"},
  {id:"assisi",cat:"Atracciones especiales",name:"Asís · Beato Carlo Acutis",desc:"Tumba del primer millennial en camino a la santidad",price:2500,icon:"🙏"},
  {id:"photo_session",cat:"Fotografía profesional",name:"Sesión de fotos profesional",desc:"Fotografías con cámara profesional en los destinos del viaje",price:3000,icon:"📷"},
  {id:"photo_album",cat:"Fotografía profesional",name:"Álbum fotográfico impreso",desc:"30 fotos impresas en álbum premium de colección",price:1800,icon:"📖"},
  {id:"photo_digital",cat:"Fotografía profesional",name:"Paquete digital completo",desc:"Todas las fotos editadas en alta resolución en formato digital",price:900,icon:"💾"},
  {id:"insurance_p",cat:"Servicios adicionales",name:"Seguro viaje premium",desc:"Cobertura total + cancelación por cualquier motivo",price:2500,icon:"🛡️"},
  {id:"kit",cat:"Servicios adicionales",name:"Kit viajero Almas en Ruta",desc:"Mochila, libreta, guías de destino y accesorios exclusivos",price:800,icon:"🎒"},
];
const ITINERARY = [
  {day:1,city:"Llegada a Roma",e:"✈️",items:["Vuelo Ciudad de México → Roma (FCO)","Traslado al hotel","Descanso y bienvenida en grupo"]},
  {day:2,city:"El Vaticano",e:"⛪",items:["Basílica de San Pedro","Museos Vaticanos","Capilla Sixtina","Misa especial"]},
  {day:3,city:"Roma Clásica",e:"🏛️",items:["Coliseo Romano","Foro Romano","Fontana di Trevi","Plaza Navona"]},
  {day:4,city:"Roma Espiritual",e:"🙏",items:["Catacumbas de San Calixto","Basílica de San Pablo extramuros","Tarde libre"]},
  {day:5,city:"Roma → París",e:"🚄",items:["Traslado al aeropuerto","Vuelo Roma → París CDG","Check-in y paseo nocturno"]},
  {day:6,city:"París Monumental",e:"🗼",items:["Torre Eiffel (subida)","Crucero por el Sena","Campos Elíseos","Arco del Triunfo"]},
  {day:7,city:"Arte y Fe en París",e:"🎨",items:["Museo del Louvre","Catedral de Notre-Dame","Barrio de Montmartre"]},
  {day:8,city:"Versalles",e:"👑",items:["Palacio de Versalles","Jardines reales","Tarde libre en París"]},
  {day:9,city:"Último día en París",e:"🛍️",items:["Mañana libre","Sacré-Cœur (opcional)","Cena de despedida grupal"]},
  {day:10,city:"Regreso a México",e:"🏠",items:["Traslado aeropuerto CDG","Vuelo de regreso","¡Bienvenidos de vuelta!"]},
];
const TRIPS = [
  {id:"sep26",name:"Roma & París",sub:"Peregrinación y cultura · 2026",dates:"Sep 24 – Oct 4, 2026",days:10,price:52000,spots:27,avail:24,status:"open",img:"https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80",flag:"🇮🇹🇫🇷",desc:"Vive la historia, el arte y la fe en dos de las ciudades más hermosas del mundo. Del Vaticano a la cima de la Torre Eiffel.",highlights:["Audiencia Papal","Museos Vaticanos","Coliseo Romano","Torre Eiffel","Versalles"],includes:["Vuelo redondo Ciudad de México","Hospedaje en hoteles seleccionados","Todos los traslados terrestres","Entradas al itinerario","Seguro de viaje internacional","Guía de acompañamiento"],itinerary:ITINERARY},
  {id:"jan27",name:"Roma & París",sub:"Segunda edición · Enero 2027",dates:"Ene 14 – 24, 2027",days:11,price:54000,spots:27,avail:27,status:"coming",img:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",flag:"🇮🇹🇫🇷",desc:"Para quienes no alcanzaron lugar en septiembre. La misma experiencia única de Roma y París, ahora en invierno europeo.",highlights:["Vaticano","Coliseo Romano","Museo del Louvre","Torre Eiffel","Versalles"],includes:["Vuelo redondo","Hospedaje seleccionado","Traslados terrestres","Entradas al itinerario","Seguro de viaje","Guía de acompañamiento"],itinerary:[]},
  {id:"korea27",name:"Corea del Sur",sub:"K-Culture y tradición milenaria",dates:"2027 · Fechas por confirmar",days:12,price:null,spots:25,avail:25,status:"soon",img:"https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=1200&q=80",flag:"🇰🇷",desc:"Seúl, Busan y los templos milenarios. K-pop, gastronomía, tecnología y tradición en perfecta armonía.",highlights:["Palacio Gyeongbokgung","Bukchon Hanok","Isla Jeju","Busan","Street Food Tour"],includes:[],itinerary:[]},
  {id:"israel27",name:"Tierra Santa",sub:"Israel · Peregrinación espiritual",dates:"2027 · Fechas por confirmar",days:10,price:null,spots:25,avail:25,status:"soon",img:"https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&q=80",flag:"🇮🇱",desc:"Un viaje espiritual profundo por los lugares más sagrados: Jerusalén, Belén, Nazareth y el Mar de Galilea.",highlights:["Jerusalén","Belén","Nazareth","Mar de Galilea","Mar Muerto"],includes:[],itinerary:[]},
  {id:"japan28",name:"Japón",sub:"Sakura, templos y modernidad",dates:"2028 · Próximamente",days:14,price:null,spots:20,avail:20,status:"future",img:"https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1200&q=80",flag:"🇯🇵",desc:"Tokio, Kioto, Osaka y el Monte Fuji. Lo ancestral y lo ultramoderno en perfecta armonía.",highlights:["Tokio","Kioto","Monte Fuji","Osaka","Fushimi Inari"],includes:[],itinerary:[]},
];
const PRICE = 52000;
const WA = (msg="") => `https://wa.me/527221234567${msg?"?text="+encodeURIComponent(msg):""}`;
const INIT_TRAVELERS = [
  {id:1,name:"María González",username:"maria",password:"almas2026",paid:25000,cost:PRICE,points:250,addons:[],docs:[{n:"Pasaporte",ok:true},{n:"INE",ok:true},{n:"Foto",ok:false},{n:"CURP",ok:false}],tripDocs:[{type:"Boleto de avión",detail:"AM456 · CDMX → FCO · Sep 24",icon:"✈️"}]},
  {id:2,name:"Carlos Ramírez",username:"carlos",password:"almas2026",paid:5000,cost:PRICE,points:50,addons:[],docs:[{n:"Pasaporte",ok:false},{n:"INE",ok:true},{n:"Foto",ok:false},{n:"CURP",ok:false}],tripDocs:[]},
  {id:3,name:"Ana Martínez",username:"ana",password:"almas2026",paid:52000,cost:PRICE,points:520,addons:["photo_session","photo_album"],docs:[{n:"Pasaporte",ok:true},{n:"INE",ok:true},{n:"Foto",ok:true},{n:"CURP",ok:true}],tripDocs:[{type:"Boleto de avión",detail:"AM456 · CDMX → FCO · Sep 24",icon:"✈️"},{type:"Hospedaje Roma",detail:"Hotel Nazionale · 4 noches",icon:"🏨"},{type:"Hospedaje París",detail:"Hôtel du Louvre · 4 noches",icon:"🏨"},{type:"Seguro de viaje",detail:"Cobertura internacional completa",icon:"🛡️"}]},
];
const INIT_MEETINGS = [
  {id:1,title:"Reunión informativa #1",date:"2026-04-20",time:"18:00",place:"Parroquia de la Santísima Trinidad"},
  {id:2,title:"Entrega de documentos",date:"2026-05-15",time:"17:00",place:"Parroquia de la Santísima Trinidad"},
  {id:3,title:"Reunión final pre-viaje",date:"2026-09-10",time:"18:30",place:"Parroquia de la Santísima Trinidad"},
];

function Logo({size=22}){return <span style={{fontFamily:"'Cormorant Garamond',serif",color:C.gold,fontSize:size,fontWeight:700,letterSpacing:0.5,userSelect:"none"}}>✦ Almas en Ruta</span>;}
function ProgressBar({pct,h=10}){return <div style={{background:"#EAE4DA",borderRadius:99,height:h,overflow:"hidden"}}><div style={{background:`linear-gradient(90deg,${C.gold},${C.goldLight})`,height:"100%",borderRadius:99,width:`${Math.min(pct,100)}%`,transition:"width 0.6s ease"}}/></div>;}
function StatusBadge({t}){const rem=t.cost-t.paid;if(rem===0)return <span style={{background:C.successBg,color:C.success,borderRadius:20,padding:"4px 13px",fontSize:12,fontWeight:700,flexShrink:0}}>✓ Liquidado</span>;if(t.paid>=25000)return <span style={{background:"#EEF2FF",color:"#4338CA",borderRadius:20,padding:"4px 13px",fontSize:12,fontWeight:700,flexShrink:0}}>🔒 Bloqueado</span>;return <span style={{background:C.warnBg,color:C.warn,borderRadius:20,padding:"4px 13px",fontSize:12,fontWeight:700,flexShrink:0}}>⚠ Inicial</span>;}
function GoldDivider(){return <div style={{height:3,background:`linear-gradient(90deg,${C.gold},${C.goldLight},transparent)`,borderRadius:2,marginBottom:16}}/>;}

function HomeView({cd,tripList,onLogin,onTrip,onAdmin}){
  const TL=tripList||TRIPS;
  return <div style={S.app}><style>{GF}</style>
    <div style={{background:C.navy,padding:"14px 22px",display:"flex",justifyContent:"space-between",alignItems:"center",position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 20px rgba(0,0,0,0.25)"}}>
      <Logo/><button onClick={onLogin} style={{...S.btnGold,padding:"8px 18px",fontSize:13}}>Mi portal →</button>
    </div>
    <div style={{position:"relative",height:500,overflow:"hidden"}}>
      <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1400&q=80" alt="París" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 60%"}}/>
      <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(10,20,50,0.35) 0%,rgba(10,20,50,0.9) 100%)"}}/>
      <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"0 28px 40px"}}>
        <div style={{background:`linear-gradient(90deg,${C.gold},#B8843A)`,display:"inline-block",borderRadius:20,padding:"4px 16px",fontSize:10,fontWeight:800,letterSpacing:3,marginBottom:16,width:"fit-content"}}><span style={{color:C.white}}>PRÓXIMO VIAJE</span></div>
        <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:52,fontWeight:700,color:C.white,margin:"0 0 8px",lineHeight:1.02}}>Roma & París</h1>
        <p style={{color:C.goldLight,fontSize:15,margin:"0 0 4px"}}>Sep 24 – Oct 4, 2026 · 10 días · 🇮🇹🇫🇷</p>
        <p style={{color:"rgba(255,255,255,0.5)",fontSize:13,margin:"0 0 22px"}}>desde <strong style={{color:C.gold}}>$52,000 MXN</strong> todo incluido</p>
        <div style={{display:"flex",gap:12}}>
          {[["DÍAS",cd.d],["HRS",cd.h],["MIN",cd.m],["SEG",cd.s]].map(([l,v])=>(
            <div key={l} style={{textAlign:"center",background:"rgba(255,255,255,0.1)",backdropFilter:"blur(10px)",borderRadius:10,padding:"10px 13px",minWidth:58,border:"1px solid rgba(255,255,255,0.12)"}}>
              <div style={{fontSize:26,fontWeight:800,color:C.white,lineHeight:1}}>{String(v).padStart(2,"0")}</div>
              <div style={{fontSize:8,color:C.goldLight,letterSpacing:2,fontWeight:700,marginTop:2}}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div style={{padding:"36px 20px",maxWidth:700,margin:"0 auto"}}>
      <h2 style={{...S.h,fontSize:32,margin:"0 0 6px"}}>Próximos viajes</h2>
      <GoldDivider/>
      <p style={{color:C.muted,fontSize:14,marginBottom:28}}>Explora nuestros destinos y registra tu interés</p>
      {TL.map(trip=>{
        const sm={open:["● ABIERTO",C.gold,C.white],coming:["PRÓXIMAMENTE","rgba(255,255,255,0.18)","rgba(255,255,255,0.85)"],soon:["EN PLANEACIÓN","rgba(201,151,74,0.3)",C.goldLight],future:["PRÓXIMAMENTE","rgba(255,255,255,0.08)","rgba(255,255,255,0.45)"]};
        const [sl,sb,sc]=sm[trip.status]||sm.future;
        return <div key={trip.id} onClick={()=>onTrip(trip.id)} style={{cursor:"pointer",borderRadius:20,overflow:"hidden",marginBottom:22,boxShadow:"0 6px 30px rgba(15,30,60,0.14)",border:`1px solid ${C.border}`}}>
          <div style={{position:"relative",height:210}}>
            <img src={trip.img} alt={trip.name} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(10,20,50,0.08) 0%,rgba(10,20,50,0.82) 100%)"}}/>
            <div style={{position:"absolute",inset:0,padding:"16px 20px 18px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
              <div style={{display:"flex",justifyContent:"flex-end"}}><span style={{background:sb,color:sc,borderRadius:20,padding:"4px 12px",fontSize:10,fontWeight:800,letterSpacing:1}}>{sl}</span></div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end"}}>
                <div><div style={{fontSize:22,marginBottom:2}}>{trip.flag}</div><h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,fontWeight:700,color:C.white,margin:"0 0 2px",lineHeight:1}}>{trip.name}</h3><p style={{color:C.goldLight,fontSize:12,margin:0}}>{trip.dates} · {trip.days} días</p></div>
                {trip.price&&<div style={{textAlign:"right"}}><div style={{fontSize:22,fontWeight:800,color:C.white}}>${(trip.price/1000).toFixed(0)}k</div><div style={{fontSize:10,color:"rgba(255,255,255,0.5)"}}>MXN / persona</div></div>}
              </div>
            </div>
          </div>
          <div style={{background:C.white,padding:"12px 20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <p style={{color:C.muted,fontSize:13,margin:0,flex:1,lineHeight:1.4}}>{trip.desc.substring(0,72)}…</p>
            <span style={{color:C.gold,fontWeight:800,fontSize:22,marginLeft:12}}>›</span>
          </div>
        </div>;
      })}
    </div>
    <div style={{background:C.navy,padding:"28px 20px",textAlign:"center"}}>
      <Logo size={24}/>
      <p style={{color:"rgba(255,255,255,0.35)",fontSize:12,marginTop:10,marginBottom:8}}>@almasenrutamx · Tenancingo, Estado de México</p>
      <span onClick={onAdmin} style={{color:"rgba(255,255,255,0.2)",fontSize:11,cursor:"pointer",borderBottom:"1px dashed rgba(255,255,255,0.15)"}}>⚙ Panel administrativo</span>
    </div>
  </div>;
}

function TripDetailView({tripId,tripList,onBack}){
  const TL=tripList||TRIPS;
  const trip=TL.find(t=>t.id===tripId);
  const [openDay,setOpenDay]=useState(null);
  if(!trip)return null;
  return <div style={S.app}><style>{GF}</style>
    <div style={{background:C.navy,padding:"14px 22px",display:"flex",justifyContent:"space-between",alignItems:"center",position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 20px rgba(0,0,0,0.25)"}}>
      <Logo/><button onClick={onBack} style={{background:"none",border:"none",color:"rgba(255,255,255,0.65)",cursor:"pointer",fontSize:13,fontFamily:"'Nunito',sans-serif"}}>← Volver</button>
    </div>
    <div style={{position:"relative",height:380,overflow:"hidden"}}>
      <img src={trip.img} alt={trip.name} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
      <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(10,20,50,0.2) 0%,rgba(10,20,50,0.88) 100%)"}}/>
      <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"24px 26px"}}>
        <p style={{color:C.goldLight,fontSize:12,margin:"0 0 4px",letterSpacing:1}}>{trip.flag} {trip.dates}</p>
        <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:40,fontWeight:700,color:C.white,margin:"0 0 4px",lineHeight:1.02}}>{trip.name}</h1>
        <p style={{color:"rgba(255,255,255,0.6)",fontSize:13,margin:"0 0 8px"}}>{trip.sub}</p>
        {trip.price?<p style={{margin:0,color:C.gold,fontWeight:800,fontSize:24}}>${trip.price.toLocaleString()} <span style={{color:"rgba(255,255,255,0.4)",fontSize:13,fontWeight:400}}>MXN / persona</span></p>:<div style={{display:"inline-block",background:"rgba(201,151,74,0.25)",color:C.goldLight,borderRadius:20,padding:"5px 16px",fontSize:13,fontWeight:700}}>Precio por confirmar · Registra tu interés</div>}
      </div>
    </div>
    <div style={{maxWidth:700,margin:"0 auto",padding:"20px 16px"}}>
      <div style={S.card}><p style={{fontSize:16,lineHeight:1.75,color:C.text,margin:0}}>{trip.desc}</p></div>
      <div style={S.card}>
        <h3 style={{...S.h,fontSize:22,marginBottom:14}}>Puntos destacados</h3>
        <div style={{display:"flex",flexWrap:"wrap",gap:8}}>{trip.highlights.map((h,i)=><span key={i} style={{background:`linear-gradient(135deg,${C.navy},${C.navyLight})`,color:C.white,borderRadius:20,padding:"6px 14px",fontSize:13,fontWeight:600}}>★ {h}</span>)}</div>
      </div>
      {trip.includes.length>0&&<div style={S.card}>
        <h3 style={{...S.h,fontSize:22,marginBottom:14}}>¿Qué incluye?</h3>
        {trip.includes.map((item,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"10px 0",borderBottom:i<trip.includes.length-1?`1px solid ${C.border}`:"none"}}><div style={{width:8,height:8,borderRadius:"50%",background:`linear-gradient(135deg,${C.gold},${C.goldLight})`,flexShrink:0}}/><span style={{fontSize:14}}>{item}</span></div>)}
        <p style={{color:C.muted,fontSize:12,marginTop:12,marginBottom:0}}>* No incluye alimentos salvo lo indicado en el itinerario</p>
      </div>}
      {trip.itinerary.length>0&&<div style={S.card}>
        <h3 style={{...S.h,fontSize:22,marginBottom:14}}>Itinerario día a día</h3>
        {trip.itinerary.map((day,i)=><div key={i}>
          <div onClick={()=>setOpenDay(openDay===i?null:i)} style={{display:"flex",gap:12,alignItems:"center",padding:"13px 0",borderBottom:`1px solid ${C.border}`,cursor:"pointer",userSelect:"none"}}>
            <div style={{background:`linear-gradient(135deg,${C.navy},${C.navyLight})`,color:C.white,borderRadius:8,padding:"4px 8px",fontSize:11,fontWeight:700,flexShrink:0}}>DÍA {day.day}</div>
            <span style={{fontSize:18}}>{day.e}</span><span style={{fontWeight:700,fontSize:14,color:C.navy,flex:1}}>{day.city}</span>
            <span style={{color:C.muted,fontSize:16,display:"inline-block",transform:openDay===i?"rotate(180deg)":"none"}}>▾</span>
          </div>
          {openDay===i&&<div style={{padding:"10px 0 14px 50px"}}>{day.items.map((it,j)=><div key={j} style={{fontSize:13,color:C.muted,marginBottom:4}}>· {it}</div>)}</div>}
        </div>)}
      </div>}
      {trip.price&&<div style={S.card}>
        <h3 style={{...S.h,fontSize:22,marginBottom:18}}>Plan de pagos</h3>
        {[{n:"1",title:"Depósito inicial",amount:"$5,000 MXN",desc:"Reserva tu lugar (el precio puede cambiar)"},{n:"2",title:"Bloqueo de precio",amount:"$25,000 MXN",desc:`Vuelos + 50% hospedaje. Precio de $${trip.price.toLocaleString()} garantizado`},{n:"3",title:"Liquidación",amount:"Saldo restante",desc:"A convenir según fecha límite previa al viaje"}].map((p,i)=><div key={i} style={{display:"flex",gap:14,marginBottom:18}}>
          <div style={{background:`linear-gradient(135deg,${C.gold},#B8843A)`,color:C.white,borderRadius:"50%",width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:16,flexShrink:0}}>{p.n}</div>
          <div><div style={{fontWeight:700,fontSize:15}}>{p.title} – <span style={{color:C.gold}}>{p.amount}</span></div><div style={{fontSize:13,color:C.muted,marginTop:3}}>{p.desc}</div></div>
        </div>)}
      </div>}
      <div style={{borderRadius:20,overflow:"hidden",marginBottom:20,position:"relative"}}>
        <img src={trip.img} alt="" style={{width:"100%",height:190,objectFit:"cover"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(10,20,50,0.55),rgba(10,20,50,0.93))",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:24,textAlign:"center"}}>
          <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:26,color:C.white,margin:"0 0 8px"}}>¿Te animas a viajar?</h3>
          <p style={{color:"rgba(255,255,255,0.6)",fontSize:13,margin:"0 0 18px"}}>{trip.avail<27?`Solo quedan ${trip.avail} lugares.`:"Regístranos tu interés y te avisamos al abrir inscripciones."}</p>
          <a href={WA(`Hola, me interesa el viaje ${trip.name} (${trip.dates}). ¿Me pueden dar más información?`)} style={{display:"inline-block",background:"#25D366",color:C.white,borderRadius:12,padding:"13px 26px",fontWeight:800,fontSize:14,textDecoration:"none"}}>📲 Escribir por WhatsApp</a>
        </div>
      </div>
    </div>
  </div>;
}

function LoginView({travelers,onLogin,onBack}){
  const [user,setUser]=useState("");const [pass,setPass]=useState("");const [err,setErr]=useState(false);
  const doLogin=()=>{const f=travelers.find(t=>t.username===user.trim().toLowerCase()&&t.password===pass);if(f){onLogin(f.id);}else{setErr(true);}};
  return <div style={S.app}><style>{GF}</style>
    <div style={{position:"relative",height:200,overflow:"hidden"}}>
      <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=60" alt="Roma" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 40%"}}/>
      <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(10,20,50,0.45),rgba(10,20,50,0.92))"}}/>
      <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}><Logo size={26}/><p style={{color:C.goldLight,fontSize:14,marginTop:10,marginBottom:0}}>Portal del Viajero</p></div>
      <button onClick={onBack} style={{position:"absolute",top:16,left:16,background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",color:"rgba(255,255,255,0.8)",cursor:"pointer",fontSize:13,fontFamily:"'Nunito',sans-serif",borderRadius:8,padding:"6px 12px"}}>← Inicio</button>
    </div>
    <div style={{maxWidth:440,margin:"0 auto",padding:"28px 20px"}}>
      <div style={{...S.card,border:`1px solid ${C.border}`}}>
        <h2 style={{...S.h,fontSize:24,marginBottom:4,textAlign:"center"}}>Iniciar sesión</h2>
        <p style={{color:C.muted,fontSize:13,textAlign:"center",marginBottom:24}}>Ingresa tus credenciales de acceso</p>
        <div style={{marginBottom:14}}><label style={S.label}>USUARIO</label><input value={user} onChange={e=>{setUser(e.target.value);setErr(false);}} onKeyDown={e=>e.key==="Enter"&&doLogin()} placeholder="Ej: maria" style={{...S.inp,borderColor:err?C.danger:C.border}}/></div>
        <div style={{marginBottom:18}}><label style={S.label}>CONTRASEÑA</label><input type="password" value={pass} onChange={e=>{setPass(e.target.value);setErr(false);}} onKeyDown={e=>e.key==="Enter"&&doLogin()} placeholder="Tu contraseña de acceso" style={{...S.inp,borderColor:err?C.danger:C.border}}/></div>
        {err&&<div style={{background:C.dangerBg,color:C.danger,borderRadius:10,padding:"10px 14px",fontSize:13,marginBottom:16}}>❌ Usuario o contraseña incorrectos.</div>}
        <button onClick={doLogin} style={{...S.btnGold,width:"100%",fontSize:15}}>Entrar al portal</button>
        <div style={{marginTop:16,background:C.cream,borderRadius:10,padding:"12px 14px",fontSize:12,color:C.muted}}><strong style={{color:C.navy}}>Demo:</strong> usuario <code>maria</code> · contraseña <code>almas2026</code></div>
      </div>
      <div style={{textAlign:"center",marginTop:12}}><p style={{color:C.muted,fontSize:13,margin:"0 0 6px"}}>¿Olvidaste tu acceso?</p><a href={WA("Hola, olvidé mis credenciales del portal de viajero")} style={{color:C.gold,fontWeight:700,textDecoration:"none",fontSize:14}}>📲 Contactar por WhatsApp</a></div>
    </div>
  </div>;
}

function ExtrasTab({t,addonList,saveAddons}){
  const AL=addonList||ADDONS;
  const [sel,setSel]=useState([...t.addons]);
  const toggle=(id)=>setSel(prev=>prev.includes(id)?prev.filter(x=>x!==id):[...prev,id]);
  const total=sel.reduce((s,id)=>{const a=AL.find(x=>x.id===id);return a?s+a.price:s;},0);
  const cats=[...new Set(AL.map(a=>a.cat))];
  const buildMsg=()=>{const lines=sel.map(id=>{const a=AL.find(x=>x.id===id);return a?`· ${a.name}: $${a.price>0?"+":""}${a.price.toLocaleString()} MXN`:""}).filter(Boolean).join("\n");return `Hola, soy ${t.name} y me gustaría agregar los siguientes extras:\n\n${lines}\n\nTotal adicional estimado: $${total>0?"+":""}${total.toLocaleString()} MXN`;};
  return <>{cats.map(cat=><div key={cat} style={{marginBottom:4}}>
    <h3 style={{...S.h,fontSize:16,margin:"4px 4px 12px",paddingLeft:4,borderLeft:`3px solid ${C.gold}`}}>&nbsp;{cat}</h3>
    {AL.filter(a=>a.cat===cat).map(addon=>{const isOn=sel.includes(addon.id);return <div key={addon.id} onClick={()=>toggle(addon.id)} style={{...S.card,border:`2px solid ${isOn?C.gold:C.border}`,cursor:"pointer",marginBottom:10,padding:"14px 16px",background:isOn?C.goldBg:C.white}}>
      <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
        <span style={{fontSize:26,flexShrink:0}}>{addon.icon}</span>
        <div style={{flex:1}}><div style={{fontWeight:700,fontSize:14,color:C.text,marginBottom:3}}>{addon.name}</div><div style={{fontSize:12,color:C.muted}}>{addon.desc}</div></div>
        <div style={{textAlign:"right",flexShrink:0}}>
          <div style={{fontSize:15,fontWeight:800,color:addon.price<0?C.success:C.gold,marginBottom:6}}>{addon.price<0?"−":"+"} ${Math.abs(addon.price).toLocaleString()}</div>
          <div style={{background:isOn?`linear-gradient(135deg,${C.gold},#B8843A)`:C.border,color:isOn?C.white:C.muted,borderRadius:20,padding:"3px 12px",fontSize:11,fontWeight:700,whiteSpace:"nowrap"}}>{isOn?"✓ Seleccionado":"Agregar"}</div>
        </div>
      </div>
    </div>;})}
  </div>)}
  <div style={{...S.card,border:`2px solid ${C.gold}`,position:"sticky",bottom:12,boxShadow:"0 8px 30px rgba(15,30,60,0.18)"}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
      <div><div style={{fontSize:12,color:C.muted,marginBottom:2}}>{sel.length} extra(s) seleccionado(s)</div><div style={{fontSize:22,fontWeight:800,color:total<0?C.success:C.gold}}>{total<0?"−":"+"} ${Math.abs(total).toLocaleString()} MXN</div></div>
      <button onClick={()=>saveAddons(t.id,sel)} style={{...S.btnNavy,fontSize:12,padding:"8px 16px"}}>Guardar</button>
    </div>
    <a href={WA(buildMsg())} style={{display:"block",background:"#25D366",color:C.white,borderRadius:10,padding:"13px",textAlign:"center",fontWeight:800,fontSize:14,textDecoration:"none"}}>📲 Solicitar cotización por WhatsApp</a>
  </div></>;
}

function PagosTab({t,bank:bk,tripConfig}){
  const B=bk||BANK;const lockAmt=(tripConfig&&tripConfig.lockAmount)||25000;
  const rem=t.cost-t.paid;const pct=Math.round((t.paid/t.cost)*100);
  const addonTotal=t.addons.reduce((s,id)=>{const a=ADDONS.find(x=>x.id===id);return a?s+a.price:s;},0);
  return <>
    <div style={S.card}>
      <h3 style={{...S.h,fontSize:22,marginBottom:16}}>Estado de pago</h3>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:18}}>
        {[{l:"Total viaje",v:`$${t.cost.toLocaleString()}`,c:C.navy},{l:"Abonado",v:`$${t.paid.toLocaleString()}`,c:C.success},{l:"Pendiente",v:`$${rem.toLocaleString()}`,c:rem>0?C.danger:C.success}].map(({l,v,c})=><div key={l} style={{textAlign:"center",padding:"13px 8px",background:C.cream,borderRadius:12}}><div style={{fontSize:17,fontWeight:800,color:c}}>{v}</div><div style={{fontSize:10,color:C.muted,fontWeight:700,letterSpacing:0.5,marginTop:2}}>{l}</div></div>)}
      </div>
      <ProgressBar pct={pct} h={12}/>
      <p style={{fontSize:12,color:C.muted,textAlign:"center",marginTop:8}}>{pct}% pagado</p>
      {addonTotal!==0&&<div style={{marginTop:12,padding:"10px 14px",background:C.goldBg,borderRadius:10,border:`1px solid ${C.goldLight}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}><span style={{fontSize:13,color:C.warn}}>✨ Extras seleccionados</span><span style={{fontSize:14,fontWeight:800,color:C.gold}}>{addonTotal>0?"+":""}{addonTotal.toLocaleString()} MXN</span></div>}
    </div>
    <div style={S.card}>
      <h3 style={{...S.h,fontSize:20,marginBottom:12}}>Estado de tu reserva</h3>
      {rem===0?<div style={{padding:16,background:C.successBg,borderRadius:12,color:C.success,fontSize:14}}><strong>✅ ¡Viaje 100% pagado!</strong><p style={{margin:"6px 0 0"}}>Tu lugar está confirmado. ¡Nos vemos en septiembre! 🎉</p></div>:t.paid>=lockAmt?<div style={{padding:16,background:"#EEF2FF",borderRadius:12,color:"#4338CA",fontSize:14}}><strong>🔒 Precio bloqueado a ${t.cost.toLocaleString()} MXN</strong><p style={{margin:"6px 0 0"}}>Tus vuelos y parte del hospedaje están cubiertos. Precio garantizado.</p></div>:<div style={{padding:16,background:C.warnBg,borderRadius:12,color:C.warn,fontSize:14}}><strong>⚠️ Precio no bloqueado aún</strong><p style={{margin:"6px 0 0"}}>Para bloquear precio necesitas ${lockAmt.toLocaleString()} MXN. Te faltan ${(lockAmt-t.paid).toLocaleString()} MXN.</p></div>}
    </div>
    <div style={{...S.card,border:`1.5px solid ${C.gold}`,background:`linear-gradient(180deg,${C.white} 0%,${C.goldBg} 100%)`}}>
      <h3 style={{...S.h,fontSize:20,marginBottom:6}}>Datos para depósito</h3>
      <GoldDivider/>
      <div style={{background:"rgba(255,255,255,0.8)",borderRadius:12,padding:16,border:`1px solid ${C.border}`}}>
        {[{l:"Banco",v:B.bank},{l:"Titular de la cuenta",v:B.holder},{l:"Número de cuenta",v:B.account},{l:"CLABE interbancaria",v:B.clabe},{l:"Concepto de pago",v:"Tu nombre + Roma París 2026"}].map(({l,v},i,arr)=><div key={l} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"11px 0",borderBottom:i<arr.length-1?`1px solid ${C.border}`:"none"}}><span style={{fontSize:12,color:C.muted,fontWeight:700}}>{l}</span><span style={{fontSize:13,fontWeight:700,color:C.navy,textAlign:"right",maxWidth:"58%"}}>{v}</span></div>)}
      </div>
      <p style={{fontSize:12,color:C.muted,marginTop:12,marginBottom:14}}>⚠️ Una vez realizado el depósito, envía tu comprobante por WhatsApp para registrarlo.</p>
      <a href={WA("Hola, quiero enviar mi comprobante de pago para el viaje Roma & París 2026")} style={{display:"block",background:"#25D366",color:C.white,borderRadius:10,padding:"13px",textAlign:"center",fontWeight:800,fontSize:14,textDecoration:"none"}}>📲 Enviar comprobante por WhatsApp</a>
    </div>
  </>;
}

function DocsTab({t}){
  const pending=t.docs.filter(d=>!d.ok).length;
  return <>
    <div style={S.card}>
      <h3 style={{...S.h,fontSize:22,marginBottom:4}}>Mis documentos personales</h3>
      <p style={{color:C.muted,fontSize:13,marginBottom:6}}>Documentos que necesitamos de tu parte para tramitar el viaje</p>
      {pending>0&&<div style={{background:C.warnBg,color:C.warn,borderRadius:10,padding:"10px 14px",fontSize:13,marginBottom:16,fontWeight:700}}>⚠️ Tienes {pending} documento(s) pendiente(s)</div>}
      {t.docs.map((d,i)=><div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 0",borderBottom:i<t.docs.length-1?`1px solid ${C.border}`:"none"}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}><div style={{width:38,height:38,background:d.ok?C.successBg:C.warnBg,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16}}>{d.ok?"✓":"⌛"}</div><span style={{fontWeight:700,fontSize:15}}>{d.n}</span></div>
        <span style={{background:d.ok?C.successBg:C.warnBg,color:d.ok?C.success:C.warn,borderRadius:20,padding:"4px 12px",fontSize:12,fontWeight:700}}>{d.ok?"Recibido":"Pendiente"}</span>
      </div>)}
    </div>
    {pending>0&&<div style={S.card}><p style={{color:C.muted,fontSize:14,marginBottom:14}}>Envíanos tus documentos faltantes por WhatsApp y los registramos de inmediato.</p><a href={WA("Hola, quiero enviar mis documentos para el viaje Roma & París 2026")} style={{display:"block",background:`linear-gradient(135deg,${C.navy},${C.navyLight})`,color:C.white,borderRadius:10,padding:"13px",textAlign:"center",fontWeight:700,fontSize:14,textDecoration:"none"}}>📲 Enviar documentos por WhatsApp</a></div>}
  </>;
}

function BoletosTab({t}){
  if(t.tripDocs.length===0)return <div style={{...S.card,textAlign:"center",padding:52}}><div style={{fontSize:56,marginBottom:16}}>🎫</div><h3 style={{...S.h,fontSize:20,marginBottom:8}}>Sin boletos disponibles aún</h3><p style={{color:C.muted,fontSize:14}}>Aquí aparecerán tus boletos, vouchers de hospedaje y más cuando estén listos.</p></div>;
  return <div style={S.card}>
    <h3 style={{...S.h,fontSize:22,marginBottom:14}}>Boletos y documentos del viaje</h3>
    {t.tripDocs.map((d,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:14,padding:14,background:C.cream,borderRadius:12,marginBottom:10,border:`1px solid ${C.border}`}}>
      <div style={{width:48,height:48,background:`linear-gradient(135deg,${C.navy},${C.navyLight})`,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>{d.icon}</div>
      <div style={{flex:1}}><div style={{fontWeight:700,fontSize:15}}>{d.type}</div><div style={{fontSize:13,color:C.muted,marginTop:2}}>{d.detail}</div></div>
      <span style={{background:C.successBg,color:C.success,borderRadius:20,padding:"4px 12px",fontSize:12,fontWeight:700,flexShrink:0}}>✓ Listo</span>
    </div>)}
  </div>;
}

function ItinerarioTab(){
  return <div style={S.card}>
    <div style={{position:"relative",borderRadius:12,overflow:"hidden",marginBottom:20}}>
      <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=60" alt="Roma" style={{width:"100%",height:120,objectFit:"cover",objectPosition:"center 60%"}}/>
      <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(10,20,50,0.88),rgba(10,20,50,0.4))",display:"flex",alignItems:"center",padding:"0 22px"}}>
        <div><h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:24,fontWeight:700,color:C.white,margin:0}}>Tu itinerario</h3><p style={{color:C.goldLight,fontSize:13,margin:"4px 0 0"}}>10 días · Sep 24 – Oct 4, 2026</p></div>
      </div>
    </div>
    {ITINERARY.map((day,i)=><div key={i} style={{display:"flex",gap:14,marginBottom:20}}>
      <div style={{textAlign:"center",minWidth:50}}>
        <div style={{background:`linear-gradient(135deg,${C.navy},${C.navyLight})`,color:C.white,borderRadius:8,padding:"5px 8px",fontSize:11,fontWeight:700,marginBottom:5}}>DÍA {day.day}</div>
        <div style={{fontSize:20}}>{day.e}</div>
        {i<ITINERARY.length-1&&<div style={{width:2,height:18,background:C.border,margin:"5px auto 0"}}/>}
      </div>
      <div style={{paddingTop:4}}>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:700,color:C.navy,marginBottom:5}}>{day.city}</div>
        {day.items.map((it,j)=><div key={j} style={{fontSize:13,color:C.muted,marginBottom:3}}>· {it}</div>)}
      </div>
    </div>)}
  </div>;
}

function JuntasTab({meetings}){
  return <div style={S.card}>
    <h3 style={{...S.h,fontSize:22,marginBottom:4}}>Reuniones informativas</h3>
    <p style={{color:C.muted,fontSize:13,marginBottom:18}}>Asiste a todas las reuniones para estar al día con cada detalle</p>
    {meetings.length===0&&<p style={{color:C.muted,textAlign:"center",padding:20}}>Sin reuniones programadas aún.</p>}
    {meetings.map((m)=>{
      const isPast=new Date(m.date+"T23:59:00")<new Date();
      return <div key={m.id} style={{padding:16,borderRadius:12,marginBottom:12,background:isPast?"#F5F5F5":"linear-gradient(135deg,#EEF2FF,#F0F3FF)",border:`1.5px solid ${isPast?C.border:C.navy+"22"}`}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
          <span style={{fontWeight:700,fontSize:15,color:isPast?C.muted:C.navy}}>{m.title}</span>
          <span style={{background:isPast?C.border:C.successBg,color:isPast?C.muted:C.success,borderRadius:20,padding:"3px 10px",fontSize:11,fontWeight:700,marginLeft:8,flexShrink:0}}>{isPast?"Pasada":"Próxima"}</span>
        </div>
        <div style={{fontSize:13,color:C.muted,lineHeight:1.9}}>
          <div>📆 {new Date(m.date+"T12:00:00").toLocaleDateString("es-MX",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}</div>
          <div>🕐 {m.time} hrs · 📍 {m.place}</div>
        </div>
      </div>;
    })}
  </div>;
}

function TravelerView({travelerId,travelers,meetings,cd,bank,addonList,tripConfig,onBack,saveAddons}){
  const [tab,setTab]=useState("resumen");
  const t=travelers.find(x=>x.id===travelerId);
  if(!t)return null;
  const rem=t.cost-t.paid;const pct=Math.round((t.paid/t.cost)*100);
  const firstName=t.name.split(" ")[0];
  const nextMeeting=meetings.filter(m=>new Date(m.date+"T23:59:00")>=new Date()).sort((a,b)=>new Date(a.date)-new Date(b.date))[0];
  const addonTotal=t.addons.reduce((s,id)=>{const a=ADDONS.find(x=>x.id===id);return a?s+a.price:s;},0);
  const TABS=[{id:"resumen",l:"Inicio"},{id:"extras",l:"✨ Extras"},{id:"pagos",l:"Pagos"},{id:"docs",l:"Mis Docs"},{id:"boletos",l:"Boletos"},{id:"itinerario",l:"Itinerario"},{id:"juntas",l:"Reuniones"}];
  return <div style={S.app}><style>{GF}</style>
    <div style={{background:`linear-gradient(135deg,${C.navy},${C.navyLight})`,paddingBottom:0}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 20px"}}>
        <Logo/><button onClick={onBack} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.15)",color:"rgba(255,255,255,0.75)",cursor:"pointer",fontSize:12,fontFamily:"'Nunito',sans-serif",borderRadius:8,padding:"6px 12px"}}>Cerrar sesión</button>
      </div>
      <div style={{padding:"6px 22px 0"}}>
        <p style={{color:C.goldLight,fontSize:12,margin:"0 0 2px",letterSpacing:1}}>BIENVENID@,</p>
        <p style={{fontFamily:"'Cormorant Garamond',serif",color:C.white,fontSize:30,fontWeight:700,margin:"0 0 6px"}}>{firstName}</p>
        <div style={{display:"inline-flex",alignItems:"center",gap:7,background:"rgba(201,151,74,0.2)",borderRadius:20,padding:"4px 14px",marginBottom:14,border:"1px solid rgba(201,151,74,0.3)"}}><span style={{color:C.gold,fontSize:13}}>★</span><span style={{color:C.goldLight,fontSize:12,fontWeight:700}}>{t.points} puntos Almas</span></div>
      </div>
      <div style={{display:"flex",overflowX:"auto",padding:"0 8px"}}>
        {TABS.map(({id,l})=><button key={id} onClick={()=>setTab(id)} style={{background:tab===id?C.cream:"transparent",color:tab===id?C.navy:"rgba(255,255,255,0.48)",border:"none",padding:"10px 14px",cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontWeight:700,fontSize:12,borderRadius:"10px 10px 0 0",whiteSpace:"nowrap",borderBottom:tab===id?`2px solid ${C.gold}`:"2px solid transparent"}}>{l}</button>)}
      </div>
    </div>
    <div style={{maxWidth:700,margin:"0 auto",padding:"20px 16px"}}>
      {tab==="resumen"&&<>
        <div style={{position:"relative",borderRadius:18,overflow:"hidden",marginBottom:16}}>
          <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=60" alt="París" style={{width:"100%",height:150,objectFit:"cover",objectPosition:"center 65%"}}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(10,20,50,0.92) 0%,rgba(10,20,50,0.55) 100%)",display:"flex",alignItems:"center",padding:"0 22px"}}>
            <div>
              <p style={{color:C.goldLight,fontSize:9,letterSpacing:2.5,fontWeight:800,margin:"0 0 10px"}}>✈️ TU VIAJE COMIENZA EN</p>
              <div style={{display:"flex",gap:10}}>
                {[["DÍAS",cd.d],["HRS",cd.h],["MIN",cd.m],["SEG",cd.s]].map(([l,v])=><div key={l} style={{textAlign:"center",background:"rgba(255,255,255,0.12)",borderRadius:8,padding:"7px 10px",minWidth:50}}><div style={{fontSize:20,fontWeight:800,color:C.white,lineHeight:1}}>{String(v).padStart(2,"0")}</div><div style={{fontSize:7,color:C.goldLight,letterSpacing:2,fontWeight:700,marginTop:2}}>{l}</div></div>)}
              </div>
              <p style={{color:"rgba(255,255,255,0.45)",fontSize:11,margin:"10px 0 0"}}>Sep 24 → Oct 4 · Roma & París</p>
            </div>
          </div>
        </div>
        <div style={S.card}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}><h3 style={{...S.h,fontSize:20,margin:0}}>Estado de pago</h3><StatusBadge t={t}/></div>
          <ProgressBar pct={pct} h={10}/>
          <div style={{display:"flex",justifyContent:"space-between",marginTop:14}}>
            <div><div style={{fontSize:20,fontWeight:800,color:C.success}}>${t.paid.toLocaleString()}</div><div style={{fontSize:10,color:C.muted,fontWeight:700,letterSpacing:0.5}}>ABONADO</div></div>
            {rem>0&&<div style={{textAlign:"right"}}><div style={{fontSize:20,fontWeight:800,color:C.danger}}>${rem.toLocaleString()}</div><div style={{fontSize:10,color:C.muted,fontWeight:700,letterSpacing:0.5}}>PENDIENTE</div></div>}
          </div>
          {addonTotal!==0&&<div style={{marginTop:12,padding:"8px 12px",background:C.goldBg,borderRadius:10,fontSize:12,color:C.warn,border:`1px solid ${C.goldLight}`}}>✨ Extras: {addonTotal>0?"+":""}{addonTotal.toLocaleString()} MXN</div>}
        </div>
        <div style={{...S.card,background:"linear-gradient(135deg,#FEF8EE,#FFFBF0)",border:`1px solid ${C.goldLight}`}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}>
            <div style={{width:44,height:44,background:`linear-gradient(135deg,${C.gold},#B8843A)`,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 10px rgba(201,151,74,0.3)",flexShrink:0}}><span style={{color:C.white,fontSize:20}}>★</span></div>
            <div style={{flex:1}}><div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:700,color:C.navy}}>Puntos Almas</div><div style={{fontSize:12,color:C.muted}}>Acumula 1,000 pts y gana descuento especial</div></div>
            <span style={{fontSize:26,fontWeight:800,color:C.gold}}>{t.points}</span>
          </div>
          <ProgressBar pct={(t.points/1000)*100} h={8}/>
          <p style={{fontSize:11,color:C.muted,margin:"7px 0 0"}}>Cada $1,000 MXN abonado = 10 puntos · Meta: 1,000 pts</p>
        </div>
        {t.tripDocs.length>0&&<div style={S.card}>
          <h3 style={{...S.h,fontSize:20,marginBottom:14}}>Documentos disponibles</h3>
          {t.tripDocs.map((d,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"10px 0",borderBottom:i<t.tripDocs.length-1?`1px solid ${C.border}`:"none"}}><span style={{fontSize:24}}>{d.icon}</span><div style={{flex:1}}><div style={{fontWeight:700,fontSize:14}}>{d.type}</div><div style={{fontSize:12,color:C.muted}}>{d.detail}</div></div><span style={{background:C.successBg,color:C.success,borderRadius:20,padding:"3px 10px",fontSize:11,fontWeight:700}}>✓</span></div>)}
        </div>}
        {nextMeeting&&<div style={{...S.card,border:`1.5px solid ${C.navy}18`}}>
          <h3 style={{...S.h,fontSize:20,marginBottom:10}}>Próxima reunión</h3>
          <div style={{fontWeight:700,fontSize:15,color:C.navy,marginBottom:8}}>{nextMeeting.title}</div>
          <div style={{fontSize:13,color:C.muted,lineHeight:2}}><div>📆 {new Date(nextMeeting.date+"T12:00:00").toLocaleDateString("es-MX",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}</div><div>🕐 {nextMeeting.time} hrs · 📍 {nextMeeting.place}</div></div>
        </div>}
      </>}
      {tab==="extras"&&<ExtrasTab t={t} addonList={addonList} saveAddons={saveAddons}/>}
      {tab==="pagos"&&<PagosTab t={t} bank={bank} tripConfig={tripConfig}/>}
      {tab==="docs"&&<DocsTab t={t}/>}
      {tab==="boletos"&&<BoletosTab t={t}/>}
      {tab==="itinerario"&&<ItinerarioTab/>}
      {tab==="juntas"&&<JuntasTab meetings={meetings}/>}
    </div>
  </div>;
}

function ConfigTab({bank,setBank,addonList,setAddonList,tripConfig,setTripConfig,travelers,setTravelers,tripList,setTripList}){
  const [section,setSection]=useState("precio");
  const [showPass,setShowPass]=useState({});
  const [ntName,setNtName]=useState("");const [ntUser,setNtUser]=useState("");const [ntPass,setNtPass]=useState("");const [ntMsg,setNtMsg]=useState(null);
  const [rpId,setRpId]=useState(null);const [rpPass,setRpPass]=useState("");
  const [editTrip,setEditTrip]=useState(null);const [newTrip,setNewTrip]=useState(false);
  const BLANK=()=>({id:"trip_"+Date.now(),name:"",sub:"",dates:"",days:"",price:"",spots:25,avail:25,status:"soon",img:"",flag:"",desc:"",highlights:"",includes:"",itinerary:[]});
  const [tripForm,setTripForm]=useState(BLANK());
  const uB=(f,v)=>setBank(p=>({...p,[f]:v}));
  const uAP=(id,v)=>setAddonList(p=>p.map(a=>a.id===id?{...a,price:parseInt(v)||a.price}:a));
  const uTC=(f,v)=>setTripConfig(p=>({...p,[f]:parseInt(v)||p[f]}));
  const addT=()=>{if(!ntName||!ntUser||!ntPass){setNtMsg({e:true,t:"Completa todos los campos"});return;}if(travelers.find(t=>t.username===ntUser.toLowerCase())){setNtMsg({e:true,t:"Ese usuario ya existe"});return;}setTravelers(p=>[...p,{id:Date.now(),name:ntName,username:ntUser.toLowerCase(),password:ntPass,paid:0,cost:tripConfig.price,points:0,addons:[],docs:[{n:"Pasaporte",ok:false},{n:"INE",ok:false},{n:"Foto",ok:false},{n:"CURP",ok:false}],tripDocs:[]}]);setNtName("");setNtUser("");setNtPass("");setNtMsg({e:false,t:`✅ Viajero "${ntName}" agregado`});setTimeout(()=>setNtMsg(null),3500);};
  const rP=(id)=>{if(!rpPass)return;setTravelers(p=>p.map(t=>t.id===id?{...t,password:rpPass}:t));setRpId(null);setRpPass("");};
  const oE=(trip)=>{setTripForm({...trip,highlights:(trip.highlights||[]).join(", "),includes:(trip.includes||[]).join(", "),price:trip.price||""});setEditTrip(trip.id);setNewTrip(false);};
  const oN=()=>{setTripForm(BLANK());setNewTrip(true);setEditTrip(null);};
  const cT=()=>{setEditTrip(null);setNewTrip(false);};
  const sT=()=>{const t={...tripForm,price:tripForm.price?parseInt(tripForm.price):null,days:tripForm.days?parseInt(tripForm.days):0,spots:parseInt(tripForm.spots)||25,avail:parseInt(tripForm.avail)||25,highlights:tripForm.highlights?tripForm.highlights.split(",").map(s=>s.trim()).filter(Boolean):[],includes:tripForm.includes?tripForm.includes.split(",").map(s=>s.trim()).filter(Boolean):[],itinerary:[]};if(!t.name)return;if(newTrip){setTripList(p=>[...p,t]);}else{setTripList(p=>p.map(x=>x.id===editTrip?t:x));}cT();};
  const dT=(id)=>{if(window.confirm("¿Eliminar este viaje?"))setTripList(p=>p.filter(x=>x.id!==id));};
  const SO=[{v:"open",l:"🟢 Abierto"},{v:"coming",l:"🔵 Próximamente"},{v:"soon",l:"🟡 En planeación"},{v:"future",l:"⚫ Futuro"}];
  const SECS=[{id:"precio",l:"💰 Precio"},{id:"banco",l:"🏦 Banco"},{id:"extras",l:"✨ Extras"},{id:"viajes",l:"🌍 Viajes"},{id:"viajeros",l:"👥 Viajeros"}];
  const SB=({id,l})=><button onClick={()=>setSection(id)} style={{background:section===id?`linear-gradient(135deg,${C.navy},${C.navyLight})`:C.white,color:section===id?C.white:C.navy,border:`1.5px solid ${section===id?C.navy:C.border}`,borderRadius:10,padding:"9px 14px",fontFamily:"'Nunito',sans-serif",fontWeight:700,fontSize:13,cursor:"pointer",marginBottom:8,textAlign:"left",width:"100%"}}>{l}</button>;
  const TF=(field,label,ph,type="text")=><div style={{marginBottom:13}}><label style={S.label}>{label.toUpperCase()}</label><input type={type} value={tripForm[field]||""} onChange={e=>setTripForm(p=>({...p,[field]:e.target.value}))} placeholder={ph} style={S.inp}/></div>;
  return <>
    <div style={{...S.card,background:`linear-gradient(135deg,${C.navy},${C.navyLight})`,padding:"18px 22px"}}><h2 style={{...S.h,fontSize:22,color:C.white,margin:0}}>⚙️ Configuración</h2><p style={{color:"rgba(255,255,255,0.55)",fontSize:13,margin:"4px 0 0"}}>Precios, banco, extras, viajes y viajeros</p></div>
    <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:4}}>{SECS.map(({id,l})=><SB key={id} id={id} l={l}/>)}</div>
    {section==="precio"&&<div style={S.card}>
      <h3 style={{...S.h,fontSize:20,marginBottom:16}}>💰 Precio del viaje</h3>
      {[{f:"price",l:"Precio total por persona ($MXN)",h:"El precio que ven los viajeros"},{f:"deposit",l:"Depósito inicial ($MXN)",h:"Monto mínimo para apartar lugar"},{f:"lockAmount",l:"Monto para bloquear precio ($MXN)",h:"Bloquea vuelos y precio garantizado"},{f:"spots",l:"Cupo máximo",h:"Número total de lugares"}].map(({f,l,h})=><div key={f} style={{marginBottom:16}}><label style={S.label}>{l.toUpperCase()}</label><input type="number" defaultValue={tripConfig[f]} onBlur={e=>uTC(f,e.target.value)} style={S.inp}/><p style={{fontSize:12,color:C.muted,margin:"4px 0 0"}}>{h}</p></div>)}
      <div style={{padding:14,background:C.goldBg,borderRadius:12,border:`1px solid ${C.goldLight}`,fontSize:13,color:C.warn}}>⚠️ Cambiar el precio no afecta a viajeros ya registrados.</div>
    </div>}
    {section==="banco"&&<div style={S.card}>
      <h3 style={{...S.h,fontSize:20,marginBottom:14}}>🏦 Datos bancarios</h3>
      {[{f:"bank",l:"Banco",p:"BBVA"},{f:"holder",l:"Titular",p:"Tu nombre"},{f:"account",l:"Número de cuenta",p:"0000 0000 0000 0000"},{f:"clabe",l:"CLABE interbancaria",p:"000 000 00 00000000 00"}].map(({f,l,p})=><div key={f} style={{marginBottom:14}}><label style={S.label}>{l.toUpperCase()}</label><input defaultValue={bank[f]} onBlur={e=>uB(f,e.target.value)} placeholder={p} style={S.inp}/></div>)}
    </div>}
    {section==="extras"&&<div style={S.card}>
      <h3 style={{...S.h,fontSize:20,marginBottom:14}}>✨ Precios de extras</h3>
      {addonList.map((addon,i)=><div key={addon.id} style={{display:"flex",alignItems:"center",gap:12,padding:"10px 0",borderBottom:i<addonList.length-1?`1px solid ${C.border}`:"none"}}>
        <span style={{fontSize:20,flexShrink:0}}>{addon.icon}</span>
        <div style={{flex:1,minWidth:0}}><div style={{fontWeight:700,fontSize:13,color:C.navy}}>{addon.name}</div><div style={{fontSize:11,color:C.muted}}>{addon.cat}</div></div>
        <div style={{display:"flex",alignItems:"center",gap:6,flexShrink:0}}><span style={{fontSize:13,color:C.muted}}>$</span><input type="number" defaultValue={addon.price} onBlur={e=>uAP(addon.id,e.target.value)} style={{...S.inp,width:90,padding:"7px 10px",fontSize:13,textAlign:"right"}}/></div>
      </div>)}
    </div>}
    {section==="viajes"&&<>
      {!editTrip&&!newTrip&&<>
        <div style={{...S.card,background:"linear-gradient(135deg,#EEF2FF,#F0F3FF)",border:"1px solid #C7D2FE",marginBottom:12}}><p style={{fontSize:13,color:"#4338CA",margin:0}}>💡 Los cambios se aplican de inmediato en la página de inicio.</p></div>
        {(tripList||[]).map(trip=>{const sl={open:"🟢 Abierto",coming:"🔵 Próximo",soon:"🟡 Planeación",future:"⚫ Futuro"}[trip.status]||"—";return <div key={trip.id} style={{...S.card,padding:"16px 18px"}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10}}>
          <div style={{flex:1,minWidth:0}}><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}><span style={{fontSize:18}}>{trip.flag||"🌍"}</span><span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:700,color:C.navy}}>{trip.name}</span><span style={{fontSize:11,color:C.muted,background:C.cream,borderRadius:20,padding:"2px 9px",border:`1px solid ${C.border}`}}>{sl}</span></div><div style={{fontSize:13,color:C.muted}}>{trip.dates} · {trip.days} días {trip.price?`· $${Number(trip.price).toLocaleString()} MXN`:""}</div></div>
          <div style={{display:"flex",gap:6,flexShrink:0}}><button onClick={()=>oE(trip)} style={{...S.btnNavy,padding:"7px 14px",fontSize:12}}>✏️ Editar</button><button onClick={()=>dT(trip.id)} style={{background:C.dangerBg,color:C.danger,border:`1px solid #FECACA`,borderRadius:10,padding:"7px 12px",fontFamily:"'Nunito',sans-serif",fontWeight:700,fontSize:12,cursor:"pointer"}}>🗑</button></div>
        </div></div>;})  }
        <button onClick={oN} style={{...S.btnGold,width:"100%",marginTop:4}}>➕ Agregar nuevo viaje</button>
      </>}
      {(editTrip||newTrip)&&<div style={S.card}>
        <h3 style={{...S.h,fontSize:20,marginBottom:4}}>{newTrip?"➕ Nuevo viaje":"✏️ Editar viaje"}</h3><GoldDivider/>
        {TF("name","Nombre del destino","Ej: Roma & París")}
        {TF("sub","Subtítulo","Ej: Peregrinación 2026")}
        {TF("flag","Bandera(s) emoji","Ej: 🇮🇹🇫🇷")}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>{TF("dates","Fechas","Sep 24 – Oct 4, 2026")}{TF("days","Días","10","number")}</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>{TF("price","Precio MXN (vacío = por confirmar)","52000","number")}{TF("spots","Cupo total","27","number")}</div>
        {TF("avail","Lugares disponibles","24","number")}
        <div style={{marginBottom:13}}><label style={S.label}>ESTADO</label><select value={tripForm.status} onChange={e=>setTripForm(p=>({...p,status:e.target.value}))} style={{...S.inp,cursor:"pointer"}}>{SO.map(o=><option key={o.v} value={o.v}>{o.l}</option>)}</select></div>
        {TF("img","URL de la foto","https://... (sube en imgbb.com)")}
        <div style={{marginBottom:13}}><label style={S.label}>DESCRIPCIÓN</label><textarea value={tripForm.desc||""} onChange={e=>setTripForm(p=>({...p,desc:e.target.value}))} rows={3} style={{...S.inp,resize:"vertical",lineHeight:1.6}}/></div>
        {TF("highlights","Puntos destacados (separados por coma)","Coliseo, Torre Eiffel, Versalles")}
        {TF("includes","¿Qué incluye? (separado por coma)","Vuelo redondo, Hospedaje, Traslados")}
        <div style={{display:"flex",gap:10,marginTop:6}}><button onClick={sT} style={{...S.btnGold,flex:1}}>{newTrip?"Agregar viaje":"Guardar cambios"}</button><button onClick={cT} style={{...S.btnOut,flex:1}}>Cancelar</button></div>
      </div>}
    </>}
    {section==="viajeros"&&<>
      <div style={S.card}>
        <h3 style={{...S.h,fontSize:20,marginBottom:14}}>👥 Cuentas de viajeros</h3>
        {travelers.map(t=><div key={t.id} style={{padding:"14px 0",borderBottom:`1px solid ${C.border}`}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}><div><div style={{fontWeight:700,fontSize:15,color:C.navy}}>{t.name}</div><div style={{fontSize:13,color:C.muted}}>👤 @{t.username}</div></div><StatusBadge t={t}/></div>
          <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
            <div style={{flex:1,minWidth:120,background:C.cream,borderRadius:8,padding:"8px 12px",fontFamily:"monospace",fontSize:13,color:C.navy}}>🔑 {showPass[t.id]?t.password:"•".repeat(t.password.length)}</div>
            <button onClick={()=>setShowPass(p=>({...p,[t.id]:!p[t.id]}))} style={{background:"none",border:`1.5px solid ${C.border}`,borderRadius:8,padding:"7px 12px",cursor:"pointer",fontSize:13,color:C.muted,fontFamily:"'Nunito',sans-serif"}}>{showPass[t.id]?"🙈":"👁"}</button>
            {rpId===t.id?<div style={{display:"flex",gap:6,flex:1,minWidth:200}}><input value={rpPass} onChange={e=>setRpPass(e.target.value)} placeholder="Nueva contraseña" style={{...S.inp,padding:"7px 10px",fontSize:12}}/><button onClick={()=>rP(t.id)} style={{...S.btnGold,padding:"7px 12px",fontSize:12}}>✓</button><button onClick={()=>{setRpId(null);setRpPass("");}} style={{...S.btnOut,padding:"5px 10px",fontSize:12}}>✕</button></div>:<button onClick={()=>{setRpId(t.id);setRpPass("");}} style={{...S.btnOut,padding:"7px 12px",fontSize:12,color:C.muted}}>Cambiar contraseña</button>}
          </div>
        </div>)}
      </div>
      <div style={S.card}>
        <h3 style={{...S.h,fontSize:20,marginBottom:14}}>➕ Agregar viajero</h3>
        <div style={{marginBottom:12}}><label style={S.label}>NOMBRE COMPLETO</label><input value={ntName} onChange={e=>setNtName(e.target.value)} placeholder="Ej: Juan Pérez García" style={S.inp}/></div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:16}}><div><label style={S.label}>USUARIO</label><input value={ntUser} onChange={e=>setNtUser(e.target.value.toLowerCase())} placeholder="juan" style={{...S.inp,width:"auto"}}/></div><div><label style={S.label}>CONTRASEÑA</label><input value={ntPass} onChange={e=>setNtPass(e.target.value)} placeholder="Contraseña" style={{...S.inp,width:"auto"}}/></div></div>
        {ntMsg&&<div style={{background:ntMsg.e?C.dangerBg:C.successBg,color:ntMsg.e?C.danger:C.success,borderRadius:10,padding:"10px 14px",fontSize:13,marginBottom:14}}>{ntMsg.t}</div>}
        <button onClick={addT} style={{...S.btnGold,width:"100%"}}>Agregar viajero</button>
      </div>
    </>}
  </>;
}

function AdminLoginView({onLogin,onBack}){
  const [pass,setPass]=useState("");const [err,setErr]=useState(false);
  const doLogin=()=>{if(pass==="almas2026"){onLogin();}else{setErr(true);}};
  return <div style={S.app}><style>{GF}</style>
    <div style={{background:C.navy,padding:"14px 22px",display:"flex",justifyContent:"space-between",alignItems:"center"}}><Logo/><button onClick={onBack} style={{background:"none",border:"none",color:"rgba(255,255,255,0.55)",cursor:"pointer",fontSize:13,fontFamily:"'Nunito',sans-serif"}}>← Inicio</button></div>
    <div style={{maxWidth:400,margin:"52px auto",padding:"0 20px"}}>
      <div style={S.card}>
        <div style={{textAlign:"center",marginBottom:26}}>
          <div style={{width:64,height:64,background:`linear-gradient(135deg,${C.navy},${C.navyLight})`,borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,margin:"0 auto 16px"}}>⚙️</div>
          <h2 style={{...S.h,fontSize:24,marginBottom:4}}>Panel Administrativo</h2>
          <p style={{color:C.muted,fontSize:14}}>Acceso exclusivo para el equipo</p>
        </div>
        <div style={{marginBottom:16}}><label style={S.label}>CONTRASEÑA</label><input type="password" value={pass} onChange={e=>{setPass(e.target.value);setErr(false);}} onKeyDown={e=>e.key==="Enter"&&doLogin()} placeholder="Contraseña" style={{...S.inp,borderColor:err?C.danger:C.border}}/></div>
        {err&&<div style={{background:C.dangerBg,color:C.danger,borderRadius:10,padding:"10px 14px",fontSize:13,marginBottom:14}}>❌ Contraseña incorrecta</div>}
        <button onClick={doLogin} style={{...S.btnGold,width:"100%"}}>Entrar</button>
        <div style={{marginTop:14,background:C.cream,borderRadius:10,padding:"10px 14px",fontSize:12,color:C.muted,textAlign:"center"}}>Demo: <code>almas2026</code></div>
      </div>
    </div>
  </div>;
}

function AdminView({travelers,meetings,bank,addonList,tripConfig,tripList,setTravelers,setMeetings,setBank,setAddonList,setTripConfig,setTripList,addPayment,onBack}){
  const [tab,setTab]=useState("viajeros");
  const [payId,setPayId]=useState(null);const [payAmt,setPayAmt]=useState("");
  const [docTId,setDocTId]=useState(null);const [docType,setDocType]=useState("");const [docDetail,setDocDetail]=useState("");const [docIcon,setDocIcon]=useState("📄");
  const [mtTitle,setMtTitle]=useState("");const [mtDate,setMtDate]=useState("");const [mtTime,setMtTime]=useState("18:00");const [mtPlace,setMtPlace]=useState("Parroquia de la Santísima Trinidad");
  const totalRaised=travelers.reduce((s,t)=>s+t.paid,0);
  const locked=travelers.filter(t=>t.paid>=25000).length;
  const toggleDoc=(tId,idx)=>setTravelers(prev=>prev.map(t=>t.id===tId?{...t,docs:t.docs.map((d,i)=>i===idx?{...d,ok:!d.ok}:d)}:t));
  const doAddPay=(tId)=>{const amt=parseInt(payAmt);if(!isNaN(amt)&&amt>0){addPayment(tId,amt);setPayId(null);setPayAmt("");}};
  const doAddDoc=(tId)=>{if(docType&&docDetail){setTravelers(prev=>prev.map(t=>t.id===tId?{...t,tripDocs:[...t.tripDocs,{type:docType,detail:docDetail,icon:docIcon}]}:t));setDocTId(null);setDocType("");setDocDetail("");setDocIcon("📄");}};
  const doAddMeet=()=>{if(mtTitle&&mtDate){setMeetings(prev=>[...prev,{id:Date.now(),title:mtTitle,date:mtDate,time:mtTime,place:mtPlace}]);setMtTitle("");setMtDate("");setMtTime("18:00");setMtPlace("Parroquia de la Santísima Trinidad");}};
  const TABS=[{id:"viajeros",l:"👥 Viajeros"},{id:"juntas",l:"📅 Juntas"},{id:"resumen",l:"📊 Resumen"},{id:"config",l:"⚙️ Config"}];
  return <div style={S.app}><style>{GF}</style>
    <div style={{background:C.navy,paddingBottom:0,boxShadow:"0 2px 20px rgba(0,0,0,0.25)"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 20px 12px"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}><Logo/><span style={{color:"rgba(255,255,255,0.3)",fontSize:13}}>· Admin</span></div>
        <button onClick={onBack} style={{background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.12)",color:"rgba(255,255,255,0.65)",cursor:"pointer",fontSize:12,fontFamily:"'Nunito',sans-serif",borderRadius:8,padding:"6px 12px"}}>← Salir</button>
      </div>
      <div style={{display:"flex",gap:2,padding:"0 8px"}}>{TABS.map(({id,l})=><button key={id} onClick={()=>setTab(id)} style={{background:tab===id?C.cream:"transparent",color:tab===id?C.navy:"rgba(255,255,255,0.48)",border:"none",padding:"9px 16px",cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontWeight:700,fontSize:13,borderRadius:"8px 8px 0 0"}}>{l}</button>)}</div>
    </div>
    <div style={{maxWidth:800,margin:"0 auto",padding:"20px 16px"}}>
      {tab==="viajeros"&&travelers.map(t=>{const pct=Math.round((t.paid/t.cost)*100);const rem=t.cost-t.paid;return <div key={t.id} style={S.card}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}><div><div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:700,color:C.navy}}>{t.name}</div><div style={{fontSize:13,color:C.muted}}>@{t.username} · ⭐ {t.points} pts</div></div><StatusBadge t={t}/></div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:14}}>
          {[{l:"Abonado",v:`$${t.paid.toLocaleString()}`,c:C.success},{l:"Pendiente",v:`$${rem.toLocaleString()}`,c:rem>0?C.danger:C.success},{l:"Total",v:`$${t.cost.toLocaleString()}`,c:C.navy}].map(({l,v,c})=><div key={l} style={{background:C.cream,borderRadius:10,padding:"9px 10px",textAlign:"center"}}><div style={{fontSize:16,fontWeight:800,color:c}}>{v}</div><div style={{fontSize:11,color:C.muted}}>{l}</div></div>)}
        </div>
        <ProgressBar pct={pct}/>
        {t.addons.length>0&&<div style={{marginTop:12,padding:"10px 12px",background:C.goldBg,borderRadius:10,border:`1px solid ${C.goldLight}`}}><div style={{fontSize:12,fontWeight:700,color:C.navy,marginBottom:7}}>✨ Extras:</div><div style={{display:"flex",flexWrap:"wrap",gap:6}}>{t.addons.map(id=>{const a=ADDONS.find(x=>x.id===id);return a?<span key={id} style={{background:C.white,color:C.navy,border:`1px solid ${C.goldLight}`,borderRadius:20,padding:"2px 10px",fontSize:12,fontWeight:600}}>{a.icon} {a.name}</span>:null;})}</div></div>}
        <div style={{margin:"14px 0 10px"}}><div style={{fontSize:12,fontWeight:700,color:C.navy,marginBottom:7}}>Documentos <span style={{color:C.muted,fontWeight:400}}>(toca para cambiar estado)</span></div><div style={{display:"flex",flexWrap:"wrap",gap:6}}>{t.docs.map((d,i)=><span key={i} onClick={()=>toggleDoc(t.id,i)} style={{background:d.ok?C.successBg:C.warnBg,color:d.ok?C.success:C.warn,borderRadius:20,padding:"3px 11px",fontSize:12,fontWeight:700,cursor:"pointer"}}>{d.ok?"✓":"⌛"} {d.n}</span>)}</div></div>
        {t.tripDocs.length>0&&<div style={{marginBottom:12}}><div style={{fontSize:12,fontWeight:700,color:C.navy,marginBottom:6}}>Documentos del viaje:</div><div style={{display:"flex",flexWrap:"wrap",gap:6}}>{t.tripDocs.map((d,i)=><span key={i} style={{background:C.successBg,color:C.success,borderRadius:20,padding:"3px 11px",fontSize:12,fontWeight:700}}>{d.icon} {d.type}</span>)}</div></div>}
        {payId===t.id?<div style={{display:"flex",gap:8,alignItems:"center",marginTop:12}}><input type="number" value={payAmt} onChange={e=>setPayAmt(e.target.value)} onKeyDown={e=>e.key==="Enter"&&doAddPay(t.id)} placeholder="Monto ($)" style={{...S.inp,border:`2px solid ${C.gold}`,flex:1,width:"auto",padding:"10px 12px"}}/><button onClick={()=>doAddPay(t.id)} style={{...S.btnGold,padding:"10px 18px",flexShrink:0,fontSize:13}}>Registrar</button><button onClick={()=>{setPayId(null);setPayAmt("");}} style={{...S.btnOut,padding:"8px 14px",flexShrink:0,fontSize:13}}>✕</button></div>
        :docTId===t.id?<div style={{background:C.cream,borderRadius:12,padding:16,marginTop:12,border:`1px solid ${C.border}`}}><div style={{fontSize:13,fontWeight:700,color:C.navy,marginBottom:12}}>Nuevo documento del viaje</div><div style={{display:"flex",gap:8,marginBottom:10}}><select value={docIcon} onChange={e=>setDocIcon(e.target.value)} style={{padding:"9px",border:`1.5px solid ${C.border}`,borderRadius:8,fontSize:18,background:C.white,cursor:"pointer"}}>{["✈️","🏨","🛡️","🎫","🚌","📄","🗺️","🎢","🎟️"].map(ic=><option key={ic} value={ic}>{ic}</option>)}</select><input value={docType} onChange={e=>setDocType(e.target.value)} placeholder="Tipo" style={{...S.inp,flex:1,width:"auto",padding:"9px 12px",fontSize:13}}/></div><input value={docDetail} onChange={e=>setDocDetail(e.target.value)} placeholder="Detalle" style={{...S.inp,fontSize:13,marginBottom:12,padding:"9px 12px"}}/><div style={{display:"flex",gap:8}}><button onClick={()=>doAddDoc(t.id)} style={{...S.btnGold,fontSize:13,padding:"9px 18px"}}>Agregar</button><button onClick={()=>setDocTId(null)} style={{...S.btnOut,fontSize:13,padding:"7px 14px"}}>Cancelar</button></div></div>
        :<div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:14}}><button onClick={()=>{setPayId(t.id);setDocTId(null);}} style={{...S.btnGold,fontSize:13,padding:"9px 18px"}}>💳 Registrar pago</button><button onClick={()=>{setDocTId(t.id);setPayId(null);}} style={{...S.btnOut,fontSize:13,padding:"7px 16px"}}>📎 Añadir documento</button></div>}
      </div>;})}
      {tab==="juntas"&&<>
        <div style={S.card}>
          <h3 style={{...S.h,fontSize:22,marginBottom:14}}>Reuniones programadas</h3>
          {meetings.length===0&&<p style={{color:C.muted,textAlign:"center",padding:16}}>Sin reuniones aún.</p>}
          {meetings.map((m,i)=><div key={m.id} style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",padding:"14px 0",borderBottom:i<meetings.length-1?`1px solid ${C.border}`:"none"}}><div><div style={{fontWeight:700,fontSize:14,color:C.navy}}>{m.title}</div><div style={{fontSize:13,color:C.muted,marginTop:4}}>📆 {m.date} · 🕐 {m.time} · 📍 {m.place}</div></div><button onClick={()=>setMeetings(prev=>prev.filter(x=>x.id!==m.id))} style={{background:"none",border:"none",color:C.danger,cursor:"pointer",fontSize:20,lineHeight:1,padding:"0 6px"}}>✕</button></div>)}
        </div>
        <div style={S.card}>
          <h3 style={{...S.h,fontSize:22,marginBottom:14}}>Nueva reunión</h3>
          <input value={mtTitle} onChange={e=>setMtTitle(e.target.value)} placeholder="Título de la reunión" style={{...S.inp,marginBottom:10}}/>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:10}}><input type="date" value={mtDate} onChange={e=>setMtDate(e.target.value)} style={{...S.inp,width:"auto"}}/><input type="time" value={mtTime} onChange={e=>setMtTime(e.target.value)} style={{...S.inp,width:"auto"}}/></div>
          <input value={mtPlace} onChange={e=>setMtPlace(e.target.value)} placeholder="Lugar" style={{...S.inp,marginBottom:16}}/>
          <button onClick={doAddMeet} style={S.btnGold}>Agregar reunión</button>
        </div>
      </>}
      {tab==="resumen"&&<>
        <div style={S.card}>
          <h3 style={{...S.h,fontSize:22,marginBottom:16}}>Resumen del viaje</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>{[{e:"👥",l:"Viajeros registrados",v:travelers.length},{e:"🔒",l:"Con precio bloqueado",v:locked},{e:"💰",l:"Total recaudado",v:`$${totalRaised.toLocaleString()}`},{e:"💺",l:"Lugares libres",v:`${27-travelers.length}/27`}].map(({e,l,v})=><div key={l} style={{textAlign:"center",background:C.cream,borderRadius:14,padding:"18px 12px"}}><div style={{fontSize:32,marginBottom:4}}>{e}</div><div style={{fontSize:22,fontWeight:800,color:C.navy}}>{v}</div><div style={{fontSize:12,color:C.muted,marginTop:2}}>{l}</div></div>)}</div>
        </div>
        <div style={S.card}>
          <h3 style={{...S.h,fontSize:20,marginBottom:18}}>Pagos por viajero</h3>
          {travelers.map(t=>{const pct=Math.round((t.paid/t.cost)*100);return <div key={t.id} style={{marginBottom:18}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}><span style={{fontWeight:700,fontSize:14}}>{t.name}</span><span style={{fontSize:13,color:C.muted}}>${t.paid.toLocaleString()} ({pct}%)</span></div><ProgressBar pct={pct} h={9}/></div>;})}
          <div style={{borderTop:`1px solid ${C.border}`,paddingTop:16,marginTop:4,display:"flex",justifyContent:"space-between",alignItems:"center"}}><span style={{fontWeight:700,color:C.navy,fontSize:15}}>Total recaudado</span><span style={{fontWeight:800,color:C.gold,fontSize:22}}>${totalRaised.toLocaleString()} MXN</span></div>
        </div>
      </>}
      {tab==="config"&&<ConfigTab bank={bank} setBank={setBank} addonList={addonList} setAddonList={setAddonList} tripConfig={tripConfig} setTripConfig={setTripConfig} travelers={travelers} setTravelers={setTravelers} tripList={tripList} setTripList={setTripList}/>}
    </div>
  </div>;
}

export default function App(){
  const [view,setView]=useState("home");const [travelerId,setTId]=useState(null);const [selectedTrip,setTrip]=useState(null);
  const [travelers,setTravelers]=useState(INIT_TRAVELERS);const [meetings,setMeetings]=useState(INIT_MEETINGS);
  const [bank,setBank]=useState({...BANK});const [addonList,setAddonList]=useState([...ADDONS]);
  const [tripConfig,setTripConfig]=useState({price:52000,deposit:5000,lockAmount:25000,spots:27});
  const [tripList,setTripList]=useState(TRIPS.map(t=>({...t})));
  const [cd,setCd]=useState({d:0,h:0,m:0,s:0});
  useEffect(()=>{const T=new Date("2026-09-24T06:00:00");const iv=setInterval(()=>{const d=T-new Date();if(d<=0){clearInterval(iv);return;}setCd({d:Math.floor(d/864e5),h:Math.floor((d%864e5)/36e5),m:Math.floor((d%36e5)/6e4),s:Math.floor((d%6e4)/1e3)});},1000);return()=>clearInterval(iv);},[]);
  const addPayment=(id,amount)=>setTravelers(prev=>prev.map(t=>t.id===id?{...t,paid:Math.min(t.paid+amount,t.cost),points:t.points+Math.floor(amount/1000)*10}:t));
  const saveAddons=(id,addons)=>setTravelers(prev=>prev.map(t=>t.id===id?{...t,addons}:t));
  if(view==="home")return <HomeView cd={cd} tripList={tripList} onLogin={()=>setView("login")} onTrip={id=>{setTrip(id);setView("trip");}} onAdmin={()=>setView("adminLogin")}/>;
  if(view==="trip")return <TripDetailView tripId={selectedTrip} tripList={tripList} onBack={()=>setView("home")}/>;
  if(view==="login")return <LoginView travelers={travelers} onLogin={id=>{setTId(id);setView("traveler");}} onBack={()=>setView("home")}/>;
  if(view==="traveler")return <TravelerView travelerId={travelerId} travelers={travelers} meetings={meetings} cd={cd} bank={bank} addonList={addonList} tripConfig={tripConfig} onBack={()=>{setView("home");setTId(null);}} saveAddons={saveAddons}/>;
  if(view==="adminLogin")return <AdminLoginView onLogin={()=>setView("admin")} onBack={()=>setView("home")}/>;
  if(view==="admin")return <AdminView travelers={travelers} meetings={meetings} bank={bank} addonList={addonList} tripConfig={tripConfig} tripList={tripList} setTravelers={setTravelers} setMeetings={setMeetings} setBank={setBank} setAddonList={setAddonList} setTripConfig={setTripConfig} setTripList={setTripList} addPayment={addPayment} onBack={()=>setView("home")}/>;
  return null;
}
