import React, { useEffect , useState} from 'react'
import { API_KEY } from '../App'
import axios from 'axios'
import '../styles/movieinfocomponent.css'

const Movieinfocomponent = (props) => {
  const [movieinfo ,setmovieinfo] = useState ()
  console.log(movieinfo)
  const {selectedmovie} = props;
  useEffect(()=>{
   axios.get(`https://www.omdbapi.com/?i=${selectedmovie} &apikey=${API_KEY}`)
   .then((response)=>setmovieinfo(response.data))
  },[selectedmovie]);
  return (
   <div className="movieinfoscontainer">
    <img src={movieinfo?.Poster} alt="" className="coveimage" />
    <div className="infocolumn">
      <span className="moviename">{movieinfo?.Type}:{movieinfo?.Title}</span>
      <span className="movieinfo">Language: <span>{movieinfo?.Language}</span></span>
      <span className="movieinfo">Rated: <span>{movieinfo?.Rated}</span></span>
      <span className="movieinfo">Released: <span>{movieinfo?.Released}</span></span>
      <span className="movieinfo">Runtime: <span>{movieinfo?.Runtime}</span></span>
      <span className="movieinfo">Genre: <span>{movieinfo?.Genre}</span></span>
      <span className="movieinfo">Director: <span>{movieinfo?.Director}</span></span>
      <span className="movieinfo">Actors: <span>{movieinfo?.Actors}</span></span>
      <span className="movieinfo">Plot: <span>{movieinfo?.Plot}</span></span>
    </div>
   </div>
  )
}

export default Movieinfocomponent