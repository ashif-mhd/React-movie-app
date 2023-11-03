import './App.css';
import movieicon from './icones/movie-icon.png'
import searchicon from './icones/search-icon.png'
import Moviecomponents from './component/Moviecomponents';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Movieinfocomponent from './component/Movieinfocomponent';

export const API_KEY ='4d4d0043'
function App() {


  const [searchquery , setsearchquery] = useState();
  const [timeoutid,settimeoutid] = useState();
  const [movielist , setmovielist] =useState([]);
  const [selectedmovie,setselectedmovie] = useState();

  const fetchdata = async (searchstring)=>{
    const response = await axios.get(`https://www.omdbapi.com/?s=${searchstring}&apikey=${API_KEY}`)
    setmovielist(response.data.Search)
  };
  const ontextchange = (event) =>{
    clearTimeout(timeoutid);
    setsearchquery(event.target.value)
    const timeout = settimeoutid(()=> fetchdata(event.target.value),500)
    settimeoutid(timeout);
  };
  useEffect(()=>{
    fetchdata()
  },[searchquery])

  return (
      <div className="container">
      <div className="header">
        <div className="appname">
        <img src={movieicon} alt=" movie icon" />
        <p>THE BOX OFFICE</p>
        </div>
        <div className="searchbox">
          <img src={searchicon} alt="search icon" />
          <input type="text" placeholder='search' value={searchquery} onChange={ontextchange}/>
        </div>
      </div>
      {selectedmovie && <Movieinfocomponent selectedmovie={selectedmovie}/>}
       <div className="movielistcontainer">
       {movielist?.length? movielist.map((movie,index)=><Moviecomponents
        key={index}
         movie={movie} 
         setselectedmovie={setselectedmovie}/>  )
        :"No Movie Search "

       }

       </div>
       {/* <img src="https://wallpapercave.com/wp/wp3160287.jpg" alt="coverimage" /> */}
       <div className="footer">
        THE UNLIMITED MOVIES
       </div>
    </div>
    
  );
}

export default App;
