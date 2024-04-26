// eslint-disable prettier/prettier 

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./dashboard";
import AuthLayout from "../components/layouts/auth-layout";
import MainLayout from "../components/layouts/main-layout";
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" Component={MainLayout} />
                <Route path="/" Component={AuthLayout} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;