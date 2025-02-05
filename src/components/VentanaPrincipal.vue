<template>
  <v-container>
    <div class="text-h5 font-weight-bold mb-n1 text-center">Bienvenidos a </div>
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img contain height="200" class="" src="/assets/ProtegeKids_logo.png" />
      <h1 class="text-h2 font-weight-bold">ProtegeKids</h1>
      <div class="py-2" />
      <infoPrincipal />
      <!----------    aqui van los cards de los temas    --------->
      <CardTemplate />

      <!----------    aqui estan los botones de la ventana principal    --------->

      <!----------    aqui estan los botones de la ventana principal    --------->
    </v-responsive>
  </v-container>
</template>

<script setup>
import CardTemplate from '@/components/CardTemplate';
import infoPrincipal from '@/components/infoPrincipal.vue';


//
</script>
