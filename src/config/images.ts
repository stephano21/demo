// Configuración de imágenes parametrizables para la landing page
export const imageConfig = {
  // Imagen principal del hero
  hero: {
    url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop',
    alt: 'Oficina ejecutiva moderna',
    width: 1200,
    height: 600
  },
  
  // Imagen del equipo
  team: {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
    alt: 'Equipo profesional trabajando',
    width: 600,
    height: 400
  },
  
  // Imagen de oficina
  office: {
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    alt: 'Oficina corporativa',
    width: 600,
    height: 400
  },
  
  // Logo de la empresa
  logo: {
    url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=100&h=100&fit=crop',
    alt: 'Logo EmpresaCorp',
    width: 100,
    height: 100
  },
  
  // Avatar del testimonio
  testimonial: {
    url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    alt: 'Carlos Rodríguez - CEO',
    width: 100,
    height: 100
  },
  
  // Imágenes adicionales para servicios
  services: {
    strategy: {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      alt: 'Estrategia empresarial',
      width: 400,
      height: 300
    },
    consulting: {
      url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      alt: 'Consultoría organizacional',
      width: 400,
      height: 300
    },
    digital: {
      url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
      alt: 'Transformación digital',
      width: 400,
      height: 300
    }
  },

  // Nuevas imágenes para Landing Page 3
  corporate: {
    // Hero más corporativo
    hero: {
      url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop',
      alt: 'Edificio corporativo moderno',
      width: 1200,
      height: 600
    },
    
    // Equipo ejecutivo
    executive: {
      url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
      alt: 'Equipo ejecutivo en reunión',
      width: 600,
      height: 400
    },
    
    // Oficina de lujo
    luxury: {
      url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop',
      alt: 'Oficina de lujo corporativa',
      width: 600,
      height: 400
    },
    
    // Reunión de negocios
    meeting: {
      url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop',
      alt: 'Reunión de negocios ejecutiva',
      width: 600,
      height: 400
    },
    
    // Análisis financiero
    finance: {
      url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
      alt: 'Análisis financiero',
      width: 400,
      height: 300
    },
    
    // Gestión de proyectos
    project: {
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      alt: 'Gestión de proyectos',
      width: 400,
      height: 300
    },
    
    // Auditoría empresarial
    audit: {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      alt: 'Auditoría empresarial',
      width: 400,
      height: 300
    },
    
    // CEO profesional
    ceo: {
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      alt: 'CEO Profesional',
      width: 100,
      height: 100
    }
  }
};

// Función helper para obtener URLs con parámetros personalizados
export const getImageUrl = (baseUrl: string, width?: number, height?: number, fit?: string) => {
  const url = new URL(baseUrl);
  if (width) url.searchParams.set('w', width.toString());
  if (height) url.searchParams.set('h', height.toString());
  if (fit) url.searchParams.set('fit', fit);
  return url.toString();
};

// Función para obtener imagen optimizada
export const getOptimizedImage = (imageKey: keyof typeof imageConfig, width?: number, height?: number) => {
  const image = imageConfig[imageKey];
  if (!image) return '';
  
  return getImageUrl(image.url, width || image.width, height || image.height, 'crop');
}; 