<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row
      .col-lg-4
        figure.mb-5
          img(src="@/assets/curso/t0-i1.png", alt="imagen decorativa")

      .col-lg-8
        p.mb-4  Se realiza una breve descripción de una de las herramientas más utilizadas para el desarrollo de aplicaciones móviles híbridas, <b>que permite la realización de actividades de diseño <i>front-end</i> y pruebas directas de interfaz de usuario sobre los dispositivos móviles,</b> de manera rápida y sencilla. Son aplicaciones que hacen más natural todo el proceso de diseño y desarrollo de las apps; una de sus principales características es la visualización e interacción de la aplicación en tiempo real sin necesidad de utilizar emuladores, realizando la simulación de la funcionalidad directamente sobre el dispositivo físico. <b>Se puede utilizar un iPhone, un Android, o los dos, de manera directa.</b>
        .cajon.color-acento-contenido.p-4
          p.mb-3  Para la elaboración de este componente, se abordaron varios autores conocidos <b>en diseño de aplicación e informe de arquitectura,</b> de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos, aprendices y lectores en general, que estén interesados en <b>acercarse a asuntos básicos de la programación de aplicaciones para dispositivos móviles.</b>
    


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
