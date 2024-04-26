import React, { useState } from "react";

// import topicon from "../../images/Topicon.png";
import { IoIosSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { TableDesign } from "./style";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const data = [
    {
      image: p1,
      name: "Admin1",
      Email: "wakoman@gmail.com",
      Phone: "042-6664772",
      Acive: ok,
      Action: action,
    },
    {
      image: p2,
      name: "Admin1",
      Email: "wakoman@gmail.com",
      Phone: "042-6664772",
      Acive: ok,
      Action: action,
    },
    {
      image: p3,
      name: "Admin1",
      Email: "wakoman@gmail.com",
      Phone: "042-6664772",
      Acive: ok,
      Action: action,
    },
    {
      image: p4,
      name: "Admin1",
      Email: "wakoman@gmail.com",
      Phone: "042-6664772",
      Acive: ok,
      Action: action,
    },
    {
      image: p5,
      name: "Admin1",
      Email: "wakoman@gmail.com",
      Phone: "042-6664772",
      Acive: ok,
      Action: action,
    },
    {
      image: p6,
      name: "Admin1",
      Email: "wakoman@gmail.com",
      Phone: "042-6664772",
      Acive: ok,
      Action: action,
    },
    {
      image: p7,
      name: "Admin1",
      Email: "wakoman@gmail.com",
      Phone: "042-6664772",
      Acive: ok,
      Action: action,
    },
    {
      image: p8,
      name: "Admin1",
      Email: "wakoman@gmail.com",
      Phone: "042-6664772",
      Acive: ok,
      Action: action,
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
              <div  style={{overflowX:"auto" }}>
                <table className="table">
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
                    {data.map((item) => (
                      <tr>
                        <td className="td-icon">
                          <img src={item.image} alt="" />
                          <p>{item.name}</p>
                        </td>
                        <td>
                          <p>{item.Email}</p>
                        </td>
                        <td>
                          <p>{item.Phone}</p>
                        </td>
                        <td>
                          <img src={item.Acive} alt="" />
                        </td>
                        <td>
                          <img src={item.Action} alt="" />
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
