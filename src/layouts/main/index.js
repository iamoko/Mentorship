import React from "react";
import Header from "../header";
import Home from "../../pages/home";
import Network from "../../pages/mynetworks";
import Notifications from "../../pages/notifications";
import Jobs from "../../pages/jobs";
import Chats from "../../pages/chats";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function index() {
  localStorage.theme = 'light'
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container mx-auto md:px-4 xl:px-20 2xl:px-48 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="mynetwork" element={<Network />} />
            <Route path="messaging" element={<Chats />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default index;
