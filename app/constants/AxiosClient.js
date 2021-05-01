import AxiosClient from "axios";

const axios = AxiosClient.create({
    baseURL: "https://techtoday.azurewebsites.net",
    timeout: 30000
})

export default axios;
