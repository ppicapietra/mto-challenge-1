
import { useNavigate } from "react-router-dom";

export default function VehicleDetail({ fine }) {
    const navigate = useNavigate();
    return (
        <main style={{
            "display": "flex",
            "flex-direction": "column",
            "alignItems": "center",
            "justifyContent": "center"
        }}>
            <div>
                <header>
                <h2>Detalles de infracción de tránsito</h2>
                </header>
                <p>
                    <b>Patente:</b> {fine?.vehicleId}
                </p>
                <p>
                    <b>DNI:</b> {fine?.dni}
                </p>
                <p>
                    <b>Calle:</b> {fine?.address}
                </p>
                <p>
                    <b>Infracciones:</b>
                </p>
                <ul>
                    {fine.infractions?.map((i, e) => {
                        return (
                            <li key={i}>{e.description}</li>
                        );
                    })}
                </ul>
                <p>
                    <b>Observaciones:</b> {fine.obs || "Sin observaciones"}
                </p>
                <button onClick={() => { navigate(-1) }}>Volver</button>
            </div>
        </main>
    );
}