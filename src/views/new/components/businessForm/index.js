import { useState } from "react";
import Infractions from "../infractions";

export default function BusinessForm() {
    const [ cuit , setCuit ] = useState("");
    const [ address, setAddress ] = useState("");
    const [dni, setDni] = useState("");
    const [ obs, setObs ] = useState("");

    const saveFine = () => {
        //TODO: get all the values, validate form and, if everything is ok, save data to DB
    }

    return (
        <div>
            <div className="container">
                <p>Creando multa para Negocio</p>
                <form>
                    <label for="vehicleId">CUIT <sup>(*)</sup>:
                        <input type="text" id="cuit" required value={cuit} onChange={ ({target: { value }})=>{setCuit(value)} } />
                    </label>
                    <label for="address">Calle <sup>(*)</sup>:
                        <input type="text" id="address" required value={address} onChange={ ({target: { value }})=>{setAddress(value)} } />
                    </label>
                    <label for="dni">DNI <sup>(*)</sup>:
                        <input type="text" id="dni" required value={dni} onChange={ ({target: { value }})=>{setDni(value)} } />
                    </label>
                    <label>Infracciones <sup>(*)</sup>:
                        <Infractions />
                    </label>
                    <label for="observations">Observaciones:
                        <input type="text" id="observations" value={obs} onChange={ ({target: { value }})=>{setObs(value)} } />
                    </label>
                    <button onClick={() => saveFine()}>Guardar</button>
                </form>
            </div>
        </div>
    );
}