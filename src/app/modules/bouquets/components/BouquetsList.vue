<template>
    <p>
        {{ bouquets }}
    </p>
</template>
<script>
export default {
    props: {
        bouquets: {
            type: Array,
            required: true
        }
    },
}
</script>
<style lang="sass" scoped>

</style>