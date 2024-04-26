import React from "react";
import { ContactForm } from "./style";
import topicon from "../../../assets/images/Topicon.png";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Contacts() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    
    navigate('/Contact');
  };
  return (
    <ContactForm>
      <div style={{padding:"20px", }}>
        <div className="Main-Top">
          <div className="top-left1">
            <p>Admin Management</p>
          </div>
          <div className="top-right">
            <div className="icontop">
              <img src={topicon} alt="" />
            </div>
            <div className="admin">
              <a href="#">Admin</a>
            </div>
          </div>
        </div>
        <div className="Main-cls-contact" >
          <div className="contact-form">
            <h3>Add Contact</h3>

            <form action="" className="main-form">
              <div className="main-form">
                <div>
                  <div className="label-parent">
                    <label htmlFor="" className="label">
                      First Name
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Your First Name"
                    />
                  </div>
                  <div className="label-parent">
                    <label htmlFor="" className="label">
                      Last Name
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Your Last Name"
                    />
                  </div>
                  <div className="label-parent">
                    <label htmlFor="" className="label">
                      Email
                    </label>
                  </div>
                  <div>
                    <input
                      type="email"
                      className="input-field"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="label-parent">
                    <label htmlFor="" className="label">
                      Mobile Number
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Your Mobile Number"
                    />
                  </div>
                </div>
                <div>
                  <div className="label-parent">
                    <label htmlFor="" className="label">
                      date of birth
                    </label>
                  </div>
                  <div>
                    <input type="date" className="input-field" />
                  </div>

                  <div className="label-parent">
                    <label htmlFor="" className="label">
                      gender
                    </label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                      marginTop: "10px",
                      marginBottom: "30px",
                    }}
                  >
                    <div>
                      <label htmlFor="" className="label">
                        Male
                      </label>
                      <input className="label-radio" type="radio" />
                    </div>
                    <div className="label-radio">
                      <label htmlFor="" className="label ">
                        Female
                      </label>
                      <input className="label-radio" type="radio" />
                    </div>
                  </div>
                  <div className="label-parent">
                    <label htmlFor="" className="label">
                      choose a picture
                    </label>
                  </div>
                  <div>
                    <input type="text" className="upload-field" />
                    <button className="upload-button">Browse</button>
                  </div>
                </div>
                <div className="btn-bottom">
                  <div className="button-parents">
                    <button onClick={handleButtonClick} className="submit-lnk">
                      Submit
                    </button>
                  </div>
                  <div className="button-parent">
                    <button className="button">Reset</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ContactForm>
  );
}

export default Contacts;
