import SearchResultItem from "./SearchResultItem";
import "./style.css";

export default function SearchResults({ results, isShowingResults }) {
    return (
        <div>
            {!results.length && isShowingResults && <p>No hay multas coincidentes</p>}
            {results?.map((item) => <SearchResultItem contact={item} key={item.id} />)}
        </div>
    );
}