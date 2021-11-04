import apiCall from "../../api";
import FinesContext from "./index";
import { useState } from "react";

export default function FinesProvider({ children }) {

    const [ finesList,setFinesList ] = useState([]);

    const getFinesList = async () => {
        try {
            const finesResult = await apiCall("https://fineswebservice.typicode.com/myfines");
            setFinesList(finesResult);
        }
        catch(err) {
            setFinesList([]);
        }};

    const uploadFinesToCloud = async () => {
        try {
            await apiCall("https://fineswebservice.com/sync","GET",finesList);
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

