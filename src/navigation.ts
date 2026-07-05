import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Productos',
      links: [
        {
          text: 'Hervidores Eléctricos',
          href: getPermalink('https://www.yolec-electronics.com/product-category/electric-water-kettle/'),
        },
        {
          text: 'Hervidores de Cuello de Cisne',
          href: getPermalink('https://www.yolec-electronics.com/product-category/electric-coffee-kettle/'),
        },
        {
          text: 'Arroceras Eléctricas',
          href: getPermalink('https://www.yolec-electronics.com/product-category/multi-cooker/'),
        },
        {
          text: 'Ollas a Presión Eléctricas',
          href: getPermalink('https://www.yolec-electronics.com/product-category/pressure-cooker/'),
        },
        {
          text: 'Fiambreras Eléctricas',
          href: getPermalink('https://www.yolec-electronics.com/product-category/electric-lunch-box/'),
        },
        {
          text: 'Batidoras de Mano',
          href: getPermalink('https://www.yolec-electronics.com/product-category/breakfast-machine/'),
        },
      ],
    },
    {
      text: 'Servicios',
      links: [
        {
          text: 'OEM & ODM',
          href: getPermalink('/oem-odm'),
        },
        {
          text: 'Control de Calidad',
          href: getPermalink('/control-de-calidad'),
        },
      ],
    },
    {
      text: 'Empresa',
      links: [
        {
          text: 'Sobre Nosotros',
          href: getPermalink('/sobre-nosotros'),
        },
        {
          text: 'Fábrica',
          href: getPermalink('/fabrica'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contacto'),
    },
  ],

  actions: [
    {
      text: 'Solicitar Cotización',
      href: getPermalink('/contacto'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Productos',
      links: [
        {
          text: 'Hervidores Eléctricos',
          href: getPermalink('https://www.yolec-electronics.com/product-category/electric-water-kettle/'),
        },
        {
          text: 'Hervidores de Cuello de Cisne',
          href: getPermalink('https://www.yolec-electronics.com/product-category/electric-coffee-kettle/'),
        },
        {
          text: 'Arroceras Eléctricas',
          href: getPermalink('https://www.yolec-electronics.com/product-category/multi-cooker/'),
        },
        {
          text: 'Ollas a Presión Eléctricas',
          href: getPermalink('https://www.yolec-electronics.com/product-category/pressure-cooker/'),
        },
        {
          text: 'Fiambreras Eléctricas',
          href: getPermalink('https://www.yolec-electronics.com/product-category/electric-lunch-box/'),
        },
        {
          text: 'Batidoras de Mano',
          href: getPermalink('https://www.yolec-electronics.com/product-category/breakfast-machine/'),
        },
      ],
    },
    {
      title: 'Empresa',
      links: [
        {
          text: 'Sobre Nosotros',
          href: getPermalink('/sobre-nosotros'),
        },
        {
          text: 'Fábrica',
          href: getPermalink('/fabrica'),
        },
        {
          text: 'OEM & ODM',
          href: getPermalink('/oem-odm'),
        },
        {
          text: 'Control de Calidad',
          href: getPermalink('/control-de-calidad'),
        },
      ],
    },
    {
      title: 'Recursos',
      links: [
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        {
          text: 'Catálogo Online',
          href: 'https://online.fliphtml5.com/yolec-electronics/dbzn/#p=1',
        },
        {
          text: 'Contacto',
          href: getPermalink('/contacto'),
        },
      ],
    },
    {
      title: 'Contacto',
      links: [
        {
          text: 'Email',
          href: 'mailto:adrian@yolec-electronics.com',
        },
        {
          text: 'WhatsApp',
          href: 'https://wa.me/8613922332584',
        },
        {
          text: 'Sitio Web',
          href: 'https://www.yolec-electronics.com',
        },
      ],
    },
  ],

  secondaryLinks: [
    {
      text: 'Política de Privacidad',
      href: getPermalink('/politica-de-privacidad'),
    },
    {
      text: 'Términos y Condiciones',
      href: getPermalink('/terminos-y-condiciones'),
    },
  ],

  socialLinks: [
    {
      ariaLabel: 'LinkedIn',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/in/adrian2010/',
    },
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/people/Yolec-Electric/61590792321803/',
    },
    {
      ariaLabel: 'YouTube',
      icon: 'tabler:brand-youtube',
      href: 'https://www.youtube.com/@yolec-electric-adrian',
    },
  ],

  footNote: `
    <strong>YOLEC Electric</strong><br/>
    Fabricante OEM y ODM de pequeños electrodomésticos en China desde 2015.<br/>
    © 2026 YOLEC Electric. Todos los derechos reservados.
  `,
};