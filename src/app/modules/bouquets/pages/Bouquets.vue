<template>
    <BouquetsList :bouquets="bouquets"/>
</template>
<script>
import BouquetsList from '../components/BouquetsList';

import { RepositoryFactory } from "@/app/shared/repositories/repository-factory";
const BouquetsRepository = RepositoryFactory.get('bouquets');

export default {
    components: {
        BouquetsList
    },
    data() {
        return {
            isLoading: false,
            bouquets: []
        }
    },
    created() {
        this.fetch();
    },
    methods: {
        async fetch() {
            this.isLoading = true;
            const { data } = await BouquetsRepository.get();
            this.isLoading = false;
            this.bouquets = data;
        }
    }
}
</script>
<style lang="sass" scoped>

</style>