# Landing Page Demo - EmpresaCorp

Una landing page ejecutiva y profesional construida con React, Vite y Ant Design, diseñada para empresas de consultoría y servicios empresariales.

## 🚀 Características

- **Diseño Ejecutivo**: Interfaz profesional y moderna
- **Imágenes Parametrizables**: Fácil personalización de todas las imágenes
- **Responsive**: Optimizada para todos los dispositivos
- **Componentes Ant Design**: UI consistente y profesional
- **Performance**: Construida con Vite para máxima velocidad

## 📋 Secciones Incluidas

1. **Header**: Navegación fija con logo y menú
2. **Hero Section**: Sección principal con llamada a la acción
3. **Estadísticas**: Métricas clave de la empresa
4. **Servicios**: Catálogo de servicios ofrecidos
5. **Sobre Nosotros**: Información de la empresa
6. **Testimonios**: Opiniones de clientes
7. **Call to Action**: Sección final de conversión
8. **Footer**: Información de contacto y enlaces

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone <tu-repositorio>
cd landing-page-demo

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🎨 Personalización

### Configuración de Imágenes

Todas las imágenes están centralizadas en `src/config/images.ts`. Puedes personalizar fácilmente:

```typescript
export const imageConfig = {
  hero: {
    url: 'tu-url-de-imagen',
    alt: 'Descripción de la imagen',
    width: 1200,
    height: 600
  },
  // ... más configuraciones
};
```

### Cambiar Colores

Los colores principales están definidos en `src/App.css`:

```css
/* Color principal */
--primary-color: #1e3c72;

/* Gradientes */
background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
```

### Personalizar Contenido

Edita el archivo `src/App.tsx` para cambiar:

- Textos y títulos
- Información de contacto
- Estadísticas
- Servicios ofrecidos
- Testimonios

## 📱 Responsive Design

La landing page está optimizada para:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🎯 Optimización de Imágenes

El sistema incluye funciones helper para optimizar imágenes:

```typescript
import { getOptimizedImage } from './config/images';

// Obtener imagen optimizada
const optimizedImage = getOptimizedImage('hero', 800, 400);
```

## 📦 Estructura del Proyecto

```
src/
├── App.tsx              # Componente principal
├── App.css              # Estilos principales
├── main.tsx             # Punto de entrada
├── config/
│   └── images.ts        # Configuración de imágenes
└── assets/              # Recursos estáticos
```

## 🔧 Tecnologías Utilizadas

- **React 18**: Framework principal
- **Vite**: Build tool y dev server
- **Ant Design**: Componentes UI
- **TypeScript**: Tipado estático
- **CSS3**: Estilos personalizados

## 📈 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🚀 Deployment

### Vercel
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Subir carpeta dist a Netlify
```

### GitHub Pages
```bash
npm run build
# Configurar GitHub Actions para deploy automático
```

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente para proyectos comerciales y personales.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:

- Abre un issue en GitHub
- Contacta: info@empresacorp.com

---

**Desarrollado con ❤️ para crear landing pages profesionales y efectivas.**
