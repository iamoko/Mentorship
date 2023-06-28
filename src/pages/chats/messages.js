import React from "react";
import { useSelector } from "react-redux";

import { chats } from "../../services/reducers";

function Messages() {
  const title = useSelector(chats.chat).title;
  return (
    <div>
      <p className="px-4 py-3 text-sm font-semibold capitalize border-b">
        {title.length === 0 ? "Messages section" : title}
      </p>
    </div>
  );
}

export default Messages;
