<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5(data-aos="fade-left") La asignación eficiente de recursos, constituye un eje central en la sostenibilidad financiera de las organizaciones de economía solidaria. Una correcta planificación, permite alinear los recursos disponibles con los objetivos sociales, productivos y comunitarios, garantizando que cada decisión financiera responda a criterios de equidad, participación democrática y uso racional del capital. En este contexto, la planeación financiera no es solo una herramienta técnica, sino una práctica estratégica que refuerza el compromiso con los principios solidarios.

    .row.justify-content-center.mb-5
      .col-lg-5.col-sm-7.col-10.mb-4(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/introduccion/img-01v1.png', alt='Imagen decorativa')
      .col-lg-5(data-aos="fade-left")
        p Por lo anterior, este componente formativo brinda a los aprendices herramientas para comprender y aplicar técnicas de distribución de recursos, programación presupuestal y evaluación del desempeño financiero en un entorno que exige transparencia y rendición de cuentas. Se abordarán métodos tradicionales y alternativos de asignación, criterios de priorización, estructuras de costos y análisis de informes financieros como insumos fundamentales para una gestión responsable.
        .cajon.cajon.color-primario.p-3.mb-3
          p.mb-0 Asimismo, se promoverá el uso de tecnologías de la información como apoyo al seguimiento y monitoreo de la eficiencia financiera, al tiempo que se profundiza en el marco normativo vigente que rige el uso de los recursos en estas entidades. Con ello, se busca fortalecer la capacidad analítica de los aprendices, promoviendo una cultura organizacional orientada al control, la mejora continua y la sostenibilidad integral de las organizaciones solidarias.

    p.mb-4(data-aos="fade-left") Partiendo de lo anterior, se invita a que acceda al siguiente video, el cual relaciona la temática a tratar durante este componente formativo:
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/a03tJKvN9ug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
