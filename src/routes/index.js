import { BrowserRouter, Routes, Route } from "react-router-dom";
import FourOFour from "../views/404";
import Home from "../views/home";
import FineCreator from "../views/new";
import FineDetail from "../views/details";

export default function Router(props) {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={ <Home /> } />
                <Route path="/new" element={ <FineCreator /> } />
                <Route path="/detail/:id" element={ <FineDetail /> } />
                <Route path="*" element={ <FourOFour /> } />
            </Routes>
        </BrowserRouter>
    );
}