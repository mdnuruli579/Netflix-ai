import { API_OPTIONS } from '../utils/constant'
import { useDispatch,useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice';
import { useEffect } from 'react';


const useMovieTrailor=(movieId)=>{
    const dispatch=useDispatch();
    const trailerVideo = useSelector(
      (store) => store.movies.trailerVideo
    );
    const getMovieVideos=async ()=>{
      const data=await fetch("https://api.themoviedb.org/3/movie/"+
        movieId+
        "/videos", API_OPTIONS);
      const json=await data.json();
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      //console.log(trailer);
      dispatch(addTrailerVideo(trailer));
    }
    useEffect(()=>{
      !trailerVideo && getMovieVideos();
      // getMovieVideos();
    },[])
}
export default useMovieTrailor;