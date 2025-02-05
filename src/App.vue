<template>
  <v-layout>
    <!-- Barra superior -->

    <v-app-bar color="primary">
      <!-- Reemplazamos el ícono de navegación por el ícono de teléfono -->
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-icon>mdi-phone</v-icon>

      <v-toolbar-title class="white--text">Contáctos</v-toolbar-title>

      <v-spacer></v-spacer>


      <!-- Íconos adicionales si es necesario -->
    </v-app-bar>

    <!-- Menú lateral -->
    <v-navigation-drawer v-model="drawer" temporary color="contraste">
      <v-list>
        <v-list-item v-for="item in items" :key="item.title">
          <v-list-item-content class="d-flex align-center">
            <!-- Ícono de teléfono a la izquierda -->
            <v-btn icon color="Boton" @click="llamar(item.telefono)">
              <v-icon>mdi-phone</v-icon>
            </v-btn>

            <!-- Título a la derecha -->
            <v-list-item-title class="text-white ml-2">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Contenido Principal -->
    <v-main>
      <router-view />
      <Footer />
    </v-main>
  </v-layout>
</template>

<script setup>

import Footer from '@/components/Footer.vue';
import { ref } from 'vue';

// Lista de contactos de emergencia
const items = [
  { title: 'Policía Nacional', telefono: '+50762254433' },
  { title: 'Policía Niñez y Adolescencia', telefono: '+50762254433' },
  { title: 'Sistema de Emergencias', telefono: '+507911' },
  { title: 'Senniaf (Niñez y Familia)', telefono: '+50762254433' },
  { title: 'Medicina Legal', telefono: '+50762254433' },
  { title: 'MIDES', telefono: '+50762254433' },
];

const drawer = ref(false);

// Método para realizar llamadas
const llamar = (numero) => {
  window.location.href = `tel:${numero}`;
};

</script>


<!----Estilos de esta ventana-->
<style type="text/css">
.row1 {
  border: 2px solid red;
}

.col1 {
  border: 2px solid rgb(9, 197, 81);
}

borde {
  border: 2px solid blue
}
</style>