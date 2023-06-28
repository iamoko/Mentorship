import React from "react";
import _ from "lodash";
import ChatItem from "../../components/chat/chatItem";

function Chats() {
  const chats = [
    {
      id: "1",
      picture: "https://avatars.githubusercontent.com/u/40918307?v=4",
      title: "Nakawungu Zaharah",
      message:
        "Cybersecurity professional in training | Software engineer |Digital communication manager|project management|SEO ",
      date: "May 17",
    },
    {
      id: "2",
      picture:
        "https://media.cnn.com/api/v1/images/stellar/prod/230619184105-trump-nc-0610.jpg?c=16x9&q=h_720,w_1280,c_fill",
      title: "Trump",
      message: "Come on, just drink some Disinfectants",
      date: "May 17",
    },
    {
      id: "3",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/6/68/Joe_Biden_presidential_portrait.jpg",
      title: "Joe Biden",
      message: "Is there still some toilet paper?",
      date: "May 19",
    },
    {
      id: "4",
      picture:
        "https://www.aljazeera.com/wp-content/uploads/2018/01/341651d89c5e4103bb14c9ebb1abb905_18.jpeg?resize=1200%2C675",
      title: "Museveni",
      message: "Damn, you are right!. Allright, we'll all stay at home now!",
      date: "May 17",
    },
    {
      id: "5",
      picture:
        "https://image.cnbcfm.com/api/v1/image/107262109-1687610609842-107262109-1687609917381-gettyimages-1258997864-AFP_33KT7EM.jpg?v=1687706110&w=929&h=523&vtcrop=y",
      title: "Putin",
      message:
        "I am patient with stupidity but not with those who are proud of it.” Wise words said by Edith Sitwell, as it's okay to be silly sometimes.",
      date: "May 17",
    },
    {
      id: "6",
      picture:
        "https://pbs.twimg.com/profile_images/1569623053696483329/XYdHAoqK_400x400.jpg",
      title: "William Ruto",
      message:
        "Stupidity is something that transcends countries and cultures. As a matter of fact stupidity is omnipresent. Here are the best funny quotes about stupidity and ignorance which will make you laugh on any occasion, on any day, and at any time. Whether you are a man or a woman, stupidity quotes are enjoyed by everyone. These real stupidity quotes can make any person laugh and rejoice enough on any given day.",
      date: "May 17",
    },
    {
      id: "7",
      picture:
        "https://images.csmonitor.com/csm/2019/09/1007%20BOBI%20WINE%20LEDE.jpg?alias=standard_380x253",
      title: "Kyagulanyi",
      message:
        "Before you criticize someone, walk a mile in their shoes. That way, you'll be a mile from them, and you'll have their shoes.",
      date: "Jan 20",
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
