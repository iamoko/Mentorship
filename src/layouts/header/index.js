import React, { useState } from "react";

import _ from "lodash";
import {
  AiFillHome,
  AiFillMessage,
  AiTwotoneNotification,
} from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BsBriefcaseFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/images/logo.png";

function Index() {
  let location = useLocation();
  const [active, setActive] = useState("");

  React.useEffect(() => {
    setActive(location.pathname.substring(1));
  }, [location]);

  const menus = [
    {
      icon: (
        <AiFillHome
          className={`text-xl ${
            active === "" ? " text-black" : "text-slate-600"
          }`}
        />
      ),
      name: "Home",
      link: "",
    },
    {
      icon: (
        <FiUsers
          className={`text-xl ${
            active === "mynetwork" ? " text-black" : "text-slate-600"
          }`}
        />
      ),
      name: "My Network",
      link: "mynetwork",
    },
    {
      icon: (
        <BsBriefcaseFill
          className={`text-xl ${
            active === "jobs" ? " text-black" : "text-slate-600"
          }`}
        />
      ),
      name: "Jobs",
      link: "jobs",
    },
    {
      icon: (
        <AiFillMessage
          className={`text-xl ${
            active === "messaging" ? " text-black" : "text-slate-600"
          }`}
        />
      ),
      name: "Messaging",
      link: "messaging",
    },
    {
      icon: (
        <AiTwotoneNotification
          className={`text-xl ${
            active === "notifications" ? " text-black" : "text-slate-600"
          }`}
        />
      ),
      name: "Notifications",
      link: "notifications",
    },
  ];

  return (
    <div className="sticky top-0 z-10 bg-white border-b-2 h-14">
      <div className="container h-full px-4 mx-auto md:px-4 xl:px-24 2xl:px-48">
        <div className="flex justify-between h-full">
          <div className="">
            <img className="w-10 h-10 mt-2" src={logo} alt="profile" />
          </div>

          <div className="flex">
            {_.map(menus, (m, i) => (
              <Link
                key={i}
                to={m.link}
                className={`px-4 border-solid
                hover:bg-sky-100
                duration-100
                cursor-pointer
                header-link
                 ${active === m.link && "border-b-2"} border-black h-full pt-2`}
              >
                <div className="flex justify-center">{m.icon}</div>

                <p
                  className={`text-xs mt-1 ${
                    active === m.link ? " text-black" : "text-slate-600"
                  }`}
                >
                  {m.name}
                </p>
              </Link>
            ))}
          </div>

          <div className="h-full header-profile">
            <div className="flex justify-center w-full">
              <img
                className="mt-2 rounded-full h-7 w-7"
                src="https://avatars.githubusercontent.com/u/40918307?v=4"
                alt="profile"
              />
            </div>
            <p className="text-xs">Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
