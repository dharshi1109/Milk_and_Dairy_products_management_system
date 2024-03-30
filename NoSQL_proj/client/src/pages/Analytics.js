import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
function Analytics() {
    const navigate = useNavigate();
    const click1 = () => {
      navigate('/query1');
    };
    const click2 = () => {
      navigate('/query2');
    };
    const click3 = () => {
      navigate('/query3');
    };
    const click4 = () => {
      navigate('/query4');
    };
    const click5 = () => {
        navigate('/query5');
      };
    return (
      <div className="centered-container"> 
      <h1>RAILWAY ANALYTICS</h1>
        <Button className="custom-button"onClick={click1}>Revenue Zonewise</Button>
        <Button className="custom-button"onClick={click2}>Revenue Trainwise</Button>
        <Button className="custom-button"onClick={click3}>Passengers Trainwise</Button>
        <Button className="custom-button"onClick={click4}>Passengers Unreserved</Button>
        <Button className="custom-button"onClick={click5}>Passengers Genderwise</Button>
  
      </div>
    );
    
    }
export default Analytics;