<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span  2
      h1 Diseño y desarrollo sobre Playground
    .row.align-items-center.justify-content-center.mb-5.slideInLeft
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t2-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La primera actividad a realizar es la configuración del entorno de trabajo para <b><i>NativeScript</i></b> junto con las herramientas necesarias para la codificación de la interfaz gráfica del proyecto que permitan la visualización sobre dos sistemas operativos, en este caso <b>iOS y Android.</b>
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-10   
        .tarjeta.color-light-blue.p-4
          p.mb-4 Se procede a realizar el trabajo sobre la plataforma web Playground; este es un entorno web de <i>NativeScript</i> que permite el desarrollo de aplicaciones sin la necesidad de instalación de programas. Esa es una de las grandes ventajas de este framework. No es necesario contar con una máquina de desarrollo con características de alta gama para realizar la creación de una aplicación satisfactoria.
          .row.justify-content-center.mb-4
            .col-lg-10
              figcaption.customCaption.mb-3 <b>Figura 1</b> Entorno de desarrollo <i>NativeScript Playground</i>
              figure.mb-3.slideInRight
                img.shadow-box(src="@/assets/curso/t2-i2.jpg", alt="imagen decorativa")
              figcaption  Nota. Tomada de ejemplo real de ejecución en <i>My Playground</i>









</template>

<script>
export default {
  name: 'Tema2',
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
