import styled from "styled-components";
export const SideNav = styled.div`
  .sidebar {
    background-color: rgba(54, 55, 64, 1);
    color: #fff;
    position: fixed;
    height: 100%;
    /* width: 20%; */
    transition: all 0.5s;
  }
  .top_section {
    /* display: flex;
    align-items: center; */
    padding: 20px 15px;
    
  }
  .logo{
    /* margin: 100px auto; */
      /* display: flex;
      justify-content: center;
      align-items: center; */
    /* width: 142px; */
  }
  .bars {
    /* margin-left: auto; */
    /* display: flex;
    justify-content: center; */
    font-size: 20px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .link {
    display: flex;
    align-items: center;
    color: #fff;
    padding: 15px 15px;
    gap: 15px;
    transition: all 0.5s;
    text-decoration: none;
    
  }

  .link:hover{
    color: white;
    transition: all 0.5s;
    border-left: 2px solid white;
    background: #363740;
    color: white;
    cursor: pointer;
  }

  .icon{
    color: #9FA2B4;
    font-size: 16px;
    font-weight: 400;
  }
  .link_text {
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 400;
    
  }

 


`;

