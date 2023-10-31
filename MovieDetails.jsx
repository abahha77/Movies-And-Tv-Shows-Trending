import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function MovieDetails()
{
    let [movieDetails,setMovieDetails]=useState({});

   let {id}=useParams();
   async function getMovieDetails()
   {
      let{data}=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4bb9d6d4f818f29fa397631a94314a74`)
      console.log(data)
      console.log(data.poster_path)
      setMovieDetails(data)
   }
   useEffect(()=>{
    getMovieDetails();
   },[])

   
    return <>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-4">
                <div className="image">
                 <img className="w-100" src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}></img> 
                </div>
               
            </div>

            <div className="col-md-8">
                <h2>{movieDetails.original_title}</h2>
                <p>{movieDetails.overview}</p>
                {movieDetails.genres?.map((genere,idx)=>{<span className="me-2 bg-info text-white" key={idx}>
                    {genere.name}
                </span>})}
                <h5>budget : {movieDetails.budget}</h5>
                <h5>Release Date : {movieDetails.release_date}</h5>
                <h5>status : {movieDetails.status}</h5>
                <h5>tagline: {movieDetails.tagline}</h5>
                <h5>title: {movieDetails.title}</h5>
                <h5>vote_average: {movieDetails.vote_average}</h5>
                <h5>vote_count: {movieDetails.vote_count}</h5>
                

            </div>
        </div>
    </div>
    </>
}