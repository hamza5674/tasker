import React from 'react';
import { Wrapper } from './style';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from "../../../assets/images/logo.png"


const Login = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    
    navigate('/dashboard');
  };

  return (
    <Wrapper>
      <section className="wrapper">
        <div className="card-parent">
          <div className="card">
            <div className="login-form">
              <div className="logo">
                <img src={logo}/>
              </div>
              <div className="container">
                <label className="labels-color" htmlFor="uname">
                  USERNAME
                </label>
                <br />
                <input
                  className="input-color"
                  type="text"
                  placeholder="Your Username"
                  name="uname"
                  required=""
                />

                <div className="passwrd-label">
                  <label className="labels-color-size" htmlFor="psw">
                    PASSWORD
                  </label>
                  <label className="labels-size" htmlFor="psw">
                    Forget Password ?
                  </label>
                </div>
                <input
                  className="input-color"
                  type="password"
                  placeholder="Password"
                  name="psw"
                  required=""
                />
                <br />
                {/* <span className='link-btn' style={{width:"200px"}}>
                <Link to="/dashboard" className="btn-login">
                
                </Link>
                </span> */}
               
                <button className="btn-login" type="submit" onClick={handleButtonClick}>
                Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Login;
