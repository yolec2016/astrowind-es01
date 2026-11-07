const INTROS: Record<string, string> = {
  'hervidores eléctricos':
    'Artículos sobre hervidores eléctricos OEM: materiales, capacidad, termostato, certificaciones y criterios de compra para importadores y marcas privadas.',
  'hervidores eléctricos oem':
    'Guías sobre fabricación OEM de hervidores eléctricos: personalización, MOQ, control de calidad y desarrollo de marca propia con fábrica china.',
  'oem y fabricación':
    'Cómo funciona la fabricación OEM y ODM de pequeños electrodomésticos: desarrollo de producto, moldes, muestras y producción en fábrica china.',
  'importación china':
    'Importar pequeños electrodomésticos desde China: proveedores, incoterms, transporte marítimo, aduanas y planificación de compras.',
  'tendencias de producto':
    'Tendencias del mercado de pequeños electrodomésticos y qué categorías están ganando demanda en Europa y América Latina.',
  'café profesional oem':
    'Equipamiento de café con marca propia: hervidores de cuello de cisne, control de temperatura y criterios de compra para HORECA.',
  'fabricantes china': 'Cómo identificar y evaluar fabricantes chinos de electrodomésticos antes de firmar un pedido.',
  'proveedores china':
    'Selección de proveedores chinos: verificación, muestras, capacidad de producción y señales de riesgo.',
  'oem y private label': 'Diferencias entre OEM y private label, y cómo elegir el modelo adecuado para su marca.',
  'oem y marca propia':
    'Cómo desarrollar una marca propia de electrodomésticos con fabricación OEM y control de calidad en origen.',
  'pequeños electrodomésticos':
    'Guías generales sobre pequeños electrodomésticos: categorías, mercados, certificaciones y criterios de importación.',
  'control de calidad en china':
    'Control de calidad en fábricas chinas: inspecciones, criterios AQL, pruebas de laboratorio y documentación.',
  'guía de compra b2b':
    'Guías de compra para importadores B2B: cómo evaluar proveedores, negociar precios y evitar errores habituales.',
  'guía de compras b2b':
    'Guías de compra para importadores B2B: cómo evaluar proveedores, negociar precios y evitar errores habituales.',
  'oem electrodomésticos':
    'Fabricación OEM de electrodomésticos: personalización, desarrollo de producto y producción por lotes.',
  'oem y desarrollo de producto':
    'Desarrollo de producto con fábrica china: prototipos, moldes, validación y plazos reales.',
  'certificaciones de exportación':
    'Certificaciones para exportar electrodomésticos: CE, RoHS, CB, LFGB, ETL y requisitos por mercado.',
  certificaciones:
    'Certificaciones de producto y de fábrica: qué exige cada mercado y cómo se tramitan antes de la producción.',
  'auditoría de proveedores en china':
    'Auditoría de fábrica en China: qué revisar, cómo prepararla y qué documentos exigir al proveedor.',
  'oem odm china': 'OEM y ODM con fábricas chinas: diferencias, costes, propiedad del molde y plazos de desarrollo.',
  'selección de proveedores':
    'Cómo seleccionar proveedores de electrodomésticos: criterios técnicos, comerciales y de riesgo.',
  'café profesional':
    'Equipamiento profesional de café: hervidores, control de temperatura y compra para cafeterías y tostadores.',
  'inspección de envío':
    'Inspección antes del envío: qué se comprueba, cuándo se hace y cómo evitar lotes defectuosos.',
  'hospitality equipment':
    'Equipamiento para hotelería: hervidores y pequeños electrodomésticos para habitaciones y servicio de habitaciones.',
  horeca: 'Equipamiento HORECA: criterios de compra y mantenimiento de pequeños electrodomésticos de uso intensivo.',
  'oem y sourcing': 'Sourcing y fabricación OEM: cómo encontrar, evaluar y gestionar proveedores en China.',
  'logística internacional':
    'Logística internacional de electrodomésticos: transporte marítimo, consolidación, seguros y aduanas.',
  'estrategia de producto':
    'Estrategia de producto para marcas de electrodomésticos: gama, precios, rotación y ciclo de vida.',
  'mercado de electrodomésticos':
    'Mercado de pequeños electrodomésticos: segmentos, competencia y oportunidades de importación.',
  'proveedores b2b': 'Proveedores B2B de electrodomésticos: cómo comparar capacidades, precios y plazos.',
  'oem y exportación':
    'Exportación con marca propia: requisitos documentales, etiquetado y certificaciones por destino.',
  'embalaje de exportación':
    'Embalaje de exportación: resistencia, protección, coste de flete y requisitos de etiquetado.',
  'oem y cadena de suministro': 'Cadena de suministro OEM: planificación, inventario, plazos y gestión de proveedores.',
  'tendencias de mercado': 'Tendencias del mercado: qué categorías crecen y qué características busca el comprador.',
  'planificación de compras':
    'Planificación de compras en China: tiempos de producción, tránsito y stock de seguridad.',
  'negociación con proveedores': 'Negociación con proveedores chinos: MOQ, precios, condiciones de pago y plazos.',
};

const CLOSING =
  'Si busca un fabricante para su proyecto, puede solicitar muestra y cotización en la página de contacto.';

export function getCategoryIntro(title: string): string {
  const key = title.trim().toLowerCase();
  return INTROS[key] ?? `Artículos sobre ${title} para compradores B2B de pequeños electrodomésticos.`;
}

export { CLOSING as CATEGORY_CLOSING };
