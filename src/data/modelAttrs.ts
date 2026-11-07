export type ModelAttr = {
  label: string;
  detail: string;
};

const RULES: Array<{ re: RegExp; label: string; detail: string }> = [
  {
    re: /\bdouble wall\b/i,
    label: 'Doble pared',
    detail: 'La doble pared mantiene el agua caliente más tiempo y reduce la temperatura exterior del cuerpo.',
  },
  {
    re: /\bsingle wall\b/i,
    label: 'Pared simple',
    detail: 'Construcción de pared simple, más ligera y con menor coste de flete por unidad.',
  },
  {
    re: /\banti[- ]dry burn\b/i,
    label: 'Protección contra calentamiento en seco',
    detail: 'El termostato corta la alimentación cuando no queda agua suficiente en el interior.',
  },
  {
    re: /\bfast boil\b/i,
    label: 'Hervido rápido',
    detail: 'Resistencia de mayor potencia para reducir el tiempo de ebullición en uso doméstico.',
  },
  {
    re: /\bcustom logo\b/i,
    label: 'Logo personalizado',
    detail: 'Permite grabar o serigrafiar su marca directamente en el cuerpo del producto.',
  },
  {
    re: /\bcool touch\b/i,
    label: 'Asa fría al tacto',
    detail: 'El aislamiento del asa evita que el calor del cuerpo pase a la mano durante el vertido.',
  },
  {
    re: /\bled\b/i,
    label: 'Iluminación LED',
    detail: 'Indicador luminoso que señala el funcionamiento, útil en cocinas con poca luz.',
  },
  {
    re: /\bdigital\b/i,
    label: 'Control digital',
    detail: 'Panel digital con selección de programas y lectura de temperatura.',
  },
  {
    re: /\bkeep warm\b/i,
    label: 'Mantenimiento de calor',
    detail: 'Mantiene la temperatura tras finalizar la cocción, sin necesidad de recalentar.',
  },
  {
    re: /\btemperature control\b/i,
    label: 'Control de temperatura',
    detail: 'Ajuste fino de la temperatura de trabajo, útil en café y en preparaciones delicadas.',
  },
  {
    re: /\brotating base\b/i,
    label: 'Base giratoria de 360°',
    detail: 'El cuerpo gira libremente sobre la base, lo que facilita el uso con una sola mano.',
  },
  {
    re: /\bcordless\b/i,
    label: 'Funcionamiento sin cable',
    detail: 'El cuerpo se separa de la base para servir sin arrastrar el cable.',
  },
  {
    re: /\bportable\b/i,
    label: 'Formato portátil',
    detail: 'Dimensiones reducidas para transporte diario y uso fuera de casa.',
  },
  {
    re: /\blid lock\b/i,
    label: 'Bloqueo de tapa',
    detail: 'La tapa no puede abrirse mientras el interior está en presión.',
  },
  {
    re: /\bsafety valve\b/i,
    label: 'Válvula de seguridad',
    detail: 'Libera la presión antes de un nivel crítico, requisito habitual en mercados regulados.',
  },
  {
    re: /\blow sugar\b/i,
    label: 'Función bajo azúcar',
    detail: 'Ciclo de cocción orientado a reducir el almidón del arroz.',
  },
  {
    re: /\bgooseneck\b/i,
    label: 'Pico de cuello de cisne',
    detail: 'Vertido controlado y repetible, pensado para café filtrado y métodos manuales.',
  },
  {
    re: /\bprecision\b/i,
    label: 'Vertido de precisión',
    detail: 'Caudal estable desde el primer hasta el último vertido.',
  },
  {
    re: /\bmini\b/i,
    label: 'Formato mini',
    detail: 'Diseño compacto para cocinas pequeñas y hogares de una o dos personas.',
  },
  {
    re: /\bblack\b/i,
    label: 'Acabado negro',
    detail: 'Acabado negro, el color con mejor salida en catálogos de menaje y regalo.',
  },
  {
    re: /\bwhite\b/i,
    label: 'Acabado blanco',
    detail: 'Acabado blanco, habitual en líneas de cocina de estilo nórdico y en marcas de retail.',
  },
  {
    re: /\bred\b/i,
    label: 'Acabado rojo',
    detail: 'Acabado rojo, usado en producto de regalo y en colecciones de temporada.',
  },
  {
    re: /\bsilver\b/i,
    label: 'Acabado plateado',
    detail: 'Acabado plateado con aspecto metálico, frecuente en canales premium.',
  },
  {
    re: /\bstainless steel\b/i,
    label: 'Cuerpo de acero inoxidable',
    detail: 'Cuerpo exterior en acero, resistente al uso diario y fácil de limpiar.',
  },
  {
    re: /\bglass\b/i,
    label: 'Cuerpo de vidrio',
    detail: 'Cuerpo transparente que deja ver el contenido durante el calentamiento.',
  },
  {
    re: /\bceramic\b/i,
    label: 'Recubrimiento cerámico',
    detail: 'Recubrimiento interior cerámico, sin revestimiento antiadherente convencional.',
  },
  {
    re: /\baluminum\b/i,
    label: 'Cuerpo de aluminio',
    detail: 'Aluminio en el cuerpo, más ligero que el acero para el mismo volumen.',
  },
  {
    re: /\bbasic\b/i,
    label: 'Configuración básica',
    detail: 'Versión de entrada, sin funciones añadidas, pensada para precio competitivo.',
  },
  {
    re: /\bpremium\b/i,
    label: 'Acabado premium',
    detail: 'Acabado y detalles de gama alta para canales de mayor ticket.',
  },
  {
    re: /\bmulti(?:function)?\b/i,
    label: 'Funciones múltiples',
    detail: 'Varios programas de cocción en un mismo cuerpo de producto.',
  },
  {
    re: /\bsteam\b/i,
    label: 'Cocción al vapor',
    detail: 'Programa de vapor para verduras y alimentos que requieren cocción suave.',
  },
  {
    re: /\bslow cook\b/i,
    label: 'Cocción lenta',
    detail: 'Ciclo largo a baja temperatura para legumbres y carne.',
  },
  {
    re: /\brice\b/i,
    label: 'Cocción de arroz',
    detail: 'Programa específico para arroz, con control de absorción de agua.',
  },
  {
    re: /\blarge capacity\b/i,
    label: 'Gran capacidad',
    detail: 'Volumen amplio para familias de cuatro personas o más.',
  },
];

export function describeAttributes(titleEn: string): ModelAttr[] {
  const out: ModelAttr[] = [];
  for (const rule of RULES) {
    if (rule.re.test(titleEn) && !out.some((a) => a.label === rule.label)) {
      out.push({ label: rule.label, detail: rule.detail });
    }
  }
  return out;
}
