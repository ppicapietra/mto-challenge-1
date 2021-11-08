import { useState, useEffect } from "react";
import BusinessForm from "./components/businessForm";
import VehicleForm from "./components/vehicleForm";
import GeneralForm from "./components/generalForm";
import { useContext } from "react";
import FinesContext from "../../context/fines";
import "./style.css";
import { useNavigate } from "react-router";

export default function FineCreator() {
    const { currentFine, setCurrentFine, uploadFineToCloud } = useContext(FinesContext);
    const [ fineType, setFineType ] = useState();

    const navigate = useNavigate();

    const btnSaveFineClickHandler = (e)=>{
        //TODO: Show loading message 'til get the answer
        e.preventDefault();
        uploadFineToCloud().catch(null);
        navigate("/");
    }

    const btnCancelClickHandler = (e)=> {
        e.preventDefault();
        setCurrentFine({});
        navigate("/")
    }
    return (
        <div className="newFineContainer">
            <div className="fineTypeSelector">
                <div>
                    <h2>Tipo de multa a confeccionar</h2>
                    <select onChange={({ target: { value } }) => setFineType(value)}>
                        <option value="none" key={1}>Seleccione tipo</option>
                        <option value="business" key={2}>Negocio</option>
                        <option value="vehicle" key={3}>Vehículo</option>
                        <option value="general" key={4}>Otro</option>
                    </select>
                </div>
            </div>
            {(fineType === "business") && <BusinessForm setCurrentFine={setCurrentFine} />}
            {(fineType === "vehicle") && <VehicleForm setCurrentFine={setCurrentFine} />}
            {(fineType === "general") && <GeneralForm setCurrentFine={setCurrentFine} />}
            {(fineType) && (fineType!=="none") && <button onClick={ btnSaveFineClickHandler }>Guardar</button>}
            <button style={{"marginTop":"15px"}} onClick={btnCancelClickHandler}> Cancelar</button>
        </div>
    )
}