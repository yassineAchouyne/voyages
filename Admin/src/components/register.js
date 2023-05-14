import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';


export default function Register() {
    const navigate = useNavigate();
    const {http,setToken} = AuthUser();
    const [nom,setNom] = useState();
    const [prenom,setPrenom] = useState();
    const [tel,setTel] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const submitForm = () =>{
        // api call
        http.post('/register',{nom,prenom,tel,email,password}).then((res)=>{
            // navigate('/login')
        })
    }

    return(
        <form  >
            <label className="w-100">
              Nom :
              <input
                type={"text"}
                className="form-control mt-2"
                placeholder="Saisissez votre Nom"
                onChange={e=>setNom(e.target.value)}
              />
            </label>
            <label className="w-100">
              Prénom :
              <input
                type={"text"}
                className="form-control mt-2"
                placeholder="Saisissez votre Prénom"
                onChange={e=>setPrenom(e.target.value)}
              />
            </label>
            <label className="w-100">
              Téléphone :
              <input
                type={"text"}
                className="form-control mt-2"
                placeholder="+212 000000000"
                onChange={e=>setTel(e.target.value)}
              />
            </label>
            <label className="w-100">
              Email :
              <input
                type={"text"}
                className="form-control mt-2"
                placeholder="Saisissez votre Email"
                onChange={e=>setEmail(e.target.value)}
              />
            </label>
            <label className="w-100">
              Mot de passe :
              <input
                type={"text"}
                className="form-control mt-2"
                placeholder="********"
                onChange={e=>setPassword(e.target.value)}
              />
            </label>
            <button type="button" className="btn btn-primary w-100" onClick={submitForm}>S'INSCRIRE</button>
          </form>
    )
}