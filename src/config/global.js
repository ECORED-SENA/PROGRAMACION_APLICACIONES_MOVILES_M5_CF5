export default {
  global: {
    componenteFormativo: 'Diseño de aplicación e informe de arquitectura',
    descripcionCurso:
      'En este componente, al aprendiz recibirá una breve explicación sobre uno de los <i>frameworks</i> más utilizados por los desarrolladores y con mejores características de rendimiento; conocerá facilidades que dicha herramienta aporta al desarrollo de aplicaciones móviles híbridas y a la realización de pruebas de diseño y funcionalidad, en tiempo real y directamente sobre los dispositivos móviles <i>iPhone</i> y dispositivos <i>Android</i>.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Características de <i>NativeScript</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diseño y desarrollo sobre <i>Playground</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Principales componentes de <i>Playground</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Código QR',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: ' Componentes de la aplicación',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Comunidad de desarrollo y soporte',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Instalación en los dispositivos móviles',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Informe de arquitectura',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ancheta, W. (2016). <i>Una introducción a NativeScript.</i> Code Envato Tuts+.',
      link:
        'https://code.tutsplus.com/es/articles/an-introduction-to-nativescript--cms-26771',
    },
    {
      referencia:
        'Atanasov, G. (2016). <i>NativeScript Android Application Package Size Revealed.</i> The NativeScript Blog.',
      link:
        'https://blog.nativescript.org/nativescript-android-application-package-size-revealed/index.html',
    },
    {
      referencia: 'NativeScript. (2020). <i>Layout Properties</i>.',
      link: 'https://docs.nativescript.org/ui-and-styling.html#listview',
    },
    {
      referencia:
        'RIP Tutorial. (2020). <i>Learn programming through books and examples.</i>',
      link: 'https://riptutorial.com/es/home',
    },
  ],
  glosario: [
    {
      termino: 'Aplicación móvil',
      significado:
        'Es un programa o <i>software</i> diseñado para ser utilizado en <i>smartphones</i>, tabletas y otros dispositivos móviles.',
    },
    {
      termino: 'Código QR',
      significado:
        'Se presenta como el sucesor del código de barras. Se visualiza como un gráfico cuadrado que almacena información en una matriz de puntos.',
    },
    {
      termino: 'Emulador',
      significado:
        'El emulador permite realizar las pruebas sobre un entorno simulado de un dispositivo móvil, permitiendo la versatilidad de trabajar sobre varias versiones de sistemas operativos y diferentes modelos de <i>smartphone</i> para probar su rendimiento y funcionalidad en la etapa de diseño y desarrollo.',
    },
    {
      termino: 'Frameworks',
      termHTML: '<i>Frameworks</i>',
      significado:
        'Es una compilación de conceptos estructurados que brindan un soporte tecnológico conformado por módulos, librerías y paquetes de <i>software</i> que buscan servir como la base para la organización y desarrollo de <i>software</i>; lo que hacen estas herramientas es facilitar la programación de aplicaciones y <i>software</i> en general.',
    },
    {
      termino: 'Plantillas',
      significado:
        'Es un formato o esquema prediseñado para una aplicación móvil; se utiliza como base entre la idea inicial y el producto final. Facilita el proceso de desarrollo permitiendo que el grupo de trabajo se centre en resolver los temas relacionados con la navegación, la funcionalidad y el diseño.',
    },
  ],
  complementario: [
    {
      texto:
        'Características de <i>NativeScript</i>: Programando con Grover. (2020a, 23 mayo). <i>NativeScript Vue - Instalación local</i> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/rF_OEj-H9f4',
    },
    {
      texto:
        'William Juan. (2021, 18 marzo). <i>NativeScript & Angular: Movies App UI - Page and Layout (Speed Code)</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/EUf3pQUHc74',
    },
    {
      texto:
        'Instalación en los dispositivos móviles: Programando con Grover. (2020b, abril 9). <i>NativeScript Vue Introducción - Creando Apps Móviles Nativas con Vue.js</i>  [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/kkCDDYpp4pg',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Cuervo Nieto',
        cargo: 'Instructor',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluador Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Revisión y corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jorge Armando Villamizar Moreno',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella',
        cargo: 'Soporte Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Magdi Khalifah Gamboa',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
