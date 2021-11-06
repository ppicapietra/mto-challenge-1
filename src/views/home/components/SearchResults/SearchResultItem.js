import { Link } from "react-router-dom";
import "./style.css";

export default function SearchResultItem({ fine }) {
    const fineDate = new Date(fine.created_at);
    const fineDateFormatted = `${fineDate.getDate()}/${fineDate.getMonth()}/${fineDate.getFullYear()} - ${fineDate.getHours()}:${fineDate.getMinutes()}`;
    return (
        <>
            <div className="searchResultItem">
                <h3>#{fine.id}</h3>
                <p><b>Tipo:</b> {(fine.cuit) ? "A negocios" : ((fine.vehicleId) ? "Tránsito" : "Otros")}</p>
                <p><b>Fecha:</b> {fineDateFormatted}</p>
                <div className="searchItemBtnDetail">
                    <button>
                        <Link to={`/Detail/${fine.id}`} className="SearchItemLink">
                            See details
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
}