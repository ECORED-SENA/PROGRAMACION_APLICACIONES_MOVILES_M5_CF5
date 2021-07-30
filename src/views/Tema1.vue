<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  1
      h1 Características de NativeScript
    .row.align-items-center.justify-content-center
      .col-lg-8
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img.nW(src="@/assets/curso/t1-i1.svg", alt="imagen decorativa") 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Estas son las características del framework NativeScript. Se trata de una de las más importantes y comunes herramientas para el desarrollo de aplicaciones móviles híbridas.







    Muestras
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
