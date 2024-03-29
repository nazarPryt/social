import React from 'react';
import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    Navigate,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NavBar from "./Components/navBar/NavBar";
import LeftBar from "./Components/leftBar/LeftBar";
import RightBar from "./Components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

function App() {
    const currentUser = true

    const Layout = () => {
        return (
            <div>
                <NavBar/>
                <div style={{display: "flex"}}>
                    <LeftBar/>
                    <div style={{flex: 6}}>
                        <Outlet/>
                    </div>
                    <RightBar/>
                </div>
            </div>
        )
    }

    const ProtectedRoute = ({children}: { children: JSX.Element }) => {
        if (!currentUser) {
            return <Navigate to="/login"/>
        }
        return children
        // const auth = useAuth();
        // return auth?.user ? children : <Navigate to="/" replace />;
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <ProtectedRoute>
                    <Layout/>
                </ProtectedRoute>
            ),
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/profile/:id',
                    element: <Profile/>
                }
            ]

        },
        {
            path: "/login",
            element: <Login/>,
        },
        {
            path: "/register",
            element: <Register/>,
        },
    ]);


    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
