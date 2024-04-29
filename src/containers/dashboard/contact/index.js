import React from "react";
import { MainContact } from "./style";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import p1 from "../../../assets/images/p1.png";
import p2 from "../../../assets/images/p2.png";

import ok from "../../../assets/images/ok.png";
import topicon from "../../../assets/images/Topicon.png";
import action from "../../../assets/images/action.png";
import { useNavigate } from 'react-router-dom';
function ContactMain() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    
    navigate('/Contactform');
  };
  const data = [
    {
      image: p1,
      name: "Admin1",
      email: "wakoman@gmail.com",
      phone: "042-6664772",
      acive: ok,
      action: action,
    },
    {
      image: p2,
      name: "Admin1",
      email: "wakoman@gmail.com",
      phone: "042-6664772",
      acive: ok,
      action: action,
    },
  ];
  return (
    <MainContact>
      <div style={{ padding: "20px" }}>
      <div className="Main-Top">
          <div className="top-left">
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
        <div className="table-data">
          <div className="admin-panel">
            <div className="panel-content">
              
              <div className="btn-3">
                <span className="btn-pdf">
                  <button>PDF</button>
                </span>
                <span className="btn-excel">
                  <button>EXCEL</button>
                </span>
                <span className="btn-print">
                  <button>PRINT</button>
                </span>
              </div>
              <div className="search-bar">
                <input
                  className="input"
                  type="text"
                  placeholder="Search"
                  name="uname"
                  required=""
                />
                <span className="search-btn">
                  <button>
                    <IoIosSearch />
                  </button>
                </span>
              </div>
            </div>
            <div  className="scolling" style={{ overflowX: "auto" }} >
              <table className="table" style={{width:"100%"}}>
                <thead>
                  <tr>
                    <th className="wide-content">Name</th>
                    <th className="wide-content">Email</th>
                    <th className="wide-content">Phone</th>
                    <th className="wide-content">Active</th>
                    <th className="wide-content">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item,index) => (
                     <tr key={index}>
                     <td className="td-icon">
                       <div className="wide-content td-icon">
                         <img src={item.image} alt="" />
                         <p>{item.name}</p>
                       </div>
                     </td>
                     <td>
                       <div className="wide-content">{item.email}</div>
                     </td>
                     <td>
                       <div className="wide-content">{item.phone}</div>
                     </td>
                     <td>
                       <img src={item.acive} alt="" />
                     </td>
                     <td>
                       <img src={item.action} alt="" />
                     </td>
                   </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* <div
              className="scrolling-container"
              style={{ overflowX: "scroll", maxWidth: "100%" }}
            >
              <table className="table" style={{ minWidth: "100%" }}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Active</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td className="td-icon">
                        <img src={item.image} alt="" />
                        <p>{item.name}</p>
                      </td>
                      <td>
                        <p>{item.email}</p>
                      </td>
                      <td>
                        <p>{item.phone}</p>
                      </td>
                      <td>
                        <img src={item.active} alt="" />
                      </td>
                      <td>
                        <img src={item.action} alt="" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> */}

            <div className="add-contact">
              <button onClick={handleButtonClick}  className="add-contacts">
                + ADD CONTACT
              </button>
            </div>
            <div className="pagination">
              <span className="font-clr">Rows per page:</span>
              <span>8</span>
              <span className="icon-drpdown">
                <IoMdArrowDropdown />
              </span>
              <div className="icons-drp">
                <div className="font-clr-size">1-8 of 1240</div>

                <div className="icon-1">
                  <IoIosArrowBack />
                </div>
                <div className="icon-2">
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContact>
  );
}

export default ContactMain;
