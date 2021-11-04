import { useState, useEffect, useContext } from "react";
import FinesContext from "../../context/fines";
import SearchBox from "./components/SearchBox";
import "./style.css";
import SearchResults from "./components/SearchResults";
import ButtonAddFine from "./components/ButtonAdd";

export default function Search() {
    const [ isAtTop , setIsAtTop ] = useState(false);
    const [ results , setResults ] = useState([]);

    const { getFinesList, finesList } = useContext(FinesContext);

    const handleSearchClick = (searchText) => {
        if (searchText) {
            setIsAtTop(true);
            if (finesList?.length) {
                const regE = new RegExp(searchText, "i");
                const filteredData = finesList.filter((fine) => {
                    return (regE.test(Object.values(fine).join('')));
                });
                setResults(filteredData);
            }
        }
    }

    useEffect(() => {
        getFinesList().catch(null);
    }, []);

    return (
        <div className={`p-4 container search ${isAtTop ? "search--top" : "search--middle"}`}>
            <SearchBox onSearch={handleSearchClick} />
            <SearchResults results={results} isShowingResults={isAtTop} />
            <ButtonAddFine />
        </div>
    );
}