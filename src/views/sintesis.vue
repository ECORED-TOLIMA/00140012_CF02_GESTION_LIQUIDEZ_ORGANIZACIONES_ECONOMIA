<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A lo largo de este componente formativo, se exploraron los conceptos, herramientas y buenas prácticas relacionadas con la planeación financiera, la distribución estratégica de recursos y la evaluación del desempeño económico.
    p Se explicó cómo aplicar métodos de asignación en función de prioridades organizacionales, metas colectivas y criterios de eficiencia, respetando siempre los principios de equidad, transparencia y participación democrática. Se abordaron tanto los marcos normativos como las políticas internas que regulan el uso de los recursos, con énfasis en la necesidad de rendición de cuentas, control interno y toma de decisiones basadas en evidencia.
    p.mb-4 Igualmente, se profundizó en el uso e interpretación de informes financieros, indicadores de desempeño y herramientas TIC que facilitan el monitoreo de la gestión. Con ello, se fortaleció la capacidad analítica y la autonomía de los aprendices para ejercer una gestión financiera estratégica, coherente con la misión solidaria, el bienestar colectivo y el desarrollo sostenible de las organizaciones.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis del componente formativo Asignación de recursos en organizaciones solidarias, aborda la organización y control de recursos, destacando la planeación, programación presupuestal y factores que influyen en su asignación. Expone técnicas de distribución, análisis de costos e informes financieros, así como el uso de indicadores, herramientas TIC y normatividad vigente para garantizar eficiencia, transparencia y buenas prácticas en las organizaciones solidarias.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
