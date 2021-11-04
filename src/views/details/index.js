import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import FinesContext from "../../context/fines";
import BusinessDetail from "./components/businessDetail";
import VehicleDetail from "./components/vehicleDetail";
import GeneralDetail from "./components/generalDetail";

export default function FineDetail() {

    const params = useParams();
    const { getFinesList, finesList } = useContext(FinesContext);
    const [ fine, setFine ] = useState({});

    const fineId = params.id;

    const getOneFine = ()=>{
        //Finds the fine with the given ID and set to fine const
        setFine(finesList.find((e)=>e.id === fineId));
    }
    

    useEffect(() => {
        getFinesList().then(getOneFine).catch(null);
        /* setFine( {
            type: "business",
            address: "zelaya 2150"
        } ) */
    }, []);

    
    console.log(fine);

    return (
        <div>
            {(fine.type==="business") && <BusinessDetail fine={fine} />}
            {(fine.type==="vehicle") && <VehicleDetail fine={fine} />}
            {(fine.type==="business") && <GeneralDetail fine={fine} />}
        </div>
    )
}