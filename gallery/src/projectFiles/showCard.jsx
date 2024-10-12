export default function ShowCard({imgsrc, descr, onStatus}){
    return(
        <>
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
            <div className="scroll-ind">
                <img src="src/assets/scrollIndicat.svg" alt="" />
            </div>
        </div>
        </>
    )
}