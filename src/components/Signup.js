import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Signup = (props) => {

  const [credentials, setCredentials] = useState({name: "", email: "" , password:"" ,cpassword:""}) 
  let history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,email,password} = credentials
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
        
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name,email,password})
    });
    const json = await response.json()
    console.log(json);
    if (json.success){
        // Save the auth token and redirect
        localStorage.setItem('token', json.authtoken); 
        history("/login");
        props.showAlert("Sucessfully Signed In" , "success")
    }
    else{
        props.showAlert("Invalid Credentials" , "danger")
    }
}

const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
}
  

  return (
    <div className="container mt-2 loginpage">
      <div className="loginInfo">
      <div className="dashboardlogin">
      <h2 className='my-3'>Create an account to continue</h2>
      </div>
      <form  className='loginForm' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Enter Your Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={onChange}
            name='name'
            aria-describedby="emailHelp"
            placeholder="Enter Name"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={onChange}
            name='email'
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name='password'
            onChange={onChange}
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name='cpassword'
            onChange={onChange}
            placeholder="Confirm Password"
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{margin:"15px 0px"}}>
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default Signup;
