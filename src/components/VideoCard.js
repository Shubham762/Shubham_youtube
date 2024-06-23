import React from "react";

const VideoCard = ({ info }) => {
    // console.log("info",info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-60 shadow-lg rounded-lg ">
      <img src={thumbnails.high.url} alt="thumnail" className="rounded-lg"/>
      <ul>
        <li className="font-bold py-3">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export  const AdVideoCard=({info})=>{
    return(
<div className="p-1 m-1 border border-red-500">
    <p>ADD</p>
    <VideoCard info={info}/>
</div>
    );
}

export default VideoCard;
