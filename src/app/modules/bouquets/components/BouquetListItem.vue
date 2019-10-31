<template>
    <img :src="bouquet.image" :title="bouquet.name">
</template>
<script>
export default {
  props: {
    bouquet: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="sass" scoped>

</style>