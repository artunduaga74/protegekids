<template>
  <v-container>
    <v-card class="pa-4" elevation="8">
      <v-card-title class="text-h5 font-weight-bold">Test de Evaluación</v-card-title>
      <v-divider class="my-4"></v-divider>

      <v-card-subtitle class="text-h6 font-weight-bold">Interpretación de los resultados</v-card-subtitle>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <p><strong>0-2 respuestas "Sí":</strong> Probablemente no hay señales claras de riesgo. Mantén una
              observación normal.</p>
            <p><strong>3-5 respuestas "Sí":</strong> Podría ser útil estar más atento al comportamiento de esta persona.
            </p>
            <p><strong>Más de 5 respuestas "Sí":</strong> Busca asesoramiento profesional o contacta con las autoridades
              si es necesario.</p>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-card-subtitle class="text-h6 font-weight-bold">Instrucción</v-card-subtitle>
      <p>Marca la selección <strong>sí</strong>, <strong>no</strong> o <strong>no estoy seguro</strong>.</p>

      <v-list>
        <v-list-item-group>
          <v-list-item v-for="(question, index) in questions" :key="index">
            <v-list-item-content>
              <p><strong>{{ question.text }}</strong></p>
              <v-radio-group v-model="question.answer" @change="saveProgress">
                <v-radio label="Sí" value="si"></v-radio>
                <v-radio label="No" value="no"></v-radio>
                <v-radio label="No estoy seguro" value="no estoy seguro"></v-radio>
              </v-radio-group>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-row class="text-center no-gutters">
        <v-col cols="6" sm="4">
          <v-btn color="accion" class="mt-2" @click="calculateScore">Respuesta</v-btn>
        </v-col>
        <v-col cols="6" sm="4">
          <v-btn color="secondary" class="mt-2 ml-2" @click="resetTest">Repetir</v-btn>
        </v-col>
      </v-row>
      <v-card class="mt-4 pa-3" v-if="resultMessage">
        <v-card-title class="text-h6">Resultado del Test:</v-card-title>
        <p>{{ resultMessage }}</p>
      </v-card>
    </v-card>
    <v-row no-gutters class="text-center">
      <v-col><v-btn rounded="0" variant="flat" color="info" class="mt-4" to="/">Regresar a la Página
          Principal</v-btn>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        { text: "¿Este adulto parece preferir la compañía de niños más que la de otros adultos?", answer: null },
        { text: "¿Busca regularmente excusas para estar a solas con niños, fuera de la vista de otros adultos?", answer: null },
        { text: "¿Se involucra en actividades con niños que parecen estar fuera de lo común o no apropiadas para su rol?", answer: null },
        { text: "¿Con frecuencia ofrece regalos, favores o atenciones excesivas a un niño en particular?", answer: null }
      ],
      resultMessage: ""
    };
  },
  created() {
    this.loadProgress();
  },
  methods: {
    calculateScore() {
      const score = this.questions.filter(q => q.answer === "si").length;
      if (score <= 2) {
        this.resultMessage = "Probablemente no hay señales claras de riesgo. Mantén una observación normal.";
      } else if (score >= 3 && score <= 5) {
        this.resultMessage = "Podría ser útil estar más atento al comportamiento de esta persona.";
      } else {
        this.resultMessage = "Busca asesoramiento profesional o contacta con las autoridades si es necesario.";
      }
      localStorage.setItem("testResult1", this.resultMessage);
    },
    resetTest() {
      this.questions.forEach(q => q.answer = null);
      this.resultMessage = "";
      localStorage.removeItem("testProgress1");
      localStorage.removeItem("testResult1");
    },
    saveProgress() {
      localStorage.setItem("testProgress1", JSON.stringify(this.questions));
    },
    loadProgress() {
      const savedProgress = localStorage.getItem("testProgress1");
      if (savedProgress) {
        this.questions = JSON.parse(savedProgress);
      }
      this.resultMessage = localStorage.getItem("testResult1") || "";
    }
  }
};
</script>