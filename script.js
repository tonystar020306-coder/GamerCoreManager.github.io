// ===================== IDIOMAS =====================
const translations = {
  es: {
    loginTitle: "LOGIN GAMERCORE", userPlaceholder: "Usuario", passwordPlaceholder: "Contraseña",
    enterBtn: "ENTRAR", registerBtn: "REGISTRARSE", systemTitle: "GAMERCORE MANAGER",
    recomendadorBtn: "🎯 RECOMENDAR PC", armarBtn: "⚙️ ARMAR PC", exportPdfBtn: "📄 EXPORTAR A PDF",
    documentacionBtn: "📄 DOCUMENTACIÓN", cerrarBtn: "✖ CERRAR SISTEMA", clearHistorial: "🗑 LIMPIAR TODO",
    compatSuccess: "✅ Todos los componentes son compatibles"
  },
  en: {
    loginTitle: "LOGIN GAMERCORE", userPlaceholder: "Username", passwordPlaceholder: "Password",
    enterBtn: "LOGIN", registerBtn: "SIGN UP", systemTitle: "GAMERCORE MANAGER",
    recomendadorBtn: "🎯 RECOMMEND PC", armarBtn: "⚙️ ASSEMBLE PC", exportPdfBtn: "📄 EXPORT TO PDF",
    documentacionBtn: "📄 DOCUMENTATION", cerrarBtn: "✖ CLOSE SYSTEM", clearHistorial: "🗑 CLEAR ALL",
    compatSuccess: "✅ All components are compatible"
  },
  ja: {
    loginTitle: "ログイン ゲーマーコア", userPlaceholder: "ユーザー名", passwordPlaceholder: "パスワード",
    enterBtn: "ログイン", registerBtn: "登録", systemTitle: "ゲーマーコア マネージャー",
    recomendadorBtn: "🎯 おすすめPC", armarBtn: "⚙️ PCを組立", exportPdfBtn: "📄 PDF書き出し",
    documentacionBtn: "📄 ドキュメント", cerrarBtn: "✖ 閉じる", clearHistorial: "🗑 すべてクリア",
    compatSuccess: "✅ すべてのコンポーネントは互換性があります"
  }
};
let currentLang = localStorage.getItem("gc_lang") || "es";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("gc_lang", lang);
  const t = translations[lang];
  document.querySelector("#login h1").innerText = t.loginTitle;
  document.getElementById("usuario").placeholder = t.userPlaceholder;
  document.getElementById("password").placeholder = t.passwordPlaceholder;
  const loginBtns = document.querySelectorAll("#login button");
  loginBtns[0].innerText = t.enterBtn;
  loginBtns[1].innerText = t.registerBtn;
  document.querySelector("#sistema .panel h1").innerText = t.systemTitle;
  const panelBtns = document.querySelectorAll(".panel button");
  panelBtns[0].innerText = t.recomendadorBtn;
  panelBtns[1].innerText = t.armarBtn;
  panelBtns[2].innerText = t.exportPdfBtn;
  panelBtns[3].innerText = t.documentacionBtn;
  panelBtns[4].innerText = t.cerrarBtn;
  document.querySelector(".btn-limpiar").innerHTML = t.clearHistorial;
  // Actualizar texto del slider
  let tema = document.documentElement.getAttribute("data-theme");
  document.getElementById("toggle-label").innerText = tema === "dark" ? (lang === "es" ? "MODO CLARO" : lang === "en" ? "LIGHT MODE" : "ライトモード") : (lang === "es" ? "MODO OSCURO" : lang === "en" ? "DARK MODE" : "ダークモード");
}

// ===================== MODO OSCURO / CLARO persistente =====================
async function toggleModo() {
  let html = document.documentElement;
  let actual = html.getAttribute("data-theme");
  let nuevo = actual === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", nuevo);
  localStorage.setItem("gc_tema", nuevo);
  let label = nuevo === "dark" ? (currentLang === "es" ? "MODO CLARO" : currentLang === "en" ? "LIGHT MODE" : "ライトモード") : (currentLang === "es" ? "MODO OSCURO" : currentLang === "en" ? "DARK MODE" : "ダークモード");
  document.getElementById("toggle-label").innerText = label;
  document.getElementById("toggle-modo").checked = (nuevo === "light");
  const usuarioId = localStorage.getItem("usuarioId");
  if (usuarioId) {
    await fetch('http://localhost:3000/api/usuarios/tema', {
      method: 'PUT', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usuarioId, tema: nuevo })
    }).catch(e => console.log("Error al guardar tema en BD"));
  }
}
function aplicarTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);
  let label = tema === "dark" ? (currentLang === "es" ? "MODO CLARO" : currentLang === "en" ? "LIGHT MODE" : "ライトモード") : (currentLang === "es" ? "MODO OSCURO" : currentLang === "en" ? "DARK MODE" : "ダークモード");
  document.getElementById("toggle-label").innerText = label;
  document.getElementById("toggle-modo").checked = (tema === "light");
}
// FUNCIONES MODIFICADAS:
async function iniciarSesion() {
  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;
  const res = await fetch('http://localhost:3000/api/login', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre: usuario, password })
  });
  const data = await res.json();
  if (data.success) {
    localStorage.setItem("usuarioId", data.usuarioId);
    if (data.tema) { aplicarTema(data.tema); localStorage.setItem("gc_tema", data.tema); }
    alert("Bienvenido " + usuario);
    document.getElementById("login").style.display = "none";
    document.getElementById("sistema").style.display = "flex";
    setLanguage(currentLang);
    renderHistorial();
  } else alert("Usuario o contraseña incorrectos");
}

// Asegurar que el slider llame a toggleModo
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("toggle-modo").addEventListener("change", toggleModo);
  document.getElementById("lang-es").addEventListener("click", () => setLanguage("es"));
  document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));
  document.getElementById("lang-ja").addEventListener("click", () => setLanguage("ja"));
  // Aquí también debes tener el evento para pestañas de documentación (ya lo tenías)
  setLanguage(currentLang);
  let temaGuardado = localStorage.getItem("gc_tema") || "dark";
  aplicarTema(temaGuardado);
});

// El resto de funciones (armarPC, exportarPDF, etc.) déjalas exactamente como las tenías.
// ===================== MODO OSCURO / CLARO =====================
function toggleModo() {
  let html = document.documentElement;
  let actual = html.getAttribute("data-theme");
  let nuevo = actual === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", nuevo);
  localStorage.setItem("gc_tema", nuevo);
  document.getElementById("toggle-label").textContent = nuevo === "dark" ? "MODO CLARO" : "MODO OSCURO";
  document.getElementById("toggle-modo").checked = (nuevo === "light");
  // Opcional: guardar en BD si hay usuario logueado
  const usuarioId = localStorage.getItem("usuarioId");
  if (usuarioId) {
    fetch('http://localhost:3000/api/usuarios/tema', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usuarioId, tema: nuevo })
    }).catch(e => console.log("No se pudo guardar tema en BD"));
  }
}
function aplicarTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);
  document.getElementById("toggle-label").textContent = tema === "dark" ? "MODO CLARO" : "MODO OSCURO";
  document.getElementById("toggle-modo").checked = (tema === "light");
}
// Cargar tema guardado
(function() {
  let t = localStorage.getItem("gc_tema") || "dark";
  aplicarTema(t);
})();

// ===================== DATOS DE COMPATIBILIDAD =====================
const cpuSocket={
  "Athlon 3000G":"AM4","Ryzen 3 2200G":"AM4","Ryzen 3 3200G":"AM4","Ryzen 3 4100":"AM4",
  "Ryzen 5 3600":"AM4","Ryzen 5 4600G":"AM4","Ryzen 5 5500":"AM4","Ryzen 5 5600X":"AM4","Ryzen 7 5700X":"AM4",
  "Ryzen 7 5800X3D":"AM4","Ryzen 7 7700X":"AM5","Ryzen 7 7800X3D":"AM5","Ryzen 9 7900X":"AM5","Ryzen 9 7950X":"AM5","Ryzen 9 9950X":"AM5",
  "Intel i3 10100F":"LGA1200","Intel i3 12100F":"LGA1700",
  "Intel i5 10400F":"LGA1200","Intel i5 12400F":"LGA1700","Intel i5 13400F":"LGA1700","Intel i5 14600K":"LGA1700",
  "Intel i7 12700K":"LGA1700","Intel i7 13700K":"LGA1700","Intel i7 14700K":"LGA1700","Intel i9 13900K":"LGA1700","Intel i9 14900K":"LGA1700"
};
const mbSocket={
  "A320M":"AM4","B450M":"AM4","B550 Gaming":"AM4","X570 AORUS":"AM4",
  "B650 Gaming Plus":"AM5","X670 AORUS Elite":"AM5",
  "H510M":"LGA1200","H610M":"LGA1700","B660M":"LGA1700","Z690 Gaming":"LGA1700","Z790 ROG STRIX":"LGA1700"
};
const mbRam={
  "A320M":"DDR4","B450M":"DDR4","B550 Gaming":"DDR4","X570 AORUS":"DDR4",
  "B650 Gaming Plus":"DDR5","X670 AORUS Elite":"DDR5",
  "H510M":"DDR4","H610M":"DDR4","B660M":"DDR4","Z690 Gaming":"DDR4","Z790 ROG STRIX":"DDR5"
};
const gpuWatts={
  "GT 1030":300,"GTX 1050 Ti":350,"GTX 1650":350,"GTX 1660 Super":450,
  "RTX 2060":500,"RTX 3050":450,"RTX 3060":550,"RTX 3060 Ti":600,"RTX 3070":650,
  "RTX 4060":550,"RTX 4060 Ti":600,"RTX 4070":650,"RTX 4070 Super":700,"RTX 4080":750,"RTX 4090":850,
  "RX 570":450,"RX 580":500,"RX 6400":350,
  "RX 6600":500,"RX 6700 XT":600,"RX 6750 XT":650,"RX 7600":550,
  "RX 7700 XT":650,"RX 7800 XT":700,"RX 7900 XT":750,"RX 7900 XTX":800
};
const fuenteWatts={
  "500W":500,"550W Bronze":550,"650W Bronze":650,"750W Gold":750,
  "850W Gold":850,"1000W Platinum":1000,"1200W Titanium":1200
};
const cpuHighTDP=["Ryzen 9 7900X","Ryzen 9 7950X","Ryzen 9 9950X","Intel i9 13900K","Intel i9 14900K","Intel i7 14700K"];

function verificarCompatibilidad(cpu,gpu,ram,mb,fuente){
  let errores=[],advertencias=[];
  if(cpu&&mb){
    let sc=cpuSocket[cpu],sm=mbSocket[mb];
    if(sc&&sm&&sc!==sm) errores.push("⛔ Socket incompatible: "+cpu+" usa "+sc+" pero "+mb+" es "+sm);
  }
  if(ram&&mb){
    let rt=ram.includes("DDR5")?"DDR5":"DDR4",mt=mbRam[mb];
    if(mt&&rt!==mt) errores.push("⛔ RAM incompatible: "+mb+" soporta "+mt+" pero seleccionaste "+rt);
    let sm=mbSocket[mb];
    if(rt==="DDR5"&&(sm==="AM4"||sm==="LGA1200")) errores.push("⛔ DDR5 no compatible con AM4/LGA1200");
  }
  if(gpu&&fuente){
    let wg=gpuWatts[gpu]||0,wf=fuenteWatts[fuente]||0,wn=wg+(cpuHighTDP.includes(cpu)?100:50);
    if(wf<wn) errores.push("⛔ Fuente insuficiente: "+gpu+" necesita ~"+wn+"W, tienes "+wf+"W");
    else if(wf<wn+100) advertencias.push("⚠️ Fuente ajustada: recomendado más margen para "+gpu);
  }
  if(cpu&&gpu){let c=detectarCuello(cpu,gpu);if(c)advertencias.push("⚠️ "+c);}
  if(ram&&(ram.startsWith("4GB")||ram.startsWith("8GB"))) advertencias.push("⚠️ RAM baja: menos de 16GB puede limitar juegos modernos");
  return{errores,advertencias};
}
function detectarCuello(cpu,gpu){
  const gg={"GT 1030":1,"GTX 1050 Ti":2,"GTX 1650":2,"GTX 1660 Super":3,"RTX 2060":3,"RTX 3050":3,"RTX 3060":4,"RTX 3060 Ti":4,"RTX 3070":5,"RTX 4060":4,"RTX 4060 Ti":5,"RTX 4070":5,"RTX 4070 Super":6,"RTX 4080":7,"RTX 4090":8,"RX 570":2,"RX 580":3,"RX 6400":2,"RX 6600":3,"RX 6700 XT":4,"RX 6750 XT":5,"RX 7600":4,"RX 7700 XT":5,"RX 7800 XT":5,"RX 7900 XT":6,"RX 7900 XTX":7};
  const cg={"Athlon 3000G":1,"Ryzen 3 2200G":1,"Ryzen 3 3200G":1,"Ryzen 3 4100":2,"Ryzen 5 3600":3,"Ryzen 5 4600G":3,"Ryzen 5 5500":3,"Ryzen 5 5600X":4,"Ryzen 7 5700X":5,"Ryzen 7 5800X3D":6,"Ryzen 7 7700X":5,"Ryzen 7 7800X3D":7,"Ryzen 9 7900X":6,"Ryzen 9 7950X":7,"Ryzen 9 9950X":8,"Intel i3 10100F":2,"Intel i3 12100F":3,"Intel i5 10400F":3,"Intel i5 12400F":4,"Intel i5 13400F":4,"Intel i5 14600K":5,"Intel i7 12700K":5,"Intel i7 13700K":6,"Intel i7 14700K":6,"Intel i9 13900K":7,"Intel i9 14900K":7};
  let gc=cg[cpu]||3,gpuN=gg[gpu]||3;
  if(gpuN-gc>=3)return"Posible cuello de botella en CPU: el procesador podría limitar la GPU";
  if(gc-gpuN>=3)return"CPU sobredimensionado: considera una GPU más potente";
  return null;
}
function actualizarCompatLive(){
  let cpu=v("cpu"),gpu=v("gpu"),ram=v("ram"),mb=v("mb"),fuente=v("fuente");
  let div=document.getElementById("compat-live");
  if(!cpu&&!gpu&&!ram&&!mb&&!fuente){div.innerHTML="";return;}
  let{errores,advertencias}=verificarCompatibilidad(cpu,gpu,ram,mb,fuente);
  let html="";
  errores.forEach(e=>html+='<div class="compat-error">'+e+'</div>');
  advertencias.forEach(a=>html+='<div class="compat-warn">'+a+'</div>');
  if(!errores.length&&!advertencias.length&&cpu&&gpu&&ram&&mb&&fuente)
    html='<div class="compat-ok">✅ Todos los componentes son compatibles</div>';
  div.innerHTML=html;
}
["cpu","gpu","ram","mb","fuente","ssd"].forEach(id=>document.getElementById(id).addEventListener("change",actualizarCompatLive));

function calcularGama(cpu,gpu){
  const cg={"Athlon 3000G":1,"Ryzen 3 2200G":1,"Ryzen 3 3200G":1,"Ryzen 3 4100":2,"Ryzen 5 3600":3,"Ryzen 5 4600G":3,"Ryzen 5 5500":3,"Ryzen 5 5600X":4,"Ryzen 7 5700X":5,"Ryzen 7 5800X3D":6,"Ryzen 7 7700X":5,"Ryzen 7 7800X3D":7,"Ryzen 9 7900X":6,"Ryzen 9 7950X":7,"Ryzen 9 9950X":8,"Intel i3 10100F":2,"Intel i3 12100F":3,"Intel i5 10400F":3,"Intel i5 12400F":4,"Intel i5 13400F":4,"Intel i5 14600K":5,"Intel i7 12700K":5,"Intel i7 13700K":6,"Intel i7 14700K":6,"Intel i9 13900K":7,"Intel i9 14900K":7};
  const gg={"GT 1030":1,"GTX 1050 Ti":2,"GTX 1650":2,"GTX 1660 Super":3,"RTX 2060":3,"RTX 3050":3,"RTX 3060":4,"RTX 3060 Ti":4,"RTX 3070":5,"RTX 4060":4,"RTX 4060 Ti":5,"RTX 4070":5,"RTX 4070 Super":6,"RTX 4080":7,"RTX 4090":8,"RX 570":2,"RX 580":3,"RX 6400":2,"RX 6600":3,"RX 6700 XT":4,"RX 6750 XT":5,"RX 7600":4,"RX 7700 XT":5,"RX 7800 XT":5,"RX 7900 XT":6,"RX 7900 XTX":7};
  let score=Math.round(((cg[cpu]||3)+(gg[gpu]||3))/2);
  if(score<=2)return{label:"⚡ GAMA BAJA",   cls:"gama-baja"};
  if(score<=4)return{label:"🔵 GAMA MEDIA",  cls:"gama-media"};
  if(score<=6)return{label:"🔥 GAMA ALTA",   cls:"gama-alta"};
  return{label:"💜 GAMA EXTREMA", cls:"gama-extrema"};
}
function mostrarCotizacion(precioBase){
  let subtotal=precioBase;
  let descuento=Math.round(subtotal*0.05);
  let subConDesc=subtotal-descuento;
  let iva=Math.round(subConDesc*0.16);
  let total=subConDesc+iva;
  document.getElementById("cot-sub").textContent="$"+subtotal.toLocaleString("es-MX")+" MXN";
  document.getElementById("cot-desc").textContent="- $"+descuento.toLocaleString("es-MX")+" MXN";
  document.getElementById("cot-iva").textContent="+ $"+iva.toLocaleString("es-MX")+" MXN";
  document.getElementById("cot-total").textContent="$"+total.toLocaleString("es-MX")+" MXN";
  document.getElementById("cotizacion").style.display="block";
  return total;
}

// ===================== RECOMENDADOR =====================
const recomendaciones={
  gaming:{cpu:"Ryzen 7 5800X3D",gpu:"RTX 4070",ram:"32GB DDR4 3600MHz",mb:"X570 AORUS",fuente:"850W Gold",ssd:"WD Black SN850X 2TB",desc:"Máximo rendimiento en juegos."},
  streaming:{cpu:"Intel i7 13700K",gpu:"RTX 4060 Ti",ram:"32GB DDR4 3600MHz",mb:"Z690 Gaming",fuente:"750W Gold",ssd:"Samsung 980 PRO 1TB",desc:"Ideal para jugar y transmitir."},
  diseno:{cpu:"Ryzen 9 7900X",gpu:"RTX 4070 Super",ram:"64GB DDR5 6000MHz",mb:"X670 AORUS Elite",fuente:"1000W Platinum",ssd:"Samsung 990 PRO 4TB",desc:"Para render y edición profesional."},
  programacion:{cpu:"Intel i9 14900K",gpu:"RTX 4060",ram:"64GB DDR5 6000MHz",mb:"Z790 ROG STRIX",fuente:"850W Gold",ssd:"Samsung 990 PRO 4TB",desc:"Compilación rápida y VMs."}
};
function abrirModal(){document.getElementById("modal-rec").classList.add("activo");}
function cerrarModal(){document.getElementById("modal-rec").classList.remove("activo");}
function recomendarPara(uso){
  cerrarModal();
  let r=recomendaciones[uso];
  setSelectValue("cpu",r.cpu);setSelectValue("gpu",r.gpu);setSelectValue("ram",r.ram);
  setSelectValue("mb",r.mb);setSelectValue("fuente",r.fuente);setSelectValue("ssd",r.ssd);
  actualizarCompatLive();
  alert("✅ PC recomendada para "+uso.toUpperCase()+" cargada.\n\n"+r.desc+"\n\nPresiona ARMAR PC para ver el análisis completo.");
}

// ===================== ARMAR PC Y GUARDAR EN BD =====================
function v(id){return document.getElementById(id).value;}
async function armarPC(){
  let cpu=v("cpu"),gpu=v("gpu"),ram=v("ram"),mb=v("mb"),fuente=v("fuente"),ssd=v("ssd");
  if(!cpu||!gpu||!ram||!mb||!fuente||!ssd){alert("Selecciona todos los componentes");return;}
  let{errores,advertencias}=verificarCompatibilidad(cpu,gpu,ram,mb,fuente);
  if(errores.length){alert("⛔ ERRORES DE COMPATIBILIDAD:\n\n"+errores.join("\n")+"\n\nCorrige los errores antes de continuar.");return;}

  let precioBase = Math.floor(Math.random()*30000)+10000;
  let consumo = Math.floor(Math.random()*500)+200;
  let valorant = Math.floor(Math.random()*250)+120;
  let warzone = Math.floor(Math.random()*120)+60;
  let fortnite = Math.floor(Math.random()*180)+90;
  let tempCPU = Math.floor(Math.random()*10)+60;
  let tempGPU = Math.floor(Math.random()*10)+70;

  let gama=calcularGama(cpu,gpu);
  let badge=document.getElementById("badge-gama");
  badge.textContent=gama.label;
  badge.className="badge-gama "+gama.cls;
  badge.style.display="block";

  let totalFinal=mostrarCotizacion(precioBase);
  let compatTexto=advertencias.length===0?"COMPONENTES COMPATIBLES ✅":"ADVERTENCIAS:\n"+advertencias.join("\n");

  let resultado=
`===== PC GAMER =====

CPU:       ${cpu}
GPU:       ${gpu}
RAM:       ${ram}
MB:        ${mb}
Fuente:    ${fuente}
SSD:       ${ssd}

===== FPS ESTIMADOS =====

Valorant:  ${valorant} FPS
Warzone:   ${warzone} FPS
Fortnite:  ${fortnite} FPS

===== SISTEMA =====

Consumo:   ${consumo}W
CPU Temp:  ${tempCPU}°C
GPU Temp:  ${tempGPU}°C

===== COMPATIBILIDAD =====

${compatTexto}`;

  document.getElementById("resultado").innerText=resultado;
  const usuarioId = localStorage.getItem("usuarioId");
  if(usuarioId){
    await fetch('http://localhost:3000/api/builds', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usuarioId, build: { cpu, gpu, ram, mb, fuente, ssd,
        precio: totalFinal, gama: gama.label, valorant, warzone, fortnite, advertencias
      }})
    });
    renderHistorial();
  } else {
    alert("No has iniciado sesión, no se guardó el historial.");
  }
}

// ===================== HISTORIAL (con backend) =====================
async function renderHistorial() {
  const usuarioId = localStorage.getItem("usuarioId");
  if (!usuarioId) return;
  const res = await fetch(`http://localhost:3000/api/builds/${usuarioId}`);
  const builds = await res.json();
  const div = document.getElementById("historial-lista");
  if (!builds.length) {
    div.innerHTML = '<p class="no-historial">Sin configuraciones guardadas.</p>';
    return;
  }
  div.innerHTML = builds.map((build, idx) => `
    <div class="historial-item">
      <div class="h-title">PC #${idx+1} ${build.gama ? '<span style="font-size:10px;color:#aaa;">'+build.gama+'</span>' : ''}</div>
      <div class="h-fecha">${new Date(build.fecha).toLocaleString("es-MX")}</div>
      <div class="h-comp">
        CPU: ${build.cpu}<br>GPU: ${build.gpu}<br>RAM: ${build.ram}<br>
        <span style="color:#ff6666;">$${Number(build.precio_total).toLocaleString("es-MX")} MXN</span><br>
        <span style="color:#44ff88;">Val:${build.fps_valorant} WZ:${build.fps_warzone} FN:${build.fps_fortnite} fps</span>
        ${build.advertencias ? '<br><span style="color:#ffaa00;">⚠️ Advertencias</span>' : ''}
      </div>
      <div class="historial-btns">
        <button class="btn-cargar" onclick="cargarConfig(${build.id})">↩ Cargar</button>
        <button class="btn-borrar" onclick="borrarConfig(${build.id})">🗑</button>
      </div>
    </div>
  `).join("");
}
async function cargarConfig(buildId) {
  const usuarioId = localStorage.getItem("usuarioId");
  if(!usuarioId) return;
  const res = await fetch(`http://localhost:3000/api/builds/${usuarioId}`);
  const builds = await res.json();
  const build = builds.find(b => b.id == buildId);
  if(!build) return;
  setSelectValue("cpu", build.cpu);
  setSelectValue("gpu", build.gpu);
  setSelectValue("ram", build.ram);
  setSelectValue("mb", build.motherboard);
  setSelectValue("fuente", build.fuente);
  setSelectValue("ssd", build.ssd);
  actualizarCompatLive();
}
async function borrarConfig(buildId) {
  if(!confirm("¿Eliminar esta configuración?")) return;
  await fetch(`http://localhost:3000/api/builds/${buildId}`, { method: 'DELETE' });
  renderHistorial();
}
function limpiarHistorial() {
  if(confirm("¿Borrar todo el historial? Esto eliminará TODAS tus builds de la base de datos.")){
    alert("Función no implementada en el backend, puedes eliminar una a una.");
  }
}
function setSelectValue(id, val){
  let s=document.getElementById(id);
  for(let o of s.options){if(o.text===val){s.value=o.value;return;}}
}

// ===================== LOGIN / REGISTRO (backend) =====================
async function registrarUsuario() {
  let nu = prompt("Crea un usuario");
  if (!nu) return;
  let np = prompt("Crea una contraseña");
  if (!np) return;
  const res = await fetch('http://localhost:3000/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre: nu, password: np })
  });
  const data = await res.json();
  if (data.success) alert("Usuario registrado correctamente");
  else alert("Error: " + data.error);
}
async function iniciarSesion() {
  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;
  const res = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre: usuario, password })
  });
  const data = await res.json();
  if (data.success) {
    localStorage.setItem("usuarioId", data.usuarioId);
    alert("Bienvenido " + usuario);
    document.getElementById("login").style.display = "none";
    document.getElementById("sistema").style.display = "flex";
    renderHistorial();
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}
function cerrarSistema() { location.reload(); }

// ===================== DOCUMENTACIÓN (pestañas) =====================
function abrirModalDocs() { document.getElementById("modal-docs").classList.add("activo"); }
function cerrarModalDocs() { document.getElementById("modal-docs").classList.remove("activo"); }
function activarDocsTab(tabId) {
  document.querySelectorAll('.docs-panel').forEach(p => p.classList.remove('activo'));
  document.querySelectorAll('.docs-tab-btn').forEach(b => b.classList.remove('activo'));
  document.getElementById(`tab-${tabId}`).classList.add('activo');
  document.querySelector(`.docs-tab-btn[data-tab="${tabId}"]`).classList.add('activo');
}
// Inicializar event listeners de pestañas y slider al cargar
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.docs-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => activarDocsTab(btn.getAttribute('data-tab')));
  });
  document.getElementById("toggle-modo").addEventListener("change", toggleModo);
});

// ===================== EXPORTAR A PDF =====================
async function exportarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  const cpu = document.getElementById("cpu").value;
  const gpu = document.getElementById("gpu").value;
  const ram = document.getElementById("ram").value;
  const mb = document.getElementById("mb").value;
  const fuente = document.getElementById("fuente").value;
  const ssd = document.getElementById("ssd").value;
  if (!cpu || !gpu || !ram || !mb || !fuente || !ssd) {
    alert("Selecciona todos los componentes antes de exportar");
    return;
  }
  
  // Precios simulados (puedes calcularlos como en armarPC)
  const components = [
    { nombre: "CPU", valor: cpu, precio: Math.floor(Math.random() * 8000) + 2000 },
    { nombre: "GPU", valor: gpu, precio: Math.floor(Math.random() * 15000) + 3000 },
    { nombre: "RAM", valor: ram, precio: Math.floor(Math.random() * 4000) + 1000 },
    { nombre: "Motherboard", valor: mb, precio: Math.floor(Math.random() * 5000) + 1500 },
    { nombre: "Fuente", valor: fuente, precio: Math.floor(Math.random() * 3000) + 800 },
    { nombre: "SSD", valor: ssd, precio: Math.floor(Math.random() * 2500) + 500 }
  ];
  const subtotal = components.reduce((s, c) => s + c.precio, 0);
  const descuento = Math.round(subtotal * 0.05);
  const iva = Math.round((subtotal - descuento) * 0.16);
  const total = subtotal - descuento + iva;
  
  doc.setFontSize(18);
  doc.text("GamerCore Manager - Lista de compras", 14, 20);
  doc.setFontSize(10);
  doc.text(`Generado: ${new Date().toLocaleString()}`, 14, 30);
  
  const tableData = components.map(c => [c.nombre, c.valor, `$${c.precio.toLocaleString("es-MX")} MXN`]);
  doc.autoTable({
    startY: 40,
    head: [["Componente", "Modelo", "Precio aprox."]],
    body: tableData,
    theme: "striped",
    headStyles: { fillColor: [200, 0, 0] }
  });
  
  let finalY = doc.lastAutoTable.finalY + 10;
  doc.text(`Subtotal: $${subtotal.toLocaleString("es-MX")} MXN`, 14, finalY);
  doc.text(`Descuento (5%): -$${descuento.toLocaleString("es-MX")} MXN`, 14, finalY + 8);
  doc.text(`IVA (16%): $${iva.toLocaleString("es-MX")} MXN`, 14, finalY + 16);
  doc.setFontSize(12);
  doc.setTextColor(200, 0, 0);
  doc.text(`TOTAL: $${total.toLocaleString("es-MX")} MXN`, 14, finalY + 28);
  doc.setTextColor(0, 0, 0);
  
  const busqueda = `${cpu} ${gpu} ${ram}`.replace(/ /g, "+");
  const amazonLink = `https://www.amazon.com.mx/s?k=${busqueda}`;
  const mercadolibreLink = `https://listado.mercadolibre.com.mx/${busqueda}`;
  doc.setFontSize(8);
  doc.text("Enlaces de compra sugeridos:", 14, finalY + 42);
  doc.setTextColor(0, 0, 255);
  doc.textWithLink(`Buscar en Amazon México`, 14, finalY + 50, { url: amazonLink });
  doc.textWithLink(`Buscar en MercadoLibre México`, 14, finalY + 58, { url: mercadolibreLink });
  
  doc.save(`GamerCore_${cpu}_${gpu}.pdf`);
  // FUNCIONES MODIFICADAS:
async function iniciarSesion() {
  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;
  const res = await fetch('http://localhost:3000/api/login', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre: usuario, password })
  });
  const data = await res.json();
  if (data.success) {
    localStorage.setItem("usuarioId", data.usuarioId);
    if (data.tema) { aplicarTema(data.tema); localStorage.setItem("gc_tema", data.tema); }
    alert("Bienvenido " + usuario);
    document.getElementById("login").style.display = "none";
    document.getElementById("sistema").style.display = "flex";
    setLanguage(currentLang);
    renderHistorial();
  } else alert("Usuario o contraseña incorrectos");
}

// Asegurar que el slider llame a toggleModo
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("toggle-modo").addEventListener("change", toggleModo);
  document.getElementById("lang-es").addEventListener("click", () => setLanguage("es"));
  document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));
  document.getElementById("lang-ja").addEventListener("click", () => setLanguage("ja"));
  // Aquí también debes tener el evento para pestañas de documentación (ya lo tenías)
  setLanguage(currentLang);
  let temaGuardado = localStorage.getItem("gc_tema") || "dark";
  aplicarTema(temaGuardado);
});
}