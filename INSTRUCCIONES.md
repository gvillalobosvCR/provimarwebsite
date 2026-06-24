# 🚢 Provimar Ship Suppliers - Instrucciones de Uso

## ✅ Proyecto Completado

Has recibido un sitio web completo y profesional para Provimar Ship Suppliers.

---

## 🌐 Acceder al Sitio

El servidor de desarrollo está corriendo en:
- **URL Local**: http://localhost:3003
- **URL de Red**: http://100.114.211.110:3003

> **Nota**: Si el puerto 3003 está ocupado, puedes usar otro puerto con: `npm run dev -- -p 3004`

---

## 📁 Estructura del Proyecto

```
provimar-website/
├── app/                    # Páginas de la aplicación
│   ├── page.tsx           # Homepage
│   ├── services/          # Página de servicios
│   ├── about/             # Página acerca de
│   ├── contact/           # Página de contacto
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Estilos globales
│
├── components/            # Componentes reutilizables
│   ├── Navbar.tsx        # Barra de navegación
│   ├── Footer.tsx        # Pie de página
│   ├── Hero.tsx          # Sección hero
│   ├── FloatingEmailButton.tsx  # Botón flotante
│   └── ...               # Otros componentes
│
└── public/               # Archivos estáticos
```

---

## 🎯 Características Principales

### 1. **Email como Contacto Principal**
- Email: **suppliers@provimarcr.com**
- Todos los botones "Request a Quote" abren el cliente de email
- Pre-llena información del buque (Nombre, IMO, Puerto, ETA, Items)

### 2. **4 Páginas Completas**
- **/** - Homepage con hero, servicios, beneficios
- **/services** - 8 servicios detallados
- **/about** - Información de la empresa
- **/contact** - Contacto y FAQ

### 3. **8 Servicios Marítimos**
1. Provisiones para Buques
2. Almacenes de Cubierta y Máquinas
3. Almacenes de Cabina
4. Equipo de Seguridad
5. Almacenes en Depósito Aduanero
6. Logística y Entrega
7. Servicios Técnicos
8. Soporte 24/7

### 4. **Cobertura de Puertos**
- Puerto Limón (Caribe)
- Puerto Caldera (Pacífico)
- Puerto Moín (Caribe)
- Golfito (Pacífico)

---

## 🚀 Comandos Útiles

### Iniciar el servidor de desarrollo
```bash
cd provimar-website
npm run dev
```

### Cambiar el puerto (si 3000 está ocupado)
```bash
npm run dev -- -p 3003
```

### Construir para producción
```bash
npm run build
```

### Iniciar en producción
```bash
npm start
```

### Limpiar caché y reinstalar
```bash
Remove-Item -Recurse -Force node_modules,.next
npm install
```

---

## 🎨 Personalización

### Cambiar el Email de Contacto

Busca y reemplaza `suppliers@provimarcr.com` en estos archivos:
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `components/FloatingEmailButton.tsx`
- `components/Hero.tsx`
- `components/CTASection.tsx`
- `app/contact/page.tsx`

### Modificar Servicios

Edita los arrays de servicios en:
- `app/services/page.tsx` - Página completa de servicios
- `components/ServicesOverview.tsx` - Vista general en homepage

### Actualizar Puertos

Modifica la información de puertos en:
- `components/PortsCoverage.tsx`
- `app/about/page.tsx`

### Cambiar Colores

Edita el tema marítimo en:
- `tailwind.config.ts` - Busca la sección `maritime` en colors

---

## 🌐 Despliegue a Producción

### Opción 1: Vercel (Recomendado - Gratis)

1. Crea una cuenta en [vercel.com](https://vercel.com)
2. Sube tu código a GitHub
3. En Vercel, haz clic en "Import Project"
4. Selecciona tu repositorio
5. ¡Despliega! (automático)

### Opción 2: Netlify

1. Crea una cuenta en [netlify.com](https://netlify.com)
2. Sube tu código a GitHub
3. Conecta tu repositorio
4. Build command: `npm run build`
5. Publish directory: `.next`

### Opción 3: Hosting Tradicional

1. Ejecuta: `npm run build`
2. Sube todos los archivos al servidor
3. Ejecuta: `npm start` en el servidor
4. Configura un proxy inverso (nginx/apache)

---

## 🐛 Solución de Problemas

### El sitio no carga / se queda en "Starting..."

**Solución 1**: Limpia la caché
```bash
Remove-Item -Recurse -Force .next
npm run dev -- -p 3003
```

**Solución 2**: Reinstala dependencias
```bash
Remove-Item -Recurse -Force node_modules
npm install
npm run dev -- -p 3003
```

### Error "Port already in use"

Usa otro puerto:
```bash
npm run dev -- -p 3004
```

### Error "Cannot find module 'autoprefixer'"

```bash
npm install autoprefixer
```

### Errores de permisos (EPERM)

1. Cierra todos los terminales
2. Cierra VS Code
3. Elimina la carpeta `.next`
4. Vuelve a abrir y ejecuta `npm run dev`

---

## 📧 Probar el Email

1. Abre el sitio en tu navegador
2. Haz clic en cualquier botón "Request a Quote"
3. Debe abrir tu cliente de email (Outlook, Gmail, etc.)
4. Verifica que el email sea: suppliers@provimarcr.com
5. Verifica que el asunto sea: "Quote Request"
6. Verifica que el cuerpo tenga los campos pre-llenados

---

## 📱 Probar Responsive

1. Abre el sitio en Chrome
2. Presiona F12 (DevTools)
3. Haz clic en el ícono de dispositivo móvil
4. Prueba diferentes tamaños:
   - iPhone
   - iPad
   - Desktop

---

## ✨ Características Especiales

### Botón Flotante de Email
- Aparece cuando haces scroll hacia abajo
- Siempre accesible en la esquina inferior derecha
- Hover para ver tooltip

### Badge 24/7
- En el footer
- Animación de pulso en el indicador verde
- Muestra disponibilidad constante

### Animaciones
- Smooth scroll
- Hover effects en tarjetas
- Transiciones suaves
- Efectos de escala en botones

---

## 📊 Métricas de Éxito

El sitio está optimizado para:
- ✅ Generar consultas por email
- ✅ Mostrar profesionalismo
- ✅ Cargar rápido
- ✅ Funcionar en móviles
- ✅ Posicionarse en buscadores (SEO)

---

## 📞 Soporte

### Documentación Adicional
- **README.md** - Documentación técnica completa
- **QUICK_START.md** - Guía de inicio rápido
- **PROJECT_SUMMARY.md** - Resumen del proyecto

### Recursos Externos
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

---

## 🎯 Próximos Pasos Recomendados

1. ✅ **Revisar el sitio** - Navega por todas las páginas
2. ✅ **Probar los CTAs** - Haz clic en "Request a Quote"
3. ✅ **Probar en móvil** - Usa DevTools
4. ⬜ **Personalizar contenido** - Ajusta textos si es necesario
5. ⬜ **Agregar imágenes reales** - Reemplaza URLs de Unsplash
6. ⬜ **Configurar dominio** - Compra y configura tu dominio
7. ⬜ **Desplegar** - Sube a Vercel o tu hosting
8. ⬜ **Configurar analytics** - Google Analytics opcional
9. ⬜ **Promocionar** - Comparte con clientes

---

## 🚢 ¡Listo para Navegar!

Tu sitio web profesional de suministros marítimos está completo y listo para recibir consultas de capitanes, agentes navieros y coordinadores logísticos.

**¡Buena suerte con Provimar Ship Suppliers!** ⚓

---

*Última actualización: 2 de abril de 2026*
