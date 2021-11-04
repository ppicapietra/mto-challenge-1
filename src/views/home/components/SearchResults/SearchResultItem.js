import { Link } from "react-router-dom";

export default function SearchResultItem( fine ) {
    return (
        <div>
            <div className="list-group p-1">
                <div className="list-group-item list-group-item-action p-3">
                    <h3>{fine.receiver.lastname}, {fine.receiver.name}</h3>
                    <p><b>Type:</b> {fine.type}</p>
                    <p><b>Date:</b> {fine.date}</p>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-info me-0">
                            <Link to={`/Detail/${fine.id}`} className="text-decoration-none text-dark">
                                See details
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}