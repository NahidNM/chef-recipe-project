import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Banner from "../Banner/Banner";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Recipe from "../Recipe/Recipe";
// import Cheif from "../Cheif/Cheif";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element:<Banner></Banner>
            },
            
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }, 
             {
                        path: '/cheif/:name',
                      element:<PrivateRoute><Recipe></Recipe></PrivateRoute> ,
                      loader: ({params}) =>fetch(`https://chef-recipe-hunter-server-nahidnm.vercel.app/cheif/${params.name}`)
                }
        ]
    
    },
   

])

export default router;