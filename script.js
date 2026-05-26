// ===================== TRADUCCIONES COMPLETAS =====================
const translations = {
  es: {
    // Login
    loginTitle: "LOGIN GAMERCORE",
    userPlaceholder: "Usuario",
    passwordPlaceholder: "Contraseña",
    enterBtn: "ENTRAR",
    registerBtn: "REGISTRARSE",
    // Panel principal
    systemTitle: "GAMERCORE MANAGER",
    labelCPU: "CPU", labelGPU: "GPU", labelRAM: "RAM",
    labelMB: "MOTHERBOARD", labelFuente: "FUENTE", labelSSD: "SSD",
    selectCPU: "-- Seleccione un CPU --",
    selectGPU: "-- Seleccione una GPU --",
    selectRAM: "-- Seleccione una RAM --",
    selectMB: "-- Seleccione una Motherboard --",
    selectFuente: "-- Seleccione una Fuente --",
    selectSSD: "-- Seleccione un SSD --",
    // Botones panel
    recomendadorBtn: "🎯 RECOMENDAR PC",
    armarBtn: "⚙️ ARMAR PC",
    exportPdfBtn: "📄 EXPORTAR A PDF",
    documentacionBtn: "📚 Aprende más sobre el proyecto",
    manualBtn: "📖 Abrir manual completo (PDF)",
    cerrarBtn: "✖ CERRAR SISTEMA",
    // Cotización
    cotizacionTitle: "💰 COTIZACIÓN",
    cotSubtotal: "Subtotal",
    cotDescuento: "Descuento Gamer (5%)",
    cotIVA: "IVA (16%)",
    cotTotal: "TOTAL",
    // Historial
    historialTitle: "📋 HISTORIAL",
    clearHistorial: "🗑 LIMPIAR TODO",
    noHistorial: "Sin configuraciones guardadas.",
    cargarBtn: "↩ Cargar",
    // Resultado inicial
    resultadoInicio: "===== GAMERCORE MANAGER =====\n\nSelecciona los componentes\no usa el Recomendador para comenzar.",
    // Secciones resultado
    resPC: "===== PC GAMER =====",
    resFPS: "===== FPS ESTIMADOS =====",
    resSistema: "===== SISTEMA =====",
    resCompat: "===== COMPATIBILIDAD =====",
    resConsumo: "Consumo",
    resCPUTemp: "CPU Temp",
    resGPUTemp: "GPU Temp",
    resCompatOK: "COMPONENTES COMPATIBLES ✅",
    resAdvertencias: "ADVERTENCIAS:",
    // Compatibilidad live
    compatSuccess: "✅ Todos los componentes son compatibles",
    // Gama
    gamaBaja: "⚡ GAMA BAJA",
    gamaMedia: "🔵 GAMA MEDIA",
    gamaAlta: "🔥 GAMA ALTA",
    gamaExtrema: "💜 GAMA EXTREMA",
    // Modal recomendador
    recTitle: "RECOMENDADOR",
    recPregunta: "¿Para qué usarás tu PC?",
    recGaming: "Gaming", recStreaming: "Streaming", recDiseno: "Diseño", recProg: "Programación",
    recCancelar: "Cancelar",
    // Modal docs
    docsTitle: "📚 Sobre GamerCore y su creador",
    docsCerrar: "Cerrar",
    docsTabProyecto: "🔧 Proyecto", docsTabMotivo: "🎯 Motivo", docsTabCreador: "👨‍💻 Creador",
    docsTabTec: "🛠️ Tecnologías", docsTabManual: "📖 Manual", docsTabAgra: "🙏 Agradecimientos",
    docsTabLic: "⚖️ Licencia", docsTabFuturo: "🔮 Futuras mejoras",
    // Alertas
    alertSelecciona: "Selecciona todos los componentes",
    alertErrores: "⛔ ERRORES DE COMPATIBILIDAD:\n\n",
    alertCorrige: "\n\nCorrige los errores antes de continuar.",
    alertBienvenido: "Bienvenido ",
    alertLoginError: "Usuario o contraseña incorrectos",
    alertRegistroOK: "Usuario registrado correctamente",
    alertNoSesion: "No has iniciado sesión, no se guardó el historial.",
    alertLimpiarConfirm: "¿Borrar todo el historial? Esto eliminará TODAS tus builds de la base de datos.",
    alertLimpiarInfo: "Función no implementada en el backend, puedes eliminar una a una.",
    alertBorrarConfirm: "¿Eliminar esta configuración?",
    alertExportarError: "Selecciona todos los componentes antes de exportar",
    alertRecLoaded: "✅ PC recomendada para ",
    alertRecLoaded2: " cargada.\n\nPresiona ARMAR PC para ver el análisis completo.",
    // Tema
    modoClaro: "MODO CLARO", modoOscuro: "MODO OSCURO",
    // PDF
    pdfTitulo: "GamerCore Manager - Lista de compras",
    pdfGenerado: "Generado: ",
    pdfComponente: "Componente", pdfModelo: "Modelo", pdfPrecio: "Precio aprox.",
    pdfSubtotal: "Subtotal: $", pdfDesc: "Descuento (5%): -$", pdfIVA: "IVA (16%): $", pdfTotal: "TOTAL: $",
    pdfEnlaces: "Enlaces de compra sugeridos:",
    pdfAmazon: "Buscar en Amazon México", pdfML: "Buscar en MercadoLibre México",
  },
  en: {
    loginTitle: "LOGIN GAMERCORE",
    userPlaceholder: "Username",
    passwordPlaceholder: "Password",
    enterBtn: "LOGIN",
    registerBtn: "SIGN UP",
    systemTitle: "GAMERCORE MANAGER",
    labelCPU: "CPU", labelGPU: "GPU", labelRAM: "RAM",
    labelMB: "MOTHERBOARD", labelFuente: "POWER SUPPLY", labelSSD: "SSD",
    selectCPU: "-- Select a CPU --",
    selectGPU: "-- Select a GPU --",
    selectRAM: "-- Select RAM --",
    selectMB: "-- Select a Motherboard --",
    selectFuente: "-- Select a Power Supply --",
    selectSSD: "-- Select an SSD --",
    recomendadorBtn: "🎯 RECOMMEND PC",
    armarBtn: "⚙️ ASSEMBLE PC",
    exportPdfBtn: "📄 EXPORT TO PDF",
    documentacionBtn: "📚 Learn more about the project",
    manualBtn: "📖 Open full manual (PDF)",
    cerrarBtn: "✖ CLOSE SYSTEM",
    cotizacionTitle: "💰 QUOTE",
    cotSubtotal: "Subtotal",
    cotDescuento: "Gamer Discount (5%)",
    cotIVA: "VAT (16%)",
    cotTotal: "TOTAL",
    historialTitle: "📋 HISTORY",
    clearHistorial: "🗑 CLEAR ALL",
    noHistorial: "No saved configurations.",
    cargarBtn: "↩ Load",
    resultadoInicio: "===== GAMERCORE MANAGER =====\n\nSelect components\nor use the Recommender to begin.",
    resPC: "===== PC BUILD =====",
    resFPS: "===== ESTIMATED FPS =====",
    resSistema: "===== SYSTEM =====",
    resCompat: "===== COMPATIBILITY =====",
    resConsumo: "Power draw",
    resCPUTemp: "CPU Temp",
    resGPUTemp: "GPU Temp",
    resCompatOK: "ALL COMPONENTS COMPATIBLE ✅",
    resAdvertencias: "WARNINGS:",
    compatSuccess: "✅ All components are compatible",
    gamaBaja: "⚡ LOW-END",
    gamaMedia: "🔵 MID-RANGE",
    gamaAlta: "🔥 HIGH-END",
    gamaExtrema: "💜 EXTREME",
    recTitle: "RECOMMENDER",
    recPregunta: "What will you use your PC for?",
    recGaming: "Gaming", recStreaming: "Streaming", recDiseno: "Design", recProg: "Programming",
    recCancelar: "Cancel",
    docsTitle: "📚 About GamerCore and its creator",
    docsCerrar: "Close",
    docsTabProyecto: "🔧 Project", docsTabMotivo: "🎯 Purpose", docsTabCreador: "👨‍💻 Creator",
    docsTabTec: "🛠️ Technologies", docsTabManual: "📖 Manual", docsTabAgra: "🙏 Credits",
    docsTabLic: "⚖️ License", docsTabFuturo: "🔮 Future updates",
    alertSelecciona: "Select all components",
    alertErrores: "⛔ COMPATIBILITY ERRORS:\n\n",
    alertCorrige: "\n\nFix the errors before continuing.",
    alertBienvenido: "Welcome ",
    alertLoginError: "Incorrect username or password",
    alertRegistroOK: "User registered successfully",
    alertNoSesion: "You are not logged in, history was not saved.",
    alertLimpiarConfirm: "Delete all history? This will remove ALL your builds from the database.",
    alertLimpiarInfo: "Feature not implemented in backend, you can delete them one by one.",
    alertBorrarConfirm: "Delete this configuration?",
    alertExportarError: "Select all components before exporting",
    alertRecLoaded: "✅ PC recommended for ",
    alertRecLoaded2: " loaded.\n\nPress ASSEMBLE PC to see the full analysis.",
    modoClaro: "LIGHT MODE", modoOscuro: "DARK MODE",
    pdfTitulo: "GamerCore Manager - Shopping List",
    pdfGenerado: "Generated: ",
    pdfComponente: "Component", pdfModelo: "Model", pdfPrecio: "Est. Price",
    pdfSubtotal: "Subtotal: $", pdfDesc: "Discount (5%): -$", pdfIVA: "VAT (16%): $", pdfTotal: "TOTAL: $",
    pdfEnlaces: "Suggested purchase links:",
    pdfAmazon: "Search on Amazon Mexico", pdfML: "Search on MercadoLibre Mexico",
  },
  ja: {
    loginTitle: "ログイン - ゲーマーコア",
    userPlaceholder: "ユーザー名",
    passwordPlaceholder: "パスワード",
    enterBtn: "ログイン",
    registerBtn: "登録",
    systemTitle: "ゲーマーコア マネージャー",
    labelCPU: "CPU", labelGPU: "GPU", labelRAM: "RAM",
    labelMB: "マザーボード", labelFuente: "電源ユニット", labelSSD: "SSD",
    selectCPU: "-- CPUを選択 --",
    selectGPU: "-- GPUを選択 --",
    selectRAM: "-- RAMを選択 --",
    selectMB: "-- マザーボードを選択 --",
    selectFuente: "-- 電源ユニットを選択 --",
    selectSSD: "-- SSDを選択 --",
    recomendadorBtn: "🎯 PC おすすめ",
    armarBtn: "⚙️ PCを組み立てる",
    exportPdfBtn: "📄 PDFに書き出す",
    documentacionBtn: "📚 プロジェクトについて",
    manualBtn: "📖 マニュアルを開く (PDF)",
    cerrarBtn: "✖ システムを閉じる",
    cotizacionTitle: "💰 見積もり",
    cotSubtotal: "小計",
    cotDescuento: "ゲーマー割引 (5%)",
    cotIVA: "消費税 (16%)",
    cotTotal: "合計",
    historialTitle: "📋 履歴",
    clearHistorial: "🗑 すべてクリア",
    noHistorial: "保存された構成はありません。",
    cargarBtn: "↩ 読み込む",
    resultadoInicio: "===== ゲーマーコア マネージャー =====\n\nコンポーネントを選択するか\nおすすめ機能を使って始めてください。",
    resPC: "===== PC ビルド =====",
    resFPS: "===== FPS 推定値 =====",
    resSistema: "===== システム =====",
    resCompat: "===== 互換性 =====",
    resConsumo: "消費電力",
    resCPUTemp: "CPU温度",
    resGPUTemp: "GPU温度",
    resCompatOK: "すべて互換性あり ✅",
    resAdvertencias: "警告:",
    compatSuccess: "✅ すべてのコンポーネントは互換性があります",
    gamaBaja: "⚡ ローエンド",
    gamaMedia: "🔵 ミドルレンジ",
    gamaAlta: "🔥 ハイエンド",
    gamaExtrema: "💜 エクストリーム",
    recTitle: "おすすめシステム",
    recPregunta: "PCの用途を選んでください",
    recGaming: "ゲーミング", recStreaming: "配信", recDiseno: "デザイン", recProg: "プログラミング",
    recCancelar: "キャンセル",
    docsTitle: "📚 ゲーマーコアと開発者について",
    docsCerrar: "閉じる",
    docsTabProyecto: "🔧 プロジェクト", docsTabMotivo: "🎯 目的", docsTabCreador: "👨‍💻 開発者",
    docsTabTec: "🛠️ 技術", docsTabManual: "📖 マニュアル", docsTabAgra: "🙏 謝辞",
    docsTabLic: "⚖️ ライセンス", docsTabFuturo: "🔮 今後の改善",
    alertSelecciona: "すべてのコンポーネントを選択してください",
    alertErrores: "⛔ 互換性エラー:\n\n",
    alertCorrige: "\n\n続行する前にエラーを修正してください。",
    alertBienvenido: "ようこそ、",
    alertLoginError: "ユーザー名またはパスワードが間違っています",
    alertRegistroOK: "ユーザーが正常に登録されました",
    alertNoSesion: "ログインしていないため、履歴は保存されませんでした。",
    alertLimpiarConfirm: "すべての履歴を削除しますか？データベースからすべてのビルドが削除されます。",
    alertLimpiarInfo: "この機能はバックエンドに未実装です。一件ずつ削除してください。",
    alertBorrarConfirm: "この構成を削除しますか？",
    alertExportarError: "エクスポートする前にすべてのコンポーネントを選択してください",
    alertRecLoaded: "✅ ",
    alertRecLoaded2: " 向けのPCが読み込まれました。\n\n「PCを組み立てる」を押して分析を確認してください。",
    modoClaro: "ライトモード", modoOscuro: "ダークモード",
    pdfTitulo: "ゲーマーコア マネージャー - 購入リスト",
    pdfGenerado: "生成日時: ",
    pdfComponente: "コンポーネント", pdfModelo: "モデル", pdfPrecio: "目安価格",
    pdfSubtotal: "小計: $", pdfDesc: "割引 (5%): -$", pdfIVA: "消費税 (16%): $", pdfTotal: "合計: $",
    pdfEnlaces: "購入リンク:",
    pdfAmazon: "Amazonメキシコで検索", pdfML: "MercadoLibreメキシコで検索",
  }
};

let currentLang = localStorage.getItem("gc_lang") || "es";

// ===================== APLICAR IDIOMA COMPLETO =====================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("gc_lang", lang);
  const t = translations[lang];

  // ── Login ──
  document.querySelector("#login h1").innerText            = t.loginTitle;
  document.getElementById("usuario").placeholder           = t.userPlaceholder;
  document.getElementById("password").placeholder          = t.passwordPlaceholder;
  const loginBtns = document.querySelectorAll("#login button");
  loginBtns[0].innerText = t.enterBtn;
  loginBtns[1].innerText = t.registerBtn;

  // ── Panel principal ──
  document.querySelector("#sistema .panel h1").innerText   = t.systemTitle;
  document.querySelector("label[for='cpu']") && (document.querySelectorAll(".panel label")[0].innerText = t.labelCPU);
  document.querySelectorAll(".panel label")[0].innerText   = t.labelCPU;
  document.querySelectorAll(".panel label")[1].innerText   = t.labelGPU;
  document.querySelectorAll(".panel label")[2].innerText   = t.labelRAM;
  document.querySelectorAll(".panel label")[3].innerText   = t.labelMB;
  document.querySelectorAll(".panel label")[4].innerText   = t.labelFuente;
  document.querySelectorAll(".panel label")[5].innerText   = t.labelSSD;

  // ── Opciones vacías de selects ──
  document.getElementById("cpu").options[0].text    = t.selectCPU;
  document.getElementById("gpu").options[0].text    = t.selectGPU;
  document.getElementById("ram").options[0].text    = t.selectRAM;
  document.getElementById("mb").options[0].text     = t.selectMB;
  document.getElementById("fuente").options[0].text = t.selectFuente;
  document.getElementById("ssd").options[0].text    = t.selectSSD;

  // ── Botones panel ──
  const panelBtns = document.querySelectorAll(".panel button");
  panelBtns[0].innerText = t.recomendadorBtn;
  panelBtns[1].innerText = t.armarBtn;
  panelBtns[2].innerText = t.exportPdfBtn;
  panelBtns[3].innerText = t.documentacionBtn;
  panelBtns[4].innerText = t.manualBtn;
  // panelBtns[5] = cerrar sistema (se actualiza abajo)

  // ── Cotización ──
  const cotH1 = document.querySelector(".cotizacion h1");
  if (cotH1) cotH1.innerText = t.cotizacionTitle;
  const cotRows = document.querySelectorAll(".cot-row .cot-label");
  if (cotRows[0]) cotRows[0].innerText = t.cotSubtotal;
  if (cotRows[1]) cotRows[1].innerText = t.cotDescuento;
  if (cotRows[2]) cotRows[2].innerText = t.cotIVA;
  if (cotRows[3]) cotRows[3].innerText = t.cotTotal;

  // ── Historial ──
  const histH1 = document.querySelector(".historial-panel h1");
  if (histH1) histH1.innerText = t.historialTitle;
  document.querySelector(".btn-limpiar").innerHTML = t.clearHistorial;
  const noHist = document.querySelector(".no-historial");
  if (noHist) noHist.innerText = t.noHistorial;

  // ── Resultado inicial (si aún no se ha armado PC) ──
  const resDiv = document.getElementById("resultado");
  if (resDiv && resDiv.innerText.trim().startsWith("=====") && !resDiv.innerText.includes("CPU:")) {
    resDiv.innerText = t.resultadoInicio;
  }

  // ── Modal recomendador ──
  const modalRec = document.querySelector("#modal-rec .modal-box");
  if (modalRec) {
    modalRec.querySelector("h2").innerText = t.recTitle;
    modalRec.querySelector("p").innerText  = t.recPregunta;
    const usoBtns = modalRec.querySelectorAll(".uso-btn");
    usoBtns[0].innerHTML = "<span>🎮</span>" + t.recGaming;
    usoBtns[1].innerHTML = "<span>📡</span>" + t.recStreaming;
    usoBtns[2].innerHTML = "<span>🎨</span>" + t.recDiseno;
    usoBtns[3].innerHTML = "<span>💻</span>" + t.recProg;
    modalRec.querySelector(".modal-cancelar").innerText = t.recCancelar;
  }

  // ── Modal docs ──
  const modalDocs = document.querySelector("#modal-docs .modal-box");
  if (modalDocs) {
    modalDocs.querySelector("h2").innerText = t.docsTitle;
    modalDocs.querySelector(".modal-cancelar").innerText = t.docsCerrar;
    const tabBtns = modalDocs.querySelectorAll(".docs-tab-btn");
    const tabKeys = ["docsTabProyecto","docsTabMotivo","docsTabCreador","docsTabTec","docsTabManual","docsTabAgra","docsTabLic","docsTabFuturo"];
    tabBtns.forEach((btn, i) => { if (tabKeys[i]) btn.innerText = t[tabKeys[i]]; });
  }

  // ── Botón cerrar sistema ──
  const cerrarBtn = document.querySelector(".panel button:last-child");
  if (cerrarBtn) cerrarBtn.innerText = t.cerrarBtn;

  // ── Compat live (por si hay texto activo) ──
  actualizarCompatLive();

  // ── Slider de tema ──
  const tema = document.documentElement.getAttribute("data-theme");
  document.getElementById("toggle-label").innerText = tema === "dark" ? t.modoClaro : t.modoOscuro;

  // ── Botones de cargar en historial ──
  document.querySelectorAll(".btn-cargar").forEach(btn => {
    btn.innerHTML = t.cargarBtn;
  });

  // ── Badge de gama activo (si existe) ──
  const badge = document.getElementById("badge-gama");
  if (badge && badge.style.display !== "none") {
    const gamaKeys = { "gama-baja": "gamaBaja", "gama-media": "gamaMedia", "gama-alta": "gamaAlta", "gama-extrema": "gamaExtrema" };
    for (const [cls, key] of Object.entries(gamaKeys)) {
      if (badge.classList.contains(cls)) { badge.textContent = t[key]; break; }
    }
  }
}

// ===================== TEMA =====================
function aplicarTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);
  document.getElementById("toggle-modo").checked = (tema === "light");
  const t = translations[currentLang];
  document.getElementById("toggle-label").innerText = tema === "dark" ? t.modoClaro : t.modoOscuro;
}

async function toggleModo() {
  const actual = document.documentElement.getAttribute("data-theme");
  const nuevo  = actual === "dark" ? "light" : "dark";
  aplicarTema(nuevo);
  localStorage.setItem("gc_tema", nuevo);
  const usuarioId = localStorage.getItem("usuarioId");
  if (usuarioId) {
    await fetch('http://localhost:3000/api/usuarios/tema', {
      method: 'PUT', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usuarioId, tema: nuevo })
    }).catch(e => console.log("No se pudo guardar tema en BD"));
  }
}

(function () {
  const t = localStorage.getItem("gc_tema") || "dark";
  document.documentElement.setAttribute("data-theme", t);
})();

// ===================== DOM READY =====================
document.addEventListener('DOMContentLoaded', () => {
  const temaGuardado = localStorage.getItem("gc_tema") || "dark";
  aplicarTema(temaGuardado);
  document.getElementById("toggle-modo").addEventListener("change", toggleModo);
  document.getElementById("lang-es").addEventListener("click", () => setLanguage("es"));
  document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));
  document.getElementById("lang-ja").addEventListener("click", () => setLanguage("ja"));
  setLanguage(currentLang);
  document.querySelectorAll('.docs-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => activarDocsTab(btn.getAttribute('data-tab')));
  });
});

// ===================== COMPATIBILIDAD =====================
const cpuSocket = {
  "Athlon 3000G":"AM4","Ryzen 3 2200G":"AM4","Ryzen 3 3200G":"AM4","Ryzen 3 4100":"AM4",
  "Ryzen 5 3600":"AM4","Ryzen 5 4600G":"AM4","Ryzen 5 5500":"AM4","Ryzen 5 5600X":"AM4","Ryzen 7 5700X":"AM4",
  "Ryzen 7 5800X3D":"AM4","Ryzen 7 7700X":"AM5","Ryzen 7 7800X3D":"AM5","Ryzen 9 7900X":"AM5","Ryzen 9 7950X":"AM5","Ryzen 9 9950X":"AM5",
  "Intel i3 10100F":"LGA1200","Intel i3 12100F":"LGA1700",
  "Intel i5 10400F":"LGA1200","Intel i5 12400F":"LGA1700","Intel i5 13400F":"LGA1700","Intel i5 14600K":"LGA1700",
  "Intel i7 12700K":"LGA1700","Intel i7 13700K":"LGA1700","Intel i7 14700K":"LGA1700","Intel i9 13900K":"LGA1700","Intel i9 14900K":"LGA1700"
};
const mbSocket = {
  "A320M":"AM4","B450M":"AM4","B550 Gaming":"AM4","X570 AORUS":"AM4",
  "B650 Gaming Plus":"AM5","X670 AORUS Elite":"AM5",
  "H510M":"LGA1200","H610M":"LGA1700","B660M":"LGA1700","Z690 Gaming":"LGA1700","Z790 ROG STRIX":"LGA1700"
};
const mbRam = {
  "A320M":"DDR4","B450M":"DDR4","B550 Gaming":"DDR4","X570 AORUS":"DDR4",
  "B650 Gaming Plus":"DDR5","X670 AORUS Elite":"DDR5",
  "H510M":"DDR4","H610M":"DDR4","B660M":"DDR4","Z690 Gaming":"DDR4","Z790 ROG STRIX":"DDR5"
};
const gpuWatts = {
  "GT 1030":300,"GTX 1050 Ti":350,"GTX 1650":350,"GTX 1660 Super":450,
  "RTX 2060":500,"RTX 3050":450,"RTX 3060":550,"RTX 3060 Ti":600,"RTX 3070":650,
  "RTX 4060":550,"RTX 4060 Ti":600,"RTX 4070":650,"RTX 4070 Super":700,"RTX 4080":750,"RTX 4090":850,
  "RX 570":450,"RX 580":500,"RX 6400":350,
  "RX 6600":500,"RX 6700 XT":600,"RX 6750 XT":650,"RX 7600":550,
  "RX 7700 XT":650,"RX 7800 XT":700,"RX 7900 XT":750,"RX 7900 XTX":800
};
const fuenteWatts = {
  "500W":500,"550W Bronze":550,"650W Bronze":650,"750W Gold":750,
  "850W Gold":850,"1000W Platinum":1000,"1200W Titanium":1200
};
const cpuHighTDP = ["Ryzen 9 7900X","Ryzen 9 7950X","Ryzen 9 9950X","Intel i9 13900K","Intel i9 14900K","Intel i7 14700K"];

function verificarCompatibilidad(cpu, gpu, ram, mb, fuente) {
  let errores = [], advertencias = [];
  if (cpu && mb) {
    let sc = cpuSocket[cpu], sm = mbSocket[mb];
    if (sc && sm && sc !== sm) errores.push("⛔ Socket incompatible: " + cpu + " → " + sc + " / " + mb + " → " + sm);
  }
  if (ram && mb) {
    let rt = ram.includes("DDR5") ? "DDR5" : "DDR4", mt = mbRam[mb];
    if (mt && rt !== mt) errores.push("⛔ RAM incompatible: " + mb + " → " + mt + " / " + rt + " seleccionada");
    let sm = mbSocket[mb];
    if (rt === "DDR5" && (sm === "AM4" || sm === "LGA1200")) errores.push("⛔ DDR5 no compatible con AM4/LGA1200");
  }
  if (gpu && fuente) {
    let wg = gpuWatts[gpu] || 0, wf = fuenteWatts[fuente] || 0, wn = wg + (cpuHighTDP.includes(cpu) ? 100 : 50);
    if (wf < wn) errores.push("⛔ " + translations[currentLang].labelFuente + " insuficiente: " + gpu + " ~" + wn + "W / " + wf + "W");
    else if (wf < wn + 100) advertencias.push("⚠️ " + translations[currentLang].labelFuente + " ajustada: más margen para " + gpu);
  }
  if (cpu && gpu) { let c = detectarCuello(cpu, gpu); if (c) advertencias.push("⚠️ " + c); }
  if (ram && (ram.startsWith("4GB") || ram.startsWith("8GB"))) advertencias.push("⚠️ RAM < 16GB");
  return { errores, advertencias };
}
function detectarCuello(cpu, gpu) {
  const gg = {"GT 1030":1,"GTX 1050 Ti":2,"GTX 1650":2,"GTX 1660 Super":3,"RTX 2060":3,"RTX 3050":3,"RTX 3060":4,"RTX 3060 Ti":4,"RTX 3070":5,"RTX 4060":4,"RTX 4060 Ti":5,"RTX 4070":5,"RTX 4070 Super":6,"RTX 4080":7,"RTX 4090":8,"RX 570":2,"RX 580":3,"RX 6400":2,"RX 6600":3,"RX 6700 XT":4,"RX 6750 XT":5,"RX 7600":4,"RX 7700 XT":5,"RX 7800 XT":5,"RX 7900 XT":6,"RX 7900 XTX":7};
  const cg = {"Athlon 3000G":1,"Ryzen 3 2200G":1,"Ryzen 3 3200G":1,"Ryzen 3 4100":2,"Ryzen 5 3600":3,"Ryzen 5 4600G":3,"Ryzen 5 5500":3,"Ryzen 5 5600X":4,"Ryzen 7 5700X":5,"Ryzen 7 5800X3D":6,"Ryzen 7 7700X":5,"Ryzen 7 7800X3D":7,"Ryzen 9 7900X":6,"Ryzen 9 7950X":7,"Ryzen 9 9950X":8,"Intel i3 10100F":2,"Intel i3 12100F":3,"Intel i5 10400F":3,"Intel i5 12400F":4,"Intel i5 13400F":4,"Intel i5 14600K":5,"Intel i7 12700K":5,"Intel i7 13700K":6,"Intel i7 14700K":6,"Intel i9 13900K":7,"Intel i9 14900K":7};
  let gc = cg[cpu] || 3, gpuN = gg[gpu] || 3;
  if (gpuN - gc >= 3) return "CPU bottleneck possible";
  if (gc - gpuN >= 3) return "Oversized CPU";
  return null;
}
function actualizarCompatLive() {
  let cpu = v("cpu"), gpu = v("gpu"), ram = v("ram"), mb = v("mb"), fuente = v("fuente");
  let div = document.getElementById("compat-live");
  if (!cpu && !gpu && !ram && !mb && !fuente) { div.innerHTML = ""; return; }
  let { errores, advertencias } = verificarCompatibilidad(cpu, gpu, ram, mb, fuente);
  let html = "";
  errores.forEach(e => html += '<div class="compat-error">' + e + '</div>');
  advertencias.forEach(a => html += '<div class="compat-warn">' + a + '</div>');
  if (!errores.length && !advertencias.length && cpu && gpu && ram && mb && fuente)
    html = '<div class="compat-ok">' + translations[currentLang].compatSuccess + '</div>';
  div.innerHTML = html;
}
["cpu","gpu","ram","mb","fuente","ssd"].forEach(id =>
  document.getElementById(id).addEventListener("change", actualizarCompatLive)
);

// ===================== GAMA =====================
function calcularGama(cpu, gpu) {
  const cg = {"Athlon 3000G":1,"Ryzen 3 2200G":1,"Ryzen 3 3200G":1,"Ryzen 3 4100":2,"Ryzen 5 3600":3,"Ryzen 5 4600G":3,"Ryzen 5 5500":3,"Ryzen 5 5600X":4,"Ryzen 7 5700X":5,"Ryzen 7 5800X3D":6,"Ryzen 7 7700X":5,"Ryzen 7 7800X3D":7,"Ryzen 9 7900X":6,"Ryzen 9 7950X":7,"Ryzen 9 9950X":8,"Intel i3 10100F":2,"Intel i3 12100F":3,"Intel i5 10400F":3,"Intel i5 12400F":4,"Intel i5 13400F":4,"Intel i5 14600K":5,"Intel i7 12700K":5,"Intel i7 13700K":6,"Intel i7 14700K":6,"Intel i9 13900K":7,"Intel i9 14900K":7};
  const gg = {"GT 1030":1,"GTX 1050 Ti":2,"GTX 1650":2,"GTX 1660 Super":3,"RTX 2060":3,"RTX 3050":3,"RTX 3060":4,"RTX 3060 Ti":4,"RTX 3070":5,"RTX 4060":4,"RTX 4060 Ti":5,"RTX 4070":5,"RTX 4070 Super":6,"RTX 4080":7,"RTX 4090":8,"RX 570":2,"RX 580":3,"RX 6400":2,"RX 6600":3,"RX 6700 XT":4,"RX 6750 XT":5,"RX 7600":4,"RX 7700 XT":5,"RX 7800 XT":5,"RX 7900 XT":6,"RX 7900 XTX":7};
  let score = Math.round(((cg[cpu] || 3) + (gg[gpu] || 3)) / 2);
  const t = translations[currentLang];
  if (score <= 2) return { label: t.gamaBaja,    cls: "gama-baja" };
  if (score <= 4) return { label: t.gamaMedia,   cls: "gama-media" };
  if (score <= 6) return { label: t.gamaAlta,    cls: "gama-alta" };
                  return { label: t.gamaExtrema, cls: "gama-extrema" };
}

// ===================== COTIZACIÓN =====================
function mostrarCotizacion(precioBase) {
  let subtotal   = precioBase;
  let descuento  = Math.round(subtotal * 0.05);
  let subConDesc = subtotal - descuento;
  let iva        = Math.round(subConDesc * 0.16);
  let total      = subConDesc + iva;
  document.getElementById("cot-sub").textContent   = "$" + subtotal.toLocaleString("es-MX")   + " MXN";
  document.getElementById("cot-desc").textContent  = "- $" + descuento.toLocaleString("es-MX") + " MXN";
  document.getElementById("cot-iva").textContent   = "+ $" + iva.toLocaleString("es-MX")       + " MXN";
  document.getElementById("cot-total").textContent = "$" + total.toLocaleString("es-MX")       + " MXN";
  document.getElementById("cotizacion").style.display = "block";
  return total;
}

// ===================== RECOMENDADOR =====================
const recomendaciones = {
  gaming:       { cpu:"Ryzen 7 5800X3D", gpu:"RTX 4070",       ram:"32GB DDR4 3600MHz", mb:"X570 AORUS",       fuente:"850W Gold",      ssd:"WD Black SN850X 2TB" },
  streaming:    { cpu:"Intel i7 13700K", gpu:"RTX 4060 Ti",    ram:"32GB DDR4 3600MHz", mb:"Z690 Gaming",      fuente:"750W Gold",      ssd:"Samsung 980 PRO 1TB" },
  diseno:       { cpu:"Ryzen 9 7900X",   gpu:"RTX 4070 Super", ram:"64GB DDR5 6000MHz", mb:"X670 AORUS Elite", fuente:"1000W Platinum", ssd:"Samsung 990 PRO 4TB" },
  programacion: { cpu:"Intel i9 14900K", gpu:"RTX 4060",       ram:"64GB DDR5 6000MHz", mb:"Z790 ROG STRIX",   fuente:"850W Gold",      ssd:"Samsung 990 PRO 4TB" }
};
function abrirModal()  { document.getElementById("modal-rec").classList.add("activo"); }
function cerrarModal() { document.getElementById("modal-rec").classList.remove("activo"); }
function recomendarPara(uso) {
  cerrarModal();
  const r = recomendaciones[uso];
  setSelectValue("cpu", r.cpu); setSelectValue("gpu", r.gpu); setSelectValue("ram", r.ram);
  setSelectValue("mb", r.mb);   setSelectValue("fuente", r.fuente); setSelectValue("ssd", r.ssd);
  actualizarCompatLive();
  const t = translations[currentLang];
  alert(t.alertRecLoaded + uso.toUpperCase() + t.alertRecLoaded2);
}

// ===================== ARMAR PC =====================
function v(id) { return document.getElementById(id).value; }

async function armarPC() {
  const t   = translations[currentLang];
  let cpu = v("cpu"), gpu = v("gpu"), ram = v("ram"), mb = v("mb"), fuente = v("fuente"), ssd = v("ssd");
  if (!cpu || !gpu || !ram || !mb || !fuente || !ssd) { alert(t.alertSelecciona); return; }
  let { errores, advertencias } = verificarCompatibilidad(cpu, gpu, ram, mb, fuente);
  if (errores.length) { alert(t.alertErrores + errores.join("\n") + t.alertCorrige); return; }

  let precioBase = Math.floor(Math.random() * 30000) + 10000;
  let consumo    = Math.floor(Math.random() * 500)   + 200;
  let valorant   = Math.floor(Math.random() * 250)   + 120;
  let warzone    = Math.floor(Math.random() * 120)   + 60;
  let fortnite   = Math.floor(Math.random() * 180)   + 90;
  let tempCPU    = Math.floor(Math.random() * 10)    + 60;
  let tempGPU    = Math.floor(Math.random() * 10)    + 70;

  let gama  = calcularGama(cpu, gpu);
  let badge = document.getElementById("badge-gama");
  badge.textContent   = gama.label;
  badge.className     = "badge-gama " + gama.cls;
  badge.style.display = "block";

  let totalFinal  = mostrarCotizacion(precioBase);
  let compatTexto = advertencias.length === 0
    ? t.resCompatOK
    : t.resAdvertencias + "\n" + advertencias.join("\n");

  document.getElementById("resultado").innerText =
`${t.resPC}

CPU:       ${cpu}
GPU:       ${gpu}
RAM:       ${ram}
MB:        ${mb}
${t.labelFuente}:    ${fuente}
SSD:       ${ssd}

${t.resFPS}

Valorant:  ${valorant} FPS
Warzone:   ${warzone} FPS
Fortnite:  ${fortnite} FPS

${t.resSistema}

${t.resConsumo}:   ${consumo}W
${t.resCPUTemp}:  ${tempCPU}°C
${t.resGPUTemp}:  ${tempGPU}°C

${t.resCompat}

${compatTexto}`;

  const usuarioId = localStorage.getItem("usuarioId");
  if (usuarioId) {
    await fetch('http://localhost:3000/api/builds', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usuarioId, build: { cpu, gpu, ram, mb, fuente, ssd,
        precio: totalFinal, gama: gama.label, valorant, warzone, fortnite, advertencias
      }})
    });
    renderHistorial();
  } else {
    alert(t.alertNoSesion);
  }
}

// ===================== HISTORIAL =====================
async function renderHistorial() {
  const usuarioId = localStorage.getItem("usuarioId");
  if (!usuarioId) return;
  const t      = translations[currentLang];
  const res    = await fetch(`http://localhost:3000/api/builds/${usuarioId}`);
  const builds = await res.json();
  const div    = document.getElementById("historial-lista");
  if (!builds.length) { div.innerHTML = `<p class="no-historial">${t.noHistorial}</p>`; return; }
  div.innerHTML = builds.map((build, idx) => `
    <div class="historial-item">
      <div class="h-title">PC #${idx + 1} ${build.gama ? '<span style="font-size:10px;color:#aaa;">' + build.gama + '</span>' : ''}</div>
      <div class="h-fecha">${new Date(build.fecha).toLocaleString("es-MX")}</div>
      <div class="h-comp">
        CPU: ${build.cpu}<br>GPU: ${build.gpu}<br>RAM: ${build.ram}<br>
        <span style="color:#ff6666;">$${Number(build.precio_total).toLocaleString("es-MX")} MXN</span><br>
        <span style="color:#44ff88;">Val:${build.fps_valorant} WZ:${build.fps_warzone} FN:${build.fps_fortnite} fps</span>
        ${build.advertencias ? '<br><span style="color:#ffaa00;">⚠️ ' + (currentLang === 'ja' ? '警告あり' : currentLang === 'en' ? 'Warnings' : 'Advertencias') + '</span>' : ''}
      </div>
      <div class="historial-btns">
        <button class="btn-cargar" onclick="cargarConfig(${build.id})">${t.cargarBtn}</button>
        <button class="btn-borrar" onclick="borrarConfig(${build.id})">🗑</button>
      </div>
    </div>
  `).join("");
}
async function cargarConfig(buildId) {
  const usuarioId = localStorage.getItem("usuarioId");
  if (!usuarioId) return;
  const res    = await fetch(`http://localhost:3000/api/builds/${usuarioId}`);
  const builds = await res.json();
  const build  = builds.find(b => b.id == buildId);
  if (!build) return;
  setSelectValue("cpu", build.cpu);       setSelectValue("gpu", build.gpu);
  setSelectValue("ram", build.ram);       setSelectValue("mb", build.motherboard);
  setSelectValue("fuente", build.fuente); setSelectValue("ssd", build.ssd);
  actualizarCompatLive();
}
async function borrarConfig(buildId) {
  const t = translations[currentLang];
  if (!confirm(t.alertBorrarConfirm)) return;
  await fetch(`http://localhost:3000/api/builds/${buildId}`, { method: 'DELETE' });
  renderHistorial();
}
function limpiarHistorial() {
  const t = translations[currentLang];
  if (confirm(t.alertLimpiarConfirm)) alert(t.alertLimpiarInfo);
}
function setSelectValue(id, val) {
  let s = document.getElementById(id);
  for (let o of s.options) { if (o.text === val) { s.value = o.value; return; } }
}

// ===================== LOGIN / REGISTRO =====================
async function registrarUsuario() {
  const t  = translations[currentLang];
  let nu   = prompt(t.userPlaceholder);   if (!nu) return;
  let np   = prompt(t.passwordPlaceholder); if (!np) return;
  const res  = await fetch('http://localhost:3000/api/register', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre: nu, password: np })
  });
  const data = await res.json();
  alert(data.success ? t.alertRegistroOK : "Error: " + data.error);
}
async function iniciarSesion() {
  const t        = translations[currentLang];
  const usuario  = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;
  const res  = await fetch('http://localhost:3000/api/login', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre: usuario, password })
  });
  const data = await res.json();
  if (data.success) {
    localStorage.setItem("usuarioId", data.usuarioId);
    if (data.tema) { aplicarTema(data.tema); localStorage.setItem("gc_tema", data.tema); }
    alert(t.alertBienvenido + usuario);
    document.getElementById("login").style.display   = "none";
    document.getElementById("sistema").style.display = "flex";
    setLanguage(currentLang);
    renderHistorial();
  } else {
    alert(t.alertLoginError);
  }
}
function cerrarSistema() { location.reload(); }

// ===================== DOCUMENTACIÓN =====================
function abrirModalDocs()  { document.getElementById("modal-docs").classList.add("activo"); }
function cerrarModalDocs() { document.getElementById("modal-docs").classList.remove("activo"); }
function activarDocsTab(tabId) {
  document.querySelectorAll('.docs-panel').forEach(p => p.classList.remove('activo'));
  document.querySelectorAll('.docs-tab-btn').forEach(b => b.classList.remove('activo'));
  document.getElementById(`tab-${tabId}`).classList.add('activo');
  document.querySelector(`.docs-tab-btn[data-tab="${tabId}"]`).classList.add('activo');
}

// ===================== ABRIR MANUAL PDF =====================
function abrirManualPDF() {
  window.open('Documentacion.pdf', '_blank');
}

// ===================== EXPORTAR PDF =====================
async function exportarPDF() {
  const t   = translations[currentLang];
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const cpu = v("cpu"), gpu = v("gpu"), ram = v("ram"), mb = v("mb"), fuente = v("fuente"), ssd = v("ssd");
  if (!cpu || !gpu || !ram || !mb || !fuente || !ssd) { alert(t.alertExportarError); return; }

  const components = [
    { nombre: "CPU",             valor: cpu,    precio: Math.floor(Math.random() * 8000)  + 2000 },
    { nombre: "GPU",             valor: gpu,    precio: Math.floor(Math.random() * 15000) + 3000 },
    { nombre: t.labelRAM,        valor: ram,    precio: Math.floor(Math.random() * 4000)  + 1000 },
    { nombre: t.labelMB,         valor: mb,     precio: Math.floor(Math.random() * 5000)  + 1500 },
    { nombre: t.labelFuente,     valor: fuente, precio: Math.floor(Math.random() * 3000)  + 800  },
    { nombre: "SSD",             valor: ssd,    precio: Math.floor(Math.random() * 2500)  + 500  }
  ];
  const subtotal  = components.reduce((s, c) => s + c.precio, 0);
  const descuento = Math.round(subtotal * 0.05);
  const iva       = Math.round((subtotal - descuento) * 0.16);
  const total     = subtotal - descuento + iva;

  doc.setFontSize(18);
  doc.text(t.pdfTitulo, 14, 20);
  doc.setFontSize(10);
  doc.text(t.pdfGenerado + new Date().toLocaleString(), 14, 30);

  doc.autoTable({
    startY: 40,
    head: [[t.pdfComponente, t.pdfModelo, t.pdfPrecio]],
    body: components.map(c => [c.nombre, c.valor, "$" + c.precio.toLocaleString("es-MX") + " MXN"]),
    theme: "striped",
    headStyles: { fillColor: [200, 0, 0] }
  });

  let finalY = doc.lastAutoTable.finalY + 10;
  doc.setFontSize(10); doc.setTextColor(0, 0, 0);
  doc.text(t.pdfSubtotal + subtotal.toLocaleString("es-MX") + " MXN",  14, finalY);
  doc.text(t.pdfDesc     + descuento.toLocaleString("es-MX") + " MXN", 14, finalY + 8);
  doc.text(t.pdfIVA      + iva.toLocaleString("es-MX") + " MXN",       14, finalY + 16);
  doc.setFontSize(12); doc.setTextColor(200, 0, 0);
  doc.text(t.pdfTotal    + total.toLocaleString("es-MX") + " MXN",     14, finalY + 28);
  doc.setTextColor(0, 0, 0);

  const busqueda = `${cpu} ${gpu} ${ram}`.replace(/ /g, "+");
  doc.setFontSize(8);
  doc.text(t.pdfEnlaces, 14, finalY + 42);
  doc.setTextColor(0, 0, 255);
  doc.textWithLink(t.pdfAmazon, 14, finalY + 50, { url: `https://www.amazon.com.mx/s?k=${busqueda}` });
  doc.textWithLink(t.pdfML,     14, finalY + 58, { url: `https://listado.mercadolibre.com.mx/${busqueda}` });

  doc.save(`GamerCore_${cpu}_${gpu}.pdf`);
}
