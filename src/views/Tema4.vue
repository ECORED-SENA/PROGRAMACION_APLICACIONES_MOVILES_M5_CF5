<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  4
      h1 Instalación en los dispositivos móviles 
    .row.justify-content-center.mb-5.slideInLeft
      .col-lg-2
        figure
          img(src="@/assets/curso/t3-ic3.svg", alt="imagen decorativa")
      .col-lg-10
        p Para poder realizar la visualización de la aplicación en cualquier dispositivo móvil, es importante descargar e instalar la app NativeScript Playground; esta aplicación es la que permite capturar el código QR de la aplicación que se está desarrollando y, de esta manera, lograr la vinculación de la aplicación al dispositivo y viceversa.
    .row.justify-content-center.mb-5
      TabsB.color-acento-contenido.mb-5
        .py-4.py-md-5(titulo="Descarga de NativeScript Playground" :icono="require('@/assets/curso/t4-ic1.svg')")
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              p Esta descarga se hace en cualquiera de las tiendas de aplicaciones de los servicios disponibles. En el ejemplo de la figura, la descarga se ejecuta en PlayStore.
          
            .col-md-4
              figcaption.customCaption.mb-3 <b>Figura</b>Instalación de NativeScript Playground
              figure.mb-3
                img.nW(src='@/assets/curso/t4-i2.png', alt='pantalla de Instalación de NativeScript Playground')
              figcaption Nota. Tomada de ejemplo real de búsqueda de aplicaciones en <b>Playstore</b>  

        .py-4.py-md-5(titulo="NativeScript preview" :icono="require('@/assets/curso/t4-ic2.svg')")
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              p <b>NativeScript preview</b> es la app que permite visualizar la aplicación en desarrollo sobre el dispositivo móvil y realizar la interacción con la interfaz gráfica y, en general, con todo el entorno desarrollado; crea la posibilidad de reconocer la aplicación que se encuentra en proceso de desarrollo, como si esta ya estuviese implementada y lista en producción.
          
            .col-md-4
              figcaption.customCaption.mb-3 <b>Figura</b>Instalación de NativeScript preview
              figure
                img(src='@/assets/curso/t4-i3.png', alt='Logotipo native script')
              figcaption Nota. Tomada de ejemplo real de búsqueda de aplicaciones en Playstore.
  
    .tarjeta.color-primario.p-4.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/t4-i4.svg", alt='imagen decorativa')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p <b>Para afianzar sus conocimientos y habilidades</b> en el proceso de instalación en los dispositivos móviles, con miras a la construcción de una nueva aplicación móvil, visite la siguiente guía PDF y visite cada uno de los enlaces que allí se muestran.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_1_EnlacesRecomendados.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download




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
