import axios from "axios";

const baseDomain = "https://bouquets.herokuapp.com";
const baseURL = `${baseDomain}`;

export default axios.create({
    baseURL
});
