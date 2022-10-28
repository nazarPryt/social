import React from 'react';
import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {


    const router = createBrowserRouter([
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
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
