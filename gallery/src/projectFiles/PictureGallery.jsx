import { useState } from "react";
import Gallery from "./gallery";
import ShowCard from "./showCard";

export default function PictureGallery(){
    const[pics, setPics] = useState([])
    const[index, setIndex] = useState(0)
    const[status, setStatus] = useState("gallery")

    const selectedpict = pics[index]

    async function handleGetData(){
        try {
            const response = await fetch(`https://api.unsplash.com/collections/GZFVdO3qVwY/photos?page=2`,
                {
                method:"GET",
                headers:{
                    "Accept-Version" : 'v1',
                    Authorization: 'Client-ID JnJh0vcfk6V-FKL6bV5lkExeWIu-E-ocLF7ydbtKQP4'
                }
            })
            if(!response.ok){
                throw new Error(`Response status: ${response.status}`)
            }

            const json = await response.json()
            const pictures = []
            json.forEach(p=>{
                pictures.push({
                    id:p.id,
                    user:p.user.name,
                    url:p.urls.small,
                    descript:p.description

                })
            })

            setPics(pictures)

        } catch (error) {
            console.error(error.message)
        }
        }

        window.addEventListener('load', handleGetData);

        function handleCurrIndex(value){
                setIndex(value)            
        }
        
        function handleStatus(value){
            setStatus(value)
        }

        ///prznies omWheel na ShowCard i stopPropagation
        //wowczas on Mouse enter/ leave pojawis ie scrooll
        //indidcator

        //albo nie aktualizuj Showcard przez
        //state variable tylko jakos bezposrednio
        //np przy zmianie mediaquery

    return (
        <>
        {status === "showpict" && 
            <>
            <ShowCard 
            cindex = {index}
            picsl={pics.length}
            imgsrc={selectedpict.url}
            onStatus={handleStatus}
            descr={selectedpict.descript}
            onWheelHandler={handleCurrIndex}/>
               
            </>
            }
        <Gallery inputs={pics}
        onSelectHandler={handleCurrIndex}
        onStatusHandler={handleStatus}/>
        </>
    )
}