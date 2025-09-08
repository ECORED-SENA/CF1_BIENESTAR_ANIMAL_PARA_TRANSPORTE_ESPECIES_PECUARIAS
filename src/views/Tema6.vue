<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Normatividad vigente nacional sobre bienestar animal en el transporte
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img134.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En Colombia, el transporte de animales vivos está regulado por un conjunto de normas que buscan garantizar el respeto por la sintiencia de los animales, prevenir el maltrato y establecer condiciones técnicas adecuadas durante su movilización. Estas regulaciones abarcan aspectos éticos, sanitarios y logísticos, y son aplicables tanto a propietarios como a transportadores y autoridades competentes.

    <!-- BLOQUE 1 -->
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Ley 1774 de 2016
    
    .row.align-items-center
      .col-xl
        p.mb-3 La Ley 1774 establece el marco ético y legal para la protección de los animales, reconociéndolos como seres sintientes y definiendo las responsabilidades asociadas a su cuidado, incluyendo el transporte.
        p.mb-0.style___box_8(data-aos="zoom-in") Esta ley prohíbe el maltrato animal, imponiendo sanciones penales y administrativas a quienes generen dolor, sufrimiento o daño a su salud. Establece el principio de bienestar animal como obligatorio en todas las prácticas de manejo, lo que implica reducir el sufrimiento innecesario. También establece que los responsables del transporte sean propietarios, conductores o cuidadores, deben garantizar condiciones que eviten el estrés, las lesiones y la mortalidad.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img135.png', alt='').m-auto

    <!-- BLOQUE 2 -->
    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Resolución ICA 20223040006915 de 2022

    p.mb-4 Esta resolución establece los requisitos técnicos, sanitarios y de bienestar que deben cumplirse durante el transporte terrestre de animales de producción. A continuación, se presentan sus principales lineamientos estructurados por categoría operativa:

    .bg--img_03
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img136.png", alt="" style="width: 382px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Infraestructura, limpieza y desinfección de vehículos").ajuste-cajaAcordion
              p.mb-0 Los vehículos deben proteger a los animales del sol, lluvia y viento; tener ventilación adecuada, pisos antideslizantes, sin bordes cortantes, y ser desinfectados antes y después de cada viaje.
            .row(titulo="Condiciones sanitarias y de bienestar previas al cargue").ajuste-cajaAcordion
              p.mb-3  Solo se transportan animales aptos: sin enfermedades graves, lesiones ni caquexia. Casos especiales (gestantes, neonatos, enfermos) requieren autorización. Se debe garantizar agua y alimento antes del viaje si es prolongado.
            .row(titulo="Cargue y descargue").ajuste-cajaAcordion
              p.mb-3 Debe realizarse con rampas ≤ 20 %, superficie antideslizante y elementos etológicos (banderolas, sonajeros). Está prohibido el uso de golpes, picanas eléctricas o prácticas violentas. El proceso debe ser supervisado por personal capacitado.
            .row(titulo="Condiciones durante el transporte").ajuste-cajaAcordion
              p.mb-3 Se debe respetar la densidad adecuada por especie, mantener ventilación y temperatura seguras, proveer agua y alimento en trayectos largos, y conducir sin maniobras bruscas.
            .row(titulo="Manejo de emergencias").ajuste-cajaAcordion
              p.mb-3 Todo transportador debe tener un plan de contingencia que contemple accidentes, mortalidad, enfermedades durante el viaje y fallas mecánicas o climáticas. Este plan debe garantizar atención inmediata o sacrificio humanitario y ser reportado a la autoridad sanitaria.
            .row(titulo="Obligaciones documentales").ajuste-cajaAcordion
              p.mb-3 Se requiere la Guía Sanitaria de Movilización Interna (ICA), el plan de ruta, la bitácora del transporte y un plan de contingencia disponible para las autoridades.

    <!-- BLOQUE 3 -->
    Separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.3 Comparación entre Ley 1774 de 2016 y Resolución ICA 20223040006915 de 2022

    p.mb-4 La siguiente tabla permite comparar los enfoques ético y técnico de estas dos normativas, resaltando sus principales coincidencias y diferencias en relación con el transporte animal.

    .fondo___color_9
      .px-5

        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 4.
          span Comparación entre Ley 1774 de 2016 y Resolución ICA 20223040006915 de 2022
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla Aspecto
                th.ajuste-border-tabla Ley 1774 de 2016
                th Resolución ICA 20223040006915 de 2022
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left <strong>Naturaleza jurídica</strong>
                td.ajuste-border-tabla.texto-left Reconocimiento legal de los animales como seres sintientes.
                td.texto-left Norma técnica y sanitaria que regula condiciones específicas del transporte pecuario.
              tr
                td.ajuste-border-tabla.texto-left <strong>Principio central</strong>
                td.ajuste-border-tabla.texto-left Prohibición del maltrato y obligación de garantizar el bienestar animal.
                td.texto-left Establecimiento de requisitos técnicos, sanitarios y de manejo.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left <strong>Protección animal</strong>
                td.ajuste-border-tabla.texto-left Penaliza actos de crueldad, sufrimiento o lesiones.
                td.texto-left Regula las condiciones mínimas de confort, cuidado, ventilación, alimentación y espacio.
              tr
                td.ajuste-border-tabla.texto-left <strong>Responsables</strong>
                td.ajuste-border-tabla.texto-left Propietarios, cuidadores y transportadores tienen responsabilidad penal y administrativa.
                td.texto-left Transportadores y personal deben cumplir protocolos de manejo, limpieza y documentación.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left <strong>Infraestructura y vehículos</strong>
                td.ajuste-border-tabla.texto-left Deben evitar el sufrimiento y daño.
                td.texto-left Deben tener techos, ventilación, limpieza, desinfección y seguridad estructural.
              tr
                td.ajuste-border-tabla.texto-left <strong>Condiciones previas al transporte</strong>
                td.ajuste-border-tabla.texto-left Prohíbe movilizar animales que sufran durante el traslado.
                td.texto-left Solo se permiten animales aptos y se establecen restricciones para casos especiales.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left <strong>Cargue y descargue</strong>
                td.ajuste-border-tabla.texto-left Prohíbe el maltrato físico durante el manejo.
                td.texto-left Exige rampas seguras y uso de instrumentos etológicos con personal capacitado.
              tr
                td.ajuste-border-tabla.texto-left <strong>Durante el transporte</strong>
                td.ajuste-border-tabla.texto-left Establece el deber de evitar sufrimiento y lesiones.
                td.texto-left Regula densidad, ventilación, alimentación, conducción segura y tiempos de descanso.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left <strong>Emergencias</strong>
                td.ajuste-border-tabla.texto-left No incluye procedimientos específicos.
                td.texto-left Obliga a tener un plan de contingencia frente a eventualidades y accidentes.
              tr
                td.ajuste-border-tabla.texto-left <strong>Documentación</strong>
                td.ajuste-border-tabla.texto-left No especifica documentos exigibles.
                td.texto-left Exige guía sanitaria, plan de ruta, bitácora de transporte y plan de contingencia.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left <strong>Sanciones</strong>
                td.ajuste-border-tabla.texto-left Prisión (12 a 36 meses) y multas económicas (5 a 60 SMLMV).
                td.texto-left Multas administrativas, decomisos, suspensión de actividades e inmovilización de animales.

        <!-- BLOQUE 4 -->
        Separador
        #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.4 Resolución ICA 136 de 2020
        
        p.mb-5 La Resolución 136 de 2020 establece los lineamientos técnicos mínimos que deben cumplirse durante el transporte de animales vivos, con el objetivo de reducir el estrés, prevenir el sufrimiento y garantizar la sanidad.

        .row.align-items-center
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img138.png', alt='' style="max-width: 400px").m-auto  
          .col-xl.espacio___movil_1
            .row.align-items-center.m-0.style___box_4.ajuste___box_4_2.mb-3(data-aos="zoom-in")
              .col-xl-auto(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img139.svg', alt='' ).m-auto
              .col-xl
                p.mb-0 Entre sus principales disposiciones, establece que solo se pueden movilizar animales que estén en condiciones sanitarias y físicas adecuadas. 
            p.mb-0 Define límites máximos para el tiempo de transporte y obliga a realizar pausas para descanso, agua y alimentación. Determina densidades máximas según especie y peso, y exige que los vehículos cuenten con ventilación, pisos antideslizantes, divisiones internas seguras y protección contra el clima. También requiere un plan de contingencia ante emergencias, accidentes o mortalidad durante el viaje.
            
    <!-- BLOQUE 5 -->
    Separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.5 Requisitos técnicos y sanitarios del ICA e INVIMA

    p.mb-5 El transporte de animales también está regulado por la intervención de dos entidades técnicas: el Instituto Colombiano Agropecuario (ICA) y el Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA). Cada una tiene funciones específicas orientadas a garantizar la sanidad y la inocuidad de los productos pecuarios.

    .row.align-items-center.m-0(data-aos="zoom-in")
      .col-xl-6.style___box_12
        figure.d-none.d-xl-block.mb-4
          img(src='@/assets/curso/temas/img140.png', alt='' style="max-width: 300px")
        h4 ICA
        p.mb-0 Certifica la sanidad animal, expide la Guía Sanitaria de Movilización, inspecciona predios y vehículos, verifica bienestar y tiempo de viaje.
      .col-xl-6.style___box_13.espacio___movil_3
        figure.d-none.d-xl-block.mb-4
          img(src='@/assets/curso/temas/img141.png', alt='' style="max-width: 300px")
        h4 INVIMA
        p.mb-0 Supervisa la inocuidad de productos derivados (carne, leche, huevos), vigila la cadena de frío y condiciones higiénicas en plantas de beneficio.

    <!-- BLOQUE 6 -->
    Separador
    #t_6_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.6 Documentos obligatorios para la movilización animal

    .fondo___color_10
      .px-5

        p.mb-5 El cumplimiento normativo durante el transporte de animales exige portar ciertos documentos oficiales que garantizan trazabilidad, control sanitario y respuesta ante emergencias.

        .row.justify-content-center
          .col-xl-10
            .row.align-items-center.m-0.style___box_6.ajuste___box_6_2.mb-4(data-aos="zoom-in")
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img143.jpg', alt='' ).m-auto
              .col-xl-6
                .style___li_1.mb-2
                  <ul class="fa-ul estilo___ul mb-0">
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Guía Sanitaria de Movilización (GSM)</strong>: expedida por el ICA, autoriza el transporte y permite el control de enfermedades.</li>
                  </ul>
                .style___li_1.mb-2
                  <ul class="fa-ul estilo___ul mb-0">
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Documento de Tránsito Animal (DTA)</strong>: complementa la GSM, incluyendo datos de origen, destino, número de animales, plan de ruta y registro del vehículo.</li>
                  </ul>
                .style___li_1
                  <ul class="fa-ul estilo___ul mb-0">
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Documentos complementarios</strong>: registro del vehículo ante el ICA, certificados sanitarios del predio, plan de contingencia ante emergencias.</li>
                  </ul>

            .row.align-items-center
              .col-xl
                p.mb-3 El marco normativo colombiano en materia de transporte animal integra principios éticos y criterios técnicos con el fin de proteger a los animales, garantizar la calidad sanitaria de los productos y cumplir con estándares exigidos por los mercados nacionales e internacionales. La Ley 1774 de 2016 establece el fundamento legal del bienestar animal, mientras que las resoluciones del ICA (20223040006915 de 2022 y 136 de 2020) detallan los requisitos operativos, sanitarios y logísticos.
                p.mb-0.style___box_8.ajuste___box_8_1(data-aos="zoom-in") El cumplimiento de estas disposiciones asegura una movilización más segura, responsable y alineada con los principios de sostenibilidad, trazabilidad y salud pública.
              .col-xl-auto(data-aos="fade-left")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img144.png', alt='' style="max-width: 400px").m-auto  

</template>

<script>
export default {
  name: 'Tema6',
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
