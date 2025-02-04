import { useDispatch,useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";



const useUpcomingMovie=()=>{
  const dispatch=useDispatch();
  const upcomingMovies = useSelector(
    (store) => store.movies.upcomingMovies
  );
  const getUpcomingMovie= async()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
  const json=await data.json();
  //console.log(json.results);
  dispatch(addUpcomingMovies(json.results))
  }
  useEffect(()=>{
    !upcomingMovies && getUpcomingMovie();
    // getUpcomingMovie();
  },[]);
}
export default useUpcomingMovie;