<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  1
      h1 Características de NativeScript
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-8
        .bloque-texto-a.color-secundario.p-4.p-md-5
          .row.m-0.align-items-center.justify-content-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img.nW(src="@/assets/curso/t1-i1.svg", alt="imagen decorativa") 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Estas son las características del framework NativeScript. Se trata de una de las más importantes y comunes herramientas para el desarrollo de aplicaciones móviles híbridas.
    .row.justify-content-center.mb-5
      .col-lg-10
        figcaption.customCaption.mb-3 <b>Tabla</b> Principales características de NativeScript
        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header
            h5.mb-0 NativeScript
          table
            caption Nota. Tomada de Ancheta (2016).
            tr
              th Creadores 
              td Telerik
            tr
              th Desarrollo de interfaz 
              td Los componentes de la interfaz de usuario están traducidos a sus contrapartes nativas
            tr
              th Pruebas de desarrollo
              td Emulador, dispositivo
            tr
              th Lenguaje de programación 
              td Componentes de interfaz gráfica, subconjunto de CSS, JavaScript
            tr
              th Acceso a elementos  nativos
              td Acceso a la API nativa a través de JavaScript
            tr
              th Sistemas operativos que lo aceptan 
              td Android e iOS. Windows Universal muy pronto
            tr
              th Frameworks y librerías utilizadas 
              td Cualquiera librería que no dependa del navegador y esté basada en JavaScript 
            tr
              th Patrón de codificación
              td Patrón MVC/MVVM 
            tr
              th Cómo es ejecutado JavaScript
              td Utiliza el  motor Webkit de JavaScript Core para ejecutar el código de la aplicación en iOS y el motor de Google V8 en Android
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="NativeScript" :icono="require('@/assets/curso/t1-ic1.svg')")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p <b>NativeScript</b> soporta directamente el desarrollo con <b>Angular y Vue,</b> las cuales se pueden considerar como aplicaciones plenamente nativas, porque pueden utilizar las mismas API a las que tienen acceso las desarrolladas en <b>Xcode</b> o <b>Android Studio.</b> Para iniciar el diseño de una aplicación, se recomienda, como en este caso, trabajar el desarrollo de una interfaz de usuario sobre el lenguaje <b>NativeScript.</b> Las aplicaciones NativeScript se construyen utilizando lenguajes de programación independientes del dispositivo y sistema operativo, como <b>JavaScript o TypeScript.</b>
        
          .col-md-4
            figure
              img(src='@/assets/curso/t1-i2.svg', alt='Logotipo native script')

      .py-4.py-md-5(titulo="Interacción directa con elementos nativos" :icono="require('@/assets/curso/t1-ic2.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
          .col-md-6
            h4 Celebrate your failures 2
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.





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
