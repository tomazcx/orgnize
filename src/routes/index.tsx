import { BrowserRouter, Route, Routes } from "react-router"
import { Login } from "../pages/login"
import { Register } from "../pages/register"
import { Home } from "../pages/home"
import { PrivateRoute } from "./private-route"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}