import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID dChiFPwnLPRjwkGAaXXNWenx7A9fQPU2PYvZBO3l5qA",
  },
});
