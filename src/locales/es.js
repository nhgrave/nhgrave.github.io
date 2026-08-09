export default {
  header: {
    about: "Sobre",
    experience: "Experiencia",
    contact: "Contacto"
  },
  home: {
    presentation: "Soy",
    profession: [ "Desarrollador Web de Software", "Desarrollador Web Full Stack", "Desarrollador Web Frontend" ]
  },
  about: {
    title: "Acerca de mí",
    description: "Soy un desarrollador apasionado por resolver problemas y entregar soluciones que satisfagan las necesidades de los usuarios. Disfruto trabajando en soluciones centradas en internet, buscando siempre herramientas que puedan mejorar tanto nuestro proceso de desarrollo como el producto."
  },
  experience: {
    title: "Mi Experiencia",
    showMore: "Mostrar Más",
    clubedovalor: {
      position: "Desarrollador Web Full Stack",
      company: "Clube do Valor",
      description: "Desarrollo y mantenimiento de aplicaciones en PHP para integración con instituciones financieras, automatizando la recolección diaria de datos de carteras bajo gestión y garantizando alta disponibilidad, rendimiento e integridad de la información.",
      fullDescription: `
        <p>Me uní a Clube do Valor a principios de 2026 en el equipo de Asignación y Mercado, con foco en la extracción y consolidación de datos de las carteras de clientes junto a instituciones financieras.</p>
        <br>
        <p>Una de las principales mejoras que implementé fue la reorganización del flujo de las rutinas de integración. Reestructuré la ejecución para utilizar procesamiento paralelo mediante colas y optimicé la capa de persistencia en la base de datos, sustituyendo inserciones individuales por inserciones en lote (bulk insert). Esta optimización redujo el tiempo total de procesamiento de las rutinas diarias en aproximadamente un 55%.</p>
      `,
    },
    nelogica: {
      position: "Desarrollador Web Frontend",
      company: "Nelogica",
      description: "Trabajando con VueJS y React en un equipo centrado en el frontend, participé en el mantenimiento de 3 sitios de comercio electrónico, la creación de 2 sitios de comercio electrónico adicionales y 3 sitios web estáticos. Implementé pagos PIX e integración de WebSocket en los proyectos.",
      fullDescription: `
        <p>Me uní a Nelogica a finales de 2021, trabajando de forma remota. Poco a poco, la empresa fue regresando al modelo presencial durante 2022, y finalmente me mudé a Porto Alegre para trabajar completamente de manera presencial en 2023.</p>
        <br>
        <p>Mi trayectoria en Nelogica comenzó en un equipo de soporte, donde teníamos que resolver errores de manera rápida y precisa para poner las soluciones en funcionamiento y atender las demandas de los clientes.</p>
        <br>
        <p>El equipo de soporte era responsable de mantener los proyectos de gestión interna, los sitios web, el comercio electrónico y las API.</p>
        <br>
        <p>Con el tiempo, me fui adaptando al ritmo de la empresa y comencé a participar en nuevos proyectos, donde pude aplicar mis conocimientos en VueJS y React para desarrollar nuevas funcionalidades y mejorar la experiencia del usuario.</p>
        <br>
        <p>Participé en la creación de nuevos sitios de comercio electrónico, como <a href="https://investacademy.com.br/es" target="blank">InvestAcademy</a> y <a href="https://blackarrowtrading.com.br/es" target="blank">BlackArrow</a>. También lideré proyectos como la implementación de pagos mediante PIX en nuestras tiendas, la migración de una aplicación de PHP a VueJS y la creación de una nueva plataforma de comercio electrónico, <a href="https://copyinvest.nelogica.com.br" target="blank">CopyInvest</a>, donde el cliente puede suscribirse para seguir las operaciones de otro trader.</p>
      `
    },
    zanshin: {
      position: "Desarrollador Web Full Stack",
      company: "Zanshin Software",
      description: "Trabajando con Ruby on Rails y JavaScript en un equipo de 2 desarrolladores y manteniendo 7 proyectos, participé en la implementación de VueJS en parte de un sistema, integración con CENP, integración con pasarelas de pago (Mercado Pago + Paypal), rediseño de los diseños del sistema y contribuí con informes de gestión financiera para los usuarios.",
      fullDescription: `
        <p>Trabajé en Zanshin Software desde 2018 hasta 2021, desempeñándome como desarrollador web full stack. La empresa se especializa en el desarrollo de soluciones SaaS para agencias de publicidad y marketing digital mediante la plataforma <a href="https://sigasw.com.br" target="blank">SigaSW</a>.</p>
        <br>
        <p>Durante mi tiempo en Zanshin, fui responsable de diversas tareas y proyectos, entre ellos:</p>
        <br>
        <p>- Desarrollo y mantenimiento de aplicaciones SaaS en Ruby on Rails, atendiendo a más de 2.500 usuarios y garantizando la escalabilidad y alta disponibilidad del sistema.</p>
        <br>
        <p>- Implementación de integraciones estratégicas, incluyendo: Globo ADS (SIS.COM) para publicidad en medios; Envío automatizado de informes de medios al CENP (Consejo Ejecutivo de Normas Estándar); Emisión de facturas electrónicas de servicios (NFS-e) utilizando el modelo ABRASF 2.0; Integración con Google Drive, permitiendo el almacenamiento y la gestión de archivos directamente desde la aplicación; Integración con pasarelas de pago (Mercado Pago + PayPal).</p>
        <br>
        <p>- Rediseño de diseños e interfaces de usuario, mejorando la experiencia del usuario y la usabilidad del sistema.</p>
        <br>
        <p>- Optimización del rendimiento mediante la migración de páginas de SSR (Server-Side Rendering) a CSR (Client-Side Rendering) con Vue.js, reduciendo la carga del servidor y mejorando la experiencia del usuario.</p>
      `
    },
    "29sul": {
      position: "Desarrollador Web Full Stack",
      company: "29Sul",
      description: "Trabajando con Ruby on Rails y JavaScript en un equipo de 3 desarrolladores, mantuvimos un total de 5 aplicaciones de software, que incluían herramientas de gestión para agencias de publicidad, gestión de proyectos, gestión financiera y 2 sistemas de gestión interna, todos comercializados como SaaS. También participé en la implementación de remesas y devoluciones de archivos bancarios CNAB y OFX."
    }
  },
  skills: {
    title: "Mis Habilidades"
  },
  contact: {
    title: "¡Trabajemos juntos!"
  },
  footer: {
    message: "Haz que cuente."
  }
}
