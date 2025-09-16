<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Estrés por transporte en los animales
    
    p.mb-5 El estrés por transporte constituye un desafío significativo en la producción animal, ya que afecta tanto el bienestar como la salud, la productividad y la calidad de los productos de origen animal. Este fenómeno resulta de múltiples factores ambientales, físicos, fisiológicos y humanos, que alteran el equilibrio interno del organismo animal durante su movilización.

    .row
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img119.png', alt='').m-auto
      .col-xl
        .row.align-items-center.mb-3.m-0
          .col-xl.style___box_8(data-aos="zoom-in")
            p.mb-0 El estrés por transporte se define como un estado de alteración fisiológica, conductual y metabólica que ocurre cuando los animales son expuestos a condiciones adversas durante su traslado desde el lugar de origen hasta el destino final. Estas condiciones rompen la homeostasis del organismo, generando respuestas neuroendocrinas como la liberación de cortisol, adrenalina y noradrenalina que predisponen al deterioro de la salud, la pérdida de productividad y la disminución en la calidad del producto final.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img120.svg', alt='' style="max-width: 180px").m-auto
        .bloque-texto-b.color-primario.mb-5(data-aos="zoom-in").espacio___movil_4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h3.mb-0 Desde la perspectiva del bienestar animal, el transporte es uno de los momentos de mayor riesgo, ya que los animales enfrentan un ambiente desconocido, cambios de rutina, manipulación intensa y falta de control sobre su entorno.
            i.fas.fa-quote-right

    <!-- BLOQUE 1 -->
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Causas principales del estrés durante el transporte

    p.mb-4 Las causas del estrés en el transporte se agrupan en cuatro grandes categorías, según su origen y tipo de impacto sobre los animales:

    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Factores ambientales
                p.mb-0 Cambios bruscos de temperatura y humedad, golpe de calor o hipotermia, ventilación deficiente que favorece la acumulación de gases como amoníaco y CO₂, exposición directa al sol o a la lluvia.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img121.png', alt='' ).m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Factores físicos del transporte
                p.mb-0 Vibraciones, ruidos, frenadas bruscas, curvas cerradas, viajes largos sin pausas, densidad inadecuada de carga (hacinamiento o espacio excesivo).
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img122.png', alt='' ).m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Factores relacionados con el manejo humano
                p.mb-0 Maltrato físico, uso de picanas eléctricas, rampas mal diseñadas, personal sin formación en bienestar animal, desconocimiento de normativas como la Resolución ICA 136 de 2020.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img123.png', alt='' ).m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Condiciones propias del animal
                p.mb-0 Estado fisiológico (gestación, enfermedad, edad), temperamento nervioso o poca experiencia con humanos, sensibilidad específica por especie o raza (p. ej., bovinos europeos).
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img124.png', alt='' ).m-auto

    <!-- BLOQUE 2 -->
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Manifestaciones clínicas del estrés por transporte
    
    p.mb-4 El estrés puede manifestarse en diferentes niveles: conductual, fisiológico, metabólico y clínico. La detección oportuna de estos signos permite tomar medidas correctivas que eviten el deterioro del estado del animal.

    .fondo___color_8
      .px-5

        .fondo___img
          .px-5
            .row.align-items-center
              .col-xl-4(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img125.png', alt='' style="max-width: 350px").m-auto
              .col-xl-8(data-aos="fade-left")
                SlyderF(columnas="col-lg-6 col-xl-6")
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img126.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Conductuales
                    p.mb-0 Inquietud, vocalización excesiva, resistencia al movimiento, agresividad, postración o apatía.

                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img127.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Fisiológicas
                    p.mb-0 Aumento de frecuencia cardiaca y respiratoria, hipertermia, sudoración excesiva, temblores, jadeo, salivación.

                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img128.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Metabólicas
                    p.mb-0 Pérdida de glucógeno muscular (afecta la calidad de la carne), deshidratación, desequilibrio electrolítico, inmunosupresión por cortisol elevado.
                  
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img129.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Clínicas
                    p.mb-0 Lesiones externas como hematomas, heridas, fracturas; abortos en hembras gestantes; mortalidad, especialmente en aves y cerdos.
    
        <!-- BLOQUE 3 -->
        Separador
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.3 Consecuencias del estrés por transporte
        
        p.mb-4 Las consecuencias del estrés no solo impactan directamente al animal, sino que también afectan al sistema productivo, la salud pública y la economía del productor. A continuación se detallan sus efectos más relevantes:

        .bg--img_03.mb-5
          .row.h-100.align-items-center
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
                .row(titulo="En el bienestar animal").ajuste-cajaAcordion
                  p.mb-0 Dolor, sufrimiento, miedo, aumento de la susceptibilidad a enfermedades, violación de las cinco libertades del bienestar animal.
                .row(titulo="En la salud").ajuste-cajaAcordion
                  p.mb-0  Inmunosupresión, aparición de enfermedades respiratorias como neumonías, enteritis, mastitis y reactivación de enfermedades latentes.
                .row(titulo="En la productividad").ajuste-cajaAcordion
                  p.mb-0 Pérdida de peso, disminución de la producción de leche (hasta un 30 % en vacas lecheras), mayor mortalidad en especies sensibles como pollos y lechones.
                .row(titulo="En la calidad del producto final").ajuste-cajaAcordion
                  p.mb-0  Aparición de carne DFD (oscura, firme y seca) por agotamiento de glucógeno, carne PSE (pálida, blanda y exudativa), mayor cantidad de decomisos y riesgo de contaminación por patógenos zoonóticos como <em>Salmonella, E. coli y Campylobacter</em>.
                .row(titulo="En lo económico").ajuste-cajaAcordion
                  p.mb-0 Pérdida de competitividad en mercados que exigen estándares de bienestar, costos por mortalidad y decomisos, deterioro de la imagen del productor ante los consumidores.
            .col-xl-auto
              figure(data-aos="fade-left").d-none.d-xl-block
                img(src="@/assets/curso/temas/img131.png", alt="" style="width: 382px").m-auto

        p.mb-4.espacio___movil_1 El estrés por transporte es un fenómeno complejo y multidimensional que compromete la fisiología, el comportamiento y el estado sanitario de los animales, así como la calidad e inocuidad de los productos pecuarios. Su prevención depende de una adecuada combinación de capacitación, infraestructura, manejo y cumplimiento normativo.

        .row.align-items-center
          .col-xl
            p Las estrategias clave para prevenir este tipo de estrés incluyen la formación del personal en bienestar animal y legislación vigente, el uso de vehículos diseñados especialmente para transporte pecuario (con ventilación, espacio suficiente y rampas seguras), y una planificación logística que contemple rutas cortas, descansos periódicos y disponibilidad de agua y alimento. Además, es fundamental la aplicación rigurosa de la Resolución ICA 136 de 2020, la Ley 1774 de 2016 y las directrices internacionales de la OIE y la Unión Europea.
            .row.align-items-center.m-0.style___box_4.ajuste___box_4_3.mb-3(data-aos="zoom-in")
              .col-xl-auto(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img132.png', alt='' ).m-auto
              .col-xl
                p.mb-0 De esta manera, se protege el bienestar de los animales, se garantiza el cumplimiento legal y se asegura la calidad, inocuidad y aceptación de los productos por parte de los consumidores.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img82.png', alt='' style="max-width: 400px").m-auto    

</template>

<script>
export default {
  name: 'Tema5',
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
