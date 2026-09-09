# Laboratorio XR Multiplataforma — A-Frame

Proyecto correspondiente a la guía **"Desarrollo de Ambientes de Realidad Extendida (XR)
Multiplataforma con A-Frame"** (Realidad Virtual, Ingeniería Mecatrónica, UMNG).

## Cómo verlo

Abre `index.html` en un navegador. El panel principal tiene tres botones — **Fase 01**,
**Fase 02** y **Fase 03** — que cargan cada escena dentro del visor sin salir de la página.

## Estructura

```
xr-lab/
├── index.html          → panel principal con navegación entre fases
├── css/style.css        → identidad visual compartida
├── js/app.js             → lógica de cambio de fase
├── fases/
│   ├── fase1.html        → Parte A: escena básica (primitivas)
│   ├── fase2.html         → Parte C: modelo industrial con primitivas
│   └── fase3.html          → Parte D: integración de modelo CAD (GLB)
└── models/
    └── LEEME.txt           → instrucciones para colocar modelo.glb
```

## Fase 3 — modelo CAD propio

`fases/fase3.html` intenta cargar `models/modelo.glb`. Si no existe, muestra
automáticamente un marcador de referencia (caja + cilindro) para que la página nunca
quede vacía. Para ver tu propio ensamblaje:

1. Exporta el ensamblaje de SolidWorks a `.stl`.
2. Impórtalo en Blender y optimiza la geometría (reduce polígonos, simplifica texturas).
3. Exporta como `.glb` y guárdalo como `models/modelo.glb`.
4. Recarga `fases/fase3.html` (o la Fase 03 desde el panel principal).

## Publicar en GitHub Pages

1. Sube esta carpeta a un repositorio público de GitHub.
2. Activa **Settings → Pages**, con `Branch: main` y `Folder: /root`.
3. GitHub generará una URL pública `https://usuario.github.io/nombre-repositorio/`.
4. Prueba la escena en escritorio, móvil, modo VR, modo AR y en el navegador del Meta Quest 3.

Recuerda mantener cualquier archivo `.glb` por debajo de 20–25 MB para garantizar
carga rápida y buen rendimiento en WebXR.
