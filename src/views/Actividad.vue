<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Bienestar animal y normatividad en el transporte de especies pecuarias',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave relacionados con los principios del bienestar animal, el impacto del transporte en especies pecuarias y la normatividad colombiana aplicable.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes es una de las cinco libertades del bienestar animal?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Libertad para competir por recursos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Libertad de hambre y sed.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Libertad para reproducirse.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Libertad de domesticación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué establece la Ley 1774 de 2016 en Colombia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Normas para el uso de medicamentos veterinarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Requisitos sanitarios de plantas procesadoras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reconocimiento de los animales como seres sintientes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '¿Qué establece la Ley 1774 de 2016 en Colombia?',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es un efecto fisiológico del transporte en los animales?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumento de la masa muscular.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incremento del cortisol y frecuencia cardiaca.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mejoramiento del apetito.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducción de la inmunidad pasiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es una práctica recomendada durante la carga de animales?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de picanas eléctricas en áreas sensibles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Utilizar rampas antideslizantes con pendiente adecuada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Realizar gritos para apurar a los animales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aislar completamente a cada animal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué especie es especialmente sensible al estrés térmico y al hacinamiento?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porcinos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Bufalinos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ovinos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Equinos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué sucede con la carne DFD en bovinos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tiene más grasa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es oscura, firme y seca.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tiene más jugosidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Es más costosa de producir.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es uno de los beneficios de aplicar Buenas Prácticas de Bienestar Animal (BPBA)?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumento de costos por animal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducción de pérdidas económicas y mejora de la calidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mayor rotación de animales por estrés.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Facilita el maltrato bajo condiciones controladas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué herramienta se recomienda usar en lugar de choques eléctricos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Banderas o paletas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cinturones de presión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Palos con clavos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cercas eléctricas de alto voltaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué tipo de visión tienen las aves de corral principalmente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Monocular con zona ciega.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Binocular completa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Infrarroja.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Panorámica sin puntos ciegos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué documento técnico colombiano regula el transporte de animales vivos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Resolución ICA 136 de 2020.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ley 100 de 1993.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Resolución INVIMA 014 de 2015.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Decreto 1500 de 2007.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'Los equinos tienen un punto ciego justo detrás de la grupa.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'La zona de lucha en los animales es más amplia que la zona de fuga.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Las aves deben transportarse en cajas ventiladas y sin sobrecupo.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'El estrés por transporte no tiene efectos sobre la inocuidad de los productos animales.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Bovinos, porcinos y ovinos deben movilizarse en grupos debido a su comportamiento gregario.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
