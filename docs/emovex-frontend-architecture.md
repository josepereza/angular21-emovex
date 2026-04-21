# EMOVEX Frontend Architecture

## Objetivo

Rediseñar la presencia digital de EMOVEX con Angular 21 y SSR para transmitir:

- Fabricación nacional y solvencia técnica
- Calidad de producto y soporte postventa
- Conversión orientada a centros, clínicas y distribuidores

## Estructura propuesta

```text
src/app/
  core/
    services/
      scroll-state.service.ts
      seo.service.ts
  shared/
    components/
      hero/
      site-navbar/
  features/
    home/
      pages/
        home-page.component.ts
```

## Evolución recomendada

```text
src/app/
  core/
    services/
    guards/
    seo/
  shared/
    components/
    ui/
    models/
  features/
    home/
    catalog/
    product-detail/
    distributors/
    pro-area/
    contact/
```

## Componentes clave

- `SiteNavbarComponent`: transparente al inicio, sólida al hacer scroll, SSR-safe
- `HeroComponent`: fondo editorial, mensaje de valor, CTA y bloque visual de producto
- `HomePageComponent`: composición de home, narrativa comercial y secciones de conversión

## Librerías recomendadas

- `Bootstrap 5.3`: layout, grid, utilidades y base responsive
- `ngx-bootstrap` solo si realmente hacen falta overlays avanzados
- `@angular/platform-browser` para `Title` y `Meta`
- `@angular/ssr` para renderizado server y prerender

## UX recomendada

- Separar mensajes por audiencias: centros, distribuidores y área profesional
- Reducir el peso del menú actual y priorizar rutas de negocio
- Mantener CTA visibles en hero, zonas de validación y cierre
- Potenciar prueba social con logos, casos y beneficios cuantificables

## SEO y rendimiento

- Títulos y descripciones por ruta
- Landings específicas por familia de producto
- Imágenes modernas con formatos comprimidos
- Diferir contenido pesado no crítico
- Pre-render para rutas corporativas estables
