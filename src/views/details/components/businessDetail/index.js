import { useNavigate } from "react-router-dom";

export default function BusinessDetail({ fine }) {
    const navigate = useNavigate();
    return (
        <>
            <main style={{
                    "display":"flex",
                    "flexDirection":"column",
                    "alignItems":"center",
                    "justifyContent":"center"}}>
                <div>
                <header>
                    <h2>Detalles de infracción a negocio</h2>
                </header>
                <p>
                    <b>CUIT:</b> {fine?.cuit}
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
                    {fine.fine_infractions?.map((e) => {
                        return (
                            <li key={e.id}>{e.description}</li>
                        );
                    })}
                </ul>
                <p>
                    <b>Observaciones:</b> {fine.obs || "Sin observaciones"}
                </p>
                <footer>
                    <button onClick={() => { navigate(-1) }}>Volver</button>
                </footer>
                </div>
            </main>
        </>
    );
}