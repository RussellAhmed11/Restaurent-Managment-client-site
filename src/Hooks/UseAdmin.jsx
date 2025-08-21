import { useQueries, useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseAdmin = () => {
    const {user}=useAuth();
    const axiosSecure=UseAxiosSecure()
   const {data:isAdmin,isPending:isAdminLoading}=useQuery({
    queryKey:[user?.email,'isAdmin'],
    queryFn:async ()=>{
        const res=await axiosSecure.get(`/users/admin/${user.email}`);
        return res.data?.admin;
    }
   })
    return [isAdmin,isAdminLoading]
};

export default UseAdmin;