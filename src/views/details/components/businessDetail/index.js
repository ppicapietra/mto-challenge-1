import { useNavigate } from "react-router-dom";

export default function BusinessDetail( { fine } ) {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Detalles de infracción a negocio</h2>
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
                {fine.infractions?.map( (i,e)=>{
                    return (
                        <li key={ i }>{ e.description }</li> 
                    );
                })}
            </ul>
            <p>
                <b>Observaciones:</b> { fine.obs || "Sin observaciones" }
            </p>
            <button onClick={() => { navigate(-1) }}>Volver</button>
        </div>
    );
}