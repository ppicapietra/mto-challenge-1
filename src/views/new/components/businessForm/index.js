import { useEffect, useState } from "react";
import Infractions from "../infractions";
import "./../../style.css";

export default function BusinessForm({ setCurrentFine, uploadFine }) {
    const [cuit, setCuit] = useState("");
    const [address, setAddress] = useState("");
    const [dni, setDni] = useState("");
    const [observations, setObservations] = useState("");
    const [infractions, saveInfractions] = useState([""]);

    useEffect(() => {
        const fine = {
            "cuit": cuit,
            "address": address,
            "dni": dni,
            "observations": observations,
            "infractions": infractions
        }
        setCurrentFine(fine);
    },[ cuit, address, dni, observations, infractions ]);
    
    return (
        <>
            <section className="formNewFine">
                <p>Creando multa para Negocio</p>
                <form>
                    <label>CUIT <sup>(*)</sup>:
                        <input type="text" id="cuit" required value={cuit} onChange={({ target: { value } }) => { setCuit(value) }} />
                    </label>
                    <label>Calle <sup>(*)</sup>:
                        <input type="text" id="address" required value={address} onChange={({ target: { value } }) => { setAddress(value) }} />
                    </label>
                    <label>DNI <sup>(*)</sup>:
                        <input type="text" id="dni" required value={dni} onChange={({ target: { value } }) => { setDni(value) }} />
                    </label>
                    <label>Infracciones <sup>(*)</sup>:
                        <Infractions
                            infractions={infractions}
                            saveInfractions={saveInfractions} />
                    </label>
                    <label>Observaciones:
                        <input type="text" id="observations" value={observations} onChange={({ target: { value } }) => { setObservations(value) }} />
                    </label>
                </form>
            </section>
        </>
    );
}