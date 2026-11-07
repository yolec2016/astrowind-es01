export type CatContent = {
  intro: string;
  applications: string;
  buyers: string;
  customization: string;
  quality: string;
  defaultFeatures: string[];
};

export const CAT_CONTENT: Record<string, CatContent> = {
  'electric-water-kettle': {
    intro:
      'El hervidor eléctrico es el producto con el que la mayoría de importadores empieza a construir una línea de pequeño electrodoméstico. Es un artículo de rotación alta, precio de entrada contenido y demanda estable tanto en Europa como en América Latina.',
    applications:
      'Se usa en cocinas domésticas, oficinas, recepciones de hotel, apartamentos turísticos y salas de descanso. Las versiones de 1,7 a 2,0 litros son las que mejor se mueven en retail; las de 1,0 litro encajan mejor en conveniencia y habitaciones de hotel.',
    buyers:
      'Distribuidores de menaje, cadenas de retail, marcas privadas de supermercado e importadores de electrodomésticos.',
    customization:
      'Personalizamos color del cuerpo y del asa, acabado brillante o mate, logo por serigrafía o láser, forma del pico, capacidad, base de calentamiento y packaging.',
    quality:
      'Cada unidad pasa prueba dieléctrica y de continuidad. Por lote medimos tiempo de ebullición, verificamos el corte del termostato tras diez ciclos y comprobamos estanqueidad antes del embalaje.',
    defaultFeatures: [
      'Hervido rápido para mayor rotación en tienda',
      'Termostato con corte automático y protección en seco',
      'Interior en acero inoxidable grado alimenticio',
      'Personalización de color, logo y packaging',
    ],
  },
  'electric-coffee-kettle': {
    intro:
      'El hervidor de cuello de cisne dejó de ser un accesorio de barista y se convirtió en equipo estándar de cafeterías de especialidad, tostadores y escuelas de café. La precisión del vertido y la estabilidad de temperatura son los dos argumentos que sostienen el precio.',
    applications:
      'Cafeterías, barras de filtrado, oficinas de tueste, showrooms de equipamiento y cursos de barismo. Las versiones de 1,0 litro son las más pedidas; las de 0,6 a 0,8 litro se usan en catas y competiciones.',
    buyers:
      'Distribuidores de equipamiento de café, marcas de café de especialidad, cadenas de cafeterías y mayoristas de HORECA.',
    customization:
      'Diámetro y curvatura del pico, restrictor de caudal, tipo de asa, control de temperatura analógico o PID, color, logo y packaging.',
    quality:
      'Medimos la precisión del termostato con termopar en el rango de 85 a 96 °C, verificamos caudal y repetibilidad del vertido, y probamos treinta ciclos de calentamiento por lote.',
    defaultFeatures: [
      'Pico de cuello de cisne para vertido controlado',
      'Control de temperatura de precisión',
      'Interior en acero inoxidable grado alimenticio',
      'Personalización de logo, color y packaging',
    ],
  },
  'glass-electric-kettle': {
    intro:
      'El hervidor de vidrio borosilicato compite en el segmento de regalo y de marca premium, donde el aspecto visual pesa tanto como el precio. La transparencia del cuerpo permite ver el agua y convierte el producto en un buen elemento de fotografía para e-commerce.',
    applications:
      'Retail de menaje, tiendas de regalo, catálogos de marca privada y canales online con ficha de producto visual. Es un artículo habitual en listas de boda y regalo de empresa.',
    buyers:
      'Marcas privadas de menaje, importadores de regalo, distribuidores de e-commerce y cadenas de tiendas de diseño.',
    customization:
      'Color del vidrio transparente, ahumado o tintado, base con iluminación LED, forma del asa, logo grabado y packaging con ventana.',
    quality:
      'Aplicamos prueba de choque térmico, control de juntas y base, y verificamos que el vidrio no presente burbujas ni tensiones visibles antes del montaje.',
    defaultFeatures: [
      'Cuerpo de vidrio borosilicato resistente al choque térmico',
      'Base con iluminación LED durante el hervido',
      'Interior sin revestimientos en contacto con el agua',
      'Personalización de vidrio, base y packaging',
    ],
  },
  'electric-health-kettle': {
    intro:
      'La línea de salud agrupa calienta leche, calienta biberones y hervidores con mantenimiento de temperatura, pensados para un uso más específico que el hervidor convencional y con un comprador que prioriza la seguridad.',
    applications:
      'Hogares con bebés, residencias, clínicas, guarderías y canales de regalo para recién nacidos. En farmacia y puericultura compite con productos de marca consolidada, así que el packaging y la certificación pesan mucho.',
    buyers: 'Distribuidores de puericultura, farmacias, cadenas de tiendas de bebé y marcas privadas de salud.',
    customization:
      'Rango de temperatura, función de mantenimiento, capacidad, forma del recipiente, color, logo y packaging.',
    quality:
      'Verificamos la estabilidad de temperatura durante dos horas, la precisión del termostato y la ausencia de fugas en el recipiente.',
    defaultFeatures: [
      'Temperatura controlada para leche y biberones',
      'Función de mantenimiento de calor',
      'Recipiente interior en acero inoxidable grado alimenticio',
      'Personalización de logo, color y packaging',
    ],
  },
  'electric-kettle-set': {
    intro:
      'El set de hervidor reúne hervidor y base en un mismo packaging, lo que simplifica la logística del importador y permite venderlo como regalo o como pack de temporada.',
    applications:
      'Retail de menaje, catálogos de regalo, campañas de fin de año y e-commerce con packs cerrados. Funciona bien en mercados donde el cliente compara packs antes que unidades sueltas.',
    buyers: 'Importadores de regalo, cadenas de retail, marcas privadas y distribuidores de menaje.',
    customization:
      'Combinación de colores, forma del asa, logo en hervidor y base, packaging rígido o estuche y tarjeta de marca.',
    quality:
      'Comprobamos la correspondencia entre base y hervidor en cada pack, la prueba de hervido y el estado del packaging antes del embalaje final.',
    defaultFeatures: [
      'Pack cerrado listo para retail',
      'Base y hervidor coordinados en color',
      'Interior en acero inoxidable grado alimenticio',
      'Personalización de pack y packaging',
    ],
  },
  'breakfast-machine': {
    intro:
      'La línea de desayuno agrupa máquinas de sándwich, planchas, tostadores y molinillos de café. Son volúmenes más pequeños que el hervidor, pero con márgenes comerciales más atractivos y muy buena aceptación en regalo.',
    applications:
      'Retail de cocina, tiendas de regalo, canal online y catálogos de temporada. La demonstración en vídeo mejora mucho la conversión en e-commerce.',
    buyers: 'Importadores de cocina, cadenas de retail, marcas privadas y distribuidores de artículos de regalo.',
    customization: 'Forma de la placa, revestimiento antiadherente, color, panel de control, logo y packaging.',
    quality:
      'Probamos calentamiento uniforme de la placa, control de temperatura, resistencia del cableado y ciclos repetidos por lote.',
    defaultFeatures: [
      'Placa de calentamiento uniforme',
      'Revestimiento antiadherente de fácil limpieza',
      'Diseño compacto para cocinas pequeñas',
      'Personalización de color, logo y packaging',
    ],
  },
  'pressure-cooker': {
    intro:
      'La olla a presión eléctrica es un producto de ticket medio-alto y ciclo de vida largo, muy sensible a la seguridad y a la certificación. El comprador B2B mira primero las válvulas y el historial de devoluciones, después el precio.',
    applications:
      'Hogares de cuatro a seis personas, mercados familiares de alta demanda, cocinas de comunidad y canales de regalo. En América Latina compite con olla a presión tradicional y gana por comodidad de programación.',
    buyers: 'Importadores de electrodomésticos, cadenas de retail, marcas privadas y distribuidores de cocina.',
    customization:
      'Capacidad, olla interior antiadherente o de acero, panel de control, número de programas, color, logo y packaging.',
    quality:
      'Cada lote pasa prueba de válvula de seguridad, prueba de presión y verificación del bloqueo de tapa. Registramos los parámetros de cada ciclo de cocción.',
    defaultFeatures: [
      'Válvula de seguridad y bloqueo de tapa',
      'Programas de cocción múltiples',
      'Olla interior antiadherente o de acero',
      'Personalización de panel, color y packaging',
    ],
  },
  'multi-cooker': {
    intro:
      'La olla multifunción concentra varias funciones en un solo cuerpo y compite directamente con ollas de cocción lenta y arroceras eléctricas. Es el producto donde la interfaz y el número de programas definen el posicionamiento de precio.',
    applications:
      'Hogares pequeños, apartamentos, estudiantes y canales online donde la demonstración en vídeo impulsa la conversión. También se usa como regalo de mudanza.',
    buyers: 'Importadores de electrodomésticos, marcas privadas, distribuidores de cocina y vendedores de e-commerce.',
    customization: 'Programas de cocción, pantalla, idioma del menú, color, capacidad, logo y packaging.',
    quality:
      'Probamos cada programa de cocción por lote, controlamos el sensor de temperatura y verificamos tapa y junta antes del embalaje.',
    defaultFeatures: [
      'Varios programas de cocción en un solo cuerpo',
      'Panel de control de fácil uso',
      'Recipiente interior antiadherente',
      'Personalización de menú, color y packaging',
    ],
  },
  'mini-cooker': {
    intro:
      'La mini cocina eléctrica está pensada para hogares de una o dos personas, residencias de estudiantes y cocinas de oficina. El tamaño reducido abarata el flete y abre mercados donde el espacio de cocina es limitado.',
    applications:
      'Apartamentos pequeños, residencias de estudiantes, oficinas y campings. En e-commerce funciona bien como producto de entrada de marca.',
    buyers:
      'Distribuidores de menaje, marcas privadas de cocina, vendedores online y mayoristas de artículos para el hogar.',
    customization: 'Capacidad, color, panel de control, número de funciones, logo y packaging compacto.',
    quality: 'Verificamos el ciclo de cocción, la estabilidad del sensor y la resistencia del cableado en cada lote.',
    defaultFeatures: [
      'Diseño compacto para cocinas pequeñas',
      'Funciones de cocción básicas y arroz',
      'Recipiente interior antiadherente',
      'Personalización de color, logo y packaging',
    ],
  },
  'low-sugar-cooker': {
    intro:
      'La olla bajo azúcar responde a la demanda de arroceras con función de reducción de almidón, un argumento de venta fuerte en mercados donde la alimentación saludable pesa en la decisión de compra.',
    applications:
      'Hogares, canales de salud y bienestar, retail online con contenido educativo y mercados con alta penetración de arroz como base alimenticia.',
    buyers:
      'Distribuidores de salud y bienestar, marcas privadas de cocina, importadores de electrodomésticos y vendedores online.',
    customization:
      'Función de reducción, número de programas, panel, capacidad, color, logo y packaging con argumento de salud.',
    quality:
      'Verificamos el ciclo de reducción, la reproducibilidad del resultado entre lotes y la limpieza del recipiente interior.',
    defaultFeatures: [
      'Función de reducción de almidón',
      'Programas de cocción para arroz y granos',
      'Recipiente interior antiadherente',
      'Personalización de panel, color y packaging',
    ],
  },
  'ih-cooker': {
    intro:
      'La cocina IH calienta por inducción electromagnética, con respuesta más rápida y control de temperatura más fino que una resistencia convencional. Es el escalón premium de la línea de arroceras.',
    applications:
      'Hogares de gama alta, canales premium, retail de cocina y mercados donde el cliente valora el control de temperatura sobre el precio.',
    buyers: 'Importadores de gama alta, marcas privadas premium y distribuidores de equipamiento de cocina.',
    customization: 'Potencia, número de programas, panel táctil, color, logo y packaging premium.',
    quality:
      'Comprobamos la uniformidad de calentamiento por inducción, el control del sensor y el comportamiento del panel táctil en uso continuo.',
    defaultFeatures: [
      'Calentamiento por inducción IH',
      'Control de temperatura más preciso',
      'Panel táctil de uso continuo',
      'Personalización premium de logo y packaging',
    ],
  },
  'electric-lunch-box': {
    intro:
      'La fiambrera eléctrica calienta la comida en el propio recipiente, sin microondas, y se ha convertido en un producto de uso diario en oficinas, obras y desplazamientos largos.',
    applications:
      'Oficinas, obras, viajes, hospitales y escuelas. También se vende como regalo corporativo, donde el logo de la empresa sustituye al de la marca.',
    buyers:
      'Distribuidores de menaje, empresas de regalo corporativo, retail online y mayoristas de artículos de viaje.',
    customization:
      'Número de compartimentos, capacidad, material interior, sistema de calentamiento, conector de coche, color y packaging.',
    quality:
      'Probamos calentamiento 360°, control de fugas, verificación del conector y ciclos repetidos de calentamiento antes del embalaje.',
    defaultFeatures: [
      'Calentamiento en el propio recipiente',
      'Uso en casa, oficina y coche',
      'Interior en acero inoxidable grado alimenticio',
      'Personalización de logo, compartimentos y packaging',
    ],
  },
};
