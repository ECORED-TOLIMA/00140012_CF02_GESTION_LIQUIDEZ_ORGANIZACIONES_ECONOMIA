<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Planeación financiera en la economía solidaria

    .row.justify-content-center.mb-5
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img-01.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-right") La planeación financiera en las organizaciones de economía solidaria, es un proceso estratégico mediante el cual se definen, anticipan y organizan los recursos económicos para alcanzar metas sociales, económicas y comunitarias, en armonía con los principios cooperativos. A diferencia de las empresas con fines de lucro, estas entidades priorizan el bienestar colectivo sobre el interés individual, lo que exige una gestión financiera basada en la eficiencia, la equidad y la transparencia. 

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.col-12
        .bloque-texto-f.color-secundario.pt-4.px-5.mb-4(data-aos="fade-right")
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h5.text-regular.bloque-texto-f__texto.text-center.mb-4 La planeación financiera es la herramienta clave para coordinar ingresos, egresos, inversiones y excedentes, con el fin de mantener la estabilidad y el crecimiento sostenido en el tiempo”
          .bloque-texto-f__autor.mb-3
            p.mb-0 #[b - León García (2009)]
          .bloque-texto-f__avatar
            .bloque-texto-f__avatar__img
              img(src='@/assets/curso/temas/tema1/img-10.svg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-right") En este contexto, la planeación no se limita únicamente al presupuesto operativo, sino que incluye también la programación de inversiones, la identificación de fuentes de financiación y el monitoreo de la ejecución financiera. 

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.col-12
        .bloque-texto-f.color-secundario.pt-4.px-5.mb-4(data-aos="fade-right")
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h5.text-regular.bloque-texto-f__texto.text-center.mb-4 La planeación eficaz requiere establecer objetivos claros, jerarquizar necesidades y prever escenarios que permitan tomar decisiones acertadas ante la incertidumbre - Burbano Ruiz (2011).
          .bloque-texto-f__autor.mb-3
            p.mb-0 #[b - Burbano Ruiz (2011)]
          .bloque-texto-f__avatar
            .bloque-texto-f__avatar__img
              img(src='@/assets/curso/temas/tema1/img-11.svg', alt='Imagen decorativa')
    
    p.mb-5(data-aos="fade-right") Por ejemplo, una cooperativa de ahorro y crédito debe planificar sus flujos de caja no solo para cubrir gastos operativos, sino también para garantizar disponibilidad de liquidez para sus asociados, respetando los márgenes regulatorios establecidos por la ley.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(style="background-color:#E4FFF7")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-02.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La Ley 79 de 1988, que regula la economía solidaria en Colombia, establece que estas organizaciones deben manejar sus recursos de forma racional, eficiente y orientada al beneficio común. Este marco legal exige que las decisiones financieras respondan a procesos democráticos y participativos, en los cuales los órganos de dirección y los asociados estén involucrados activamente. Esto significa que la planeación financiera también es un proceso pedagógico y organizativo que fortalece la cohesión institucional y el sentido de pertenencia, consolidando así la sostenibilidad del modelo solidario.

    p.mb-4(data-aos="fade-right") Desde el punto de vista técnico, la planeación financiera es la base para aplicar métodos de asignación de recursos, desarrollar informes financieros pertinentes y establecer indicadores de eficiencia que serán tratados en los siguientes apartados de este componente formativo. Tal como menciona Ortiz Anaya (2018), un adecuado proceso de planeación permite anticiparse a problemas de liquidez y evaluar la capacidad institucional para cubrir compromisos futuros.

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.color-primario.p-4
          p.mb-0 La planeación no es un fin en sí mismo, sino un instrumento articulador que integra políticas contables, gestión presupuestal y toma de decisiones estratégicas en función de las particularidades de cada organización solidaria.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1 Definición y propósito de la planeación financiera

    p.mb-4(data-aos="fade-right") La planeación financiera es el proceso mediante el cual una organización define sus objetivos económicos y traza estrategias para alcanzarlos, anticipando los recursos que necesita, las fuentes de financiación y los riesgos asociados. De acuerdo con León García (2009), esta herramienta permite proyectar el comportamiento financiero de una empresa en el corto, mediano y largo plazo, a través del análisis sistemático de ingresos, gastos, inversiones y necesidades de capital. En el caso de las organizaciones de economía solidaria, este proceso adquiere un enfoque colectivo, ya que debe responder a los intereses de todos los asociados y respetar los principios de equidad, solidaridad y autogestión.

    .row.justify-content-center.mb-4
      .col-lg-5.col-sm-7.col-10.order-lg-1.order-2(data-aos="fade-right")
        .cajon.cajon1.color-primario.p-3.mb-3.order-lg-1.order-2
          p.mb-0 El propósito fundamental de la planeación financiera es garantizar la sostenibilidad de la organización y el cumplimiento de su misión social. Esto implica anticiparse a posibles desequilibrios de liquidez, administrar eficientemente los excedentes, tomar decisiones informadas sobre inversiones y mantener el equilibrio entre ingresos y egresos. Tal como plantea Burbano Ruiz (2011), una planeación bien estructurada permite tomar decisiones oportunas para optimizar el uso de los recursos y evitar improvisaciones que puedan comprometer la viabilidad financiera. En una cooperativa, por ejemplo, la planeación financiera debe contemplar la distribución equitativa de excedentes y la cobertura de riesgos asociados al crédito o a la operación social.
      .col-lg-5.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img-03.svg', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-right") En las organizaciones solidarias, la planeación financiera también cumple una función educativa y participativa. Su elaboración involucra a los órganos de dirección, los comités financieros y, en muchos casos, a los asociados, promoviendo la transparencia en la gestión y la rendición de cuentas. Según lo dispuesto en la Ley 79 de 1988, estas entidades deben aplicar principios democráticos en sus procesos de toma de decisiones, lo que refuerza la importancia de una planeación consensuada y orientada al bienestar colectivo. En resumen, la planeación financiera no solo permite asegurar la salud económica de la organización, sino que también fortalece su gobernabilidad y su compromiso con el desarrollo comunitario.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2 Importancia de la programación presupuestal y operativa

    p(data-aos="fade-right") La programación presupuestal y operativa es una herramienta clave para la gestión eficiente de los recursos en las organizaciones solidarias, ya que permite planear, coordinar y controlar las actividades financieras y operativas con base en metas y objetivos definidos. Según Burbano Ruiz (2011), el presupuesto representa una expresión cuantitativa del plan de acción de una organización, estableciendo límites de gasto, fuentes de ingreso y proyecciones de resultados. Cuando está adecuadamente articulado con la programación operativa, permite alinear los recursos con las actividades misionales, garantizando el cumplimiento de los fines sociales y económicos de la entidad.
    p.mb-5(data-aos="fade-left") La importancia de esta programación radica en su capacidad para anticipar desequilibrios financieros y operativos, y corregirlos a tiempo. Por ejemplo: 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.position-relative
        .avatar
          figure
            img(src="@/assets/curso/temas/tema1/img-07.svg", alt="Imagen decorativa").img260
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/img-04.svg", alt="Imagen decorativa").img100
            .col
              p Si una cooperativa proyecta ingresos mensuales por $30.000.000 y egresos por $28.000.000, se esperaría un excedente de $2.000.000. 
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/img-05.svg", alt="Imagen decorativa").img100
            .col
              p Sin embargo, si en el segundo mes se incrementan los egresos a $32.000.000 debido a un aumento en los costos operativos no previstos, se genera un déficit de $2.000.000 que impacta negativamente la liquidez. 
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/img-06.svg", alt="Imagen decorativa").img100
            .col
              p Esta situación podría haberse evitado mediante una adecuada programación operativa que identificara riesgos y costos variables. De allí que la programación presupuestal deba ir acompañada de monitoreo constante y ajustes periódicos.

    p(data-aos="fade-left") Además, la programación permite establecer prioridades y asignar recursos de forma racional, especialmente en contextos donde la disponibilidad financiera es limitada. León García (2009), señala que el uso estratégico del presupuesto posibilita decidir qué actividades deben realizarse, cuándo y con qué recursos, asegurando una ejecución eficiente del plan operativo anual. Por ejemplo, si una asociación solidaria define como prioridad la capacitación de sus miembros, podrá asignar $10.000.000 de su presupuesto anual a este fin, distribuidos en cuatro jornadas de formación trimestrales de $2.500.000 cada una. Esta previsión facilita no solo la gestión contable, sino también la evaluación del impacto social de cada decisión presupuestal.
    p.mb-4(data-aos="fade-right") Finalmente, la programación presupuestal y operativa es indispensable para evaluar el desempeño organizacional y fortalecer la cultura financiera interna. Ortiz Anaya (2018), destaca que una organización que presupuestalmente planifica sus actividades es más eficiente, más transparente y tiene mejores condiciones para el análisis financiero posterior. Además, la programación facilita la rendición de cuentas a los asociados y entes de control, consolidando la confianza en la gestión administrativa. 

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.color-primario.p-4
          p.mb-0 No se trata solo de elaborar un presupuesto como documento, sino de integrar este ejercicio dentro de un sistema de gestión integral, participativo y basado en la mejora continua.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3 Factores que afectan la asignación de recursos

    p.mb-4(data-aos="fade-right") La asignación de recursos en organizaciones de economía solidaria no es un proceso estático ni meramente técnico; está influenciada por una serie de factores internos y externos que deben ser analizados cuidadosamente; destacando de cada uno:  

    TabsC.color-acento-botones.mb-4(data-aos="flip-up")
      .py-3.py-md-4(titulo="Factores internos")
        .row.justify-content-center.p-4
          .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/img-08.png', alt='Imagen decorativa')
          .col-lg-6.order-lg-2.order-2
            p Se destacan la capacidad financiera, el plan estratégico, la estructura organizacional y el nivel de eficiencia administrativa. Como lo expone León García (2009), la toma de decisiones financieras debe partir de un diagnóstico integral que considere los ingresos disponibles, los costos operativos y las prioridades establecidas por la organización. Si una cooperativa no cuenta con información confiable y actualizada sobre su flujo de caja o su estructura de costos, corre el riesgo de asignar recursos de manera ineficiente, afectando su sostenibilidad y capacidad de cumplimiento de su misión social.
      .py-3.py-md-4(titulo="Factores externos")
        .row.justify-content-center.p-4
          .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/img-09.png', alt='Imagen decorativa')
          .col-lg-6.order-lg-2.order-2
            p El entorno económico, la normatividad vigente, las políticas públicas y el acceso a fuentes de financiamiento, también inciden directamente en la distribución de los recursos. La Ley 79 de 1988, por ejemplo, establece principios y lineamientos para la operación de entidades del sector solidario, los cuales pueden limitar o condicionar el uso de determinados fondos, especialmente cuando existen restricciones legales para el uso de excedentes o reservas. Asimismo, fenómenos macroeconómicos como la inflación o la devaluación afectan el poder adquisitivo de los recursos presupuestados, obligando a las organizaciones a realizar ajustes periódicos en sus planes financieros.

    p.mb-4(data-aos="fade-right") Adicionalmente, la cultura organizacional y el nivel de participación de los asociados en las decisiones financieras, influyen en cómo y para qué se asignan los recursos. Burbano Ruiz (2011) destaca que una planeación financiera eficiente en el contexto solidario, debe contemplar mecanismos de concertación y evaluación participativa que garanticen la coherencia entre las decisiones económicas y los valores del cooperativismo. Así, la asignación de recursos no solo responde a criterios de rentabilidad o eficiencia, sino también a principios de equidad, solidaridad y responsabilidad social, los cuales son fundamentales para el éxito y la legitimidad de estas organizaciones.






































</template>

<script>
export default {
  name: 'Tema1',
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
