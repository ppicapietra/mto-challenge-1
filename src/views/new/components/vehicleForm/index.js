import { useEffect, useState } from "react";
import Infractions from "../infractions";
import "./../../style.css";

export default function VehicleForm({ setCurrentFine }) {
    const [ vehicleId , setVehicleId ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ dni, setDni] = useState("");
    const [ observations, setObservations ] = useState("");
    const [ infractions, saveInfractions ] = useState([""]);

    useEffect(()=>{
        const fine = {
            "vehicleId": vehicleId,
            "address": address,
            "dni": dni,
            "observations": observations,
            "infractions": infractions
        }
        setCurrentFine(fine);
    },[ vehicleId, address, dni, observations, infractions ]);
    

    return (
        <>
            <section className="formNewFine">
                <p>Creando multa para vehículo</p>
                <form>
                    <label>Dominio vehículo <sup>(*)</sup>:
                        <input type="text" id="vehicleId" required value={vehicleId.toUpperCase()} onChange={ ({target: { value }})=>{setVehicleId(value)} } />
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
                        <input type="text" id="observations" value={observations} onChange={ ({target: { value }})=>{setObservations(value)} } />
                    </label>
                    
                </form>
            </section>
        </>
    );
}