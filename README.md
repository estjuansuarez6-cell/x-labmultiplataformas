# XR Lab Multiplataforma — A-Frame (UMNG)

Guía de laboratorio: **Desarrollo de Ambientes de Realidad Extendida (XR)
Multiplataforma con A-Frame** (Realidad Virtual, Ing. Mecatrónica, UMNG).

## Novedades de esta versión

- Interfaz con el escudo de la UMNG en la barra lateral, en paleta institucional
  (azul marino + dorado) en lugar del azul corporativo genérico anterior.
- **Fase 1**: nuevo orden de primitivas (cilindro → caja → esfera), nueva paleta
  de color (terracota / verde azulado / morado) y nuevo entorno (piso e
  iluminación cálidos, niebla suave).
- **Fase 2**: el tanque se reemplazó por un **silo con tolva** (a-cylinder +
  a-cone) y el brazo robótico por una **grúa pórtico** (a-box + a-torus) con
  un carro que se desplaza sobre la viga.
- **Fase 3**: ahora carga tu pieza real `models/Cubo_v1.glb` ("N_1", exportada
  de SolidWorks), la reescala/centra automáticamente y **queda estática**
  (sin giro automático) para poder analizarla con calma moviendo la cámara.

## Estructura

```
xr-lab-v4/
├── index.html            → hub con tarjetas hacia cada fase
├── assets/umng-logo.png   → escudo de la universidad
├── css/xr-ui.css           → sistema visual compartido (barra lateral, paleta UMNG)
├── fases/
│   ├── fase1.html           → Parte A: escena básica reordenada
│   ├── fase2.html            → Parte C: silo + banda + grúa pórtico
│   └── fase3.html             → Parte D: integración de Cubo_v1.glb (con auto-ajuste)
└── models/
    ├── LEEME.txt               → instrucciones para reemplazar el modelo
    └── Cubo_v1.glb              → tu pieza "N_1" (~10 MB)
```

## Por qué la Fase 3 se veía en blanco

Tu primer archivo llegó vacío (0 KB); ya está resuelto con el que subiste
después. Ese segundo archivo sí es válido, pero es una pieza real de apenas
~2.6 cm exportada en metros — a escala 1:1 dentro de la escena era
prácticamente invisible. `fase3.html` ahora calcula la caja envolvente real
del modelo apenas termina de cargar y lo reescala/centra para que siempre se
vea a un tamaño legible, sin importar en qué unidades venga el archivo.
Si reemplazas el GLB por otro ensamblaje, este ajuste se aplica igual.

## Publicar en GitHub Pages

1. Sube esta carpeta a un repositorio público de GitHub.
2. Activa **Settings → Pages** con `Branch: main`, `Folder: /root`.
3. Prueba `index.html` y las tres fases en escritorio, móvil, modo VR, modo AR y
   en el navegador del Meta Quest 3.

## Si pruebas en tu computador antes de subirlo

Algunos navegadores bloquean la carga de archivos `.glb` locales cuando abres
`index.html` con doble clic (protocolo `file://`). Si la Fase 3 no carga el
modelo aunque el archivo esté bien, prueba a servir la carpeta con un
servidor local, por ejemplo:

```
python3 -m http.server 8080
```

y abre `http://localhost:8080` en el navegador.
