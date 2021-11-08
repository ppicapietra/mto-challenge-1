import { BrowserRouter, Routes, Route } from "react-router-dom";
import FourOFour from "../views/404";
import { lazy, Suspense } from "react";

const FineDetail = lazy(() => import("../views/details"));
const FineCreator = lazy(() => import("../views/new"));
const Home = lazy(() => import("../views/home"));

const Router = (props)=> {

    return (
        <BrowserRouter>
        <Suspense fallback={<div>Cargando...</div>}>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/new" element={<FineCreator />} />
                    <Route path="/detail/:id" element={<FineDetail />} />
                    <Route path="*" element={<FourOFour />} />
                </Routes>
                </Suspense>
        </BrowserRouter>
    );
}

export default Router;