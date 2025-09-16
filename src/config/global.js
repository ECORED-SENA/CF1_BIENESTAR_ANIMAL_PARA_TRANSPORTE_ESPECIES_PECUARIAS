export default {
  global: {
    Name:
      'Fundamentos del bienestar animal y normatividad en el transporte de especies pecuarias',
    Description:
      'El componente aborda la implementación de principios de bienestar animal en el transporte pecuario, enfatizando las cinco libertades y la normatividad vigente en Colombia. Analiza especies, efectos fisiológicos y conductuales del transporte, y estrategias para minimizar estrés, lesiones y pérdidas. Se promueven buenas prácticas pecuarias que mejoran productividad, sanidad y competitividad, asegurando sostenibilidad, inocuidad y responsabilidad social en la cadena agropecuaria.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Especies pecuarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Importancia del manejo adecuado',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clases principales de especies pecuarias',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Bienestar animal en el transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Principios del bienestar animal en el transporte',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Importancia del bienestar animal en el transporte',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Relación con la sanidad y productividad',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Principios del bienestar animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Generalidades del comportamiento animal y su relación con el transporte',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Comportamiento del ganado bovino',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Comportamiento de los equinos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Comportamiento de ovinos y caprinos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Comportamiento en avicultura de engorde y postura',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Comportamiento de búfalos',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Efectos del transporte en el comportamiento animal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Estrés por transporte en los animales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Causas principales del estrés durante el transporte',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Manifestaciones clínicas del estrés por transporte',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Consecuencias del estrés por transporte',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Normatividad vigente nacional sobre bienestar animal en el transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Ley 1774 de 2016',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Resolución ICA 20223040006915 de 2022',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo:
              'Comparación entre Ley 1774 de 2016 y Resolución ICA 20223040006915 de 2022',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Resolución ICA 136 de 2020',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Requisitos técnicos y sanitarios del ICA e INVIMA',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Documentos obligatorios para la movilización animal',
            hash: 't_6_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  complementario: [
    {
      tema: 'Bienestar animal en el transporte',
      referencia:
        'Grandin, T. (2019). Animal welfare in transportation and slaughter. Meat Science, 1(1), 1–8. ',
      tipo: 'Artículo científico',
      link:
        'https://www.sciencedirect.com/science/article/abs/pii/S0309174018308532?via%3Dihub',
    },
    {
      tema: 'Bienestar animal en el transporte',
      referencia:
        'FAO. (2020). Producción Animal.  Organización de las Naciones Unidas para la Alimentación y la Agricultura.',
      tipo: 'Guía técnica',
      link: 'https://www.fao.org/animal-production/es/',
    },
    {
      tema: 'Ley 1774 de 2016',
      referencia:
        'Congreso de la República de Colombia. (2016). Ley 1774 de 2016. Por medio de la cual se modifican el código civil, la ley 84 de 1989, el código penal, el código de procedimiento penal y se dictan otras disposiciones. Diario Oficial.',
      tipo: 'Documento normativo',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=68135 ',
    },
    {
      tema: 'Resolución ICA 20223040006915 de 2022',
      referencia:
        'ICA. (2022). Resolución ICA 20223040006915 de 2022. “Por la cual se adopta el Manual de Procedimientos para el Transporte, manejo y movilización de Animales en Pie y se dictan otras disposiciones”',
      tipo: 'Documento normativo',
      link:
        'https://www.ica.gov.co/getattachment/ab7e54ab-28a0-4c58-9a86-8ecc49fea4a9/2022R3040006915.aspx ',
    },
    {
      tema: 'Resolución ICA 136 de 2020',
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2020). Resolución 136 de 2020. Por la cual se adopta el Manual de Condiciones de Bienestar Animal propias de cada una de las especies de producción en el Sector Agropecuario para las especies Équidas, Porcinas, Ovinas y Caprinas"',
      tipo: 'Documento normativo',
      link:
        'https://www.minagricultura.gov.co/Normatividad/Resoluciones/Resoluci%C3%B3n%20No.%20000136%20de%202020.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Bienestar animal',
      significado:
        'estado físico y mental de un animal en relación con las condiciones en las que vive y muere.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de prácticas destinadas a prevenir la entrada y propagación de enfermedades.',
    },
    {
      termino: 'Capacitación',
      significado:
        'proceso de formación del personal encargado del cuidado y transporte de animales para mejorar prácticas de manejo.',
    },
    {
      termino: 'Cinco libertades',
      significado:
        'principios fundamentales del bienestar animal: libre de hambre, incomodidad, dolor, miedo y con posibilidad de expresar su comportamiento natural.',
    },
    {
      termino: 'Especies pecuarias',
      significado:
        'animales domésticos destinados a la producción de carne, leche, huevos y subproductos.',
    },
    {
      termino: 'Estrés animal',
      significado:
        'respuesta fisiológica y conductual ante factores que alteran el equilibrio del organismo.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'garantía de que los productos pecuarios son seguros para el consumo humano.',
    },
    {
      termino: 'Ley 1774 de 2016',
      significado:
        'legislación colombiana que reconoce a los animales como seres sintientes y sanciona el maltrato.',
    },
    {
      termino: 'Manejo animal',
      significado:
        'conjunto de técnicas y prácticas aplicadas para guiar, movilizar y cuidar a los animales.',
    },
    {
      termino: 'Productividad pecuaria',
      significado:
        'relación entre los recursos utilizados y los productos obtenidos en la producción animal.',
    },
    {
      termino: 'Resolución ICA 136 de 2020',
      significado:
        'norma colombiana que regula el transporte terrestre de animales vivos.',
    },
    {
      termino: 'Sanidad animal',
      significado:
        'conjunto de medidas preventivas y correctivas para mantener a los animales libres de enfermedades.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'manejo responsable de los recursos pecuarios, garantizando viabilidad económica, social y ambiental.',
    },
    {
      termino: 'Transporte pecuario',
      significado:
        'desplazamiento de animales vivos bajo condiciones de bioseguridad y bienestar.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'capacidad de seguir el rastro de un producto animal a lo largo de la cadena productiva.',
    },
  ],
  referencias: [
    {
      referencia:
        'Broom, D. M. (2019). Animal welfare: An overview. Cambridge University Press.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2016). Ley 1774 de 2016. Reconocimiento de los animales como seres sintientes y sanciones por maltrato animal. Diario Oficial.',
      link: '',
    },
    {
      referencia:
        'FAO. (2020). Producción Animal. Organización de las Naciones Unidas para la Alimentación y la Agricultura. ',
      link: 'https://www.fao.org/animal-production/es/',
    },
    {
      referencia:
        'Fedegan. (2018). ¿Por qué es importante conocer el punto de balance en bovinos?  ',
      link:
        'https://www.fedegan.org.co/noticias/por-que-es-importante-conocer-el-punto-de-balance-en-bovinos ',
    },
    {
      referencia: 'Gallina Castellana Negra. (s.f.). El ojo de la gallina. ',
      link:
        'https://www.tri-tro.com/anatomia-de-la-gallina/el-ojo-de-la-gallina/ ',
    },
    {
      referencia:
        'Grandin, T. (2010).  Auditing animal welfare at slaughter plants; 86:56-65.',
      link: '',
    },
    {
      referencia:
        'Grandin, T. (2019). Animal welfare in transportation and slaughter. Meat Science, 1(1), 1–8. ',
      link: 'https://doi.org/10.1016/j.meatsci.2018.12.007',
    },
    {
      referencia:
        'Grandin, T. (2020). Livestock handling and transport. CABI Publishing.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2020). Resolución 136 de 2020. Condiciones mínimas para el transporte terrestre de animales vivos. ',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal (WOAH). (2023). Código sanitario para los animales terrestres. ',
      link: '',
    },
    {
      referencia: 'Ortuño, L. (2020). Manual Bienestar Equino C.R.E.W.',
      link: '',
    },
    {
      referencia:
        'Outhouse, J. B. (1991). Técnicas de manejo en ovinos. En Técnicas de manejo para  ganado y aves de corral (pp.- 383-430). Noriega Limusa. México.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima ',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
