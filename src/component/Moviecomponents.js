import '../styles/moviecomponent.css'


const Moviecomponents = (props) => {
   
   
  return (
   <div className="moviecontainer" onClick={()=>props.setselectedmovie(props?.movie?.imdbID)}>
  <img src={props?.movie?.Poster} alt="" className="coverimage" />
   <span className="moviename">{props?.movie?.Title}</span>
   <div className="infocolumn">
    <span className='movieinfo'>Year: {props?.movie?.Year}</span>
    <span className='movieinfo'>Name: {props?.movie?.Type}</span>
   </div>
   </div>
  )
}

export default Moviecomponents