import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //   const history = useHistory();

  const navigate = useNavigate(); 
  const handleSignupClick = () => {
    navigate("/login"); 
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/signup', {
        username,
        email,
        password,
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error signing up:', error.response?.data?.message || error.message);
    }
  };

  return (
    <div className='continer '>
      <div className='row  p-5'>
        <h1 className='text-center'>Open a free demat and trading account</h1>
        <p className='text-center'>Start investing brokerage free and join a community of 1+ crore investors and traders</p>
        <div className="col-6 p-5  mt-5">
          <img src="media\images\account_open.png" />
        </div>
        <div className="col-4 p-5 mt-5">
          <h1>Signup now</h1>
          <p>Or track your existing application</p>
          <form onSubmit={handleSubmit} >
          <label for="titel" class="form-label">Username</label>
            <input  
             class="form-control"
            type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
            <label for="Email" class="form-label">Email</label>
            <input  
             class="form-control"
             type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <label for="password" class="form-label">Password</label>
            <input  
             class="form-control"
             type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button  class="btn n btn-success mt-3" type="submit">Sign Up</button>
            <a className='p-2' style={{textDecoration:"none",color:"black",cursor:"pointer"}} onClick={handleSignupClick}>Login</a>
          </form>
        </div>
      </div>
    </div>





  );
}

export default Signup;
