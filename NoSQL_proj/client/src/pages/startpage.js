import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
function Startpage() {
    const navigate = useNavigate();
    const click1 = () => {
      navigate('/admin-login');
    };
    const click2 = () => {
      navigate('/user-login');
    };
return (
    <div className="centered-container"> 
    <h1>RAILWAY ANALYTICS SYSTEM</h1>
      <Button className="custom-button"onClick={click1}>Admin Login</Button>
      <Button className="custom-button"onClick={click2}>User Login</Button>
      
    </div>
  );
}
export default Startpage;