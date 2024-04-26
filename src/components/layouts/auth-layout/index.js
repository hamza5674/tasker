//  eslint-disable prettier/prettier 

import AuthRoutes from "../../../containers/auth/index";
import { Main } from "./style"
const AuthLayout = () => {
    return (
        <Main>
            {/* <h2>Auth layout</h2> */}
            <AuthRoutes />
        </Main>
    )
}

export default AuthLayout;