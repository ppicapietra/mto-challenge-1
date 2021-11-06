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

    const fineId = Number.parseInt(params.id);

    useEffect(() => {
        getFinesList().catch(null); 
    }, []);
    useEffect(()=>{
        getOneFine()
    },[finesList]);

    const getOneFine = ()=>{
        //Finds the fine with the given ID and set to fine const
        setFine(finesList.find( e => (e.id===fineId)));
        console.log(finesList);
    }    

    return (
        <>
            {(fine && fine.cuit) && <BusinessDetail fine={fine} />}
            {(fine && fine.vehicleId) && <VehicleDetail fine={fine} />}
            {/**(fine?.specificParam) && <GeneralDetail fine={fine} />*/}
        </>
    )
}