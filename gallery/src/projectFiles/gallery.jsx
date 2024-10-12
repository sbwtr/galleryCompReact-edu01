import Card from './card'

export default function Gallery({inputs, onSelectHandler, onStatusHandler}){
    return (
        <>
        <div className="container">
        <div className="gallery">
            {inputs.map((pt,i)=>
                <Card key={pt.id}
                place={i}
                imgsrc={pt.url}
                descr={pt.descript}
                author={pt.user}
                onSelect={onSelectHandler}
                onStatus={onStatusHandler}/>
            )}
        </div>
        </div>
        </>
    )
}