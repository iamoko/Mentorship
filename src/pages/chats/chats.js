import React from "react";
import _ from "lodash";
import ChatItem from "../../components/chat/chatItem";

function Chats() {
  const chats = [
    {
      picture: "https://avatars.githubusercontent.com/u/40918307?v=4",
      title: "Nakawungu Zaharah",
      message:
        "Cybersecurity professional in training | Software engineer |Digital communication manager|project management|SEO ",
      date: "May 17",
    },
    {
      picture: "https://avatars.githubusercontent.com/u/40918307?v=4",
      title: "Trump",
      message: "Come on, just drink some Disinfectants",
      date: "May 17",
    },
    {
      picture: "https://avatars.githubusercontent.com/u/40918307?v=4",
      title: "Joe Biden",
      message: "Is there still some toilet paper?",
      date: "May 19",
    },
    {
      picture: "https://avatars.githubusercontent.com/u/40918307?v=4",
      title: "Eng Ivan",
      message: "Hello",
      date: "May 17",
    },
    {
      picture: "https://avatars.githubusercontent.com/u/40918307?v=4",
      title: "Eng Ivan",
      message: "Hello",
      date: "May 17",
    },
    {
      picture: "https://avatars.githubusercontent.com/u/40918307?v=4",
      title: "Eng Ivan",
      message: "Hello",
      date: "May 17",
    },
    {
      picture: "https://avatars.githubusercontent.com/u/40918307?v=4",
      title: "Eng Ivan",
      message: "Hello",
      date: "May 17",
    },
    {
      picture: "https://avatars.githubusercontent.com/u/40918307?v=4",
      title: "Eng Ivan",
      message: "Hello",
      date: "May 17",
    },
    {
      picture: "https://avatars.githubusercontent.com/u/40918307?v=4",
      title: "Eng Ivan",
      message: "Hello",
      date: "May 17",
    },
    {
      picture: "https://avatars.githubusercontent.com/u/40918307?v=4",
      title: "Eng Ivan",
      message: "Hello",
      date: "May 17",
    },
    {
      picture: "https://avatars.githubusercontent.com/u/40918307?v=4",
      title: "Eng Ivan",
      message: "Hello",
      date: "May 17",
    },
    {
      picture: "https://avatars.githubusercontent.com/u/40918307?v=4",
      title: "Eng Ivan",
      message: "Hello",
      date: "May 17",
    },
    {
      picture: "https://avatars.githubusercontent.com/u/40918307?v=4",
      title: "Eng Ivan",
      message: "Hello",
      date: "May 17",
    },
    {
      picture: "https://avatars.githubusercontent.com/u/40918307?v=4",
      title: "Eng Ivan",
      message: "Hello",
      date: "May 17",
    },
    {
      picture: "https://avatars.githubusercontent.com/u/40918307?v=4",
      title: "Eng Ivan",
      message: "Hello",
      date: "May 17",
    },
  ];
  return (
    <div className="h-[calc(100vh_-_110px)] overflow-x-hidden overscroll-y-auto">
      {_.map(chats, (chat, i) => (
        <ChatItem key={i} chat={chat} />
      ))}
    </div>
  );
}

export default Chats;
