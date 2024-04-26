
import { Routes, Route } from 'react-router-dom';
import Login from './login';

const AuthRoutes = () => {

    return (
        <>
        <Routes>
            
            <Route path='/' Component={Login} />
        </Routes>
        </>
    )
}

export default AuthRoutes;