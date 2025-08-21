import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure=axios.create({
    baseURL:"http://localhost:5000"
})

const UseAxiosSecure = () => {
    const navigate=useNavigate();
    const {signOutUser}=useAuth()
    // req intercepter
    axiosSecure.interceptors.request.use(function(config){
        const token=localStorage.getItem('access-token')
        // console.log('request by intersepet')
        config.headers.authorization=`Bearer ${token}`
        return config;
    },function(erro){
        return Promise.reject(erro);
    
    })
    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function(response){
        return response;
    },async(error)=>{
        const status=error.response.status;
        // console.log('status error inntercepter',status)
        if(status ===401 || status=== 404){
            await signOutUser();
            navigate('/login');
        }
        return Promise.reject(error)
    })
 return axiosSecure;
};

export default UseAxiosSecure;