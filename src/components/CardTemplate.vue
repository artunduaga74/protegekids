<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col v-for="info in infos" :key="info.titulo" cols="12" sm="6" md="4" lg="3">
          <v-card class="mx-auto my-4" elevation="8" hover>
            <!-- Encabezado con color -->
            <v-card-title class="white--text text-center" style="background-color: #17CED6;">
              <span class="font-weight-black">{{ info.titulo }}</span>
            </v-card-title>

            <!-- Imagen -->
            <v-img contain height="100" :src="`/assets/${info.icono}`"></v-img>

            <!-- Contenido -->
            <v-card-text class="pt-4">
              {{ info.parrafo }}
            </v-card-text>

            <!-- Botón de acción -->
            <v-card-actions class="justify-center">
              <v-btn :to="info.ruta" color="#8216B3" size="small" variant="flat">
                Saber más...
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infos: [
        {
          icono: "info.png",
          titulo: "Información",
          parrafo: "La pedofilia es un trastorno caracterizado por un atracción hacia menores de edad. Existen dos tipos como la pedofilia exclusiva y la no exclusiva",
          ruta: "/Información",
        },
        {
          icono: "alert.png",
          titulo: "Señales de Riesgo",
          parrafo: "Los niños victimas de abuso pueden mostrar cambios de comportamiento, miedo inexplicable, aislamiento, problemas para dormir o rechazo a ciertas personas también pueden presentar lesiones físicas sin explicación clara...",
          ruta: "/alertas",
        },
        {
          icono: "test.png",
          titulo: "Test de Evaluación",
          parrafo: "Responde preguntas claves para identificar señales claras de riesgo en el comportamiento de un adulto o menor. Herramienta util para padres y educadores",
          ruta: "/Test-Evaluación",
        },
        {
          icono: "libro.png",
          titulo: "Guías de Acción",
          parrafo: "Si sospechas y eres victima de abuso. Sigue estos pasos: 1) Habla con alguien de confianza. 2) Contacta con las autoridades 3) Busca apoyo qsicolóligo. 4) No enfrentes el agresor sin ayuda profecional...",
          ruta: "/Guías_acción",
        },
      ],
    };
  },
};
</script>
