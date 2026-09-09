// Panel de navegación entre las tres fases del laboratorio.
// Cambia el iframe de la escena A-Frame activa y actualiza la ficha técnica.

const phases = {
  1: {
    title: "Fase 1 — Escena básica en A-Frame",
    items: [
      "Estructura base de un archivo HTML con la librería de A-Frame.",
      "Primitivas geométricas: a-box, a-sphere, a-cylinder, a-plane y a-sky.",
      "Arrastra dentro del visor para orbitar la cámara; usa W A S D para desplazarte."
    ],
    readout: [
      ["Archivo", "fases/fase1.html"],
      ["Entidades", "4 primitivas + cielo"],
      ["Plataformas de prueba", "Desktop / Móvil / VR / AR / Quest 3"]
    ]
  },
  2: {
    title: "Fase 2 — Modelado industrial con primitivas",
    items: [
      "Celda de manufactura: banda transportadora, tanque de almacenamiento y brazo robotizado.",
      "Jerarquías espaciales por entidad padre-hijo y escalamiento por componente.",
      "Colores diferenciados por función: estructura, transporte, almacenamiento y sensores."
    ],
    readout: [
      ["Archivo", "fases/fase2.html"],
      ["Componentes", "Banda · Tanque · Brazo robotizado"],
      ["Animaciones", "2 (traslado de pieza y giro de brazo)"]
    ]
  },
  3: {
    title: "Fase 3 — Integración de modelo CAD externo",
    items: [
      "Flujo de exportación: SolidWorks → STL → Blender (optimización) → GLB.",
      "El modelo se referencia desde models/modelo.glb mediante a-asset-item.",
      "Si el archivo no existe todavía, se muestra un marcador de referencia en su lugar."
    ],
    readout: [
      ["Archivo", "fases/fase3.html"],
      ["Formato de entrega", "GLB (glTF binario)"],
      ["Límite recomendado", "20–25 MB por archivo"]
    ]
  }
};

const frame = document.getElementById("scene-frame");
const tag = document.getElementById("viewport-tag");
const title = document.getElementById("info-title");
const list = document.getElementById("info-list");
const readout = document.getElementById("readout");
const statusPhase = document.getElementById("status-phase");
const buttons = document.querySelectorAll("#phase-nav button");

function setPhase(btn){
  const num = btn.dataset.phase;
  const src = btn.dataset.src;
  const data = phases[num];

  buttons.forEach(b => b.classList.remove("is-active"));
  btn.classList.add("is-active");

  frame.src = src;
  tag.textContent = src;
  title.textContent = data.title;
  statusPhase.textContent = `${num} / 3`;

  list.innerHTML = data.items.map(i => `<li>${i}</li>`).join("");
  readout.innerHTML = data.readout
    .map(([k, v]) => `<div class="row"><span>${k}</span><span>${v}</span></div>`)
    .join("");
}

buttons.forEach(btn => btn.addEventListener("click", () => setPhase(btn)));
