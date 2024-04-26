import { Route, Routes } from "react-router-dom";
import Dashboard from "./AsideDashboard";
import Administration from "./administration";
import Buildings from "./buildings";
import ContactMain from "./contact";
import Contacts from "./contactform";

const DashboardRoutes= () => {
    return (
        <>
       
       <Routes>
           <Route path="/dashboard" element={<Dashboard/>}/>
           <Route path="/Administration" element={<Administration/>}/>
           <Route path="/Buildings" element={<Buildings/>}/>
           <Route path="/Contact" element={<ContactMain/>}/>
            <Route path="//Contactform" element={<Contacts/>}/>
       </Routes>
       
       </>
       
    )
}

export default DashboardRoutes;