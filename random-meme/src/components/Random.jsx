import React from "react";
import { useEffect, useState } from "react";
import axios  from "axios";
import Spinner from "./Spinner";


// const  api = process.env.REACT_APP_GIPHY_API_KEY;


const Random = () => {

    const[gif, setGif] = useState("");
    const[loading, setLoading] = useState(false);


    async function fetchData(){

        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=wRgAzHEXb2MeO2aM37ODXAGpbP9PXN4g&tag=&rating=g`;
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
        <div className="w-1/2  bg-green-500 flex flex-col items-center border border-black gap-y-5 mt-[15px] rounded-lg">
            <h2 className="text-center text-2xl
             font-bold  underline mt-4">A RANDOM GIF</h2>

            {
                loading ? (<Spinner/>) : (<img src={gif} alt="" height="300px"/>)
            }

            <button className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-4" 
            onClick = {() => fetchData()}>GENERATE</button>
        </div>
    );
}

export default Random ;