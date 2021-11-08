import SearchResultItem from "./SearchResultItem";
import "./style.css";

export default function SearchResults({ results, isShowingResults }) {
    return (
        <div className={"searchResultsContainer"}>
            {!results.length && isShowingResults && <p>No hay multas coincidentes</p>}
            {results?.map((item) => <SearchResultItem fine={item} key={item.id} />)}
        </div>
    );
}