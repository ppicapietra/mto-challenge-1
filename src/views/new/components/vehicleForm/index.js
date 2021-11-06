import { useState } from "react";
import Infractions from "../infractions";
import "./style.css";

export default function VehicleForm() {
    const [ vehicleId , setVehicleId ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ dni, setDni] = useState("");
    const [ obs, setObs ] = useState("");
    const [ infractions, saveInfractions ] = useState([]);

    const saveFine = () => {
        console.log(infractions);
        //TODO: get all the values, validate form and, if everything is ok, save data to DB
    }

    return (
        <div>
            <div className="container">
                <p>Creando multa para vehículo</p>
                <form>
                    <label>Dominio vehículo <sup>(*)</sup>:
                        <input type="text" id="vehicleId" required value={vehicleId} onChange={ ({target: { value }})=>{setVehicleId(value)} } />
                    </label>
                    <label>Calle <sup>(*)</sup>:
                        <input type="text" id="address" required value={address} onChange={ ({target: { value }})=>{setAddress(value)} } />
                    </label>
                    <label>DNI <sup>(*)</sup>:
                        <input type="text" id="dni" required value={dni} onChange={ ({target: { value }})=>{setDni(value)} } />
                    </label>
                    <label>Infracciones <sup>(*)</sup>:
                        <Infractions 
                            infractions={infractions}
                            saveInfractions={saveInfractions} />
                    </label>
                    <label>Observaciones:
                        <input type="text" id="observations" value={obs} onChange={ ({target: { value }})=>{setObs(value)} } />
                    </label>
                    <button onClick={() => saveFine()}>Guardar</button>
                </form>
            </div>
        </div>
    );
}