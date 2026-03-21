# Estrategia Google Ads - Partsflow Chile

## Resumen Ejecutivo

**Objetivo**: Agendar demos con dueños y jefes de venta de distribuidoras y tiendas de repuestos automotrices en Chile.
**Mercado**: Chile (foco en ciudades con alta concentración de comercio automotriz).
**Modelo**: Campaña de búsqueda (Search) como canal principal + remarketing como soporte.

---

## 1. Configuración Inicial (Paso a Paso)

### 1.1 Crear Cuenta de Google Ads
1. Ir a [ads.google.com](https://ads.google.com) y crear cuenta con email corporativo de Partsflow
2. Configurar facturación en CLP (pesos chilenos)
3. Zona horaria: Santiago, Chile (GMT-4)
4. **No aceptar la campaña "Smart" que Google sugiere por defecto** — la vamos a crear manualmente

### 1.2 Vincular Google Tag Manager (GTM)
- Ya tienen GTM integrado en el landing. Vincular el contenedor GTM con la cuenta de Google Ads
- Esto permite medir conversiones directamente desde el sitio

### 1.3 Configurar Conversiones
Definir estas acciones como conversiones en Google Ads:

| Conversión | Tipo | Valor |
|-----------|------|-------|
| **Demo agendada** (BookingModal completado) | Primaria | $350.000 CLP (valor del plan base como proxy) |
| **Click en "Solicitar Demo"** | Secundaria | $50.000 CLP |
| **Click en WhatsApp** | Secundaria | $30.000 CLP |
| **Scroll >75% del landing** | Observación | Sin valor |

### 1.4 Configurar Google Analytics 4 (GA4)
- Vincular GA4 con Google Ads para compartir audiencias y datos de conversión
- Crear audiencias de remarketing desde GA4

---

## 2. Estructura de Campañas

### Campaña 1: Búsqueda — Intención Alta (Prioridad #1)
**Objetivo**: Captar personas que ya están buscando una solución.

#### Grupo de Anuncios A: "Software Repuestos"
**Keywords:**
- `software para venta de repuestos` (concordancia de frase)
- `sistema de venta de autopartes` (concordancia de frase)
- `software repuestos automotrices` (concordancia de frase)
- `programa para vender repuestos` (concordancia de frase)
- `erp repuestos` (concordancia de frase)
- `sistema gestión repuestos chile` (concordancia de frase)

#### Grupo de Anuncios B: "Automatización / Chatbot"
**Keywords:**
- `chatbot para repuestos` (concordancia de frase)
- `automatizar ventas repuestos` (concordancia de frase)
- `chatbot whatsapp autopartes` (concordancia de frase)
- `automatización venta autopartes` (concordancia de frase)
- `bot whatsapp ventas chile` (concordancia de frase)
- `inteligencia artificial repuestos` (concordancia de frase)

#### Grupo de Anuncios C: "Problema / Dolor"
**Keywords:**
- `como vender más repuestos` (concordancia de frase)
- `mejorar ventas repuestos` (concordancia de frase)
- `responder clientes whatsapp rápido` (concordancia de frase)
- `perder ventas whatsapp` (concordancia de frase)
- `atención clientes 24/7 repuestos` (concordancia de frase)

#### Keywords Negativas (aplicar a nivel de campaña)
```
-gratis
-gratuito
-manual
-curso
-tutorial
-PDF
-descargar
-empleo
-trabajo
-mecánico
-taller mecánico
-reparación
-usado
-usados
-repuesto usado
-OLX
-Mercado Libre
-Yapo
```

### Campaña 2: Remarketing Display (Prioridad #2)
**Objetivo**: Reimpactar a quienes visitaron el landing pero no agendaron demo.

- **Audiencia**: Visitantes del sitio que no completaron conversión (últimos 30 días)
- **Formato**: Banners con mensajes diferenciados:
  - "¿Todavía perdiendo ventas por WhatsApp? Agenda tu demo"
  - "27+ empresas ya automatizan sus ventas con Partsflow"
  - "Responde en <1 min, vende 2x más. Conoce Partsflow"

### Campaña 3: Búsqueda — Marca (Prioridad #3)
**Keywords:**
- `partsflow`
- `partsflow chile`
- `parts flow repuestos`

> Protege tu marca de competidores que pujen por tu nombre.

---

## 3. Ejemplos de Anuncios (Search)

### Anuncio 1 — Enfoque en Dolor
```
Título 1: ¿Pierdes Ventas por WhatsApp?
Título 2: Partsflow Responde por Ti 24/7
Título 3: Automatiza el 80% de la Venta
Descripción 1: Tu tienda de repuestos nunca cierra. IA que identifica vehículos,
              busca códigos OEM y prepara cotizaciones automáticamente.
Descripción 2: Sin contratos de permanencia. Onboarding en 48 hrs.
              Agenda tu demo gratis hoy.
```

### Anuncio 2 — Enfoque en Resultados
```
Título 1: 2x Más Cotizaciones en 60 Días
Título 2: IA para Repuestos Automotrices
Título 3: Integración con tu ERP en 48 hrs
Descripción 1: Partsflow automatiza cotizaciones vía WhatsApp.
              Se integra con Bsale, Softland y Defontana. Sin costo por vendedor.
Descripción 2: +27 empresas confían en nosotros. Resultados desde el primer mes.
              Agenda una demo personalizada.
```

### Anuncio 3 — Enfoque en Diferenciación
```
Título 1: No Es un Chatbot Genérico
Título 2: IA Experta en Autopartes
Título 3: Tu Vendedor Nunca Descansa
Descripción 1: Partsflow entiende VINs, códigos OEM y catálogos técnicos.
              Prepara la venta, tu equipo solo cierra.
Descripción 2: Partners de Meta y Google. Respaldado por Platanus Ventures.
              Solicita tu demo sin compromiso.
```

### Extensiones de Anuncio Recomendadas
- **Sitelinks**: "Ver Precios" | "Casos de Éxito" | "Cómo Funciona" | "Blog"
- **Callouts**: "Sin Contratos" | "Onboarding en 48hrs" | "24/7" | "Desde $350.000/mes"
- **Fragmentos estructurados**: Integraciones: Bsale, Softland, Defontana, Shopify
- **Extensión de llamada**: Número de contacto directo
- **Extensión de imagen**: Screenshot del dashboard / Centro de Comando

---

## 4. Segmentación de Audiencia

### 4.1 Segmentación Geográfica
- **Ciudades prioritarias**: Santiago (RM), Valparaíso, Concepción, Antofagasta, Temuco, La Serena, Rancagua
- **Excluir**: Zonas rurales con baja concentración comercial
- **Configuración**: "Personas en esta ubicación" (NO "interesadas en esta ubicación")

### 4.2 Segmentación por Audiencia (Capas adicionales)
Agregar como **observación** (no restricción) para ajustar pujas:

| Audiencia | Tipo | Ajuste de Puja |
|-----------|------|----------------|
| In-market: Software empresarial | Google | +20% |
| In-market: Soluciones CRM | Google | +15% |
| In-market: Servicios de marketing para PYME | Google | +10% |
| Remarketing: Visitantes del sitio | Propia | +40% |
| Similar a convertidores | Google | +25% |

### 4.3 Segmentación por Dispositivo
- **Desktop**: +10% (dueños de negocio suelen investigar desde PC)
- **Mobile**: Sin ajuste (WhatsApp es mobile-first, captará tráfico relevante)
- **Tablet**: -20%

### 4.4 Segmentación por Horario
- **Lun-Vie 8:00-20:00**: Puja completa (horario laboral)
- **Lun-Vie 20:00-23:00**: -30% (aún hay actividad pero menor)
- **Sáb 9:00-14:00**: -20% (dueños revisan opciones el fin de semana)
- **Dom y madrugada**: -50% o pausar

---

## 5. Presupuesto y Plan de Escalamiento

### Fase 0: Micro-Budget / Validación (Mes 1-2) — $100.000 CLP/mes

> **Realidad con $100K**: Son ~$3.300 CLP/día. Con un CPC estimado de $1.500-2.500 CLP
> en el nicho B2B automotriz Chile, eso da **1-2 clicks por día** (~40-60 clicks/mes).
> Es poco, pero **suficiente para validar** si las keywords convierten.

| Concepto | Monto Mensual |
|----------|--------------|
| 1 sola campaña Search (ultra-focalizada) | $100.000 CLP |
| Campaña Marca | $0 (aún no necesaria) |
| Remarketing | $0 (aún no hay audiencia) |
| **Total** | **$100.000 CLP (~USD $100)** |

**Estrategia con $100K — "Francotirador":**
1. **Solo 1 grupo de anuncios** con las 5 keywords de mayor intención de compra:
   - `software para venta de repuestos`
   - `chatbot whatsapp autopartes`
   - `automatizar ventas repuestos`
   - `sistema venta autopartes chile`
   - `software repuestos automotrices`
2. **Solo concordancia de frase** (no amplia) para no desperdiciar
3. **Solo Santiago (RM)** como ubicación — concentrar donde hay más mercado
4. **Solo Lun-Vie 9:00-18:00** — horario peak de dueños/jefes buscando soluciones
5. **Puja manual de CPC** — controlar exactamente cuánto pagas por click
6. **1 solo anuncio bien trabajado** — el Anuncio 1 (enfoque en dolor)

**Meta Fase 0**: 40-60 clicks/mes, **1-2 demos agendadas/mes**. El objetivo real no es volumen, es **aprender**:
- ¿Qué keywords generan clicks?
- ¿Qué búsquedas reales hace la gente? (ver "Términos de búsqueda")
- ¿Cuánto cuesta realmente un click en este nicho?
- ¿El landing convierte tráfico pagado?

**Criterio para escalar**: Si con $100K logras al menos 1 demo y ves CTR >3%, ya tienes señal para subir presupuesto.

---

### Plan de Optimización Progresiva (Cómo ir Mejorando)

#### Semana 1-2: Aprender
- Revisar **"Términos de búsqueda"** diariamente en Google Ads
- Agregar como keywords negativas todo lo irrelevante que aparezca
- Anotar qué términos reales usa la gente (puede sorprenderte)
- Verificar que las conversiones se están trackeando

#### Semana 3-4: Ajustar
- **Pausar keywords con 20+ clicks y 0 conversiones** — no funcionan
- **Subir puja en keywords con buen CTR** — merecen más visibilidad
- **A/B testear**: Agregar una segunda variación de anuncio
- **Revisar Quality Score**: Si es <5, mejorar relevancia del anuncio vs. keyword

#### Mes 2: Decisión
- Si **0 demos**: Revisar landing page, cambiar keywords, o considerar que el canal no es el adecuado aún
- Si **1 demo**: Señal positiva. Mantener $100K y seguir optimizando
- Si **2+ demos**: Señal fuerte. Hora de escalar a Fase 1

---

### Fase 1: Testeo Serio (Mes 3-4) — $300.000-$450.000 CLP/mes
| Concepto | Monto Mensual |
|----------|--------------|
| Campaña Search (2-3 grupos de anuncios) | $350.000 CLP |
| Campaña Marca (si hay búsquedas de "partsflow") | $50.000 CLP |
| **Total** | **$400.000 CLP (~USD $400)** |

**Qué cambia vs Fase 0:**
- Agregar los 3 grupos de anuncios completos (Software, Automatización, Dolor)
- Expandir geo a Valparaíso y Concepción
- Activar horario extendido (8:00-20:00)
- Probar concordancia amplia modificada en keywords ganadoras
- Cambiar a **"Maximizar conversiones"** como estrategia de puja (si tienes >15 conversiones acumuladas)

**Meta**: 8-12 clicks/día, **4-8 demos/mes**

### Fase 2: Optimización (Mes 5-6) — $800.000 CLP/mes
| Concepto | Monto Mensual |
|----------|--------------|
| Campaña Search (optimizada con datos reales) | $600.000 CLP |
| Remarketing Display | $150.000 CLP |
| Campaña Marca | $50.000 CLP |
| **Total** | **$800.000 CLP (~USD $800)** |

**Qué cambia:**
- Activar **remarketing** (ya tendrás audiencia suficiente)
- Crear **landing page dedicada** `/demo` para mejorar conversión
- Usar **audiencias similares** basadas en visitantes convertidos
- Implementar **Target CPA** como estrategia de puja

**Meta**: 15-25 clicks/día, **8-16 demos/mes**

### Fase 3: Escala (Mes 7+) — $1.500.000+ CLP/mes
Escalar según CPA real y ROI medido. Si una demo tiene una tasa de cierre del 20% y el ticket promedio es $350.000 CLP/mes:
- **LTV estimado (12 meses)**: $4.200.000 CLP
- **Valor de una demo**: ~$840.000 CLP (20% cierre × LTV)
- **CPA objetivo máximo**: $200.000 CLP por demo (da un ROAS de 4x)
- Activar YouTube Ads, Performance Max, y keywords de competidores

---

### Ciclo de Optimización Continua (aplicar siempre)

```
Cada semana:
┌─────────────────────────────────────────────┐
│  1. MEDIR  →  Revisar métricas clave        │
│  2. LIMPIAR → Agregar keywords negativas     │
│  3. PODAR  →  Pausar lo que no convierte     │
│  4. NUTRIR →  Subir puja en lo que funciona  │
│  5. PROBAR →  Testear 1 cambio a la vez      │
└─────────────────────────────────────────────┘

Cada mes:
┌─────────────────────────────────────────────┐
│  • Calcular CPA real vs objetivo             │
│  • Decidir: mantener, subir o bajar budget   │
│  • Agregar/quitar keywords según datos       │
│  • Refrescar copy de anuncios                │
│  • Revisar competencia (¿aparecen nuevos?)   │
└─────────────────────────────────────────────┘
```

### Señales para Subir Presupuesto
- CPA por demo < $50.000 CLP → duplicar presupuesto agresivamente
- CPA entre $50.000-$100.000 CLP → subir 30-50%
- CPA entre $100.000-$150.000 CLP → mantener y optimizar
- CPA > $150.000 CLP → pausar y replantear (keywords, landing, o canal)

### Señales para Pausar/Cambiar
- CTR < 2% después de 200 impresiones → el anuncio no conecta
- 50+ clicks sin ninguna conversión → el landing o la oferta tiene problemas
- Quality Score < 4 → Google te está cobrando de más, mejorar relevancia

---

## 6. Métricas Clave a Monitorear

| Métrica | Objetivo Fase 1 | Cómo Medir |
|---------|-----------------|------------|
| **CPC (costo por click)** | < $2.500 CLP | Google Ads |
| **CTR (tasa de click)** | > 5% | Google Ads |
| **Tasa de conversión** | > 3% (demo/click) | GA4 + Google Ads |
| **CPA (costo por demo)** | < $100.000 CLP | Google Ads |
| **Demos agendadas/semana** | 2-4 | CRM / calendario |
| **Quality Score** | > 6/10 | Google Ads (por keyword) |

---

## 7. Landing Page — Optimizaciones para Google Ads

El landing actual está bien construido. Sugerencias específicas para mejorar conversión desde Ads:

### 7.1 Crear una landing page dedicada para Ads (opcional pero recomendado)
- **URL**: `/google-ads` o `/demo`
- Versión simplificada del landing con:
  - Hero directo al dolor + CTA de agendar demo
  - 3 beneficios clave (velocidad, precisión, 24/7)
  - 1 caso de éxito con métrica (ej: "Piamonte: 2x cotizaciones en 60 días")
  - Formulario de demo embebido (no modal)
  - Trust badges (Meta Partner, Google for Startups, Platanus)
- Sin navegación lateral para evitar fugas

### 7.2 Optimizaciones en el landing actual
- Asegurar que el BookingModal cargue rápido y sin errores
- Agregar UTM tracking automático para atribuir demos a campañas específicas
- A/B testear el texto del hero para tráfico pagado vs. orgánico

---

## 8. Pasos para Implementar (Checklist)

### Semana 1: Setup
- [ ] Crear cuenta de Google Ads
- [ ] Vincular GTM existente con Google Ads
- [ ] Configurar conversiones (demo agendada, click en CTA, click WhatsApp)
- [ ] Vincular GA4 con Google Ads
- [ ] Configurar facturación

### Semana 2: Campañas
- [ ] Crear Campaña Search — Intención Alta (3 grupos de anuncios)
- [ ] Crear Campaña Search — Marca
- [ ] Escribir 3 variaciones de anuncio por grupo
- [ ] Configurar extensiones de anuncio
- [ ] Agregar keywords negativas
- [ ] Configurar segmentación geográfica y horaria

### Semana 3: Lanzamiento
- [ ] Revisar Quality Score de keywords
- [ ] Activar campañas con presupuesto Fase 1
- [ ] Verificar que las conversiones se trackeen correctamente
- [ ] Monitorear diariamente los primeros 5 días

### Semana 4+: Optimización continua
- [ ] Revisar términos de búsqueda y agregar negativos
- [ ] Pausar keywords con CPC alto y baja conversión
- [ ] A/B testear variaciones de anuncios
- [ ] Ajustar pujas por dispositivo y horario según datos reales
- [ ] Activar remarketing cuando haya >500 visitantes en la audiencia

---

## 9. Errores Comunes a Evitar

1. **No usar concordancia amplia sin negativos** — quema presupuesto en búsquedas irrelevantes
2. **No enviar todo el tráfico a la home** — una landing dedicada convierte 2-3x más
3. **No optimizar para clicks sino para conversiones** — usar estrategia de puja "Maximizar conversiones" después de tener >15 conversiones/mes
4. **No ignorar el Quality Score** — afecta directamente cuánto pagas por click
5. **No cambiar anuncios antes de tener datos** — esperar mínimo 2 semanas o 100 clicks antes de optimizar
6. **No olvidar el móvil** — verificar que el landing y el BookingModal funcionen perfecto en celular

---

## 10. Próximos Pasos Avanzados (Fase 3+)

- **YouTube Ads**: Video corto mostrando el flujo de WhatsApp → IA → cotización
- **Performance Max**: Campaña multicanal automatizada una vez que haya suficientes datos de conversión
- **Customer Match**: Subir lista de clientes actuales para crear audiencias similares
- **Competidor Keywords**: Pujar por nombres de ERPs competidores (Bsale, Softland) con anuncios comparativos
