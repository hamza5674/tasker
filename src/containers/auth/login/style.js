import styled from "styled-components";
import loginImg from "../../../assets/images/bg-img.jpg";
export const Wrapper = styled.div`
width: 100%;

.wrapper {
    background-image: url(${loginImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
  }
  .card-parent {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .card {
    isolation: isolate;
    width: 380px;
  }

  .logo {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .login-form {
    margin: auto;
    padding: 60px 30px;
    background: white;
    border: 2px solid rgba(223, 224, 235, 1);
    border-radius: 10px;
  }

  .labels-color {
    margin-bottom: 20px;
    color: rgba(159, 162, 180, 1);
    font-size: 12px;
    font-weight: 700;
  }
  .input-color {
    margin-bottom: 25px;
    margin-top: 6px;
    width: 100%;
    height: 42px;
    padding: 5px;
    border-radius: 8px;
    border: 1px solid rgba(240, 241, 247, 1);
    outline: none;
    background-color: rgba(252, 253, 254, 1);
  }
  .input-color::placeholder {
    color: rgba(75, 80, 109, 1);
    font-size: 14px;
    font-weight: 400;
  }

  .input-color:active {
    outline: none;
  }

  .btn-login {
   cursor: pointer;
    width: 100%;
    border-radius: 8px;
    background: rgba(51, 123, 108, 1);
    box-shadow: 0px 4px 12px 0px rgba(55, 81, 255, 0.24);
    height: 48px;
    border: none;
    color: white;
    font-size: 14px;
    font-weight: 600;
  }
 

  .passwrd-label {
    display: flex;
    justify-content: space-between;
  }

  .labels-color-size {
    color: rgba(159, 162, 180, 1);
    font-size: 12px;
    font-weight: 700;
  }
  .labels-size {
    color: rgba(159, 162, 180, 1);
    font-size: 10px;
    font-weight: 400;
    margin-right: 3px;
  }


`