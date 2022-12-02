import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import React, {useEffect} from 'react';

const Logout = () => {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);

    useEffect(() => {
        setCookie("jwt", "laksjdf")
        alert("logging out");
        navigate("/login"); 
    }, [setCookie, navigate]);

    return (
      <div className="container">
      </div>
    )   
}
  
export default Logout;