import React from "react";
import { useSelector } from "react-redux";
import Message from "../../components/chat/message";

import { chats } from "../../services/reducers";

function Messages() {
  const chat = useSelector(chats.chat);
  return (
    <div>
      <div className="h-12 px-4 py-1 border-b">
        <p className="text-sm font-semibold capitalize">
          {chat.name !== undefined && chat.name.length > 0 && chat.name}
        </p>

        <p className="text-xs line-clamp-1 text-slate-600">
          {chat.title !== undefined && chat.title.length > 0 && chat.title}
        </p>
      </div>

      {Object.keys(chat).length !== 0 && (
        <div className="h-[calc(100vh_-_120px)] overflow-x-hidden overscroll-y-auto py-3">
          <img
            src={chat.picture}
            alt="profile"
            className="object-cover w-20 h-20 mx-3 rounded-full"
            style={{ minWidth: "80px", maxWidth: "80px" }}
          />
          <div className="p-2 mx-3">
            <p className="text-lg font-semibold capitalize">{chat.name}</p>

            <p className="text-sm capitalize line-clamp-3">{chat.title}</p>
          </div>

          {/* Messages section */}
          <Message message={chat} />
        </div>
      )}
    </div>
  );
}

export default Messages;
