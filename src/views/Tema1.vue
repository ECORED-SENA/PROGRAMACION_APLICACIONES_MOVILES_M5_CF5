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
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p La gran mayoría de las interfaces de usuario están definidas por archivos XML. Lo que hace <b>NativeScript</b> es utilizar la estructura de datos XML para representar la abstracción del código de la plataforma y lograr interactuar directamente con los elementos nativos del sistema operativo sobre el cual se está desarrollando, es decir, se hace pasar como un lenguaje nativo llamando los elementos del API, sin importar si es iOS o Android. Esta característica es lo que hace que este sea uno de los <b>frameworks</b> más utilizados y con mayor crecimiento. También mejora los tiempos de desarrollo y los tiempos de respuesta; no existe mucha diferencia en el rendimiento entre una aplicación nativa y una híbrida desarrollada con <b>NativeScript.</b>
        
          .col-md-4
            figure
              img(src='@/assets/curso/t1-i3.svg', alt='Logotipo native script')

      .py-4.py-md-5(titulo="Escritura del código fuente" :icono="require('@/assets/curso/t1-ic3.svg')")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p El código fuente de las aplicaciones desarrolladas con este framework está escrito en JavaScript, TypeScript o Angular. Este código fuente no será compilado, será ejecutado sobre el dispositivo. Por esa razón, al no ser compilado, las aplicaciones NativeScript serán ejecutadas directamente, sin necesidad de la manipulación del DOM o interacción con el navegador del dispositivo que interpreta, usando el motor de renderizado de la plataforma o dispositivo; esto proporciona una experiencia de usuario verdaderamente nativa, cerrando la brecha entre los desarrollos nativos y los híbridos.
        
          .col-md-4
            figure
              img(src='@/assets/curso/t1-i4.jpg', alt='imagen decorativa')

      .py-4.py-md-5(titulo="Control de la plataforma nativa" :icono="require('@/assets/curso/t1-ic4.svg')")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Las principales partes del framework NativeScript son una máquina virtual, JavaScript, un ejecutor y un módulo de puente; estos son los elementos que logran realizar “la magia”. El código de JavaScript es ejecutado e interpretado por la máquina virtual. Al instante, el módulo de puente realiza la tradicional llamada a las API específicas de la plataforma y retorna los resultados a las funciones solicitadas. Para dejarlo claro, NativeScript proporciona a los desarrolladores una forma de controlar la plataforma nativa a través de JavaScript en vez de Objective-C en iOS o Java en Android.<br>(Atanasov, 2016)
        
          .col-md-4
            figure
              img(src='@/assets/curso/t1-i5.jpg', alt='imagen decorativa')


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
