export default function Card({place, imgsrc, descr,author, onSelect, onStatus}){
    //TODO
    //onclick -- gdy jest w gallery -> passes data about its index
    //onmouseenter -- hides scroll indicator
    //onmouseleave -- reveals indicator
    //onscroll -- gets another index from cards array
    
        return (
            <>
             <div className="card"
             onClick={()=>{onSelect(place); onStatus("showpict")} }> 
            <div className="small">
                <img src={imgsrc} alt="image" />
            </div>
            <p style={{fontWeight:400}}>{descr}</p>
            <p style={{fontSize:"small", margin:0}}><i>{author}</i></p>
            </div>
            </>
        )
  


    
}