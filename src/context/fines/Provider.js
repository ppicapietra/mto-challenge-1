import apiCall from "../../api";
import FinesContext from "./index";
import { useState } from "react";

export default function FinesProvider({ children }) {

    const [ finesList,setFinesList ] = useState([]);

    const baseAPIUrl = 'http://finesapp.test/api';

    const getFinesList = async () => {
        try {
            const finesResult = await apiCall(`${baseAPIUrl}/fines`);
            setFinesList(finesResult);
        }
        catch(err) {
            setFinesList([]);
        }};

    const uploadFinesToCloud = async () => {
        try {
            await apiCall(`${baseAPIUrl}/save`,"POST",finesList,{"Content-Type": "application/json"});
        }
        catch(err) {
            console.log("Error on uploading local fines list to server");
        }
    }

    return (
        <FinesContext.Provider value={{ getFinesList: getFinesList, finesList: finesList, uploadFinesToCloud: uploadFinesToCloud }}>
            { children }
        </FinesContext.Provider>
    );
}

