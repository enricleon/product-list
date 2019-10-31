import repository from './repository';

const resource = "/bouquets";

export default {
    get() {
        return repository.get(`${resource}`);
    },
    getBouquet(id) {
        return repository.get(`${resource}/${id}`);
    },
    postBouquet(id, bouquet) {
        return repository.post(`${resource}/${id}`, bouquet);
    },
    putBouquet(id, bouquet) {
        return repository.put(`${resource}/${id}`, bouquet);
    },
    deleteBouquet(id, bouquet) {
        return repository.delete(`${resource}/${id}`);
    }
}