import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  document.body.style.backgroundColor = "white";
  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (cookies.jwt) {
      navigate("/");
    }
  }, [cookies, navigate]);

  const [values, setValues] = useState({ email: "", password: "" });
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();
    const userData = {
      email: values.email,
      password: values.password
    };
    try {

      const { data } = await axios.post("http://localhost:8000/login", userData);
      if (data) {
        setCookie("jwt", data.accessToken);
        navigate("/");
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
            <p className="input-name">Username</p>
            <input 
              type="text" 
              name="email" 
              className="input-field" 
              placeholder="Username" 
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />

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
            <button type="submit" name="submit" className="btn btn-login">LOG IN</button>

          </form>
          <hr />
          <p className="sign-up-text"> Don't have an account?</p>
          <Link to="/register">
            <button name="submit" className="btn btn-sign" value="SIGN UP FOR SPOTIFY CLONE">SIGN UP FOR BINOTIFY</button>
          </Link>
        </div>
    </div>      
  )
}

export default Login