import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
    //   console.log("ApI pollling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20) + "🚀",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-auto flex flex-col-reverse">
        <div>
          {chatMessages.map((messageItem, index) => {
            return (
              <ChatMessage
                key={index}
                name={messageItem.name}
                message={messageItem.message}
              />
            );
          })}
          <form className="w-full static"
          onSubmit={(e)=>{
            e.preventDefault();
           // console.log("This is form",liveMessage);
            dispatch(addMessage({
                name:"Golu Tiwari",
                message:liveMessage
            }));
            setLiveMessage('');
          }}
          >
            <input
              className="w-60 h-10 rounded-full  p-2 border border-gray border-b-2 "
              type="text"
              placeholder="Comment here..."
              value={liveMessage}
              onChange={(e) => {
                setLiveMessage(e.target.value);
              }}
            />
            <button className="w-20 h-10 m-2 p-2 rounded-full border border-gray border-b-2 bg-green-200">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LiveChat;
