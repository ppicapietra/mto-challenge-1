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

    useEffect(() => {
        getFinesList().catch(null);
    }, []);

    const handleSearchClick = (searchText) => {
        setIsAtTop(true);
        if (searchText) {
            if (finesList?.length) {
                const regE = new RegExp(searchText, "i");
                const filteredData = finesList.filter((fine) => {
                    return (regE.test(Object.values(fine).join('')));
                });
                setResults(filteredData);
            }
        }
        else {
            setResults(finesList);
        }
    }

    return (
        <div className={`p-4 container search ${isAtTop ? "search--top" : "search--middle"}`}>
            <SearchBox onSearch={handleSearchClick} />
            <SearchResults results={results} isShowingResults={isAtTop} />
            <ButtonAddFine />
        </div>
    );
}