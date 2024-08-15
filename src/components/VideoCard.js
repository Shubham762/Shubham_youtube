import React from "react";

const VideoCard = ({ info }) => {
  // console.log("info",info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    // <div className="p-2 m-2 w-60 h-50 shadow-lg rounded-lg bg-red-300 flex flex-col justify-between">
    //   <img src={thumbnails.high.url} alt="thumnail" className="rounded-lg w-full h-32 object-cover"/>
    //   <ul className="flex-grow">
    //     <li className="font-bold py-3">{title}</li>
    //     <li>{channelTitle}</li>
    //     <li>{statistics.viewCount}</li>
    //   </ul>
    // </div>
    <div className="p-2 m-2 w-60 h-60 shadow-lg rounded-lg flex flex-col justify-between">
      <img
        src={thumbnails.high.url}
        alt={`Thumbnail image for video titled ${title}`}
        className="rounded-lg w-full h-32 object-cover"
      />
      <ul className="flex-grow">
        <li className="font-bold py-3 truncate">{title}</li>
        <li className="text-sm text-gray-700 truncate">{channelTitle}</li>
        <li className="text-sm text-gray-500">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-500">
      <p>advertisement tag</p>
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
