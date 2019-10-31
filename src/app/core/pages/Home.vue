<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-img :src="require('@/assets/logo.svg')" class="my-3" contain height="200"></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">Floraqueen Bouquets</h1>
        <p
          class="subheading font-weight-regular"
        >A curated list of bouquets to send to your loved ones</p>
      </v-flex>

      <v-flex xs12 mb-5>
        <v-layout justify-center>
          <router-link to="/bouquets">
            <v-btn color="primary" text target="_blank">
              <span class="mr-2">Check it out!</span>
            </v-btn>
          </router-link>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({})
};
</script>
