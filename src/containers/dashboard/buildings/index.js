import React from "react";
import { BuildingDesign } from "./style";
import topicon from "../../../assets/images/Topicon.png";
import cardicon from "../../../assets/images/cardsicon.png";
import e1 from "../../../assets/images/e1.png";
import group from "../../../assets/images/group.png";
import floor from "../../../assets/images/floor.png";
import main1 from "../../../assets/images/main1.png"
import main2 from "../../../assets/images/main2.png"
import main3 from "../../../assets/images/main3.png"
import main4 from "../../../assets/images/main4.png"

function Buildings() {
  const data = [
    {
      image: main1,
    },
    {
     
      image: main2,
      
    },
    {
      image: main3,
    },
    {
      image: main4,

    },
    {
    
      image: main1,
      
    },
    {

      image: main2,

    },
    {
      
      image: main3,

    },
    {

      image: main4,

    },
  ];

  return (
    <BuildingDesign>
      <div style={{padding:"20px"}}>
      <div className="Main-Top">
        <div className="top-1">
          <p>Building Management</p>
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
      {/* cards */}
      <div className="main-card">
        {data.map((item) => (
          <div className="cards">
            <div className="text-head">
              <p>Heirs AL Shamsi Villa Hor..</p>
            </div>
            <div className="crdicon">
              <img src={cardicon} alt="" />
            </div>
            <div className="mainimges">
              <img src={item.image} alt="" />
            </div>
            <div className="crdicon">
              <button>
              Floor Management
              </button>
              {/* <img src={floor} alt="" /> */}
            </div>
            <div className="elipse">
              <div>
                <div className="elipse1">
                  <img src={e1} alt="" />
                </div>
                <div className="elispcontent1">
                  <p>201</p>
                </div>
              </div>
              <div>
                <div className="elipse2">
                  <img src={e1} alt="" />
                </div>
                <div className="elispcontent2">
                  <p>202</p>
                </div>
              </div>
              <div>
                <div className="elipse3">
                  <img src={e1} alt="" />
                </div>
                <div className="elispcontent3">
                  <p>+2</p>
                </div>
              </div>

              <div className="plus">
                <p>+</p>
              </div>
            </div>
            <div className="grp-img">
              <img src={group} alt="" />
            </div>
            <div className="lastsec">
              <p>Shahid</p>
              <p className="colr-last">+97230033939333</p>
            </div>
          </div>
        ))}
      </div>

      </div>
      
    </BuildingDesign>
  );
}

export default Buildings;
