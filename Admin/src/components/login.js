import { useState } from "react"
import AuthUser from './AuthUser';

export default function Logine() {
    const {http,setToken} = AuthUser();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const submitForm = () =>{
        // api call
        http.post('/login',{email:email,password:password}).then((res)=>{
            setToken(res.data.user,res.data.access_token);
        })
    }

    return(
        <form  >
            <label className="w-100">
              Email :
              <input
                type={"text"}
                name="email"
                className="form-control mt-2"
                placeholder="Saisissez votre Email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </label>
            <label className="w-100">
              Mot de passe :
              <input
                type={"text"}
                onChange={(e)=>setPassword(e.target.value)}
                name="password"
                className="form-control mt-2"
                placeholder="********"
              />
            </label>
            <button type="button" onClick={submitForm} className="btn btn-primary w-100">Se connecter</button>
          </form>
    )
}