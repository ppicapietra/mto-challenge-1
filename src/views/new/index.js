import { useState } from "react";
import BusinessForm from "./components/businessForm";
import VehicleForm from "./components/vehicleForm";
import GeneralForm from "./components/generalForm";
import { useContext } from "react";

export default function FineCreator() {
    const FinesContext = useContext("fines");
    const [ fineType, setFineType ] = useState();

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
            {(fineType === "business") && <BusinessForm uploadFine={FinesContext.uploadFineToCloud} setCurrentFine={FinesContext.setCurrentFine} />}
            {(fineType === "vehicle") && <VehicleForm uploadFine={FinesContext.uploadFineToCloud} setCurrentFine={FinesContext.setCurrentFine} />}
            {(fineType === "general") && <GeneralForm uploadFine={FinesContext.uploadFineToCloud} setCurrentFine={FinesContext.setCurrentFine} />}
        </div>
    )
}