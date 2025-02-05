<template>
    <v-card class="mx-auto" max-width="400">
        <v-img height="200" src="/assets/joven.png" cover></v-img>

        <v-card-title>
            La app de protección infantil
        </v-card-title>

        <v-card-subtitle>
            Aqui encontraras informacion útil vital sobre protección y prevención infantil.
        </v-card-subtitle>



        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                    Aqui encontraras informacion útil vital sobre protección y prevención infantil.
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>
<script>
export default {
    data: () => ({
        show: false,
    }),
}
</script>