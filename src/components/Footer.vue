<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <v-footer>
      <v-card width="100%" class="text-center primary">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon.icono" :href="icon.ruta" class="mx-4 texto--text" icon>
            <v-icon size="40px">
              {{ icon.icono }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Orion Web Desingn</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>
<script>
export default {

  data: () => ({
    icons: [{
      icono: "mdi-facebook",
      ruta: "https://www.facebook.com/Qbonita-OnlineShop-164984081877147/"
    },
    {
      icono: "mdi-instagram",
      ruta: "https://www.instagram.com/qbonita_online_shop/"
    }]
  })

};
</script>