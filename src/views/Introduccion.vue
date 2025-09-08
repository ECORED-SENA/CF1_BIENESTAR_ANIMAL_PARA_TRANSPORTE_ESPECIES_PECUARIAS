<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center.mb-5
      .col-xl
        p El transporte de animales en pie constituye una de las etapas más críticas de la cadena productiva pecuaria, pues expone a las especies a condiciones que pueden afectar su bienestar, su salud y, en consecuencia, la calidad de los productos de origen animal. La implementación de principios de bienestar animal durante este proceso responde tanto a un compromiso ético con los seres vivos como a una exigencia técnica, sanitaria y legal en el marco de la producción pecuaria sostenible.
        p.mb-0.style___box_1(data-aos="fade-right").espacio___movil_4 El bienestar animal en el transporte se sustenta en la aplicación de las cinco libertades: ausencia de hambre y sed, ausencia de incomodidades físicas y térmicas, ausencia de dolor, lesiones y enfermedades, libertad para expresar comportamientos propios de la especie y ausencia de miedo y estrés. Estos principios permiten establecer lineamientos prácticos que reducen el sufrimiento, incrementan la productividad y fortalecen la relación entre la actividad pecuaria y la responsabilidad social.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/intro/img1.png', alt='' ).m-auto
    
    .row.align-items-center
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/intro/img2.png', alt='' ).m-auto
      .col-xl
        .row.align-items-center.mb-3
          .col-xl-auto(data-aos="zoom-in")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/intro/img3.png', alt='' ).m-auto
          .col-xl
            p.mb-0 En Colombia, la Ley 1774 de 2016 reconoce a los animales como seres sintientes y establece sanciones por maltrato, mientras que la Resolución ICA 136 de 2020 define los requisitos técnicos para el transporte de animales vivos. Estas normativas fomentan el cumplimiento de estándares de bienestar animal y la aplicación de buenas prácticas pecuarias, incorporando aspectos como densidad de carga, tiempos de viaje, condiciones de los vehículos, evaluación sanitaria y planes de contingencia.
        p.mb-0.style___box_2(data-aos="zoom-in").espacio___movil_4 En este contexto, la capacitación y sensibilización de transportadores, productores y profesionales del sector pecuario resulta esencial para garantizar un transporte seguro, disminuir pérdidas económicas, prevenir riesgos en la inocuidad alimentaria y generar confianza en los consumidores. La implementación de principios de bienestar animal en el transporte de especies pecuarias constituye, en consecuencia, una inversión en sostenibilidad, competitividad y responsabilidad social.
    
</template>

<script>
export default {
  name: 'Introduccion',
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
