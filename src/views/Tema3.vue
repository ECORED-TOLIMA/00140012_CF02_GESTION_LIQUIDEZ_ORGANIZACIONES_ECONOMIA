<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Estructura de informes financieros aplicados a la asignación

    .row.justify-content-center.mb-5
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img-01.png', alt='Imagen decorativa')

    p(data-aos="fade-right") Los informes financieros son herramientas fundamentales para la rendición de cuentas, el análisis de gestión y la toma de decisiones en las organizaciones solidarias. Su estructura debe permitir una lectura clara, objetiva y coherente del uso y asignación de los recursos financieros. Según Ortiz Anaya (2018), estos informes deben integrar elementos contables y de gestión que faciliten el monitoreo del cumplimiento presupuestal y la evaluación de los resultados alcanzados. En el contexto de la asignación de recursos, los informes deben reflejar en qué áreas se invirtieron los fondos, cuánto se ejecutó frente al presupuesto aprobado y cuál fue el impacto de dicha ejecución en los objetivos institucionales.
    p.mb-5(data-aos="fade-left") Una estructura básica de informe financiero para la asignación de recursos puede incluir:

    .row.justify-content-center.mb-5(style="display: flex; width: 100%; margin: auto;")(data-aos="flip-up")
      .col-12
        .row.justify-content-center
          .col-lg-7.col-12.order-lg-2.order-2
            .cajon.cajon.C01.p-4.mb-3
              ol.lista-ol--cuadro.lista-ol--separador
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 1
                  | Introducción y objetivo del informe.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 2
                  | Resumen de ingresos y egresos del periodo.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 3
                  | Análisis de ejecución presupuestal por áreas o proyectos.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 4
                  | Variaciones significativas respecto al presupuesto inicial.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 5
                  | Indicadores financieros clave (como eficiencia del gasto o porcentaje de ejecución).
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 6
                  | Conclusiones y recomendaciones. 

          .col-lg-5.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema3/img-18.svg', alt='Imagen decorativa')

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.color-primario.p-4
          p.mb-0 Por ejemplo, si una cooperativa presupuestó $50.000.000 para actividades de bienestar social y ejecutó $45.000.000, el informe debe justificar la diferencia, señalar si hubo reorientación de recursos y evaluar el impacto de la inversión realizada.

    p.mb-0(data-aos="fade-right") Además, estos informes deben elaborarse con base en criterios de transparencia, comparabilidad y trazabilidad. Burbano Ruiz (2011) señala que la calidad de la información financiera determina la capacidad de una organización para anticiparse a riesgos y fortalecer su gestión. En el sector solidario, donde la participación y la confianza son pilares fundamentales, la presentación periódica de informes accesibles y comprensibles por los asociados no solo cumple una función contable, sino también formativa y política. Así, la estructura de los informes financieros aplicados a la asignación se convierte en un instrumento de control social y de alineación con los principios solidarios de responsabilidad, equidad y democracia económica. 

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_1 3.1 Tipos de informes financieros

    p.mb-4(data-aos="fade-left") En las organizaciones de economía solidaria, los informes financieros cumplen una función esencial en la administración responsable de los recursos y en la rendición de cuentas ante los asociados, órganos de control y demás partes interesadas. Existen diversos tipos de informes financieros, cada uno con objetivos específicos y momentos de aplicación. Según Ortiz Anaya (2018), los principales son:

    .row.mb-5(data-aos="fade-down")
      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#92D8FE")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img-03.svg' alt="Imagen decorativa")
        p.text-center.text-bold.mb-0 Informes contables
      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#E4FFF7")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img-04.svg' alt="Imagen decorativa")
        p.text-center.text-bold.mb-0 Informes presupuestales
      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#92D8FE")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img-05.svg' alt="Imagen decorativa")
        p.text-center.text-bold.mb-0 Informes de ejecución financiera
      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#E4FFF7")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img-06.svg' alt="Imagen decorativa")
        p.text-center.text-bold.mb-0 Informes de gestión financiera

    p.mb-4(data-aos="fade-right") Su correcta elaboración permite evaluar no solo el estado financiero de la organización, sino también la eficiencia en la planeación, asignación y utilización de los recursos disponibles. Por ello, es importante explicar en qué consiste cada uno: 

    .tarjeta.tarjeta--BG02.p-4.p-md-5.mb-5
      LineaTiempoC.color-acento-botones(text-small)(data-aos="flip-up")
        .row(titulo="a.")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Informe contable 
            p Presenta el estado de situación financiera (balance general), el estado de resultados (pérdidas y ganancias) y el estado de cambios en el patrimonio. Este tipo de informe permite conocer la solvencia, liquidez y rentabilidad de la entidad. 
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img-07.png', alt='Texto que describa la imagen')
        .row(titulo="b.")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Informe presupuestal  
            p Compara los valores planeados con los efectivamente ejecutados, permitiendo analizar desviaciones y realizar ajustes oportunos. 
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img-08.png', alt='Texto que describa la imagen')
        .row(titulo="c.")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Informe de ejecución financiera 
            p Está orientado a mostrar cómo se distribuyeron y utilizaron los recursos durante un periodo determinado, vinculando los resultados financieros con las actividades desarrolladas. 
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img-09.png', alt='Texto que describa la imagen')
        .row(titulo="c.")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Informe de gestión financiera
            p Integra la perspectiva técnica con la estrategia organizacional, permitiendo evaluar si el uso de los recursos se alinea con la misión, visión y objetivos institucionales.
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img-10.png', alt='Texto que describa la imagen')

    p.mb-0(data-aos="fade-right") Como lo indica Burbano Ruiz (2011), este tipo de informe es clave en el sector solidario, ya que permite valorar no solo el cumplimiento financiero, sino también el impacto social y comunitario de las decisiones económicas.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_2 3.2 Análisis de estructuras de costos y fuentes de financiación

    p.mb-4(data-aos="fade-left") El análisis de las estructuras de costos es fundamental para comprender cómo se distribuyen los gastos dentro de una organización solidaria y para identificar oportunidades de eficiencia en el uso de los recursos. Según León García (2009), una estructura de costos bien definida permite determinar el punto de equilibrio, calcular márgenes de rentabilidad y evaluar la sostenibilidad financiera de las operaciones. En este sentido, es necesario clasificar los costos entre: 

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img-11.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E4FFF7")
            h4.text-center.mt-5(style="color:#12263F") Fijos
            p.text-center.mb-0(style="color:#12263F") Salarios, arrendamientos y servicios públicos. 
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img-12.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E4FFF7")
            h4.text-center.mt-5(style="color:#12263F") Variables
            p.text-center.mb-0(style="color:#12263F") Materias primas o insumos directos.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img-13.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E4FFF7")
            h4.text-center.mt-5(style="color:#12263F") Costos directos e indirectos 
            p.text-center.mb-0(style="color:#12263F")  Asociados a cada actividad o proyecto.

    p.mb-4(data-aos="fade-left") Esta información resulta clave para la toma de decisiones presupuestales y estratégicas.
    p.mb-4(data-aos="fade-right") Además del análisis de costos, las organizaciones solidarias deben evaluar cuidadosamente sus #[b fuentes de financiación], tanto internas como externas.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/img-14.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              p Las internas pueden incluir excedentes operacionales, fondos mutuales, cuotas de asociados o reinversiones.
      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/img-15.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              p Mientras que las externas comprenden créditos, donaciones, convenios o apoyos estatales. 

    p.mb-4(data-aos="fade-left") Ortiz Anaya (2018) recomienda diversificar las fuentes de financiación para reducir riesgos financieros y aumentar la capacidad de inversión. Por ejemplo, una cooperativa puede financiar un proyecto de emprendimiento con un 60 % de recursos propios y un 40 % proveniente de un convenio con una entidad pública, lo cual le permite mantener control operativo sin comprometer su liquidez.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5(style="background-color:#E4FFF7")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-16.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 El cruce entre el análisis de costos y las fuentes de financiación, permite evaluar la viabilidad de nuevas iniciativas y ajustar la planificación financiera a las condiciones reales de la organización. Burbano Ruiz (2011), señala que esta evaluación debe considerar no solo la rentabilidad esperada, sino también el riesgo financiero, la capacidad de endeudamiento y la alineación con los principios solidarios. Así, un análisis completo contribuye a que las decisiones de asignación de recursos se basen en datos sólidos, con criterios de eficiencia, equidad y sostenibilidad. Esto refuerza la transparencia institucional y fortalece la confianza de los asociados en la gestión financiera de su organización

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_3 3.3 Presentación e interpretación de informes

    p.mb-4(data-aos="fade-right") La presentación clara y estructurada de los informes financieros es un componente esencial para garantizar la transparencia, la comprensión de los resultados y la toma de decisiones informadas en las organizaciones de economía solidaria. Según Burbano Ruiz (2011), un informe financiero no solo debe contener datos contables y presupuestales, sino también una narrativa explicativa que facilite su lectura tanto a personal técnico como a los asociados. Por esta razón, los informes deben incluir apartados como objetivos, metodología de consolidación de la información, resumen ejecutivo, gráficos comparativos, análisis de resultados y recomendaciones, presentados de manera accesible y con lenguaje técnico comprensible.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.color-primario.p-4
          p.mb-0 La forma de presentación también debe ajustarse a los públicos destinatarios. Por ejemplo, un informe financiero dirigido a la asamblea general puede requerir una versión más simplificada, con énfasis en los principales indicadores de gestión y el impacto de la asignación de recursos, mientras que un informe para la junta directiva incluirá detalles más técnicos, análisis de desviaciones presupuestales, proyecciones y alertas financieras. Ortiz Anaya (2018) enfatiza que adaptar el contenido al público receptor, mejora la apropiación de la información y promueve el control social, uno de los pilares del modelo solidario.

    .row.justify-content-center.mb-0
      .col-lg-4.col-sm-7.col-10.mb-4(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema3/img-17.png', alt='Imagen decorativa')
      .col-lg-6.col-sm-7.col-10.mb-4(data-aos="flip-up")
        p(data-aos="fade-right") La interpretación de los informes va más allá de la lectura de cifras; implica analizar qué significan esos datos en el contexto operativo y estratégico de la organización. Por ejemplo, un aumento en los egresos operativos no siempre es negativo si está asociado a un crecimiento en la cobertura de servicios o a una inversión estratégica. Asimismo, una baja ejecución presupuestal puede reflejar ineficiencia o, por el contrario, prudencia financiera ante un contexto incierto. León García (2009), señala que interpretar correctamente los informes, permite tomar decisiones basadas en evidencia, ajustar políticas internas y anticiparse a riesgos financieros.

    p.mb-4(data-aos="fade-left") En el marco de la economía solidaria, la presentación e interpretación de informes no debe verse solo como una práctica contable, sino como un ejercicio de participación democrática. La Ley 79 de 1988 promueve la rendición de cuentas periódica y el acceso equitativo a la información financiera como mecanismos para garantizar la confianza y la responsabilidad colectiva. Por tanto, los informes financieros bien presentados e interpretados son herramientas que fortalecen la gestión institucional, alinean las decisiones con los principios solidarios y fomentan una cultura organizacional basada en la transparencia y el bien común.



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
