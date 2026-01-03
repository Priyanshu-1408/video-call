
import { createContext, useContext , useState} from "react";
import { useNavigate  } from "react-router-dom";
import httpStatus from "http-status";
import axios from "axios";



export const AuthContext = createContext({});

const client = axios.create({
    baseURL: "localhost:8000/api/v1/users"
})

export  const AuthProvider = ({childeren})=>{
    const authContext = useContext(AuthContext);

    const [userData, setUserData] = useState(authContext);
    
    const handleRegister = async (name, username , password)=>{
        try{
            let request = await client.post("/register" , {
                name: name,
                username: username,
                password: password
            })
            if(request.status === httpStatus.CREATED){
                return request.data.message;
            }
        }catch(err){
            throw err;

        }
    }
    
    const router  = useNavigate();

    const data = {
        userData, setUserData, handleRegister
    }

    return (
        <AuthContext.Provider value={data}>
            {childeren}
        </AuthContext.Provider>
    )
}

