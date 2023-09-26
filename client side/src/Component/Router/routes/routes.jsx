import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../Home/Home";
import Ourmenu from "../../Ourmenu/Ourmenu";
import Shop from "../../Shop/Shop";
import Login from "../../Authentication/Login/Login";
import Register from "../../Authentication/Register/Register";
import Private from "../../Authentication/Private/Private";
import DashboardLayout from "../Layout/DashboardLayout";
import Contect from "../../Home/Contect/Contect";
import Dhome from "../../Dashboard/Dhome/Dhome";
import Mycart from "../../Dashboard/Mycart/Mycart";
import Alluser from "../../Dashboard/Admin/Alluser/Alluser";
import Additems from "../../Dashboard/Admin/Additems/Additems";
import Manage from "../../Dashboard/Admin/Manage/Manage";
import Managedit from "../../Dashboard/Admin/Manage/Managedit";

const routes = createBrowserRouter([
 {
    path:'/',
    element:<Layout></Layout>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },{
            path:'/contact',
            element:<Private><Contect></Contect></Private>
        },{
            path:'/menu',
            element:<Ourmenu></Ourmenu>
        },{
            path:'/shop/:catagory',
            element:<Shop></Shop>
        },{
            path:'/login',
            element:<Login></Login>
        },{
            path:'/register',
            element:<Register></Register>
        }
    ]
 },{
    path:'dasboard',
    element:<DashboardLayout></DashboardLayout>,
    children:[
        {
          path:'home',
          element:<Dhome></Dhome>,
        },{
            path:'mycart',
            element:<Mycart></Mycart>
        },{
            path:'alluser',
            element:<Alluser></Alluser>
        },{
            path:'additems',
            element:<Additems></Additems>
        },{
            path:'manage',
            element:<Manage></Manage>
        },{
            path:'editmanage/:eid',
            element:<Managedit></Managedit>
        }
    ]
 }
]);

export default routes;