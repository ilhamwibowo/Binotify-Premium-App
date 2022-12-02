import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
  document.body.style.backgroundColor = "white";

  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (cookies.jwt) {
      navigate("/");
    }
  }, [cookies, navigate]);

  const [values, setValues] = useState({ 
    name:"",
    username:"",
    email: "", 
    password: "",
    confirm_password:"" });
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();
    const userData = {
      name: values.name,
      username: values.username,
      email: values.email,
      password: values.password,
      confirm_password: values.confirm_password
    };
    try {
      const { data } = await axios.post("http://localhost:8000/register", userData);
      if (data) {
        navigate("/login");
      }
    } catch (ex) {
      alert(ex);
    }
  };
  
  return (
    <div style={{textAlign: "center"}}>        
      <h1>Binotify</h1>
      <hr />
      <div className="container-login">
        <form onSubmit={(e) => handleSubmit(e)}> 
            <p className="input-name">Name</p>
            <input 
              type="text" 
              name="name" 
              className="input-field" 
              placeholder="Name" 
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            <p className="input-name">Username</p>
            <input 
              type="text" 
              name="username" 
              id="username" 
              className="input-field" 
              placeholder="Username" 
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            <p className="error-msg"><span id="username-unique"></span> </p>
            <p className="input-name">Email</p>
            <input 
              type="text" 
              name="email" 
              id="email" 
              className="input-field" 
              placeholder="Email" 
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            <p className="error-msg"><span id="email-unique"></span> </p>
            <p className="input-name">Password</p>
            <input 
              type="password" 
              name="password" 
              className="input-field" 
              placeholder="Password" 
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            <p className="input-name">Confirm Password</p>
            <input 
              type="password" 
              name="confirm_password" 
              className="input-field" 
              placeholder="Confirm Password" 
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            <button type="submit" name="submit" className="btn btn-login" >SIGN UP</button>

        </form>
      
      </div>
    </div>
  )
}

export default Register