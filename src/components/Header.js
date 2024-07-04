import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import {LOGO, SUPPORTED_LANGUAGES} from '../utils/constant'
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
import lang from '../utils/languageConstant';

const Header = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const langKey=useSelector((store)=>store.config.lang);
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView());
  }
  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=>unsubscribe();
  },[])
  
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
    <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
    {user && (
      <div className="flex p-2 justify-between">
        {!showGptSearch &&(
          <div>
            <input type='text' placeholder={lang[langKey].SEARCH_MOVIE_BY_NAME}
             className='h-10 rounded-lg'/>
            <button
            className="py-2 px-4 mx-4 my-2 bg-purple-700 text-white rounded-lg"
          >
            {lang[langKey].SEARCH_MOVIE}
          </button>
          </div>
        )}
          <select
            className="p-2 m-2 bg-gray-900 text-white rounded-lg"
             onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        <button
          className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {showGptSearch ? "Homepage" : "GPT Search"}
        </button>
        <button onClick={handleSignOut} className="font-bold text-white ">
          (Sign Out)
        </button>
      </div>
    )}
  </div>
  )
}

export default Header