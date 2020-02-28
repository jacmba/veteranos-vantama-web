<template>
  <div>
    <b-carousel
      controls
      indicators
      :interval="4000"
      img-width="300"
      img-height="200"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide img-src="/carrousel1.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="/carrousel2.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="/carrousel3.jpg">
        Porque sin los terceros tiempos no seríamos nadie
      </b-carousel-slide>
      <b-carousel-slide img-src="/carrousel4.jpg">
        Asaderassso!!
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
