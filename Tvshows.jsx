import axios from "axios";
import { useEffect, useState } from "react";


export default function Tvshows()
{
    const [TV,setTv]=useState([]);

    async function getTvData()
    {
        let{data}=await axios.get('https://api.themoviedb.org/3/discover/tv?api_key=4bb9d6d4f818f29fa397631a94314a74')
        console.log("data",data)
        setTv(data.results);
    }

    useEffect(()=>{
        getTvData();
    },[])

   return<>
       <div className="container">
       <div className="row mt-5 align-content-center justify-content-center">
            <div className="col-md-4">
                <div className="title">
                <h3>Trending Tv For This Week</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet sed animi vitae eligendi quia, quisquam ad repellendus dolor aspernatur molestias 
                    quam expedita totam laudantium facere inventore eum aut! Alias.</p>
                </div>
                </div>

                {TV.map((tvProgram,idx)=><>
                <div className="col-md-4 ">
                    <div className="tvimages mt-4" key={idx}>
                        <img className="w-100" src={`https://image.tmdb.org/t/p/original/${tvProgram.backdrop_path}`} alt="tvprogramposters"></img>
                        <h6 className="pt-3">{tvProgram.name}</h6>
                    
                </div>
                </div>

                </>)}
            </div>
        
       </div>
   </>
}