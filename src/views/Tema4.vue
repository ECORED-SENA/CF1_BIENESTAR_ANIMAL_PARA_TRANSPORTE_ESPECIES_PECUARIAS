<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Efectos del transporte en el comportamiento animal
    
    .row.align-items-center.mb-5
      .col-xl
        p.mb-3 El transporte genera alteraciones significativas en el comportamiento y estado fisiológico de los animales. Estas alteraciones pueden clasificarse en tres niveles: <strong>emocional, conductual y fisiológico</strong>. A nivel emocional, los animales experimentan miedo, frustración y ansiedad; en lo conductual, pueden presentar vocalizaciones, intentos de escape, peleas o posturas anormales; y en lo fisiológico, se observan incrementos en los niveles de cortisol, pérdida de peso (entre un 3 % y un 8 % en viajes prolongados), deshidratación, inmunosupresión y presencia de lesiones externas. Los signos clínicos más comunes de estrés por transporte incluyen <strong>jadeo, sudoración, salivación excesiva, apatía, agresividad, fracturas, hematomas e incluso muerte súbita en casos extremos</strong>.
        p.mb-0.style___box_8(data-aos="zoom-in") El transporte representa un evento altamente estresante para los animales debido a los múltiples estímulos desconocidos a los que se ven expuestos. El confinamiento, los ruidos intensos, los movimientos del vehículo, la pérdida de contacto con individuos conocidos y la falta de control sobre el entorno son factores que provocan emociones negativas como miedo, ansiedad o frustración. Estas emociones afectan la respuesta conductual del animal y pueden traducirse en comportamientos de defensa, escape o agresividad, comprometiendo su bienestar y seguridad, así como la de los operarios.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img109.png', alt='').m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
      .col
        h3 Comportamiento natural y bienestar en animales de producción

    p.mb-4 A continuación, se presenta un <em>podcast</em> que compara el comportamiento, el manejo y los efectos del transporte en distintas especies animales, destacando sus particularidades etológicas y las implicaciones prácticas para su bienestar y rendimiento productivo.

    .row.align-items-center.m-0.mb-5
      .col-xl
        .row.align-items-center.style___box_11(data-aos="zoom-in")
          .col-auto
            figure.d-none.d-xl-block(data-aos="fade-right")
              img(src="@/assets/curso/temas/img110.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Lo invitamos a escuchar el siguiente <em>podcast</em>:
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Especies y transporte: comportamiento, manejo y repercusiones en el bienestar animal"
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/temas/img111.png" style="max-width: 400px").m-auto

    p.mb-5 Conocer estos patrones permite organizar la carga en función de la especie, evitar la mezcla de grupos incompatibles y aplicar técnicas de manejo que reduzcan lesiones y mortalidad.

    .fondo___color_7
      .px-5

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
          .col
            h3 Comportamiento general y respuesta al transporte

        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img112.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Durante el transporte, los animales enfrentan múltiples estímulos ambientales y sociales que modifican su comportamiento natural. Entre los momentos más críticos están la carga y descarga, donde suelen resistirse al movimiento forzado, se bloquean o retroceden, y el uso de gritos o golpes incrementa su agitación. Durante el viaje, adoptan posturas inestables por el movimiento del vehículo, sufren fatiga, y reducen la ingesta de agua y alimento. El contacto con animales desconocidos puede desencadenar peleas por dominancia, mientras que el estrés térmico genera jadeo, búsqueda de sombra o ventilación, y en casos severos, decúbito por agotamiento. Todos estos cambios son indicadores de alerta que permiten ajustar prácticas para reducir el impacto negativo del transporte.
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
          .col
            h3 Sintiencia e interacción humano - animal

        p.mb-5 La sintiencia es la capacidad que tienen los animales de experimentar sensaciones y emociones como dolor, miedo, hambre, placer o bienestar. En Colombia, esta condición está reconocida legalmente por la Ley 1774 de 2016, lo que obliga a considerarlos como seres sintientes y no como meros recursos productivos. El respeto por su sintiencia implica garantizar sus necesidades físicas, emocionales y sociales.

        .row.align-items-center.mb-5
          .col-xl
            p.mb-3.style___box_8(data-aos="zoom-in") La interacción entre humanos y animales durante el transporte es un factor determinante para su bienestar. El manejo positivo, que incluye el uso de voces calmadas, banderolas, capacitación del personal y la ausencia de violencia, genera animales más dóciles, reduce el estrés y facilita un transporte seguro. Por el contrario, el manejo negativo, caracterizado por gritos, golpes, choques eléctricos, herramientas punzantes y hacinamiento, provoca miedo, dolor, inmunosupresión, abortos, caídas, lesiones y pérdidas económicas.
            p.mb-0.espacio___movil_4 A largo plazo, los animales sometidos a maltrato desarrollan resistencia al manejo, conductas agresivas, menor productividad y representan un mayor riesgo para el personal. Una relación respetuosa entre humanos y animales garantiza mejores condiciones físicas y emocionales para los animales, seguridad para los trabajadores, cumplimiento normativo y mayor competitividad en el sistema pecuario.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img114.png', alt='' style="max-width: 400px").m-auto
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
          .col
            h3 Causas y consecuencias del estrés en el transporte

        p.mb-4 El estrés generado durante el transporte puede tener múltiples causas, todas relacionadas con prácticas de manejo deficientes o condiciones inadecuadas del entorno. Entre las causas principales se encuentran la sobrecarga, la mala ventilación, las altas temperaturas, la restricción de alimento y agua, los viajes prolongados sin pausas, la manipulación brusca y la mezcla de animales de distintos lotes o especies. Las consecuencias de estas condiciones pueden observarse en diferentes niveles:

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.align-items-center.m-0.style___box_6.ajuste___box_6_2.mb-3(data-aos="zoom-in")
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img115.jpg', alt='' ).m-auto
              .col-xl-6
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Bienestar</strong>: miedo, fatiga, dolor, sufrimiento e incluso mortalidad.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Sanidad</strong>: inmunosupresión y mayor predisposición a enfermedades respiratorias, digestivas o mamarias.</li>
                </ul>
            .row.align-items-center.m-0.style___box_10(data-aos="zoom-in")
              .col-xl-6
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Productividad</strong>: pérdida de peso, disminución de la producción láctea y aparición de defectos en la carne (DFD en bovinos y PSE en porcinos).</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span><strong>Economía</strong>: decomisos de canales, reducción de la rentabilidad y sanciones legales, conforme a la Resolución 136 de 2020 del ICA.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img116.jpg', alt='' ).m-auto
    
    p.mb-5 Estas consecuencias evidencian la importancia de implementar protocolos de transporte animal basados en el bienestar.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
      .col
        h3 Cambios conductuales durante el transporte

    p.mb-5 El entorno desconocido, el movimiento constante del vehículo, la manipulación física y las condiciones ambientales adversas generan modificaciones evidentes en el comportamiento animal, las cuales sirven como indicadores de estrés y malestar.

    .row.align-items-center.mb-5.m-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img117.png', alt='' style="max-width: 500px").m-auto
      .col-xl.style___box_8(data-aos="zoom-in")
        p.mb-0 Los principales cambios conductuales observados incluyen vocalizaciones excesivas, especialmente en bovinos y porcinos, que reflejan incomodidad, hambre, sed o miedo. También son frecuentes los intentos de escape, como saltos, embestidas o resistencia al movimiento, lo cual incrementa el riesgo de lesiones. La agresividad entre animales, sobre todo al mezclar individuos de diferentes lotes, puede derivar en peleas jerárquicas. Asimismo, se presentan posturas anormales como el decúbito prolongado o la dificultad para mantenerse en pie debido al movimiento del vehículo.
    
    p.mb-5 Finalmente, la apatía y el letargo son signos claros de fatiga o agotamiento extremo. Todos estos comportamientos deben ser interpretados como señales de alarma que justifican una revisión inmediata de las condiciones de transporte.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
      .col
        h3 Alteraciones fisiológicas asociadas al transporte

    p.mb-5 Además de los cambios conductuales, el transporte provoca alteraciones fisiológicas que comprometen la salud general del animal y reducen su capacidad productiva. El estrés genera una respuesta neuroendocrina caracterizada por el aumento del cortisol y de las catecolaminas, lo que altera el metabolismo energético y deprime el sistema inmunológico. También se produce un incremento de la frecuencia cardiaca y respiratoria como resultado del miedo, el estrés térmico o la manipulación brusca.

    .row.align-items-center.m-0
      .col-xl.style___box_8.ajuste___box_8(data-aos="zoom-in")
        p.mb-0 Otro efecto común es la deshidratación, causada por la restricción de agua, la sudoración en equinos y bovinos, o el jadeo en porcinos y aves. La pérdida de peso vivo, conocida como merma de transporte, puede alcanzar entre el 3 % y el 8 % en viajes prolongados. En muchos casos se observa inmunosupresión, lo que incrementa la susceptibilidad a enfermedades respiratorias, digestivas o mamarias. Finalmente, las lesiones físicas como hematomas, fracturas o laceraciones afectan no solo el bienestar animal, sino también el valor comercial de la canal.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img118.png', alt='' style="max-width: 500px").m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
