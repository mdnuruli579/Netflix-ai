import React from 'react'
import { IMG_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
    if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4 cursor-pointer transform transition duration-300 hover:scale-110">
      <img alt="Movie Card" src={IMG_URL + posterPath} />
    </div>
  );
}

export default MovieCard