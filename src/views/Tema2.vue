<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Técnicas de distribución de recursos

    .row.justify-content-center.mb-5
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img-01.png', alt='Imagen decorativa')
    
    p.mb-5(data-aos="fade-right") La distribución eficiente de los recursos financieros es una tarea fundamental en la gestión de las organizaciones solidarias, ya que determina el alcance de los objetivos operativos y sociales. Para ello, se utilizan diversas técnicas que permiten asignar los recursos disponibles de forma racional y alineada con las prioridades institucionales. Según Burbano Ruiz (2011), estas técnicas deben garantizar el equilibrio entre las necesidades internas y las posibilidades económicas reales, evitando desequilibrios presupuestales que comprometan la sostenibilidad. Algunas de las técnicas más utilizadas incluyen la asignación porcentual, la programación por objetivos y la matriz de priorización, herramientas que facilitan una toma de decisiones basada en evidencia y criterios estratégicos. A continuación, se ahonda un poco sobre ellas: 

    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        AcordionA.mb-4(tipo="b" clase-tarjeta="tarjeta tarjeta--C01")
          .row(titulo="Técnica de asignación porcentual")
            .col-lg-12.order-lg-1.order-2
              p Consiste en distribuir los recursos de acuerdo con proporciones previamente definidas para cada área o proyecto. Por ejemplo, una cooperativa puede decidir que el 40 % de su presupuesto anual se destine a operaciones, el 30 % a desarrollo social, el 20 % a inversiones y el 10 % a gastos administrativos. Este método es útil cuando se quiere garantizar equilibrio y control en el uso del presupuesto, pero debe ser flexible para ajustarse a cambios en las condiciones internas o externas.
          .row(titulo="Técnica basada en objetivos")
            .col-lg-12.order-lg-1.order-2
              p Asigna recursos de acuerdo con los resultados esperados, permitiendo una vinculación directa entre el plan financiero y el impacto organizacional. Ortiz Anaya (2018) señala que esta metodología mejora la eficiencia y la transparencia, al facilitar la medición del desempeño financiero con base en metas alcanzadas.
          .row(titulo="Matriz de priorización")
            .col-lg-12.order-lg-1.order-2
              p Permite evaluar y clasificar las necesidades o proyectos según criterios como urgencia, impacto social, disponibilidad de recursos y alineación con el plan estratégico. Esta técnica es especialmente útil en escenarios de escasez o incertidumbre, donde es necesario tomar decisiones difíciles sobre qué financiar primero. 

      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img-02.png' alt="Imagen decorativa")

    p.mb-5(data-aos="fade-left")  En el contexto de la economía solidaria, la distribución de recursos también debe estar guiada por principios éticos, como la equidad y la solidaridad, lo que implica considerar no solo la rentabilidad financiera, sino también el valor social de cada acción.

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.col-12
        .bloque-texto-f.color-secundario.pt-4.px-5(data-aos="fade-right")
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h5.text-regular.bloque-texto-f__texto.text-center.mb-4 Las organizaciones que adoptan criterios mixtos de evaluación —económicos y sociales— logran una mayor sostenibilidad y legitimidad en el tiempo.
          .bloque-texto-f__autor.mb-3
            p.mb-0 #[b - León García (2009)]
          .bloque-texto-f__avatar
            .bloque-texto-f__avatar__img
              img(src='@/assets/curso/temas/tema2/img-03.svg', alt='Imagen decorativa')

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Métodos tradicionales y alternativos de asignación

    p.mb-5(data-aos="fade-right") En la gestión financiera de las organizaciones solidarias, la asignación de recursos se puede realizar mediante métodos tradicionales o enfoques alternativos que respondan a la realidad específica de cada entidad. Los métodos tradicionales son aquellos que se basan en la experiencia histórica, la proporcionalidad presupuestal y la ejecución previa. Entre estos métodos se pueden encontrar: 

    .row.justify-content-center.ali.mb-4(data-aos="fade-left")
      .col-lg-12(data-aos="fade-down")
        .tarjeta--container.row.mb-3
          .col-xl.col-md-6.tarjeta.color-primario.p-5(style="background-color:#D5F1FF")
            .row.justify-content-center.mb-3
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/temas/tema2/img-04.svg', alt='Imagen decorativa')
            h4.text-center.mb-5 Incremental
            p.mb-0 Es uno de los más métodos comunes y consiste en tomar como base el presupuesto del periodo anterior y ajustarlo con incrementos o reducciones porcentuales. Por ejemplo, si el área educativa de una cooperativa recibió $10.000.000 en 2024 y se proyecta un aumento del 5 %, se le asignarán $10.500.000 para 2025. Este método es práctico, pero puede ignorar cambios estructurales o nuevas prioridades.
          .col-xl.col-md-6.tarjeta.color-secundario.p-5(style="background-color:#E4FFF7")
            .row.justify-content-center.mb-3
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/temas/tema2/img-05.svg', alt='Imagen decorativa')
            h4.text-center.mb-5 Porcentajes fijos
            p.mb-0 Distribuye los recursos, según reglas establecidas por estatutos o decisiones de la asamblea. Por ejemplo, una organización solidaria puede definir que cada año el 25 % de los excedentes se reinvierta en proyectos comunitarios, el 15 % se destine al fondo de solidaridad y el 60 % se reparta entre los asociados. Este sistema promueve estabilidad, pero puede limitar la flexibilidad financiera en escenarios de crisis o expansión.
    
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.color-primario.p-4
          p.mb-0 León García (2009) destaca que, aunque estos métodos aseguran continuidad, deben revisarse periódicamente para que sigan siendo coherentes con el entorno y la misión institucional.

    p.mb-4(data-aos="fade-right") En contraposición, los #[b métodos alternativos] buscan una asignación más estratégica, vinculada directamente con los objetivos del plan operativo y los impactos esperados. Entre ellos se pueden encontrar:

    TabsC.color-acento-botones.mb-4(data-aos="flip-up")
      .py-3.py-md-4(titulo="Presupuesto base cero")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema2/img-06.png', alt='Imagen decorativa')
          .col-lg-5.order-lg-2.order-2
            p Implica justificar cada gasto desde cero, sin depender del historial. Esto obliga a evaluar la pertinencia y eficiencia de cada actividad antes de aprobar recursos. Por ejemplo, si el comité administrativo propone un evento de capacitación por $8.000.000, deberá demostrar su necesidad, población objetivo, beneficios esperados y retorno social, antes de ser aprobado. Este enfoque promueve la eficiencia, pero requiere mayor esfuerzo analítico y participación de los responsables de cada área.
      .py-3.py-md-4(titulo="Asignación por resultados")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema2/img-07.png', alt='Imagen decorativa')
          .col-lg-5.order-lg-2.order-2
            p Distribuye recursos con base en el cumplimiento de metas. Por ejemplo, un fondo de apoyo a emprendimientos solidarios puede establecer que cada unidad productiva que genere al menos $5.000.000 en ventas trimestrales reciba una bonificación adicional de $2.000.000 para reinversión. Ortiz Anaya (2018) afirma que este modelo fomenta el desempeño y facilita la evaluación del impacto social y financiero. 
    
    p(data-aos="fade-right") En el contexto de la economía solidaria, la combinación de métodos tradicionales y alternativos permite diseñar esquemas de asignación más equitativos, flexibles y orientados al logro de resultados sostenibles.
    p.mb-4(data-aos="fade-left") Para complementar lo anterior, a continuación, se detallan de manera específica y ejemplifican dichos métodos:

    .row.justify-content-center(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span  #[i Métodos de asignación]
        .tabla-a.color-acento-contenido
          table
            thead
              tr(style="background-color: #FFFAE6")
                th(data-aos="fade-down")(style="width: 16%") Tipo de método
                th(data-aos="fade-down")(style="width: 16%") Nombre del método
                th(data-aos="fade-down")(style="width: 16%") Descripción
                th(data-aos="fade-down")(style="width: 16%") Ejemplo
                th(data-aos="fade-down")(style="width: 16%") Ventajas
                th(data-aos="fade-down")(style="width: 16%") Limitaciones
            tbody
              tr
                td(data-aos="fade-down") Tradicional
                td.text-center(data-aos="fade-down") Incremental.
                td(data-aos="fade-down") Se parte del presupuesto del periodo anterior y se ajusta con un incremento o reducción porcentual.
                td(data-aos="fade-down") Área educativa recibió $10.000.000 en 2024; para 2025 se proyecta +5 % → $10.500.000.
                td(data-aos="fade-down") Práctico y fácil de aplicar. Mantiene estabilidad.
                td(data-aos="fade-down") Ignora cambios estructurales o nuevas prioridades.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6;") Tradicional
                td.text-center(data-aos="fade-down")(style="background-color: #F6F6F6;") Porcentajes fijos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6;") Distribuye recursos según reglas establecidas por estatutos o asamblea.
                td(data-aos="fade-down")(style="background-color: #F6F6F6;") 25 % excedentes → proyectos comunitarios; 15 % → fondo de solidaridad; 60 % → asociados.
                td(data-aos="fade-down")(style="background-color: #F6F6F6;") Asegura continuidad y estabilidad. Fácil de prever.
                td(data-aos="fade-down")(style="background-color: #F6F6F6;") Poca flexibilidad ante crisis o expansión.
              tr
                td(data-aos="fade-down") Alternativo
                td.text-center(data-aos="fade-down") Presupuesto base cero.
                td(data-aos="fade-down") Cada gasto se justifica desde cero, sin depender del historial.
                td(data-aos="fade-down") Evento de capacitación $8.000.000 → se debe demostrar necesidad, población objetivo, beneficios y retorno social.
                td(data-aos="fade-down") Promueve eficiencia y pertinencia del gasto.
                td(data-aos="fade-down") Mayor esfuerzo analítico y de gestión.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6;") Alternativo
                td.text-center(data-aos="fade-down")(style="background-color: #F6F6F6;") Asignación por resultados.
                td(data-aos="fade-down")(style="background-color: #F6F6F6;") Recursos distribuidos con base en el cumplimiento de metas.
                td(data-aos="fade-down")(style="background-color: #F6F6F6;") Unidad productiva con ventas ≥ $5.000.000/ trimestre recibe $2.000.000 extra para reinversión.
                td(data-aos="fade-down")(style="background-color: #F6F6F6;") Incentiva el desempeño y facilita medir impacto.
                td(data-aos="fade-down")(style="background-color: #F6F6F6;") Puede desincentivar áreas con resultados menos cuantificables.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2 Selección de prioridades según necesidades y metas

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(style="background-color:#E4FFF7")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-08.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La selección de prioridades en la asignación de recursos financieros, es un proceso clave que permite orientar la ejecución presupuestal hacia los objetivos estratégicos de la organización. En las entidades de economía solidaria, esta selección debe partir del análisis de las necesidades reales de los asociados, del diagnóstico financiero (especialmente del flujo de caja y la liquidez), y de los compromisos adquiridos en los planes de desarrollo. Según León García (2009), priorizar adecuadamente permite usar los recursos escasos de forma eficiente, maximizando el valor social y económico de cada decisión. La identificación de prioridades no debe basarse en criterios subjetivos, sino en datos verificables, evaluaciones técnicas y procesos participativos.

    p(data-aos="fade-left") Para lograr una selección adecuada, muchas organizaciones recurren a instrumentos como las matrices de priorización, donde se clasifican las necesidades según criterios como urgencia, impacto, viabilidad, costo y alineación con la misión institucional. Por ejemplo, si una cooperativa debe decidir entre renovar equipos tecnológicos ($15.000.000), ofrecer formación a sus asociados ($10.000.000) o invertir en infraestructura ($25.000.000), puede asignar puntajes a cada opción según los criterios anteriores. Al final, la formación podría tener mayor urgencia e impacto a corto plazo, lo que justificaría su prioridad sobre las demás. Este enfoque permite tomar decisiones objetivas y con respaldo técnico, evitando conflictos y favoreciendo la transparencia en el uso de los recursos.
    p.mb-4(data-aos="fade-right") Desde la perspectiva de la economía solidaria, la selección de prioridades debe también responder a principios éticos y sociales, como:

    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0
        .row.justify-content-center.h-100.w-100
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.bg-color-1.p-0.h-100
              img.h-100.my-auto(src='@/assets/curso/temas/tema2/img-09.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.bg-color-2.p-4.h-100
              p.mb-0 #[b Equidad]
      .col-lg-4.mb-4.mb-lg-0
        .row.justify-content-center.h-100.w-100
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.bg-color-1.p-0.h-100
              img.h-100.my-auto(src='@/assets/curso/temas/tema2/img-10.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.bg-color-2.p-4.h-100
              p.mb-0 #[b Participación]    
      .col-lg-4.mb-4.mb-lg-0
        .row.justify-content-center.h-100.w-100
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.bg-color-1.p-0.h-100
              img.h-100.my-auto(src='@/assets/curso/temas/tema2/img-11.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.bg-color-2.p-4.h-100
              p.mb-0 #[b Solidaridad]

    p.mb-0(data-aos="fade-right") Burbano Ruiz (2011), señala que las metas institucionales no pueden reducirse a indicadores financieros, sino que deben integrarse con los fines sociales y comunitarios de la organización. Por ello, el proceso de priorización debe involucrar a los órganos de gobierno, los comités financieros y, en lo posible, a la base social, para asegurar que los recursos se asignen de acuerdo con las necesidades colectivas y no por intereses particulares. Esta participación fortalece la legitimidad institucional y promueve una cultura organizacional basada en el bien común.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_3 2.3 Evaluación del uso eficiente de los recursos

    p.mb-5(data-aos="fade-right") La evaluación del uso eficiente de los recursos en las organizaciones de economía solidaria, es fundamental para verificar si las decisiones financieras contribuyen realmente al cumplimiento de los objetivos institucionales y al bienestar colectivo. Esta evaluación permite determinar si los recursos fueron empleados conforme a lo planeado, si generaron los resultados esperados y si se hizo un uso racional y transparente del presupuesto disponible.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .bloque-texto-f.color-secundario.pt-4.px-5(data-aos="fade-right")
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h5.text-regular.bloque-texto-f__texto.text-center.mb-4 “Evaluar la eficiencia implica analizar no solo cuánto se gastó, sino qué impacto tuvo ese gasto en términos de productividad, cobertura social o mejora organizacional.”
          .bloque-texto-f__autor.mb-3
            p.mb-0 #[b - Ortiz Anaya (2018)]
          .bloque-texto-f__avatar
            .bloque-texto-f__avatar__img
              img(src='@/assets/curso/temas/tema2/img-12.svg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade-left")  Un aspecto clave en esta evaluación es el uso de indicadores financieros y sociales:  

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img-13.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              h4 Indicadores financieros
              p.mb-0 Se encuentran indicadores como el rendimiento del capital, el grado de ejecución presupuestal o el costo-beneficio por unidad de servicio. 
      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img-14.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              h4 Indicadores sociales
              p.mb-0 Se consideran variables como la satisfacción de los beneficiarios, el cumplimiento de metas sociales o la equidad en la distribución del beneficio, lo cual refuerza el enfoque solidario.

    .row.justify-content-center.mb-4
      .col-lg-8.col-sm-7.col-10.order-lg-1.order-2(data-aos="fade-right")
        .cajon-b.color-primario.p-3.mb-5(data-aos="fade-right")
          p Además, la evaluación del uso de los recursos debe estar integrada en un ciclo continuo de mejora. Esto implica no solo medir resultados al final del periodo presupuestal, sino también realizar seguimientos periódicos que permitan hacer ajustes a tiempo. Burbano Ruiz (2011), plantea que el control financiero debe ser preventivo, correctivo y prospectivo. Por ello, herramientas como los informes de gestión financiera, las auditorías internas y las reuniones de seguimiento presupuestal son esenciales para mantener la transparencia y asegurar que los recursos estén alineados con el plan estratégico y operativo.
          p.mb-0 Finalmente, desde el enfoque de la economía solidaria, la evaluación también cumple una función ética y formativa. La Ley 79 de 1988 promueve la rendición de cuentas y la participación democrática como pilares del modelo cooperativo. Evaluar el uso eficiente de los recursos no solo busca optimizar el gasto, sino también fortalecer la confianza entre los asociados y fomentar una cultura de responsabilidad colectiva. Por eso, los procesos de evaluación deben ser participativos, comunicados con claridad y utilizados como base para la planeación futura, consolidando así una gestión integral y comprometida con el desarrollo solidario.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/img-15.png', alt='Imagen decorativa')



</template>

<script>
export default {
  name: 'Tema2',
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
