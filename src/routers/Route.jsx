import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../Pages/Home/Home/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/News/News/News";
import LogingLayout from "../Layout/LogingLayout";
import Register from './../Pages/Register/Register';
import Login from "../Pages/Login/Login";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([


    
    {
        path: "/",
        element: <LogingLayout></LogingLayout>,
        children: [
            {
                path: "/",
                element: <Navigate to="/category/0"></Navigate>

            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },




    {
        path: "category",
        element: <Main></Main>,
        children: [

            {
                path: ":id",
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: "news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ":id",
                element: <PrivateRouter><News></News></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;