import axios from "axios";
import { ElMessage } from 'element-plus';
import { resolveComponent } from "vue";
import router from './router'
import store from './store'

axios.defaults.baseURL = "http://localhost:8081";

//  前置拦截
axios.interceptors.request.use(config => {

    return config
})

axios.interceptors.response.use(
    respons => {
        let res = respons.data;

        console.log("====================")
        console.log(res)
        console.log("====================")

        if (res.code == 200) {
            return respons;
        } else {
            ElMessage.error('Oops, this is a error message.');
            return Promise.reject(respons.data.msg);
        }
    },
    error => {
        console.log("error is ===========>>>>>>");
        console.log(error.response);

        if (error.response.data) {
            error.message = error.response.data.msg
        }

        if (error.response.status == 401) {
            store.commit("REMOVE_INFO")
            router.push("/login")
        }

        ElMessage.error(error.message);
        return Promise.reject(error);

    }
)