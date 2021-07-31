<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  3
      h1 Principales componentes de Playground   
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-8
        .bloque-texto-a.color-secundario.p-4.p-md-5
          .row.m-0.align-items-center.justify-content-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img.nW(src="@/assets/curso/t3-i1.svg", alt="imagen decorativa") 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p <b>Playground</b> cuenta con unos elementos esenciales para el proceso de desarrollo de aplicaciones móviles híbridas; crea el nuevo proyecto y permite elegir el <b>framework</b> con el cual se desea desarrollar la aplicación.

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Componentes del entorno de desarrollo en Playground")
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            p.mb-4 Observe, en detalle, los elementos contenidos en la figura, que le muestran los componentes del entorno de desarrollo en Playground.
            figcaption.customCaption.mb-3 <b>Figura</b> Principales componentes del entorno de desarrollo de Playground
            figure.mb-4
              img.shadow-box(src="@/assets/curso/t3-i2.jpg", alt="imagen decorativa") 
            figcaption Nota. Tomada y adaptada de los servicios de ayuda de Playground.

      .py-3.py-md-4(titulo="Frameworks de desarrollo en Playground")
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            p.mb-4 Reconozca, en esta figura, los frameworks de desarrollo en Playground para el proceso de desarrollo de una aplicación móvil híbrida, aplicable a su proyecto personal de aplicación móvil.
          .col-lg-5
            figcaption.customCaption.mb-3 <b>Figura</b> Frameworks de desarrollo sobre Playground
            figure.mb-4
              img.shadow-box.nW.centered(src="@/assets/curso/t3-if1.jpg", alt="imagen decorativa") 
            figcaption Nota. Tomada y adaptada de los servicios de ayuda de Playground.
    
    #t_3_1.titulo-segundo
      h2 3.1  Código QR
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.customBox.p-4
          .row
            .col-lg-7.p-4
              figure.mb-2
                img.nW(src="@/assets/curso/t3-ic1.svg", alt="icono decorativo decorativa") 
              p.mb-3  Para enlazar y visualizar el diseño desarrollado sobre <b>Playground,</b> esta plataforma cuenta con un generador de códigos QR para cada uno de los proyectos que se están desarrollando.
              p Este código permite la vinculación y visualización del proyecto sobre cualquier dispositivo móvil que tenga instalado <b>NativeScript Playground y NativeScript preview.</b>
            .col-lg-5
              figcaption.customCaption.mb-3 <b>Figura</b> Frameworks de desarrollo sobre Playground
              figure.mb-4
                img.nW.centered(src="@/assets/curso/t3-i4.jpg", alt="ejemplo de código QR") 
              figcaption Nota. Tomada de ejemplo real de ejecución en My Playground.

    #t_3_2.titulo-segundo
      h2 3.2  Componentes de la aplicación
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.customBox.p-4
          .row
            .col-lg-7.p-4
              figure.mb-2
                img.nW(src="@/assets/curso/t3-ic2.svg", alt="icono decorativo decorativa") 
              p.mb-3  En la columna izquierda del entorno de desarrollo de Playground, se pueden encontrar todos los componentes que se utilizan, de manera directa, en la creación de la interfaz gráfica de la aplicación. 
              p Para poder utilizar estos elementos, basta con seleccionarlos, arrastrarlos y ubicarlos dentro del código, en el lugar que sea necesario utilizarlos. Estudie atentamente la figura que se le presenta e identifique los aspectos que conviene comprender en lo referente a construcción de la interfaz gráfica.
            .col-lg-5
              figcaption.customCaption.mb-3 <b>Figura</b> Componentes de desarrollo gráfico
              figure.mb-4
                img.nW.centered.shadow-box(src="@/assets/curso/t3-i5.jpg", alt="ejemplo de componentes") 
              figcaption Nota. Tomada y adaptada de los servicios de ayuda de Playground.


    #t_3_3.titulo-segundo
      h2 3.3  Comunidad de desarrollo y soporte  
    .row.justify-content-center.mb-5
      .col-lg-2
        figure
          img(src="@/assets/curso/t3-ic3.svg", alt="imagen decorativa")
      .col-lg-10
        p La comunidad de desarrollo y soporte de <b>NativeScript y Playground</b> está en constante crecimiento al descubrir su funcionalidad y ventajas; esto ha provocado que existan cada vez más adeptos al desarrollo de aplicaciones móviles híbridas. 

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Acceso a documentos")
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            p.mb-4 Desde el soporte es posible, por ejemplo, acceder a documentos que se pueden utilizar como base o referente para el diseño de una aplicación.
          .col-lg-4  
            figcaption.customCaption.mb-3 <b>Figura</b> Documentación ayuda y soporte de Playground
            figure.mb-4
              img.shadow-box(src="@/assets/curso/t3-i6.jpg", alt="imagen decorativa") 
            figcaption Nota. Tomada y adaptada de los servicios de ayuda de Playground

      .py-3.py-md-4(titulo="Acceso a plantillas y proyectos varios")
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            p.mb-4 Desde el soporte es posible, también, acceder al repositorio de plantillas y proyectos existentes que serán guía o modelo para favorecer el diseño de cualquier nueva aplicación.
            figcaption.customCaption.mb-3 <b>Figura</b> Plantillas y proyectos para descargar 
            figure.mb-4
              img.shadow-box(src="@/assets/curso/t3-i7.jpg", alt="imagen decorativa") 
            figcaption Nota. Tomada de https://plugins.nativescript.rocks/samples



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
