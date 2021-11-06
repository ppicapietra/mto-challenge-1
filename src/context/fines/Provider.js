import apiCall from "../../api";
import FinesContext from "./index";
import { useState } from "react";

export default function FinesProvider({ children }) {

    const [ finesList,setFinesList ] = useState([]);
    const [ currentFine, setCurrentFine ] = useState({});

    const baseAPIUrl = 'http://finesapp.test/api';

    const getFinesList = async () => {
        try {
            const finesResult = await apiCall(`${baseAPIUrl}/fines`);
            setFinesList(finesResult);
        }
        catch(err) {
            setFinesList([]);
        }};

    const uploadFineToCloud = async () => {
        try {
            await apiCall(`${baseAPIUrl}/save`,"POST",currentFine,{"Content-Type": "application/json"});
        }
        catch(err) {
            console.log("Error on uploading local fines list to server");
        }
    }

    return (
        <FinesContext.Provider value={{ "getFinesList": getFinesList, "finesList": finesList, "uploadFineToCloud": uploadFineToCloud, "setCurrentFine": setCurrentFine }}>
            { children }
        </FinesContext.Provider>
    );
}

