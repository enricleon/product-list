<template>
  <v-container grid-list-md fill-height>
    <v-layout column>
      <v-flex>
        <v-layout row wrap align-content-start>
          <v-flex :key="bouquet.id" xs3 v-for="bouquet in bouquets">
            <BouquetListItem :bouquet="bouquet" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import BouquetListItem from './BouquetListItem'

export default {
  components: {
    BouquetListItem
  },
  props: {
    bouquets: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="sass" scoped>

</style>