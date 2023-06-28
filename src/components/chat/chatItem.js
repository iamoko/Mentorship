import React from "react";

function ChatItem(props) {
  const chat = props.chat;
  return (
    <div className="flex p-3">
      <img
        src={props.chat.picture}
        alt="profile"
        className="w-12 h-12 rounded-full min-w-12 max-w-12 max-h-12 min-h-12"
      />
      <div className="flex-1 w-full min-h-full pb-2 border-b ms-2">
        <div className="flex justify-between">
          <p className="text-sm font-semibold line-clamp-1">{chat.title}</p>
          <p className="text-sm font-semibold line-clamp-1 ms-1">{chat.date}</p>
        </div>
        <p className="text-sm line-clamp-2 text-slate-800">{chat.message}</p>
      </div>
    </div>
  );
}

export default ChatItem;
