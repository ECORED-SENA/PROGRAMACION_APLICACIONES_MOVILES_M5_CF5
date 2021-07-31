<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  5
      h1 Informe de arquitectura
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t2-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La arquitectura de software de una aplicación móvil, o de cualquier sistema informático, permite identificar y definir la estructura o estructuras de todos los componentes que integrarán el sistema, es decir, define los elementos de software y hardware y las relaciones que existen entre ellos.

    .row.justify-content-center.mb-5
      .col-lg-10
        figcaption.customCaption.mb-3 <b>Figura</b> La arquitectura de aplicación móvil
        figure
          img(src='@/assets/curso/t5-i2.png', alt='arquitectura de aplicación móvil')
        figcaption.mb-5 Nota. Tomada de https://1library.co/document/yrk5x5oz-arquitectura-desarrollo-aplicaciones-educativas-dispositivos-moviles.html

    .row.justify-content-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/t5-i3.svg', alt='imagen decorativa')
      .col-lg-8
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row.justify-content-center(titulo="Tipo de aplicación por desarrollar")
            .col-md-12
              p Para el diseño de la nueva aplicación móvil, se deben considerar algunos aspectos puntuales que buscan mejorar el rendimiento y la eficiencia esperada de la aplicación a desarrollar. Lo primero que se debe realizar es definir qué tipo de aplicación se desarrollará, teniendo en cuenta que, en su gran mayoría, las aplicaciones móviles están compuestas por varias capas: capa experiencia de usuario, capa negocio y capa de datos.

          div(titulo="Cliente pesado")
            .col-md-12
              p También llamado <b>‘cliente enriquecido’ (rich client).</b> Implica que la capa de negocio y la de datos están o se encuentran alojadas en el mismo dispositivo. Una aplicación que almacena y recupera datos localmente, en lugar de realizarlo de forma remota, facilita la interacción con otros recursos internos. Las aplicaciones del lado cliente mantienen una apariencia coherente y admiten una interfaz de usuario compleja.
            
          div(titulo="Cliente liviano")
            .col-md-12
              p <b>Es un cliente ligero (thin client).</b> Aquí, las capas de datos y de negocio se encuentran alojadas en un servidor remoto.

          div(titulo="Aplicación de Internet enriquecida")
            .col-md-12
              p Se conoce también como <b>‘aplicación rica de Internet’ (rich internet application).</b> Es el caso en que se utiliza una interfaz de usuario robusta y, para su funcionamiento, requiere conexión a Internet, evitando utilizar recursos locales; esta se caracteriza porque sus capas toman toda la información de Internet, no de manera centralizada sino de diferentes fuentes en paralelo.

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          p Para comenzar la acción práctica de construir una aplicación móvil híbrida, de acuerdo con la arquitectura requerida y con criterios técnicos, visualice el video que aquí se propone y desarrolle, paralelamente, la elaboración de su app móvil.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)





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

<style lang="sass" scoped></style>
