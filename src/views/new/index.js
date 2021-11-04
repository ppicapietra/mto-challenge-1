import { useState } from "react";
import BusinessForm from "./components/businessForm";
import VehicleForm from "./components/vehicleForm";
import GeneralForm from "./components/generalForm";

export default function FineCreator() {
    let [fineType, setFineType] = useState();

    return (
        <div>
            <div className="container fineTypeSelector">
                <div>
                    <h2>Tipo de multa</h2>
                    <select onChange={({ target: { value } }) => setFineType(value)}>
                        <option value="business" key={1}>Negocio</option>
                        <option value="vehicle" key={2}>Vehículo</option>
                        <option value="general" key={3}>Otro</option>
                    </select>
                </div>
            </div>
            {(fineType === "business") && <BusinessForm />}
            {(fineType === "vehicle") && <VehicleForm />}
            {(fineType === "general") && <GeneralForm />}
        </div>
    )
}