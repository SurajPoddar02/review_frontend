import axios from "axios";

const client = axios.create({
  baseURL: "https://movio-backend-git-master-shreyanshchachaundiya.vercel.app/api",

});

export default client;
