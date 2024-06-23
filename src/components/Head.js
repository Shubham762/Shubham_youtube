import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";

const Head=()=>{
    const dispatch=useDispatch();
    const toggleMenuHandler =()=>{
         dispatch(toggleMenu());
    }
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
            <input
            className="w-1/2 border border-gray-500 p-2 rounded-l-full"
            type="text"/>
            <button className="border border-gray-500 px-5 py-2 rounded-r-full bg-gray-200">🔍</button> { /*commmand +control + x */}
        </div>
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