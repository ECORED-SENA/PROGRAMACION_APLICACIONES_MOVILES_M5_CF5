<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  1
      h1 Características de <i>NativeScript</i>
    .row.align-items-center.justify-content-center.mb-5.slideInLeft
      .col-lg-8
        .bloque-texto-a.color-primario.p-4.p-md-5
          .row.m-0.align-items-center.justify-content-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img.nW(src="@/assets/curso/t1-i1.svg", alt="imagen decorativa") 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Estas son las características del framework <i>NativeScript</i>. Se trata de una de las <b>más importantes y comunes herramientas para el desarrollo de aplicaciones móviles híbridas.</b>
    .row.justify-content-center.mb-5
      .col-lg-10
        figcaption.customCaption.mb-3 <b>Tabla 1</b> Principales características de <i>NativeScript</i>
        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header
            h5.mb-0 <i>NativeScript</i>
          table
            caption Nota. Tomada de Ancheta (2016).
            tr
              th Creadores 
              td <i>Telerik</i>
            tr
              th Desarrollo de interfaz 
              td Los componentes de la interfaz de usuario están traducidos a sus contrapartes nativas
            tr
              th Pruebas de desarrollo
              td Emulador, dispositivo
            tr
              th Lenguaje de programación 
              td Componentes de interfaz gráfica, subconjunto de CSS, <i>JavaScript</i>
            tr
              th Acceso a elementos  nativos
              td Acceso a la API nativa a través de <i>JavaScript</i>
            tr
              th Sistemas operativos que lo aceptan 
              td <i>Android</i> e <i>iOS</i>. <i>Windows Universal</i> muy pronto
            tr
              th Frameworks y librerías utilizadas 
              td Cualquiera librería que no dependa del navegador y esté basada en <i>JavaScript</i> 
            tr
              th Patrón de codificación
              td Patrón MVC/MVVM 
            tr
              th Cómo es ejecutado JavaScript
              td Utiliza el  motor <i>Webkit</i> de <i>JavaScript Core</i> para ejecutar el código de la aplicación en iOS y el motor de <i>Google</i> V8 en <i>Android</i>
    
    
    TabsB.color-acento-contenido.mb-5.customTab
      .py-4.py-md-5(titulo="NativeScript" :icono="require('@/assets/curso/t1-ic1.svg')")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p <b><i>NativeScript</i></b> soporta directamente el desarrollo con <b>Angular y <i>Vue</i>,</b> las cuales se pueden considerar como aplicaciones plenamente nativas, porque pueden utilizar las mismas API a las que tienen acceso las desarrolladas en <b><i>Xcode</i></b> o <b><i>Android Studio</i>.</b> Para iniciar el diseño de una aplicación, se recomienda, como en este caso, trabajar el desarrollo de una interfaz de usuario sobre el lenguaje <b><i>NativeScript</i>.</b> Las aplicaciones <i>NativeScript</i> se construyen utilizando lenguajes de programación independientes del dispositivo y sistema operativo, como <b><i>JavaScript</i></b> o <b><i>TypeScript</i>.</b>
        
          .col-md-4
            figure(data-aos="flip-up")
              img(src='@/assets/curso/t1-i2.svg', alt='Logotipo native script')

      .py-4.py-md-5(titulo="Interacción directa con elementos nativos" :icono="require('@/assets/curso/t1-ic2.svg')")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p La gran mayoría de las interfaces de usuario están definidas por archivos XML. Lo que hace <b><i>NativeScript</i></b> es utilizar la estructura de datos XML para representar la abstracción del código de la plataforma y lograr interactuar directamente con los elementos nativos del sistema operativo sobre el cual se está desarrollando, es decir, se hace pasar como un lenguaje nativo llamando los elementos del API, sin importar si es iOS o Android. Esta característica es lo que hace que este sea uno de los <b><i>frameworks</i></b> más utilizados y con mayor crecimiento. También mejora los tiempos de desarrollo y los tiempos de respuesta; no existe mucha diferencia en el rendimiento entre una aplicación nativa y una híbrida desarrollada con <b><i>NativeScript</i>.</b>
        
          .col-md-4
            figure(data-aos="flip-up")
              img(src='@/assets/curso/t1-i3.svg', alt='Logotipo native script')

      .py-4.py-md-5(titulo="Escritura del código fuente" :icono="require('@/assets/curso/t1-ic3.svg')")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p El código fuente de las aplicaciones desarrolladas con este <i>framework</i> está escrito en <i>JavaScript</i>, <i>TypeScript</i> o <i>Angular</i>. Este código fuente no será compilado, será ejecutado sobre el dispositivo. Por esa razón, al no ser compilado, las aplicaciones <i>NativeScript</i> serán ejecutadas directamente, sin necesidad de la manipulación del DOM o interacción con el navegador del dispositivo que interpreta, usando el motor de renderizado de la plataforma o dispositivo; esto proporciona una experiencia de usuario verdaderamente nativa, cerrando la brecha entre los desarrollos nativos y los híbridos.
        
          .col-md-4
            figure(data-aos="flip-up")
              img(src='@/assets/curso/t1-i4.jpg', alt='imagen decorativa')

      .py-4.py-md-5(titulo="Control de la plataforma nativa" :icono="require('@/assets/curso/t1-ic4.svg')")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Las principales partes del <i>framework NativeScript</i> son una máquina virtual, <i>JavaScript</i>, un ejecutor y un módulo de puente; estos son los elementos que logran realizar “la magia”. El código de <i>JavaScript</i> es ejecutado e interpretado por la máquina virtual. Al instante, el módulo de puente realiza la tradicional llamada a las API específicas de la plataforma y retorna los resultados a las funciones solicitadas. Para dejarlo claro, <i>NativeScript</i> proporciona a los desarrolladores una forma de controlar la plataforma nativa a través de <i>JavaScript</i> en vez de <i>Objective-C</i> en <i>iOS</i> o <i>Java</i> en <i>Android</i>.<br>(Atanasov, 2016)
        
          .col-md-4
            figure(data-aos="flip-up")
              img(src='@/assets/curso/t1-i5.jpg', alt='imagen decorativa')



  
</template>

<script>
export default {
  name: 'Tema1',
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
