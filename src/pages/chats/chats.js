import React from "react";
import _ from "lodash";
import ChatItem from "../../components/chat/chatItem";

function Chats() {
  const chats = [
    {
      id: "1",
      picture:
        "https://www.monitor.co.ug/resource/blob/4203390/433067ad42f2b136223cac3504e3a2c5/latest08pix-data.jpg",

      name: "agnes nandutu",
      title:
        "A female Ugandan journalist, politician and Minister in charge of Karamoja.[1] In 2020 she participated in the National Resistance Movement Party primaries[2] which she lost to incumbent Woman MP Justin Khainza,[3][4] and in the 2021 general election, running as an independent, she was elected Women's Representative for Bududa District.",
      message:
        "We are in danger of destroying ourselves by our greed and stupidity. We cannot remain looking inwards at ourselves on a small and increasingly polluted and overcrowded planet.",
      date: "May 30",
    },
    {
      id: "2",
      picture:
        "https://media.cnn.com/api/v1/images/stellar/prod/230619184105-trump-nc-0610.jpg?c=16x9&q=h_720,w_1280,c_fill",
      name: "Donald Trump",
      title:
        "American politician, media personality, and businessman who served as the 45th president of the United States from 2017 to 2021",
      message: "Come on, just drink some Disinfectants",
      date: "May 17",
    },
    {
      id: "3",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/6/68/Joe_Biden_presidential_portrait.jpg",
      name: "Joe Biden",
      title:
        "American politician who is the 46th and current president of the United States. A member of the Democratic Party, he previously served as the 47th vice president from 2009 to 2017 under President Barack Obama and represented Delaware in the United States Senate from 1973 to 2009",
      message: "Is there still some toilet paper?",
      date: "May 19",
    },
    {
      id: "4",
      picture:
        "https://www.aljazeera.com/wp-content/uploads/2018/01/341651d89c5e4103bb14c9ebb1abb905_18.jpeg?resize=1200%2C675",
      title: "Museveni",
      name: "Ugandan politician and military general who serves as the ninth president of Uganda since 26 January 1986. His government is considered autocratic.[2] After Museveni lost the election of 1980",
      message: "Damn, you are right!. Allright, we'll all stay at home now!",
      date: "May 17",
    },
    {
      id: "5",
      picture:
        "https://image.cnbcfm.com/api/v1/image/107262109-1687610609842-107262109-1687609917381-gettyimages-1258997864-AFP_33KT7EM.jpg?v=1687706110&w=929&h=523&vtcrop=y",
      title: "Vladimir Putin",
      name: "Russian politician and former intelligence officer, serving as the current president of Russia. Putin has served continuously as president or prime minister since 1999:[d] as prime minister from 1999 to 2000 and from 2008 to 2012, and as president from 2000 to 2008 and since 2012.",
      message:
        "I am patient with stupidity but not with those who are proud of it.” Wise words said by Edith Sitwell, as it's okay to be silly sometimes.",
      date: "May 17",
    },
    {
      id: "6",
      picture:
        "https://pbs.twimg.com/profile_images/1569623053696483329/XYdHAoqK_400x400.jpg",
      title: "William Ruto",
      name: "Kenyan politician who has been serving as the fifth president of Kenya since 13 September 2022. Prior to becoming president, he served as the first elected deputy president of Kenya from 2013 to 2022",
      message:
        "Stupidity is something that transcends countries and cultures. As a matter of fact stupidity is omnipresent. Here are the best funny quotes about stupidity and ignorance which will make you laugh on any occasion, on any day, and at any time. Whether you are a man or a woman, stupidity quotes are enjoyed by everyone. These real stupidity quotes can make any person laugh and rejoice enough on any given day.",
      date: "May 17",
    },
    {
      id: "7",
      picture:
        "https://images.csmonitor.com/csm/2019/09/1007%20BOBI%20WINE%20LEDE.jpg?alias=standard_380x253",
      title: "Kyagulanyi",
      name: "Opposition leader against the autocratic[1] Ugandan regime and performs on stage as Bobi Wine. He founded the National Unity Platform political party in 2020.",
      message:
        "Before you criticize someone, walk a mile in their shoes. That way, you'll be a mile from them, and you'll have their shoes.",
      date: "Jan 20",
    },
    {
      id: "8",
      picture:
        "https://pbs.twimg.com/profile_images/956102235930456064/_NhZTJyw_400x400.jpg",
      title: "joão Lourenço",
      name: "joão Lourenço",
      message:
        "When you see a couple walking down the street holding hands and laughing, you look over to your side and the only thing you’re holding is a half-eaten sandwich.",
      date: "Jan 20",
    },
    {
      id: "9",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/8/8c/Philemon_Yang%2C_Prime_Minister_of_Cameroon_in_London%2C_21_June_2010._%284720521915%29_cropped.jpg",
      title: "Philémon Yunji Yang",
      name: "Philémon Yunji Yang",
      message:
        "After twelve years of therapy my psychiatrist said something that brought tears to my eyes. He said, ‘No hablo ingles.",
      date: "Jan 20",
    },
    {
      id: "10",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Paul_Biya_2014.png",
      title: "Paul Biya",
      name: "Paul Biya",
      message:
        "If I have brought any message today, it is this: Have the courage to have your wisdom regarded as stupidity. Be fools for Christ. And have the courage to suffer the contempt of the sophisticated world.",
      date: "Feb 2",
    },
  ];
  return (
    <div className="h-[calc(100vh_-_120px)] overflow-x-hidden overscroll-y-auto">
      {_.map(chats, (chat, i) => (
        <ChatItem key={i} chat={chat} />
      ))}
    </div>
  );
}

export default Chats;
