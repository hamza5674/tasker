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
.table-data {
  margin-top: 40px;
}
.admin-panel {
  background-color: white;
  background: white;
  border: 1px solid rgba(223, 224, 235, 1);
  border-radius: 10px;
  
}
.panel-content {
  display: flex;
  align-items: center;
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
  gap: 10px;
}
table {
  width: 100%;
}

th {
  font-size: 14px;
  color: #9fa2b4;
  font-weight: 700;
  text-align: start;
  padding: 10px 20px;
  border-bottom: 1px solid #dfe0eb;
}
.td-icon img {
  border-radius: 50%;
  object-fit: cover;
  margin: 5px 0px;
}
td {
  font-size: 14px;
  font-weight: 600;
  padding: 0px 20px;
}
tr td {
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dfe0eb;
}
.pagination {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
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
    color: #9fa2b4;
    padding: 10px;
}
.icon-2{
    padding-top: 10px;
    color: #9fa2b4;
}
.add-contact{
    width: 120px;
    height: 48px;
    border-radius: 100px;
    border: 0;
    background-color: #29cc97;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left:auto;
    margin-top: 20px;
    margin-right: 30px;
    
}
.add-contacts{
    text-decoration: none;
    font-size: 12px;
    color: white;
}
`