<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Principios del bienestar animal

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img52.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El bienestar animal no puede comprenderse sin tener en cuenta el comportamiento natural de cada especie, su capacidad de sentir (sintiencia) y las respuestas fisiológicas y emocionales frente a situaciones estresantes como el transporte. Entender estas particularidades permite aplicar prácticas de manejo que reducen el sufrimiento, previenen accidentes y mejoran la productividad.
    
    <!-- BLOQUE 1 -->
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Generalidades del comportamiento animal y su relación con el transporte

    .row.align-items-center.mb-5.m-0
      .col-xl
        p El comportamiento animal refleja cómo cada especie percibe y responde a los estímulos del entorno. Durante el transporte, estas conductas influyen directamente en el nivel de estrés, la seguridad de los animales y la eficiencia del manejo. Por esta razón, el conocimiento etológico es fundamental para aplicar protocolos adecuados y seguros.
        p.mb-0.style___box_8(data-aos="zoom-in") La <strong>etología</strong>, ciencia que estudia el comportamiento animal en condiciones naturales, permite comprender que los bovinos, por ejemplo, son animales de vida gregaria. Es decir, se sienten seguros en grupo y muestran incomodidad o ansiedad cuando están aislados. A diferencia del ser humano, que actúa de manera dominante e individual, los bovinos instintivamente buscan protección en la manada. Esto explica por qué resulta más fácil manejar un grupo que un animal solitario: al seguir al líder, disminuye la resistencia al desplazamiento y se minimiza el riesgo de accidentes.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img53.png', alt='' style="max-width: 500px").m-auto
    
    .fondo___color_3
      .px-5

        p.mb-4 La siguiente tabla resume las características conductuales más relevantes de distintas especies pecuarias y las recomendaciones específicas de manejo durante el transporte:

        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 3.
          span Comportamiento y manejo durante el transporte (por especie)
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla Especie
                th.ajuste-border-tabla Comportamiento natural
                th Recomendaciones para el transporte
            tbody
              tr
                td.ajuste-border-tabla.texto-left <strong>Bovinos</strong>
                td.ajuste-border-tabla.texto-left Son animales gregarios, siguen al líder, tienen visión panorámica con puntos ciegos y se asustan fácilmente ante estímulos inesperados.
                td.texto-left Se recomienda el uso de pasillos curvos, pisos antideslizantes y manejo con banderas o voces tranquilas. Se deben evitar los gritos y los choques eléctricos.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left <strong>Porcinos</strong>
                td.ajuste-border-tabla.texto-left Son muy sensibles al calor, al ruido y a los cambios bruscos. Vocalizan intensamente bajo estrés y tienden a resistirse al movimiento.
                td.texto-left Deben moverse en grupos pequeños, evitando el hacinamiento. Es fundamental garantizar una buena ventilación. Está prohibido el uso de golpes o instrumentos punzantes.
              tr
                td.ajuste-border-tabla.texto-left <strong>Ovinos y caprinos</strong>
                td.ajuste-border-tabla.texto-left Son altamente gregarios y muestran fuerte dependencia del líder del grupo. Se estresan con facilidad al ser aislados.
                td.texto-left Deben mantenerse siempre en grupo. Es importante evitar rampas muy inclinadas y permitir espacios adecuados para que puedan descansar durante viajes largos.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left <strong>Aves de corral</strong>
                td.ajuste-border-tabla.texto-left Son sensibles a los cambios de temperatura y al hacinamiento. Bajo estrés, muestran agitación y se vuelven vulnerables a la asfixia.
                td.texto-left Se deben transportar en jaulas ventiladas y espaciosas. Es preferible realizar el manejo en horarios frescos para evitar golpes de calor y mortalidad.
              
        <!-- BLOQUE 2 -->
        Separador
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Comportamiento del ganado bovino

        p.mb-5 El comportamiento natural del ganado bovino debe ser comprendido y respetado para lograr un manejo seguro, eficiente y libre de violencia. Su naturaleza gregaria, su percepción visual y su respuesta instintiva a los estímulos permiten predecir sus movimientos y aplicar técnicas que eviten el uso de la fuerza.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
          .col
            h3 Zona de fuga y zona de lucha

        .row.align-items-center.mb-5
          .col-xl
            p El ganado bovino posee una zona de fuga, definida como el espacio hasta donde una persona puede acercarse sin provocar una reacción en el animal. Una vez se invade esta área, el animal se aleja. Este mecanismo representa una forma de presión no física útil para dirigir al bovino hacia una dirección deseada, sin dañarlo ni comprometer su bienestar.
            .row.align-items-center.m-0.style___box_4.ajuste___box_4(data-aos="zoom-in")
              .col-xl-auto(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img55.svg', alt='' ).m-auto
              .col-xl
                p.mb-0 Dentro de esta zona existe una zona de lucha, más reducida, que desencadena respuestas defensivas si es invadida. El tamaño de ambas zonas depende de factores como la raza, el sexo, la edad y las experiencias previas de manejo. Conocer y respetar estas zonas es esencial para evitar respuestas negativas y lograr un manejo exitoso.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img56.png', alt='' style="max-width: 500px").m-auto
        
        .row.justify-content-center.mb-5
          .col-xl-10
            .row.m-0
              .col-xl-8
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 1.
                  span Diagrama del punto de balance y zonas de presión en el manejo de bovinos
                figure.mb-1(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img57.png', alt='Diagrama sobre el manejo de vacas que indica la zona de fuga, zona ciega, punto de balance y ángulos de aproximación para detener o iniciar el movimiento del animal.').m-auto
                figcaption Nota. Imagen tomada de Fedegan. (2018). 
              .col-xl-4.espacio___movil_3
                .style___box_9(data-aos="zoom-in")
                  figure.d-none.d-xl-block.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img58.svg', alt='' style="max-width: 85px")
                  p.mb-0 Esta figura presenta los conceptos clave del manejo etológico del ganado, incluyendo la <strong>zona de fuga, la zona ciega, el punto de balance</strong> y las posiciones del operador que inducen al animal a avanzar o detenerse, según su ángulo de aproximación.
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
          .col
            h3 Punto de balance y manejo en mangas

        .row.align-items-center.mb-5.m-0
          .col-xl
            p Además de la zona de fuga, el <strong>punto de balance</strong> es una referencia clave en el manejo. Este se ubica generalmente a la altura del hombro del animal. Si el operario se posiciona <strong>detrás del punto de balance</strong>, el bovino avanzará; si se sitúa <strong>delante</strong>, el animal retrocederá.
            .style___box_2(data-aos="zoom-in")
              figure.d-none.d-xl-block.mb-3(data-aos="fade-right")
                img(src='@/assets/curso/temas/img59.svg', alt='' style="max-width: 85px")
              p.mb-0 Un error común es colocarse frente al punto de balance esperando que el animal avance, lo cual genera resistencia y puede provocar el uso de métodos inadecuados como golpes o descargas eléctricas. Aplicar este principio permite un movimiento fluido y sin violencia.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img60.png', alt='' style="max-width: 500px").m-auto
        
        p.mb-5 Asimismo, se debe evitar permanecer en la <strong>zona ciega</strong>, ubicada detrás de la cola, ya que los bovinos no ven lo que ocurre en ese ángulo y pueden reaccionar con giros bruscos que dificultan el manejo.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
      .col
        h3 Manejo adecuado en mangas y movilización grupal

    .row.align-items-center.mb-5
      .col-xl
        p Durante el trabajo en mangas, se recomienda <strong>no superar el 50 % de la capacidad del pasillo</strong> y permitir un ingreso gradual de los animales. Para dirigirlos de manera efectiva, es preferible el uso de banderas o palos con elementos visuales, que resultan menos invasivos que garrotes o tábanos eléctricos.
        .row.align-items-center.m-0.style___box_4.ajuste___box_4_1(data-aos="zoom-in")
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img61.svg', alt='' ).m-auto
          .col-xl
            p.mb-0 Por su comportamiento gregario, los bovinos tienden a seguir a un animal líder. Si se conduce un ejemplar manso, los demás lo seguirán, facilitando el trabajo. La paciencia y el respeto por el comportamiento natural son esenciales para evitar bloqueos o retrocesos innecesarios.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img62.png', alt='' style="max-width: 500px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
      .col
        h3 Buenas prácticas y cambio de actitud

    p.mb-3 El maltrato hacia los animales aún es común en muchas fincas, lo que produce hematomas, fracturas y pérdidas en la calidad de la carne y las pieles. Más allá de las consecuencias económicas, golpear a un animal refleja una falta de respeto hacia un ser vivo que genera beneficios al sistema productivo.

    .row.align-items-center
      .col-xl
        p El manejo respetuoso requiere un cambio cultural en el personal, que debe ser <strong>capacitado en principios etológicos</strong> como la zona de fuga y el punto de balance. El uso de tábanos eléctricos debe reducirse al mínimo indispensable y nunca debe aplicarse en zonas sensibles como los ojos, el hocico, el ano o la vulva. Además, se deben respetar los límites de voltaje permitidos por la normativa vigente.
        .row.align-items-center.m-0.style___box_4.ajuste___box_4(data-aos="zoom-in")
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img63.svg', alt='' ).m-auto
          .col-xl
            p.mb-0 Adoptar buenas prácticas de bienestar animal mejora el trato hacia los animales, <strong>reduce los riesgos laborales</strong>, disminuye pérdidas económicas y contribuye a una producción ganadera más ética, eficiente y sostenible.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img64.png', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 3 -->
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Comportamiento de los equinos

    .fondo___color_4
      .px-5

        p.mb-5 Comprender el comportamiento natural de los equinos es esencial para garantizar su bienestar durante el manejo, el transporte y el trabajo, ya que su respuesta ante los estímulos se basa en la huida, la percepción del entorno y su sensibilidad al trato humano.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
          .col
            h3 Zona de fuga y zona de lucha

        .row.align-items-center.mb-5
          .col-xl
            p Los equinos presentan una <strong>zona de fuga</strong> bien definida. Cuando una persona invade este espacio, el caballo reacciona instintivamente huyendo para ponerse a salvo. Este principio se puede aprovechar para movilizar al animal de manera natural, sin ejercer fuerza ni recurrir a la violencia.
            .row.align-items-center.m-0.style___box_4.ajuste___box_4_1(data-aos="zoom-in")
              .col-xl-auto(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img66.svg', alt='' ).m-auto
              .col-xl
                p.mb-0 En contraste, la <strong>zona de lucha</strong> es mucho más reducida. Si se invade esta área cercana, el animal puede reaccionar con conductas defensivas como cocear, morder o empinarse. La amplitud de ambas zonas varía según el temperamento, la edad, el nivel de domesticación y las experiencias previas de manejo. Reconocerlas y respetarlas es esencial para proteger tanto la integridad del equino como la seguridad del cuidador.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img67.png', alt='' style="max-width: 500px").m-auto

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.m-0
              .col-xl-8
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 2.
                  span Zona de fuga, puntos ciegos y punto de equilibrio de los caballos
                figure.mb-1(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img68.png', alt='Esquema del campo visual de un caballo visto desde arriba que identifica el punto de equilibrio, puntos ciegos frontal y trasero, y la zona de fuga. ').m-auto
                figcaption Nota. Imagen tomada de Ortuño. (2020).
              .col-xl-4.espacio___movil_3
                .style___box_9.ajuste___box_9(data-aos="zoom-in")
                  figure.d-none.d-xl-block.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img69.svg', alt='' style="max-width: 85px")
                  p.mb-0 La figura presenta  la distribución espacial del <strong>punto de equilibrio</strong>, los <strong>puntos ciegos</strong> (frontal y posterior) y la <strong>zona de fuga</strong> alrededor del animal. Estos elementos son fundamentales para aplicar técnicas de manejo basadas en el comportamiento natural del ganado.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
          .col
            h3 Consideraciones para el manejo de equinos

        .row.align-items-center.mb-5
          .col-xl
            p A pesar de los avances en bienestar animal, en muchas prácticas cotidianas aún se observan formas de maltrato hacia los caballos, como golpes, uso excesivo de riendas o espuelas, y procedimientos inadecuados durante el herrado o el arreo. Estas acciones causan lesiones físicas, pérdida de condición corporal, alteraciones del comportamiento y una disminución en la vida útil del animal.
            .row.align-items-center.m-0.style___box_4.ajuste___box_4_1.mb-3(data-aos="zoom-in")
              .col-xl-auto(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img70.svg', alt='' ).m-auto
              .col-xl
                p.mb-0 El <strong>manejo respetuoso</strong> implica aprovechar la zona de fuga y tener en cuenta que el caballo es un animal de presa, con respuestas naturales de escape. Conduciéndolo con calma, sin coerción, se mejora su comportamiento y se reduce el riesgo de accidentes. En caballos de trabajo o deporte, un manejo basado en el respeto a su comportamiento natural favorece la docilidad, el rendimiento y la cooperación.
            p.mb-0 El uso de <strong>refuerzos positivos</strong>, como caricias o pequeñas recompensas, es mucho más efectivo que los castigos o métodos dolorosos. Esta estrategia promueve una relación de confianza entre el equino y el ser humano.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img71.png', alt='' style="max-width: 500px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
      .col
        h3 Punto de balance y campo visual

    .row.align-items-center.mb-5
      .col-xl
        p En los equinos, el <strong>punto de balance</strong> también se encuentra a la altura del hombro. Si el manejador se coloca detrás de este punto, el caballo tenderá a avanzar. En cambio, si se ubica <strong>delante del hombro</strong>, el animal retrocederá o intentará girar para alejarse.
        .row.align-items-center.m-0.style___box_4.ajuste___box_4(data-aos="zoom-in")
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img72.svg', alt='' ).m-auto
          .col-xl
            p.mb-0 Los caballos poseen un <strong>amplio campo visual lateral</strong>, pero presentan <strong>dos puntos ciegos</strong>: uno justo detrás de la grupa y otro en la parte frontal, entre la frente y la nariz. Permanecer en estas zonas puede provocar reacciones bruscas e impredecibles, por lo que deben evitarse en todo momento durante el manejo.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img73.png', alt='' style="max-width: 500px").m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
      .col
        h3 Movilización en grupo

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img74.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los equinos, al igual que otras especies gregarias, se movilizan con mayor facilidad en grupo. La presencia de un animal líder o de temperamento tranquilo puede facilitar el desplazamiento del resto. Durante el embarque y desembarque para el transporte, así como en los movimientos hacia corrales o pesebreras, es indispensable <strong>evitar el hacinamiento</strong>, respetar los <strong>espacios individuales</strong> y minimizar los riesgos de caídas, golpes o conflictos entre animales.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
      .col
        h3 Buenas prácticas y cambio de actitud

    p.mb-5 El manejo adecuado de caballos requiere una transformación en la actitud del personal. Es fundamental erradicar prácticas de maltrato como el uso excesivo de látigos, picanas eléctricas o castigos físicos. La capacitación debe enfocarse en <strong>principios de comportamiento equino</strong>, priorizando el uso de técnicas basadas en la comprensión etológica.

    .row.justify-content-center
      .col-xl-10
        .row.align-items-center.m-0.style___box_6.ajuste___box_6(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img75.jpg', alt='' ).m-auto
          .col-xl
            p.mb-3 El empleo de herramientas como banderas, la voz y movimientos corporales firmes pero tranquilos permite dirigir a los animales de manera más eficaz y segura. La implementación de <strong>buenas prácticas de bienestar animal en equinos</strong> ofrece beneficios concretos:
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span>Previene lesiones y reduce riesgos laborales.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span>Mejora la docilidad, la disposición al trabajo y el rendimiento.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span>Garantiza un trato ético y humanitario.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Aporta a la sostenibilidad y competitividad del sector pecuario y del sector equino deportivo y recreativo.</li>
            </ul>
            
    <!-- BLOQUE 4 -->
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Comportamiento de ovinos y caprinos

    p.mb-5 Comprender el comportamiento natural de ovinos y caprinos es esencial para garantizar un manejo seguro, eficiente y libre de maltrato, ya que ambas especies reaccionan de manera distinta ante los estímulos, el encierro y el contacto humano.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
      .col
        h3 Características generales del comportamiento

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img76.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los <strong>ovinos</strong> presentan una fuerte conducta gregaria y tienden a moverse en grupo siguiendo a un líder. Su marcada capacidad de imitación facilita el manejo colectivo, especialmente en ambientes controlados. En cambio, los <strong>caprinos</strong>, aunque también gregarios, muestran un comportamiento más curioso, independiente y explorador. Tienen mayor tendencia a dispersarse, saltar y resistirse al encierro, lo cual exige una infraestructura de manejo más segura y adaptada a sus características.

    .fondo___color_5
      .px-5 
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
          .col
            h3 Zona de fuga y zona de lucha
        
        p.mb-5 Tanto los ovinos como los caprinos poseen una <strong>zona de fuga</strong>, que corresponde a la distancia a la cual el animal reacciona frente a la presencia de una persona. Si se invade esa zona, el animal se aparta. En cambio, si se invade la <strong>zona de lucha</strong>, más reducida y próxima al cuerpo, pueden desencadenarse reacciones defensivas como topes, saltos o embestidas.

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.m-0
              .col-xl-8
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 3.
                  span Zonas de fuga y punto de balance en el manejo de ovinos y caprinos
                figure.mb-1(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img77.png', alt='Diagrama del comportamiento de huida en un ovino con delimitación angular de la zona de fuga, punto de balance y posiciones estratégicas del operario para controlar el movimiento.').m-auto
                figcaption Nota. Imagen tomada de <em>Outhouse</em>. (1991).
              .col-xl-4.espacio___movil_3
                .style___box_9.ajuste___box_9_1(data-aos="zoom-in")
                  figure.d-none.d-xl-block.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img78.svg', alt='' style="max-width: 85px")
                  p.mb-0 La figura representa la ubicación del <strong>punto de balance, el límite de la zona de fuga y las posiciones del operario</strong> que inducen a los ovinos o caprinos a iniciar o detener su movimiento, según el ángulo y la proximidad del manejo. Estos principios permiten aplicar técnicas de bajo estrés, adaptadas al comportamiento gregario y sensible de estas especies.
        
        p.mb-5 El tamaño de estas zonas depende de factores como la raza, la edad, el sexo, el estado fisiológico (como gestación o lactancia) y las experiencias previas de manejo. En los caprinos, la zona de lucha tiende a ser más activa y notoria, debido a su carácter más inquieto y autónomo. El conocimiento y uso adecuado de estas zonas permite conducir a los animales sin necesidad de recurrir al uso de la fuerza.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
          .col
            h3 Consideraciones para el manejo

        p.mb-5 En muchas explotaciones pecuarias aún se emplean prácticas de maltrato como gritos, golpes o el uso de perros no entrenados, lo cual genera lesiones musculares, hematomas, fracturas y estrés. Estas prácticas afectan directamente la calidad de la carne, la leche, la lana o las pieles, y se traducen en pérdidas económicas evitables. 

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.align-items-center.m-0.style___box_6.ajuste___box_6_1(data-aos="zoom-in")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img80.jpg', alt='' ).m-auto
              .col-xl
                p.mb-3 El manejo adecuado se basa en los siguientes principios:
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span>Permitir que el animal se desplace de forma natural en la dirección deseada.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span>Reducir ruidos fuertes y movimientos bruscos.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span>Evitar el uso de garrotes, picanas eléctricas o perros agresivos.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cow"></i></span>Usar herramientas visuales como banderas o bastones con cintas.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Asegurar que los corrales y mangas estén adaptados al tamaño de los animales, con pisos antideslizantes y paredes que eviten la fuga o los saltos.</li>
                </ul>

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
          .col
            h3 Punto de balance y manejo en mangas

        .row.align-items-center.mb-5
          .col-xl
            p En ovinos y caprinos, el <strong>punto de balance</strong> se encuentra, al igual que en otras especies, a la altura del hombro. Si el operador se ubica <strong>detrás del punto de balance</strong>, el animal avanzará; si se sitúa <strong>delante</strong>, retrocederá.
            .row.align-items-center.m-0.style___box_4.ajuste___box_4_1.mb-3(data-aos="zoom-in")
              .col-xl-auto(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img81.svg', alt='' ).m-auto
              .col-xl
                p.mb-0 Los ovinos responden mejor a movimientos grupales y circulares, mientras que los caprinos requieren mangas <strong>más altas y cerradas</strong>, ya que tienen una mayor tendencia a saltar o escapar. El llenado de las mangas no debe superar el 50 % de su capacidad para evitar el amontonamiento y los bloqueos.
            p.mb-0 El ingreso debe realizarse de forma <strong>progresiva y tranquila</strong>, evitando el hacinamiento que puede provocar lesiones, asfixia o estrés innecesario.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img82.png', alt='' style="max-width: 500px").m-auto    
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
          .col
            h3 Movilización en grupo

        .row.align-items-center.mb-5
          .col-xl
            p Tanto los ovinos como los caprinos se movilizan con mayor facilidad en <strong>lotes</strong>. En el caso de los ovinos, un animal dócil o líder puede servir de guía para el resto. Los caprinos, por su parte, aunque gregarios, tienden más a dispersarse, por lo que es fundamental contar con cerramientos seguros y un manejo paciente.
            .row.align-items-center.m-0.style___box_4.ajuste___box_4_2(data-aos="zoom-in")
              .col-xl
                p.mb-0 La <strong>paciencia, el respeto y la calma</strong> son claves para lograr desplazamientos eficientes y sin riesgos.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img83.png', alt='' style="max-width: 500px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
      .col
        h3 Buenas prácticas y cambio de actitud

    p.mb-4 La aplicación de <strong>buenas prácticas de bienestar animal</strong> en ovinos y caprinos implica un cambio de actitud del personal y una capacitación adecuada en los principios de manejo respetuoso. Algunas recomendaciones fundamentales incluyen:

    .row.justify-content-center
      .col-xl-10
        .row.align-items-center.m-0.style___box_6.ajuste___box_6_2.mb-3(data-aos="zoom-in")
          .col-xl-6
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img84.jpg', alt='' ).m-auto
          .col-xl-6
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Capacitar al personal en el uso correcto de la zona de fuga, el punto de balance y el comportamiento grupal.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Eliminar toda forma de maltrato físico o verbal.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Reducir al mínimo el uso de descargas eléctricas, y nunca aplicarlas en zonas sensibles.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Promover un trato <strong>digno, humanitario y seguro</strong> para los animales.</li>
            </ul>
        .row.align-items-center.m-0.style___box_10(data-aos="zoom-in")
          .col-xl-6
            p.mb-2 Los beneficios derivados del buen manejo son numerosos:
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Reducción de pérdidas económicas por lesiones, hematomas y mortalidad.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Mejora en la calidad de los productos: carne, leche, lana y pieles.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Disminución de riesgos laborales para los trabajadores.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Mayor competitividad frente a mercados que exigen prácticas éticas y sostenibles.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Contribución a una producción pecuaria alineada con la normativa vigente y el respeto al bienestar animal.</li>
            </ul>
          .col-xl-6
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img85.jpg', alt='' ).m-auto

    <!-- BLOQUE 5 -->
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Comportamiento en avicultura de engorde y postura

    p.mb-5 La comprensión del comportamiento natural de las aves de corral es fundamental para implementar prácticas de manejo que promuevan su bienestar, eviten pérdidas productivas y mejoren la eficiencia en los sistemas de engorde y postura.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
      .col
        h3 Características generales del comportamiento aviar

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img86.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La <strong>etología aviar</strong> estudia el comportamiento de las aves y permite establecer estrategias de manejo basadas en su biología y necesidades. Tanto los pollos de engorde como las gallinas de postura son animales <strong>gregarios</strong>, es decir, se sienten más seguros y tranquilos cuando permanecen en grupo. Esta característica influye directamente en su alimentación, descanso, desplazamiento y relaciones sociales.
    
    .row.align-items-center.mb-5
      .col-xl
        p En el caso de los <strong>pollos de engorde</strong>, su rápido crecimiento limita comportamientos naturales como el vuelo o la exploración, por lo que es esencial proporcionar acceso constante a agua, alimento y espacios adecuados para minimizar el estrés y la competencia.
        .row.align-items-center.m-0.style___box_4.ajuste___box_4(data-aos="zoom-in")
          .col-xl
            p.mb-0 Las <strong>gallinas de postura</strong> presentan una jerarquía social más marcada. Si no se mantienen densidades poblacionales adecuadas, pueden producirse agresiones como el picaje, desplazamiento de aves más débiles y episodios de estrés crónico que disminuyen la productividad y el bienestar.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img87.png', alt='' style="max-width: 500px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
      .col
        h3 Zona de fuga y zona de lucha

    p.mb-5 Aunque las aves no se movilizan en mangas como otras especies, sí presentan una <strong>zona de fuga</strong> claramente definida. Cuando el operario se acerca más allá de lo tolerado, las aves responden con agitación, alejamientos bruscos y amontonamientos, lo que puede provocar fracturas, golpes o asfixia. La <strong>zona de lucha</strong> se manifiesta principalmente en agresiones entre aves, como el picaje o la competencia por recursos. Estas conductas aumentan cuando se alteran las condiciones ambientales o se rompen las jerarquías sociales. El respeto por estas zonas exige un manejo <strong>tranquilo, progresivo y cuidadoso</strong>, sin gritos, movimientos bruscos ni sobrepoblación.

    .row.m-0.align-items-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 4.
          span Campos visuales en aves
        figure.mb-1(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img88.png', alt='Ilustración comparativa del campo visual de una gallina que distingue entre visión monocular, visión binocular y zona ciega.').m-auto
        figcaption Nota. Imagen tomada de Gallina Castellana Negra. (s.f.).
      .col-xl-4.espacio___movil_3
        .style___box_9.ajuste___box_9_2(data-aos="zoom-in")
          p.mb-0 La figura presenta la distribución de los campos visuales de una gallina. La <strong>visión monocular</strong> le permite observar en ambos laterales de manera independiente; la <strong>visión binocular</strong> se concentra al frente y ofrece percepción de profundidad; mientras que la <strong>zona ciega</strong> se ubica directamente detrás de la cabeza, fuera del alcance visual. Estas características deben considerarse para evitar sobresaltos y estrés durante el manejo.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
      .col
        h3 Consideraciones para el manejo en granja

    p.mb-4 El manejo inadecuado de las parvadas como los golpes, gritos, aglomeraciones o ruidos fuertes provoca un aumento de la mortalidad, del estrés fisiológico y una disminución significativa en la productividad. Las buenas prácticas de manejo en granja incluyen:

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.style___box_6.ajuste___box_6_2.mb-3(data-aos="zoom-in")
          .col-xl-6
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img89.jpg', alt='' ).m-auto
          .col-xl-6
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Evitar el sobrecupo, manteniendo densidades acordes a la normativa (kg/m²).</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Asegurar una adecuada ventilación, iluminación y temperatura, adaptadas a cada etapa del ciclo productivo.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>No utilizar objetos contundentes ni aplicar maltrato físico durante la recolección o captura de aves.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Capacitar al personal para que el manejo sea tranquilo, sin sobresaltos.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Distribuir de forma homogénea los sistemas de alimento y bebida para evitar competencia.</li>
            </ul>

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
      .col
        h3 Punto de balance y movilización de aves

    p.mb-4 A diferencia de los mamíferos, en avicultura el punto de balance no se aplica como criterio central en el manejo individual. Sin embargo, la reacción grupal de las aves permite dirigirlas con herramientas adecuadas.

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.style___box_6.ajuste___box_6_3.mb-3(data-aos="zoom-in")
          .col-xl-6
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img90.jpg', alt='' ).m-auto
          .col-xl-6
            p.mb-3 Para facilitar la recolección o desplazamiento dentro de los galpones:
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-cow"></i></span>Se recomienda el uso de <strong>banderas o plásticos ligeros</strong> que permitan guiar sin provocar estrés.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Durante la carga en cajas de transporte, se debe <strong>sujetar suavemente con ambas manos</strong>, asegurando alas y patas para evitar lesiones como fracturas o luxaciones.</li>
            </ul>

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
      .col
        h3 Movilización y transporte

    p.mb-4 El transporte representa una fase crítica en el bienestar de las aves. Para evitar efectos negativos, deben aplicarse las siguientes recomendaciones:

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.style___box_6.ajuste___box_6.mb-3(data-aos="zoom-in")
          .col-xl-6
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img91.jpg', alt='' ).m-auto
          .col-xl-6
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-cow"></i></span>Las aves deben cargarse en cajas limpias, ventiladas y de tamaño adecuado, evitando el sobrecupo.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-cow"></i></span>Debe garantizarse la protección frente a temperaturas extremas, ya sea calor o frío.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-cow"></i></span>Se recomienda que el tiempo de transporte sea el mínimo necesario, evitando paradas prolongadas.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Es obligatorio cumplir con la documentación sanitaria exigida por el INVIMA e ICA (como GSM y DTA) y con todas las medidas de bioseguridad vigentes.</li>
            </ul>
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
      .col
        h3 Buenas prácticas y cambio de actitud

    p.mb-4 La implementación de buenas prácticas de bienestar animal en avicultura requiere una transformación en la actitud del personal y la adopción de protocolos fundamentados en la etología. Las acciones clave incluyen:

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.style___box_6.ajuste___box_6_1.mb-3(data-aos="zoom-in")
          .col-xl-6
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img92.jpg', alt='' ).m-auto
          .col-xl-6
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-cow"></i></span>Capacitar al personal en el manejo específico de pollos de engorde y gallinas de postura.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-cow"></i></span>Garantizar <strong>condiciones ambientales controladas</strong> (temperatura, ventilación, iluminación).</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-cow"></i></span>Eliminar prácticas de <strong>maltrato físico</strong> y reducir el estrés durante la captura y el transporte.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Cumplir con la <strong>legislación vigente</strong> en Colombia, como la Ley 1774 de 2016, la Resolución ICA 136 de 2020 y los requisitos de ICA/INVIMA.</li>
            </ul>

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
      .col
        h3 Beneficios de la adopción de buenas prácticas en avicultura

    p.mb-4 La adopción de un manejo ético, técnico y ajustado a las necesidades comportamentales de las aves genera múltiples beneficios:

    .row.justify-content-center
      .col-xl-10
        .row.align-items-center.m-0.style___box_6.ajuste___box_6_2.mb-3(data-aos="zoom-in")
          .col-xl-6
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img93.jpg', alt='' ).m-auto
          .col-xl-6
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-cow"></i></span>Reducción de la mortalidad y de las pérdidas económicas.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-cow"></i></span>Mejora en la calidad e inocuidad de la carne y los huevos.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-cow"></i></span>Disminución de lesiones, hematomas y fracturas.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-cow"></i></span>Reducción de riesgos laborales para los operarios.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-cow"></i></span>Mejor imagen ante los consumidores, quienes valoran el trato humanitario.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Mayor competitividad en mercados que exigen certificaciones de bienestar animal.</li>
            </ul>

    <!-- BLOQUE 6 -->
    Separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.6 Comportamiento de búfalos

    p.mb-5 El manejo humanitario de los búfalos de agua (Bubalus bubalis) es fundamental para garantizar su bienestar, optimizar su rendimiento productivo y prevenir riesgos tanto para los animales como para el personal. Aunque comparten similitudes con los bovinos, su comportamiento, fisiología y necesidades ambientales exigen prácticas específicas.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
      .col
        h3 Etología y comportamiento general

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img94.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los búfalos son animales <strong>gregarios</strong>, con fuerte instinto de grupo. Su manejo se facilita cuando se movilizan en conjunto, ya que el aislamiento de individuos genera estrés, ansiedad y comportamientos defensivos. Los <strong>machos adultos y las hembras con cría</strong> pueden reaccionar de manera agresiva si se sienten amenazados. Una característica distintiva es su necesidad de <strong>acceso constante a agua</strong> para termorregularse. En ausencia de charcas, lagunas o bebederos amplios, los búfalos pueden sufrir <strong>estrés térmico</strong> severo. Además, son rústicos y se adaptan bien a zonas de difícil acceso, aprovechando forrajes de baja calidad.
    
    .fondo___color_6
      .px-5

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
          .col
            h3 Zona de fuga y punto de balance
        
        p.mb-4 Los búfalos poseen una <strong>zona de fuga más amplia</strong> que los bovinos, ya que son animales más desconfiados por naturaleza. Si un operario invade esta zona de manera brusca, el búfalo puede optar por la huida o, en casos extremos, por la embestida, lo cual representa un riesgo importante.

        .row.align-items-center.mb-5.m-0
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img96.png', alt='' style="max-width: 500px").m-auto
          .col-xl
            p.mb-3 El <strong>punto de balance</strong> se ubica a la altura de la paleta, como en los bovinos:
            .row.align-items-center.m-0.style___box_4.ajuste___box_4.mb-3(data-aos="zoom-in")
              .col-xl-auto(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img97.svg', alt='' ).m-auto
              .col-xl
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-cow"></i></span>Si el trabajador se ubica <strong>detrás del punto de balance</strong>, el búfalo avanzará.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Si se coloca <strong>delante</strong>, el animal tenderá a detenerse o retroceder.</li>
                </ul>
            p.mb-0 El conocimiento de estos principios etológicos permite una movilización más segura y efectiva.

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.m-0
              .col-xl-8
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 5.
                  span Zonas de fuga y punto de equilibrio en el manejo de búfalos
                figure.mb-1(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img98.png', alt='Diagrama sobre la zona de fuga de un búfalo  que incluye los límites de visión, zona ciega sombreada, punto de equilibrio y ubicaciones del operario para iniciar o detener el desplazamiento. ').m-auto
                figcaption Nota. Imagen tomada de Grandin. (2010).
              .col-xl-4.espacio___movil_3
                .style___box_9.ajuste___box_9_3(data-aos="zoom-in")
                  p.mb-0 La figura representa las zonas sensoriales y de respuesta del búfalo durante el manejo. Se destacan los <strong>límites de la zona de fuga, la zona ciega</strong> (área sombreada), el <strong>punto de equilibrio y las posiciones del operario</strong> necesarias para detener o iniciar el movimiento del animal. Comprender estas zonas permite aplicar técnicas de manejo respetuoso, reduciendo el estrés y mejorando la seguridad tanto para los animales como para el personal.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
          .col
            h3 Movilización y manejo en grupo

        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img99.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La movilización de búfalos debe realizarse en grupos pequeños, evitando aislamientos innecesarios. Estos animales responden mejor a un manejo tranquilo, sin gritos ni golpes. El uso de herramientas visuales suaves como banderines, paletas o bastones con cintas resulta más efectivo y respetuoso que los métodos coercitivos o eléctricos. Los corredores y mangas deben ser amplios, bien iluminados y con pisos antideslizantes, ya que su masa corporal los hace más propensos a caídas y lesiones si la infraestructura no es adecuada.  
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
          .col
            h3 Manejo en finca
        
        p.mb-4 Las Buenas Prácticas de Bienestar Animal en búfalos incluyen:

        .fondo___img
          .px-5
            .row.align-items-center.mb-4
              .col-xl-4(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img100.png', alt='' style="max-width: 350px").m-auto
              .col-xl-8(data-aos="fade-left")
                SlyderF(columnas="col-lg-6 col-xl-6")
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img102.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Agrupación
                    p.mb-0 Separar crías, hembras en producción y machos de engorde.

                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img103.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Acceso a recursos
                    p.mb-0 Acceso permanente al agua y a zonas de enfriamiento.

                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img104.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Manejo de la carga animal
                    p.mb-0 Evitar el sobrepastoreo y controlar la densidad animal en corrales y potreros.
                  
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img105.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Comportamiento social
                    p.mb-0 Respetar la jerarquía social dentro del hato, minimizando enfrentamientos y lesiones.

                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img106.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Capacitación del personal
                    p.mb-0 Capacitar al personal en comportamiento bufalino y manejo sin violencia.
            
            p.mb-5 Estas acciones favorecen un entorno saludable, reducen el estrés y aumentan la eficiencia productiva.
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img25.svg" style="max-width: 60px").m-auto
          .col
            h3 Transporte y movilización a otras fincas

        p.mb-4 Para transportar búfalos de forma segura y ética, se deben aplicar las siguientes recomendaciones:

        .row.justify-content-center
          .col-xl-10
            .row.align-items-center.m-0.style___box_6.ajuste___box_6_2.mb-3(data-aos="zoom-in")
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img107.jpg', alt='' ).m-auto
              .col-xl-6
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Utilizar vehículos con <strong>ventilación adecuada y sombra</strong>, debido a su alta sensibilidad al calor.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Las rampas deben tener una <strong>pendiente menor a 20°</strong> y estar recubiertas con material antideslizante.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Evitar el <strong>sobrecupo</strong> durante el traslado, garantizando que los animales puedan permanecer de pie sin riesgo de caídas.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Para viajes de larga duración <strong>(más de 8 horas)</strong>, se debe planificar paradas para <strong>descanso, hidratación y alimentación</strong>.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Cumplir con toda la documentación sanitaria exigida por el ICA, como la <strong>Guía Sanitaria de Movilización (GSM) y el Documento de Tránsito Animal (DTA)</strong>.</li>
                </ul>
            .row.align-items-center.m-0.style___box_10.ajuste___box_10(data-aos="zoom-in")
              .col-xl-6
                p.mb-2 Los beneficios de las buenas prácticas en búfalos son:
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Disminuyen las lesiones y hematomas, mejorando el rendimiento en canal.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Incrementan la producción y calidad de la leche en hembras de ordeño.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Reducen la mortalidad y los riesgos sanitarios durante el transporte.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Promueven animales más dóciles y manejables en ordeño, arreo y vacunación.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Mejoran la <strong>seguridad del personal</strong>, disminuyendo accidentes por reacciones defensivas.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cow"></i></span>Elevan la <strong>aceptación social del producto y la competitividad en mercados exigentes</strong>.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img108.jpg', alt='' ).m-auto

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
