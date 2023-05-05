import {
    createBrowserRouter, createRoutesFromElements, Route
} from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import Biografi from "../pages/Biografi";
import Galeri from "../pages/Galeri";
import NotFound from "../pages/Notfound";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/biografi" element={<Biografi/>}/>
            <Route path="/galeri" element={<Galeri/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Route>
    )
)

export default router