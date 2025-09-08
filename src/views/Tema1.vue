<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Especies pecuarias
    
    .row.align-items-center.mb-5.m-0.style___box_3(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img1.png', alt='' ).m-auto
      .col-xl
        p.mb-0 Las <strong>especies pecuarias</strong> son animales domesticados y criados por el ser humano con fines productivos, comerciales y de subsistencia. Representan un pilar fundamental de la actividad agropecuaria, ya que no solo garantizan el abastecimiento de alimentos de origen animal, sino que también aportan materias primas, servicios y subproductos esenciales para el desarrollo de las comunidades rurales y urbanas.
    
    p.mb-4 Su importancia radica en que constituyen una fuente sostenible de proteína animal, contribuyen al desarrollo económico y cumplen un papel destacado en la cultura, tradiciones y seguridad alimentaria de los pueblos. A continuación, se presentan los aportes de los animales: 

    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Alimentos
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Carne</strong>: bovina, porcina, ovina, caprina, aviar.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Leche y derivados</strong>: quesos, yogures, mantequilla.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Huevos</strong>: principalmente de aves de postura.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Miel y productos apícolas</strong>: cera, jalea real.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img3.png', alt='' ).m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Materias primas
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Fibras textiles</strong>: lana de oveja, pelo de cabra (cashmere, mohair), crin de caballo.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Cueros y pieles</strong>: bovinos, porcinos y caprinos (industria del calzado y marroquinería).</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Plumas y subproductos avícolas</strong>: utilizados en textiles y artesanías.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img4.png', alt='' ).m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Servicios
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Fuerza de trabajo</strong>: tracción animal (bueyes, caballos, mulas).</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Transporte</strong>: uso tradicional de equinos y mulares en zonas rurales.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Deporte y recreación</strong>: equinos en competencias ecuestres, caninos en actividades recreativas o de seguridad.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Turismo rural y cultural</strong>: cabalgatas, ferias ganaderas, exposiciones.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img6.png', alt='' ).m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Subproductos
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Estiércol</strong>: abono orgánico en cultivos.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Biogás</strong>: residuos animales como fuente de energía renovable.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Derivados industriales</strong>: grasas, huesos y sangre (industria farmacéutica, cosmética y alimentaria).</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img5.png', alt='' ).m-auto

    .fondo___color
      .px-5
        <!-- BLOQUE 1 -->
        Separador
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Importancia del manejo adecuado

        p.mb-4 El manejo responsable y sostenible de las especies pecuarias es clave para asegurar beneficios tanto para los animales como para los seres humanos. A continuación, se destacan sus principales beneficios:
        
        .row.justify-content-center
          .col-xl-10
            .row.align-items-center.m-0
              .col-xl-auto(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img8.png', alt='' ).m-auto
              .col-xl.style___box_3.ajuste___box_3(data-aos="fade-left")
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Seguridad alimentaria</strong>: disponibilidad constante de alimentos nutritivos, inocuos y accesibles.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Sostenibilidad económica</strong>: fuente de empleo, comercio e ingresos para pequeños, medianos y grandes productores.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Bienestar animal y humano</strong>: prácticas que reducen el sufrimiento, mejoran la salud animal y elevan la calidad de los productos.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Conservación ambiental</strong>: sistemas productivos compatibles con el medio ambiente, como la ganadería sostenible y el uso de abonos orgánicos.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Desarrollo social y cultural</strong>: fortalecimiento de la identidad rural y promoción de actividades comunitarias asociadas a la producción pecuaria.</li>
                </ul>
      
        <!-- BLOQUE 2 -->
        Separador
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Clases principales de especies pecuarias

        p.mb-4 Las siguientes especies representan las principales clases pecuarias por su importancia productiva, económica, ambiental y sociocultural. Cada una aporta productos alimenticios, materias primas, servicios y subproductos relevantes para diversas comunidades y sistemas agropecuarios.
    
    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-3 Bovinos (Bos taurus, Bos indicus)
                p.mb-3 Base de la ganadería en muchas regiones del mundo.
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Producción de carne</strong>: razas como brahman, angus, hereford, nelore; productos como cortes rojos, vísceras, sebo y subproductos industriales.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Producción de leche</strong>: razas como holstein, jersey, pardo suizo, gyr lechero; leche fluida, queso, yogur, mantequilla, leche en polvo.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Subproductos</strong>: cuero, estiércol (fertilizante y biogás), gelatina, colágeno.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Servicios</strong>: tracción y arado en algunas regiones.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img9.png', alt='' ).m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-3 Porcinos (Sus scrofa domesticus)
                p.mb-3 Alta eficiencia alimenticia y producción de proteína animal.
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Producción de carne</strong>: chuletas, jamón, tocino, costilla, embutidos; muy demandados en zonas urbanas.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Derivados</strong>: manteca, piel para cuero fino, huesos y vísceras para balanceados.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Uso en farmacéutica</strong>: insulina, enzimas digestivas.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img10.png', alt='' ).m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-3 Ovinos y caprinos (Ovis aries, Capra hircus)
                p.mb-3 Adaptados a climas áridos y zonas de difícil acceso.
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Producción de carne</strong>: cordero y cabrito, valorados por su sabor.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Producción de leche</strong>: base de quesos artesanales como el queso de cabra, manchego y feta.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Materias primas</strong>: lana y cuero (ovinos), pieles finas, cashmere, mohair (caprinos).</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Subproductos</strong>: estiércol como abono.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img11.png', alt='' ).m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-3 Equinos (caballos, mulas, burros)
                p.mb-3 Compañeros tradicionales en transporte, trabajo y cultura.
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span>Servicios: tracción, arado, transporte rural.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span>Usos recreativos y deportivos: equitación, carreras, polo, coleo, cabalgatas.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span>Valor cultural: presencia en fiestas, ferias, desfiles.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Otros usos: consumo de carne y leche de yegua en ciertas regiones.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img12.png', alt='' ).m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-3 Aves de engorde y postura
                p.mb-3 Actividad altamente tecnificada y de rápido crecimiento.
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Engorde (broilers)</strong>: razas ross, cobb; producción intensiva de carne blanca.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Postura (ponedoras)</strong>: razas hy-line, lohmann; producción de huevos de mesa y fértiles.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Subproductos</strong>: plumas (almohadas, aislantes), vísceras para harinas.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img13.png', alt='' ).m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-3 Apícolas (abejas)
                p.mb-3 Proveen alimentos y servicios ecosistémicos vitales.
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Productos</strong>: miel, cera, polen, propóleo, jalea real.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Servicios ambientales</strong>: polinización, esencial para agricultura y biodiversidad.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Usos industriales</strong>: cosmética, farmacéutica, alimentaria.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img14.png', alt='' ).m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-3 Bufalinos (Bubalus bubalis)
                p.mb-3 Importantes en regiones tropicales y húmedas.
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Producción de leche</strong>: mayor contenido graso y proteico que la leche bovina; base para quesos como la mozzarella.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Producción de carne</strong>: magra y de alto rendimiento.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Servicios</strong>: tracción en arrozales.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Subproductos</strong>: cuero resistente.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img15.png', alt='' ).m-auto

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
