import React from "react";

function Message(props) {
  const message = props.message;
  return (
    <div className="flex p-3 mt-4 hover:bg-slate-200">
      <img
        src={message.picture}
        alt="profile"
        className="object-cover w-10 h-10 rounded-full"
        style={{ minWidth: "40px", maxWidth: "40px" }}
      />
      <div className="ms-3 pe-8">
        <div className="flex">
          <p className="text-sm font-semibold capitalize ">{message.name}</p>
          <ul className="list-disc ms-5">
            <li className="text-sm font-normal text-slate-500">
              {message.date}
            </li>
          </ul>
        </div>
        <p className="mt-2 text-sm break-words whitespace-pre-line">{message.message}</p>
      </div>
    </div>
  );
}

export default Message;
