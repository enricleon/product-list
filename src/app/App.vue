<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Floraqueen</span>
        <span class="font-weight-light">Bouquets</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
        <transition>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
