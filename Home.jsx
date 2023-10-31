import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';


export default function Home()
{
    const url='https://api.themoviedb.org/3/trending/movie/week?api_key=4bb9d6d4f818f29fa397631a94314a74';

    const [Movies,setMovies]=useState([]);
    const [TV,setTv]=useState([]);

    async function getTvData()
    {
        let{data}=await axios.get('https://api.themoviedb.org/3/discover/tv?api_key=4bb9d6d4f818f29fa397631a94314a74')
        console.log("data",data)
        setTv(data.results);
    }
    useEffect(()=>{

        async function getData()
        {
            let{data} =await axios.get(url);
            console.log(data.results)
            setMovies(data.results);
        }
     getData();
     getTvData();
    },[])


  
    return <>


    {Movies.length==0&&TV.length==0?<div className="vh-100 justify-content-center align-items-center d-flex">
        <i className="fa-solid fa-spinner fa-5x text-white fa-spin"></i>
        </div>:<>  <div className="conatiner mx-auto">
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
                <Link to={`/MovieDetails/${movie.id}`} >
                    <div key={idx} className="movie">
                    <img  className="w-100" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}></img> 
                    <h6 className="pt-2">{movie.title}</h6>
                    </div>
                </Link>
            </div>
            </>

            )}
        </div>

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
                    <Link to="/moviedetails">
                    <div className="tv mt-4" key={idx}>
                        <img className="w-100" src={`https://image.tmdb.org/t/p/original/${tvProgram.backdrop_path}`} alt="tvprogramposters"></img>
                        <h6 className="pt-3">{tvProgram.name}</h6>
                    
                </div>
                </Link>
                </div>

                </>)}
            </div>
        
    
    </div></>}




    
    </>
}