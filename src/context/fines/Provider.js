import apiCall from "../../api";
import FinesContext from "./index";
import { useState } from "react";

export default function FinesProvider({ children }) {

    const [ finesList,setFinesList ] = useState([]);

    /**
     * Used to save track of a fine in process
     */
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
            console.log(currentFine);
            await apiCall(`${baseAPIUrl}/fines`,"POST",JSON.stringify(currentFine),{"Content-Type": "application/json"});
        }
        catch(err) {
            console.log("Error on uploading local fines list to server");
        }
    }

    return (
        <FinesContext.Provider value={{ getFinesList, finesList, uploadFineToCloud, currentFine, setCurrentFine }}>
            { children }
        </FinesContext.Provider>
    );
}

