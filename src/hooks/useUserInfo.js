import { useEffect ,useState} from "react";
const initialData = {
    name: "",
    bio: "",
    phone: "",
    email: "",
    password: "",
    image:null
  };

export const useUserInfo = (id) => {
    const [info, setInfo] = useState(initialData)
    
    const getInfo = async () => {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL_GET_USER}`+id)
        const json = await res.json()
        if(res.ok){
            setInfo(json)
        }else{
            console.error('Error in fetch data')
        }
    }

    useEffect(() => {
        getInfo()
    },[])

    return info
}