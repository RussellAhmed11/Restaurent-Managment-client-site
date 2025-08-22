import { useQuery } from "@tanstack/react-query"
import UseAxiosPublic from "./UseAxiosPublic"

const UseMenu = () => {
    const axiosPublic = UseAxiosPublic()
    //  const [menus,setMenu]=useState([])
    // const [loading,setLoading]=useState(true)
    // useEffect(()=>{
    //     fetch('')
    //     .then(res=>res.json())
    //     .then(data=>{
    //          setMenu(data)http://localhost:5000/menu
    //        setLoading(false)
    //     })refetch
    // },[])

     const {data: menus = [], isPending: loading, refetch} = useQuery({
        queryKey: ['menu'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/menu');
            return res.data;
        }
    })
    return [menus, loading,refetch]
}
export default UseMenu;