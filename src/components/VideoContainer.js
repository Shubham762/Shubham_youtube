import React, { useEffect,useState } from 'react';
import {YOUTUBE_VIDEO_API} from '../utils/Constants'
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    getVideos();
  },[]);
  const getVideos=async()=>{
    // console.log("YOUTUBE_VIDEO_API",YOUTUBE_VIDEO_API);
  const data=await fetch(YOUTUBE_VIDEO_API);
  const json=await data?.json();
  // console.log("json",json)
  setVideos(json?.items);
  }
  return (
    <div className='flex flex-wrap'>
        {videos[0] && <AdVideoCard info={videos[0]}/>}
      {
        videos.length>0 && videos?.map((item)=>{
          return (
            <Link key={item?.id} to={"/watch?v="+item?.id}>
            <VideoCard  info={item}/>
            </Link>
            
          )
        })
      }
      
      </div>
  )
}

export default VideoContainer;