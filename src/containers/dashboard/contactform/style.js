import styled from "styled-components";
export const ContactForm = styled.div`

.Main-Top {
  
  display: flex;
  justify-content: space-between;
}
.top-left1 {
  font-size: 24px;
  font-weight: 700;
  border-bottom: 2px solid rgb(215, 215, 215);
}
.top-right {
  font-size: 20;
  display: flex;
  gap: 10px;
}
.icontop {
  border-right: 1px solid #dfe0eb;
  padding-right: 10px;
}
.admin a {
  color: black;
  font-size: 14px;
  font-weight: 400;
}
.Main-cls-contact{
    /* display: flex;
    justify-content: center;
    align-items: center; */
    margin-top: 40px;
}
.contact-form {
  background: white;
  margin-top: 25px;
  padding: 20px;
  border-radius: 15px;
  border: 1px solid #dfe0eb;
}
.main-form {
  margin-top: 1.5%;
  display: flex;
  gap: 30px;
}
.label {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #9fa2b4;
  text-transform: uppercase;
}
input::placeholder{
    font-size: 14px;
}
.input-field {
  padding-left: 5px;
  width: 316px;
  height: 42px;
  border-radius: 8px;
  border: 1px solid #f0f1f7;
  outline: none;
}
.label-parent {
  margin-top: 3%;
  margin-bottom: 7px;
}
.upload-field {
  width: 224px;
  height: 42px;
  border-radius: 8px 0px 0px 8px;
  border: 1px solid #f0f1f7;
  outline: none;
  border-right: 0;
}
.upload-button {
  height: 42px;
  background-color: #f4f4f4;
  width: 93px;
  font-family: "Mulish";
  color: #4b506d;
  font-size: 14px;
  font-weight: 400;
  border-radius: 0px 8px 8px 0px;
  border: 0;
  cursor: pointer;
}
.button {
  width: 110px;
  height: 48px;
  border-radius: 100px;
  border: 0;
  background-color: #cc2929;
  color: white;
  cursor: pointer;
}
.submit-lnk{
  width: 110px;
  height: 48px;
  border-radius: 100px;
  border: 0;
  background-color: #29CC97;
  color: white;
  cursor: pointer;
  
}

.btn-bottom {
    margin-top: auto;
  display: flex;
  justify-content: end;
  gap: 5px;
}
.label-radio{
   margin-left: 10px;
}


@media screen and (max-width: 576px) {
    
  .Main-Top {
    
    display: flex;
    justify-content: space-between;
  }
  .top-left1 {
    font-size: 14px;
    font-weight: 700;
    border-bottom: 1px solid rgb(215, 215, 215);
  }
  .top-right {
    font-size: 12;
    display: flex;
    gap: 5px;
  }
  .icontop {
    border-right: 1px solid #dfe0eb;
    padding-right: 10px;
  }
  .admin a {
    color: black;
    font-size: 12px;
    font-weight: 400;
  }

  .contact-form {
    background: white;
    /* margin: 30px 30px; */
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #dfe0eb;
  }
  .main-form {
    margin-top: 3%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .label {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    color: #9fa2b4;
    text-transform: uppercase;
  }
  .input-field {
    padding-left: 5px;
    width: 250px;
    height: 42px;
    border-radius: 8px;
    border: 1px solid #f0f1f7;
    outline: none;
  }
  .label-parent {
    margin-top: 3%;
    margin-bottom: 4px;
  }
  .upload-field {
    padding-left: 5px;
    width: 185px;
    height: 42px;
    border-radius: 8px 0px 0px 8px;
    border: 1px solid #f0f1f7;
    outline: none;
    border-right: 0;
  }
  .upload-button {
    height: 42px;
    background-color: #f4f4f4;
    width: 60px;
    font-family: "Mulish";
    color: #4b506d;
    font-size: 14px;
    font-weight: 400;
    border-radius: 0px 8px 8px 0px;
    border: 0;
  }
  .button {
    margin-top: 5px;
    width: 70px;
    height: 40px;
    font-size: 12px;
    border-radius: 100px;
    border: 0;
    background-color: #cc2929;
    color: white;
    cursor: pointer;
  }

  /* .button-parents button{
    margin-top: 5px;
    width: 50px;
    height: 0px;
    font-size: 12px;
    border-radius: 100px;
    border: 0;
    background-color: #29cc97;
    color: white;
  } */
  .submit-lnk{
    margin-top: 5px;
    width: 70px;
    height: 40px;
    font-size: 12px;
    border-radius: 100px;
    border: 0;
    background-color: #29CC97;
    color: white;
    cursor: pointer;
  }
  .btn-bottom {
    display: flex;
    justify-content: end;
    gap: 8px;
  }
}
@media screen and (min-width: 576px) and (max-width: 768px) {
  .Main-Top {
    
    display: flex;
    justify-content: space-between;
  }
  .top-left1 {
    font-size: 16px;
    font-weight: 700;
    border-bottom: 1px solid rgb(215, 215, 215);
  }
  .top-right {
    font-size: 14;
    display: flex;
    gap: 10px;
  }
  .icontop {
    border-right: 1px solid #dfe0eb;
    padding-right: 10px;
  }
  .admin a {
    color: black;
    font-size: 14px;
    font-weight: 400;
  }

 

  .contact-form {
    background: white;
    /* margin: 30px 30px; */
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #dfe0eb;
  }
  .main-form {
    margin-top: 3%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .label {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    color: #9fa2b4;
    text-transform: uppercase;
  }
  .input-field {
    padding-left: 5px;
    width: 410px;
    height: 42px;
    border-radius: 8px;
    border: 1px solid #f0f1f7;
    outline: none;
  }
  .label-parent {
    margin-top: 3%;
    margin-bottom: 4px;
  }
  .upload-field {
    padding-left: 5px;
    width: 320px;
    height: 42px;
    border-radius: 8px 0px 0px 8px;
    border: 1px solid #f0f1f7;
    outline: none;
    border-right: 0;
  }
  .upload-button {
    height: 42px;
    background-color: #f4f4f4;
    width: 75px;
    font-family: "Mulish";
    color: #4b506d;
    font-size: 14px;
    font-weight: 400;
    border-radius: 0px 8px 8px 0px;
    border: 0;
  }
  .button {
    margin-top: 5px;
    width: 90px;
    height: 40px;
    font-size: 12px;
    border-radius: 100px;
    border: 0;
    background-color: #cc2929;
    color: white;
    cursor: pointer;
  }
  .submit-lnk{
    margin-top: 5px;
    width: 90px;
    height: 40px;
    font-size: 12px;
    border-radius: 100px;
    border: 0;
    background-color: #29cc97;
    color: white;
    cursor: pointer;
  }
  .btn-bottom {
    display: flex;
    justify-content: end;
    margin-right: auto;
    gap: 8px;
  }
}
@media screen and (min-width:768px) and (max-width:1200px){
    .Main-Top {
       
        display: flex;
        justify-content: space-between;
      }
      .top-left1 {
        font-size: 18px;
        font-weight: 700;
        border-bottom: 1px solid rgb(215, 215, 215);
      }
      .top-right {
        font-size: 16px;
        display: flex;
        gap: 10px;
      }
      .icontop {
        border-right: 1px solid #dfe0eb;
        padding-right: 10px;
      }
      .admin a {
        color: black;
        font-size: 14px;
        font-weight: 400;
      }
    
      .bg-color {
        background-color: #f2fcff;
      }
    
      .contact-form {
        background: white;
        
        /* margin: 30px 40px; */
        padding: 20px;
        border-radius: 10px;
        border: 1px solid #dfe0eb;
      }
      .main-form {
        margin-top: 3%;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }
      .label {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        color: #9fa2b4;
        text-transform: uppercase;
      }
      .input-field {
        padding-left: 5px;
        width: 430px;
        height: 42px;
        border-radius: 8px;
        border: 1px solid #f0f1f7;
        outline: none;
      }
      .label-parent {
        margin-top: 3%;
        margin-bottom: 4px;
      }
      .upload-field {
        padding-left: 5px;
        width: 350px;
        height: 42px;
        border-radius: 8px 0px 0px 8px;
        border: 1px solid #f0f1f7;
        outline: none;
        border-right: 0;
      }
      .upload-button {
        height: 42px;
        background-color: #f4f4f4;
        width: 75px;
        font-family: "Mulish";
        color: #4b506d;
        font-size: 14px;
        font-weight: 400;
        border-radius: 0px 8px 8px 0px;
        border: 0;
      }
      .button {
        margin-top: 5px;
        width: 100px;
        height: 45px;
        font-size: 14px;
        border-radius: 100px;
        border: 0;
        background-color: #cc2929;
        color: white;
      }
      .submit-lnk{
        margin-top: 5px;
        width: 100px;
        height: 45px;
        font-size: 14px;
        border-radius: 100px;
        border: 0;
        background-color: #29cc97;
        color: white;
      }
      .btn-bottom {
        display: flex;
        justify-content: start;
        margin-right: auto;
        gap: 8px;
      }
}


`