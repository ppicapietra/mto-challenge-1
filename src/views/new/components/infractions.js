export default function Infractions({infractions, saveInfractions}) {

    const removeInfractionHandler = ( key, event ) => {
        event.preventDefault();
        let newListInfractions = [...infractions];
        newListInfractions = newListInfractions.filter((e,i)=>(i!==key));
        saveInfractions(newListInfractions);
    }
    const updateInfractionHandler = ( key,event ) => {
        const newListInfractions = [...infractions];
        newListInfractions[key] = event.target.value;
        saveInfractions(newListInfractions);
    }
    const addInfractionHandler = ()=> {
        saveInfractions([...infractions,""]);
    }
    console.log(infractions);
    return (
        <>
            <section id="infractionMotives">
            {infractions.map((e,i)=> {
                    return(
                <div key={i}>
                    <input type="text" value={e} onChange={(event)=>{updateInfractionHandler(i,event)}} style={{ "display":"inline-block" }} /><button onClick={(e)=>{removeInfractionHandler(i,e)} } style={{ "backgroundColor": "pink", "color": "red", "cursor": "pointer", "textDecoration": "none", "width": "20px", "height": "20px", "padding": "2px","border":"none","display":"inline-block","marginLeft":"2px" }}>X</button>
                </div>
                    );
                })}
            </section>
            <section>
                <button onClick={ addInfractionHandler }
                    style={{
                        "height":"40px",
                        "width":"40px",
                        "borderRadius": "50%",
                        "backgroundColor": "#4169e1",
                        "color": "white",
                        "fontSize": "3em",
                        "fontWeight": "500",
                        "lineHeight":"50%",
                        "border":"none",
                        "padding": "0 2px 7px 2px"
                    }}>+</button>
            </section>
        </>
    );
}