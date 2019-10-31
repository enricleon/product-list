import bouquetsRepository from "./bouquets-repository";

const repositories = {
    bouquets: bouquetsRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
}