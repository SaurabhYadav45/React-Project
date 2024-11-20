import React from "react";
import {useState, useEffect} from 'react';
import axios  from "axios";
import Spinner from "./Spinner";


const Tag = () =>{

    const[tag, setTag] = useState("Dog");
    const[gif, setGif] = useState("");
    const[loading, setLoading] = useState(false);

    async function fetchData(){

        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=wRgAzHEXb2MeO2aM37ODXAGpbP9PXN4g&tag=${tag}`;
        const {data} = await axios.get(url);
        // console.log(output);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);
    

    return(
        <div className="w-1/2  bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h2 className="text-center text-2xl
             font-bold  underline mt-4">RANDOM {tag} GIF</h2>

            {
                loading ? (<Spinner></Spinner>) : (<img src={gif} alt="" height="300px" />)
            }

            <input type="text" name="tagGif" placeholder="Enter meme template" 
            onChange={(event) => setTag(event.target.value)} className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center" />
            
            <button className="w-10/12 bg-white opacity-90 text-xl py-2 rounded-lg font-bold mb-4"
            onClick={() => fetchData()}
            >GENERATE</button>
        </div>
    );
}


export default Tag;