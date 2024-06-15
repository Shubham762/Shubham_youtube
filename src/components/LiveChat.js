import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("ApI pollling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20)+"🚀",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-auto flex flex-col-reverse">
     {
        chatMessages.map((messageItem,index)=>{
            return(
                <ChatMessage key={index} name={messageItem.name} message={messageItem.message} />
            )
        })
     }
    </div>
  );
};

export default LiveChat;
