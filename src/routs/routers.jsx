import ConfirmOpt1 from "../pages/confirm opt/ConfirmOpt1.jsx"
import ForgotPassword from "../pages/forgotPassword/ForgotPassword.jsx"
import Login from "../pages/login/Login.jsx"
import {ConfirmOpt2} from "../pages/confirmOpt2/ConfirmOpt2.jsx"
import Manager from "../pages/manager/Manager.jsx"
import CreateCustomer from "../pages/manager/createCustomer/CreateCustomer.jsx"
import IpManagement from "../pages/manager/ipManagement/IpManagement.jsx"
import CreateUser from "../pages/manager/createUser/CreateUser.jsx"

let routers = [
    {path:"/" , element:<Login/>},
    {path:"/manager" , element:<Manager/>, children:[
        {path:"addCustomer" , element:<CreateCustomer/>},
        {path:"IPManagement" , element:<IpManagement/>},
        {path:"addUser" , element:<CreateUser/>},
    ]},
    {path:"/confirmOPT1" , element:<ConfirmOpt1/>},
    {path:"/forgetPassword" , element:<ForgotPassword/>},
    {path:"/confirmOPT2" , element:<ConfirmOpt2/>},
    {path:"/confirmOPT2" , element:<ConfirmOpt2/>},
]

export default routers