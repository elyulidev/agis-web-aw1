# Módulo 4 · Conferencias 15-18

Objetivo: alzar conferencias 15-18 (Estilos Visuales CSS y Responsive Básico) al estándar del módulo 3.
Branch: main (estrategia elegida por usuario en módulo 3). Test runner: npm run build + biome format:check.

## Specs

- S1: "modulo 4. Analiza el contenido y diseño de cada conferencia y mejoremos una a una." — módulo 4 = lectures 15-18 (src/data/course-content.tsx:246-281): Colores/Unidades/Variables, Fondos/Degradados, Transiciones/Transformaciones 2D, Responsive/Media Queries.
- S2: estándar módulo 3 heredado, quote de su S7: "Los ejemplos de las previsualizaciones de las conferencias no están fidedignos con lo que está en el código... el texto visible de la preview debe ser el del snippet actual, y todo estilo con efecto visible que la preview muestre debe existir en el `css=`, salvo anotaciones puras (ej. outline naranja del margin) que el label explica." — aplicar a TODA demo nuevas de 15-18.
- S3: modalidad conf 14 aprobada: componente Preview local (caja dashed, label uppercase, text-gray-800 dark:text-gray-200) + `<style>` inline con clases namespaced, inmediatamente seguido del CodeTabs espejo del preview.
- S4: paridad estructural ES/PT: mismas secciones/demos, clases PT en portugués, sin artefactos de copia (solo bugs identificados: pt/15:68 `не mudам`, pt/15:197, pt/18:215 `a continuación`, pt/18:387/396 `por ejemplo`).
- S5: modo oscuro: toda preview con fondo claro propio lleva color de texto explícito (#1f2937) y contenedor que no herede texto claro ilegible.
- S6: no se enseña menos contenido: solo se agrega/repara; nada de teoría se elimina sin pedido explícito del usuario.
- S7: verificación por tarea: npm run build y format:check sin errores nuevos; commit conv estilo del repo (sin acentos).

## Tasks

- T1 (S1-S5) conf 15 ES+PT: con agentes previa cero demos → agregar Previews + CodeTabs funcionales (formato color, unidades, variables); bug PT cyrillico conference 15. Route: inline. Commit: 7bb6db1. Assess: medium, review_due=false (under_budget), base 0315e6a.
- T2 (S1-S5) conf 16 ES+PT: demos de background (repeat/position/size), shorthand, linear/radial-gradient con Preview+CodeTabs. Route: inline. Commit: 15b039f.
- T3 (S1-S5) conf 17 ES+PT: demos hover/transición y transform con Preview real (hover activo en preview). Route: inline. Commit: 1c8f45b.
- T4 (S1-S5) conf 18 ES+PT: fidelidad Bento (clases/breakpoints del Resultado Final != pasos enseñados), dark mode del demo, img externa; PT sin traducir (3 puntos). Route: inline. Commit: cdae710.
- T5 (S7) verificación global: build + format + paridad ES/PT 15-18. Route: inline. Commit: 742c758.

## Log

- L1 (2026-11-02): "modulo 4. Analiza el contenido y diseño de cada conferencia y mejoremos una a una."
- L2 (2026-11-02): análisis por subagente: 15-18 solo CodeBlock estáticos (0 Preview/CodeTabs/Callout); sin fidelidad posible con 15-17 demo de Bento único con desfasaje grave (clases `.bento-grid-final` max-width ≠ pasos `.grid` min-width; height 1000px; gaps distintos) y dark mode del propio demo sin contraste; bugs PT listados en S4. Demo de conf 18 usa `<img>` con URL externa Vercel blob (es:218).
- L3 (2026-11-02): modus: una conferencia por ronda, inline como módulo 3, usuario revisa entre rondas; commit por conferencia; se asume mismo estándar duplicado: completar S2-S5 con demos de estilo idénticas en ES y PT.
- L4 (2026-11-02): T4 — Bento reescrito con origen único: demo usa las MISMAS áreas y breakpoints min-width de los pasos (base 1 col, 750 tableta, 1000 escritorio), clases d18- namespaced + CodeTabs espejo; color #1f2937 en items (dark mode legible); img pasa a ruta absoluta /conf18/... (sin blob Vercel; el src relativo roto se debía a ruta anidada /conferencia/:id sin <base>); PT 387/396 traducidos. T5 — verificación global: build OK, biome OK, paridad ES/PT idéntica en Preview/CodeTabs/SectionTitle/Subhead/Code; único <code> crudo restante está dentro de una plantilla html de CodeTabs (15), correcto.
