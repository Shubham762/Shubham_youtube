import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen);

    //this is called Early return 
    if(!isMenuOpen)  return   // or return null noth are same  or isMenuOpen? <div></div>:null
    
  return (
    <div className="w-48 shadow-lg p-5"> 
     <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li> Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movie</li>
      </ul>
      <h1 className="font-bold pt-5">Watch later</h1>
      <ul>
        <li> Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movie</li>
      </ul>
    </div>
  );
};

export default Sidebar;
