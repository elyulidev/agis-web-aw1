# Feature: Módulo 3 — diseño al estándar + ejemplos copy-paste + lab

Objetivo: alinear conferencias 11-14 (ES+PT) al formato lecture-blocks de las 7-10 sin tocar el contenido del texto, hacer que los ejemplos sean copy-paste funcionales vía CodeTabs (HTML/CSS/JS) y demos vivas, y crear el laboratorio del Módulo 3.
Branch: main (estrategia de entrega: commits directos a main, elegida por el usuario 2026-10-25; push a pedido del usuario). Runner: `npm run build` (tsc + vite) y `npm run format:check`. Sin test runner unitario.

## Specs

- S1: "avanzemos al módulo 3" — Módulo 3 del sitio "Modelo de Caja y Posicionamiento CSS" = conferencias 11, 12, 13, 14 (src/data/course-content.tsx:205-243).
- S2: "Quiero que mejores el diseño sin tocar el contenido" — reformatear 11-14 al estándar lecture-blocks (SectionTitle, ConceptCard, Callout, Preview, Steps, space-y-12) conservando el texto y la estructura de secciones actuales; no reescribir redacción existente.
- S3: "mira los ejemplos que tiene y que le añades lo necesario para que sea copiar y pegar (Recuerda que tenemos un componente que te coloca las pestañas HTML, CSS, JS)" — cada ejemplo debe quedar copy-pasteable usando CodeTabs (src/components/ui/code-tabs.tsx: html/css/js, pestañas disabled si faltan); añadir el HTML o CSS complementario que falte para que el código se pegue y funcione.
- S4: "y que estén funcionales" — los ejemplos clave se demostratician vivos con Preview (estilo inline scoped con prefijo por conferencia d11-, d12-, d13-, d14-).
- S5: "Vamos a hacerlo por conferencia" — una entrega/commit por conferencia, en orden 11 → 12 → 13 → 14.
- S6: "Por último crear là creamos un laboratorio de ejercicios para este módulo" — labModulo3 en src/data/laboratory-content.ts siguiendo el patrón del Módulo 2 (autónomo, starter copy-paste, resultado esperado), con ruta /laboratorio/modulo-3, link en sidebar, clave i18n y previews en expected-previews.tsx.

## Tasks

- T1 (S1-S4) conf 11 ES+PT al estándar; CodeTabs en ejemplos; demo viva especificidad/cascada. Route: inline. Commit: 4a29a7b. Assess: medium, review_due=false (under_budget), base d818b66.
- T2 (S3-S4) conf 12 ES+PT al estándar; CodeTabs; demo box model/box-sizing. Route: inline. Commit: 37db82a. Assess: medium, review_due=false (under_budget), base 4a29a7b.
- T3 (S3-S4) conf 13 ES+PT al estándar; CodeTabs; demo margin/display. Route: inline. Commit: 279afee.
- T4 (S3-S4) conf 14 ES+PT al estándar; CodeTabs; demo position/z-index. Route: inline. Commit: ee270ff. Assess slice 12-14: medium, review_due=false (under_budget), 2243 líneas.
- T5 (S6) labModulo3 + página ruta 3 + sidebar + i18n + previews. Route: inline. Commit: baf0ad9. Assess: medium, review_due=false (under_budget), 1317 líneas (base ee270ff).
- T6 (S1-S6) verificación global: npm run build, format:check, paridad ES/PT estructural. Route: inline. Commit: docs si aplica.
- T7 (S6) starters del laboratorio con pestañas de código (HTML/CSS/JS) por archivo. Route: inline. Commit: b54dac3. Assess: medium, review_due=false (under_budget), base baf0ad9.

## Log

- L1 (2026-10-25): "avanzemos al módulo 3. Quiero que mejores el diseño sin tocar el contenido, eso sí mira los ejemplos que tiene y que le añadas lo necesario para que sea copiar y pegar(Recuerda que tenemos un componente que te coloca las pestañas HTML, CSS, JS) y que estén funcionales. Vamos a hacerlo por conferencia. Por último crearíamos un laboratorio de ejercicios para este módulo"
- L2 (2026-10-25): Estrategia de delivery en main directo, elegida por el usuario de 3 opciones. Feature completada: 4a29a7b (conf 11), 37db82a (conf 12), 279afee (conf 13), ee270ff (conf 14), baf0ad9 (lab M3). Verificación final T6 OK: build pasa, Biome limpio en los 12 archivos tocados (los 8 lint preexistentes en App/sidebar no vienen de esta feature). Assess RDD por slice: medium/under_budget siempre, sin review vencida. Push queda pendiente de pedido del usuario.
- L3 (2026-10-25): "en el laboratorio en la sección del código inicial utiliza el componente que te pone HTML, CSS, JS". Reemplazada la lista de archivos starter por pestañas estilo CodeTabs: componente `StartTabs` local en laboratorio-page.tsx (labels = nombre de archivo, lenguaje inferido por extensión), aplicado a labs 1, 2 y 3 por render compartido. Corregidos 3 labels PT con sufijo "(pt:" → nombres reales PT (batalha.html, revista.html, reservas.html). Commit b54dac3; assess medium/under_budget (base baf0ad9); build y Biome OK.
