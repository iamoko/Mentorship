import React from "react";
import Chats from "./chats";
import Messages from "./messages";

function index() {
  document.title = "Messaging";
  return (
    <div className="flex h-[calc(100vh_-_65px)] mt-2 gap-5 messaging-container">
      <div className="flex w-full h-full bg-white border-t border-gray-300 rounded-t-xl border-s border-e">
        <div className="w-2/5 border-e">
          <p className="px-4 py-3 text-sm font-semibold border-b">Messaging</p>

          <Chats />
        </div>

        <div className="w-3/5">
          <Messages />
        </div>
      </div>
      <div>
        <div className="h-40 p-4 bg-white w-80">
          <p>Side Content</p>
        </div>
      </div>
    </div>
  );
}

export default index;
