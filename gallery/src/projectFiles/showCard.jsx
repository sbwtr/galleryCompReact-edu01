import { useState } from "react"

export default function ShowCard({cindex, picsl, imgsrc, descr, onStatus, onWheelHandler}){
    const[crindex, setCrindex] = useState(cindex)
    //picsl uzywam bezposrwednio
    //bo potrzebuje aktualna wartosc

    onWheelHandler(crindex)
    
    function handleWheel(e){
        console.log(e.deltaY)
        e.stopPropagation()
        if(e.deltaY>0 && crindex<picsl-1){
           setCrindex(crindex+1)
        }else if(e.deltaY<0 && crindex>0){
            setCrindex(crindex-1)
        }
        
    }
    
    return(
        <>
        <div 
            className="backdrop"
            onWheel={(e=>{
                handleWheel(e);
                })
                }>
        <div className="card">
            <div className="close"
            onClick={()=>onStatus("gallery")}>
                <img src="src/assets/closeButton.svg" alt="" />
            </div>
            <div className="large">
                <img src={imgsrc} alt="image" />
            </div>
            <div className="descript">
                <p>{descr}</p>
            </div>
            {/* <div className="scroll-ind">
                <img src="src/assets/scrollIndicat.svg" alt="" />
            </div> */}
        </div>
        </div>
        </>
    )
}