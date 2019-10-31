<template>
    <article class="bouquet">
        <img class="bouquet-image" :src="bouquet.image" :title="bouquet.name">
        <div class="bouquet-details">
            <h4 class="bouquet-name">{{ bouquet.name }}</h4>
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
<style lang="css" scoped>
    .bouquet {
        margin: 1rem;
    }

    .bouquet-image {
        max-width: 100%;
        background-color: white;
        box-shadow: 0px 1px 3px #efefef;
        border-radius: 5px;
        margin-top: 5px;
        transition: all 700ms;
    }

    .bouquet-image:hover {
        margin-top: -5px;
        cursor: pointer;
    }

    .bouquet-details {
        padding: 1rem;
    }

    .bouquet-price {
        font-size: .9rem;
    }
</style>