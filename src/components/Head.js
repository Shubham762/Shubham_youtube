<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
import { cacheResults } from "../utils/SearchSlice";

const Head=()=>{
  const [searchQuery,setSearchQuery]=useState('');
  const [suggestion,setSuggestion]=useState([]);
  const [showSuggestion,setShowSuggestion]=useState(false);
  const searchCache = useSelector((store)=>store.search);
    const dispatch=useDispatch();
    useEffect(()=>{
      const timer = setTimeout(()=>{
        if(searchCache[searchQuery]){
          setSuggestion(searchCache[searchQuery]);
        }
        else{
          getSearchSuggestion();
        } 
      
      },200)
      return ()=>{
        clearTimeout(timer);
      }

    },[searchQuery]);
    
    const getSearchSuggestion=async()=>{
          const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
          const json=await data.json();
          // console.log("API CALLED"+ "-" + searchQuery);
        setSuggestion(json[1]);

        //update cache
        dispatch(cacheResults({
          [searchQuery]: json[1],
        }))
    }
    const toggleMenuHandler =()=>{
         dispatch(toggleMenu());
    }
    
    const handleListItem =(item)=>{
      console.log("this item is clicked",item);
      setSearchQuery(item);
    }

   // const searchedText=(item)=>{
    //   console.log("this is clicked");
    // }

=======
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";

const Head=()=>{
    const dispatch=useDispatch();
    const toggleMenuHandler =()=>{
         dispatch(toggleMenu());
    }
>>>>>>> d6586d7 (youtube clone)
  return(
    <div className="grid grid-flow-col p-5 m-2 shadow-lg"> 
    <div className="flex col-span-1">
        <img 
        onClick={()=>toggleMenuHandler()}
        className="h-8 cursor-pointer"
        alt="menu" 
        src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" 
        />
        <a href="/">
        <img 
        className="h-8 mx-2"
        alt="youtube" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" />
        </a>
        </div>
        <div className="col-span-10 px-44">
<<<<<<< HEAD
          <div>
            <input
            className="w-1/2 border border-gray-500 p-2 rounded-l-full px-5"
            type="text"
            value={searchQuery}
            onChange={(e)=>{setSearchQuery(e.target.value);}}
            onFocus={()=>setShowSuggestion(true)}
            onBlur={()=>{setTimeout(()=>{setShowSuggestion(false)},500);}}
            />
            <button className="border border-gray-500 px-5 py-2 rounded-r-full bg-gray-200">🔍</button> { /*commmand +control + x */}
        </div>
        {
          showSuggestion && searchQuery&& (
        <div className="fixed bg-white py-5 px-5 w-[24.5rem] shadow-lg rounded-lg border border-gray-100">
        <ul>
          {
            suggestion?.map((item)=>{
              return(
                item?<li className="py-2 px-1 shadow-sm hover:bg-gray-100 cursor-pointer" key={item} onClick={()=>{handleListItem(item)}}>🔍 {item} </li>:null
              )
            })
          }
         
        </ul>
      </div>
          )
        }
        </div>
=======
            <input
            className="w-1/2 border border-gray-500 p-2 rounded-l-full"
            type="text"/>
            <button className="border border-gray-500 px-5 py-2 rounded-r-full bg-gray-200">🔍</button> { /*commmand +control + x */}
        </div>
>>>>>>> d6586d7 (youtube clone)
        <div className="col-span-1">
            <img 
            className="h-8"
            alt="usericon" 
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />
        </div>

    </div>
  )
}
export default Head;