import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Home.css"
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
  document.body.style.backgroundColor = "#121212";
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
  //TODO : VERIFY JWT TOKEN
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        try {
          const { data } = await axios.post("http://localhost:8000/verify", {token:cookies.jwt});
        }
        catch (err) {
          removeCookie("jwt");
          navigate("/login");          
        } 
      };
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  return (

    <div className="container">
      <Navbar />
      <Sidebar />
      <div className='main'>
        <h1>Home</h1>
      </div>
    </div>
  )
}

export default Home