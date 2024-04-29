import styled from "styled-components";
export const MainContact = styled.div`
.Main-Top {
  
  display: flex;
  justify-content: space-between;
}
.top-left {
  font-size: 24px;
  font-weight: 700;
  border-bottom: 2px solid #dfe0eb;
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
.table-cls{
  
  margin-top: 40px;
  
}
.table-data {
  /* padding-bottom: 25px; */
}
.admin-panel {
  background-color: white;
  background: white;
  border: 1px solid rgba(223, 224, 235, 1);
  border-radius: 10px;
  margin-top: 30px;
}
.panel-content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
 justify-content: space-between;
  padding: 25px 20px;
}
.panel-left button {
  text-align: center;
  background-color: #29cc97;
  border: none;
  padding: 8px 18px;
  border-radius: 30px;
  font-size: 11px;
  color: white;
}
.btn-3 {
  display: flex;
  gap: 15px;
  margin-left: auto;
}
.btn-3 button {
  font-size: 9px;
  padding: 4px 10px;
  border-radius: 20px;
  border: 1px solid;
  background: white;
}

.btn-pdf button {
  color: #f15b6d;
}
.btn-excel button {
  color: #29cc97;
}
.btn-print button {
  color: #04c6f0;
}
.search-bar {
  margin-left: 35px;
  position: relative;
}
.search-bar input {
  padding: 5px 10px;
  border: none;
  border-bottom: 1px solid rgba(223, 224, 235, 1);
}
.search-bar input::placeholder {
  font-size: 12px;
  color: #8a8a8a;
  font-weight: 400;
}
.search-btn button {
  border: none;
  color: #8a8a8a;
  background: none;
  font-size: 20px;
  position: absolute;
  top: 0;
  left: 150px;
}

.td-icon {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
.td-icon img{
  border-radius: 50%;
}

.table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}
.scolling{
  overflow-x: auto !important;
  
}

.table th,
.table td {
  /* min-width: 150px; */
  padding: 8px 12px;
  text-align: left;
  /* white-space: nowrap;  */
  border-bottom: 1px solid #DFE0EB;
  

}
/* .wide-content {
  min-width: 200px !important; 
  white-space: nowrap;
} */
.table td{
  padding-bottom: 15px;
  
}
.table th{
  padding-bottom: 20px;
 
}

.pagination {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.font-clr {
  color: #9fa2b4;
  margin-right: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.30000001192092896px;
  text-align: left;
}
.icon-drpdown {
  padding-top: 2px;
  font-size: 20px;
  color: #9fa2b4;
  cursor: pointer;
}
.font-clr-size {
  color: #9fa2b4;
  padding-left: 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.30000001192092896px;
  text-align: left;
}
.icon-1{
  cursor: pointer;
  font-size: 18px;
    color: #9fa2b4;
    padding: 0px 10px;
}
.icon-2{
  cursor: pointer;
  font-size: 18px;
    padding:0px 10px;
    color: #9fa2b4;
}
.icons-drp{
  display: flex;
  align-items: center;
}
.add-contact{
  padding: 20px;
  display: flex;
  justify-content: end;
}
.add-contact button{
  border: none;
  font-size: 11px;
  background: #29CC97;
  padding: 20px;
  border-radius: 50px;
  color: white;
  cursor: pointer;
}


@media screen and (max-width: 900px) {
  .scolling{
    overflow-x: auto;
  }
  .table td{
  word-wrap: break-word;
  overflow-wrap: break-word;

}
  





}

`