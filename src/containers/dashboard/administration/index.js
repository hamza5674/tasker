import React, { useState } from "react";

// import topicon from "../../images/Topicon.png";
import { IoIosSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { TableDesign } from '../AsideDashboard/style';
//images
import p1 from "../../../../src/assets/images/p1.png";
import p2 from "../../../../src/assets/images/p2.png";
import p3 from "../../../../src/assets/images/p3.png";
import p4 from "../../../../src/assets/images/p4.png";
import p5 from "../../../../src/assets/images/p5.png";
import p6 from "../../../../src/assets/images/p6.png";
import p7 from "../../../../src/assets/images/p7.png";
import p8 from "../../../../src/assets/images/p8.png";
//
import ok from "../../../../src/assets/images/ok.png";
import topicon from "../../../assets/images/Topicon.png";
import action from "../../../../src/assets/images/action.png";


function Dashboard() {
 

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
    {
      image: p3,
      name: "Admin1",
      email: "wakoman@gmail.com",
      phone: "042-6664772",
      acive: ok,
      action: action,
    },
    {
      image: p4,
      name: "Admin1",
      email: "wakoman@gmail.com",
      phone: "042-6664772",
      acive: ok,
      action: action,
    },
    {
      image: p5,
      name: "Admin1",
      email: "wakoman@gmail.com",
      phone: "042-6664772",
      acive: ok,
      action: action,
    },
    {
      image: p6,
      name: "Admin1",
      email: "wakoman@gmail.com",
      phone: "042-6664772",
      acive: ok,
      action: action,
    },
    {
      image: p7,
      name: "Admin1",
      email: "wakoman@gmail.com",
      phone: "042-6664772",
      acive: ok,
      action: action,
    },
    {
      image: p8,
      name: "Admin1",
      email: "wakoman@gmail.com",
      phone: "042-6664772",
      acive: ok,
      action: action,
    },
  ];

  return (
    <TableDesign>
      {/* <button className="btn-bars"  >
      <FaBars />
            </button> */}
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
        <div className="table-cls" >
          <div className="table-data">
            <div className="admin-panel">
              <div className="panel-content">
                <div className="panel-left">
                  <button>+ ADD ADMIN</button>
                </div>
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
              <div className="pagination">
                <span className="font-clr">Rows per page:</span>
                <span>8</span>
                <span className="icon-drpdown">
                  <IoMdArrowDropdown />
                </span>
                <div className="">
                  <span className="font-clr-size">1-8 of 1240</span>
                  <span className="icon-1">
                    <IoIosArrowBack />
                  </span>
                  <span className="icon-2">
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TableDesign>
  );
}

export default Dashboard;
