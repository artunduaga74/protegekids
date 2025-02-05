<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h2 class="text-center">Soy ventana 1 no me olvides</h2>
  <v-sheet border="lg opacity-12" class="text-body-2 mx-auto" max-width="550">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="3">
          <v-img src="/public/assets/madre.png" cover></v-img>
        </v-col>
        <v-col cols="12" md="9">
          <p class="mb-4">
            This is part of our <a href="#">Most Comprehenseive Guide to Referral Programs</a> > <a href="#">Do I Need A
              Referral Program?</a> section. You may enjoy other related articles:
          </p>

          <ul class="ps-4 mb-6">
            <li>
              <a href="#">Linsk de referencias a algunas paginas externas</a>
            </li>
            <li>
              <a href="#">Linsk de referencias a algunas paginas externas</a>
            </li>
            <li>
              <a href="#">Linsk de referencias a algunas paginas externas</a>
            </li>
            <li>
              <a href="#">Linsk de referencias a algunas paginas externas</a>
            </li>
          </ul>

          <v-btn to="/" class="text-none" color="info" rounded="0" variant="flat" block>
            Volver atrás
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>

</script>
