import axios from "axios";
import { useEffect, useState } from "react";


 export default function Movies()
 {

    const url='https://api.themoviedb.org/3/trending/movie/week?api_key=4bb9d6d4f818f29fa397631a94314a74';
    const [Movies,setMovies]=useState([]);

    async function getData()
    {
        let{data} =await axios.get(url);
        console.log(data.results)
        setMovies(data.results);
    }

    useEffect(()=>{
        getData();
    },[])

    return<> 
     <div className="conatiner mx-auto">
        <div className="row align-items-center justify-content-center">
            <div className="col-md-4">
                <div className="title">
                    <h3>Trending Movies To watch</h3>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim consectetur sit quo eaque debitis. Consequuntur repellat vitae deleniti! Beatae eaque velit veritatis reiciendis
                         ex sapiente a vitae, atque deleniti tempore.</p>
                </div>
            </div>
            
            { Movies.map((movie,idx)=><>
            
            <div className="col-md-2">
            <div key={idx} className="movie">
                    <img  className="w-100" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}></img> 
            </div>
            </div>
            </>

            )}
        </div>
        </div>
    
      
    </>
 }