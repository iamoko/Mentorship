import React from "react";
import { useSelector } from "react-redux";

import { chats } from "../../services/reducers";

function Messages() {
  const chat = useSelector(chats.chat);
  return (
    <div>
      <p className="px-4 py-3 text-sm font-semibold capitalize border-b">
        {chat.title.length === 0 ? "Messages section" : chat.title}
      </p>

      <div className="h-[calc(100vh_-_120px)] overflow-x-hidden overscroll-y-auto p-3">
        <img
          src={chat.picture}
          alt="profile"
          className="object-cover w-20 h-20 rounded-full min-w-20 min-h-20 max-w-20 max-h-20"
        />
        <div className="p-2">
          <p className="text-lg font-semibold capitalize">{chat.title}</p>
        </div>
      </div>
    </div>
  );
}

export default Messages;
