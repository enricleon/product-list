<template>
    <article class="bouquet">
        <img class="bouquet-image" :src="bouquet.image" :title="bouquet.name">
        <div class="bouquet-details">
            <h3 class="bouquet-name">{{ bouquet.name }}</h3>
            <div class="bouquet-price">{{ bouquet.price }}</div>
        </div>
    </article>
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