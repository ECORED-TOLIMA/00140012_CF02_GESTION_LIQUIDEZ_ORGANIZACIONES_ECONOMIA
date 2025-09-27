export default {
  global: {
    componenteFormativo: 'Asignación de recursos en organizaciones solidarias',
    descripcionCurso:
      'Este componente busca que los aprendices planifiquen, distribuyan y controlen recursos financieros en organizaciones solidarias, considerando disponibilidad, objetivos y normas vigentes. Mediante análisis de informes, indicadores de eficiencia y herramientas tecnológicas, se impulsa una gestión informada, equitativa y transparente que asegure sostenibilidad y cumplimiento del objeto social.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        titulo: 'Planeación financiera en la economía solidaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición y propósito de la planeación financiera',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia de la programación presupuestal y operativa',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Factores que afectan la asignación de recursos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Técnicas de distribución de recursos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Métodos tradicionales y alternativos de asignación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Selección de prioridades según necesidades y metas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Evaluación del uso eficiente de los recursos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estructura de informes financieros aplicados a la asignación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos de informes financieros',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Análisis de estructuras de costos y fuentes de financiación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Presentación e interpretación de informes',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Monitoreo de la eficiencia financiera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Principio de conformidad financiera',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Indicadores de eficiencia y desempeño',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Aplicación de herramientas TIC para el seguimiento y control la asignación de recursos',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Normatividad vigente aplicable a la asignación de recursosl',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Marco normativo en la economía solidaria',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Reglas y políticas internas de distribución',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Riesgos y buenas prácticas en la gestión de recursos',
            hash: 't_5_3',
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
        download: 'downloads/CFA_XX_DU.pdf',
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
      tema: '1. Planeación financiera en la economía solidaria',
      referencia:
        'UNAD/Cudecoop. (2024, 23 de diciembre). <em>Educación Financiera para</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/kZ-4KfYp7xg',
    },
    {
      tema: '4.3 Aplicación de herramientas TIC para el seguimiento y control',
      referencia:
        'Espinoza Loor, L. L., Zambrano Vega, C. G., Mora Muñoz, L. L. & Oviedo Bayas, B. W. (2023). <em>TIC y su Impacto en la Gestión Financiera del Departamento de Finanzas GAD El Empalme.</em>',
      tipo: 'Documento',
      link: 'https://dialnet.unirioja.es/descarga/articulo/9263022.pdf',
    },
    {
      tema: '5.2 Reglas y políticas internas de distribución',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021, 29 de julio). <em>Políticas financieras y comerciales</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FWXq-BjMpAQ',
    },
  ],
  glosario: [
    {
      termino: 'Asignación de recursos',
      significado:
        'distribución estratégica de los recursos financieros disponibles hacia diferentes áreas, programas o proyectos de la organización.',
    },
    {
      termino: 'Conformidad financiera',
      significado:
        'principio que establece que los recursos de corto plazo deben financiar necesidades de corto plazo y los de largo plazo, a necesidades de largo plazo.',
    },
    {
      termino: 'Economía solidaria',
      significado:
        'modelo económico basado en la cooperación, la solidaridad y el beneficio colectivo, común en organizaciones como cooperativas y fondos de empleados.',
    },
    {
      termino: 'Eficiencia financiera',
      significado:
        'capacidad de una organización para utilizar sus recursos de forma óptima, logrando los mayores resultados posibles con el menor costo.',
    },
    {
      termino: 'Indicadores financieros',
      significado:
        'herramientas cuantitativas utilizadas para medir el rendimiento, la liquidez, la rentabilidad y la eficiencia de una organización.',
    },
    {
      termino: 'Informe financiero',
      significado:
        'documento que presenta la situación económica de una organización, incluyendo ingresos, egresos, activos y pasivos.',
    },
    {
      termino: 'Planeación financiera',
      significado:
        'proceso mediante el cual una organización establece objetivos financieros y determina las estrategias para alcanzarlos.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'instrumento de planificación que representa en términos monetarios las actividades que se planean ejecutar durante un período determinado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Burbano Ruiz, J. E. (2011). <em>Presupuestos: un enfoque estratégico, gestión y control de recursos.</em> (4.a ed.). McGraw-Hill Latinoamericana.',
    },
    {
      referencia:
        'León García, O. (2009). <em>Administración Financiera,</em> Prensa Moderna Editores.',
    },
    {
      referencia:
        'Ortiz Anaya, H. (2018). <em>Análisis Financiero Aplicado,</em> Universidad Externado.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
