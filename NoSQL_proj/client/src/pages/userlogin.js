import React, { useState } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import "../styles/AddPassenger.css"

function UserLogin() {
    const [formData, setFormData] = useState({
        name: '',
        password: '',});
        const handleChange = (e) => {
            const { name, value } = e.target;
        
            console.log(`Updated ${name} to ${value}`);
              setFormData({ ...formData, [name]: value });
            
          };
          const navigate = useNavigate();
    const click1 = () => {
      navigate('/start-page');
    };
          const handleSubmit = async (e) => {
            e.preventDefault();}
            return (
                <div className="add-passenger-container">
                  <h2>User Login</h2>
                  <div className="personal-info">
                  <form layout="vertical" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name :</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password :</label>
                      <input
                        type="text"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div></form></div>
                    <Button className="custom-button"onClick={click1}>Submit</Button>
                    </div>);

}
export default UserLogin;