import React from "react";
import _ from "lodash";
import Dummy from "../dummy";
import Footer from "../../layouts/footer/footer";

function index() {
  return (
    <div className="flex gap-5 pt-2 home-container">
      <div className="w-60">
        <div className="p-4 mb-4 bg-red-600 rounded-lg">
          <Dummy />
        </div>

        <div className="sticky p-4 mt-3 mb-4 bg-orange-600 rounded-lg top-16">
          <Dummy />
        </div>
      </div>
      <div className="w-1/2 p-4 mb-4 bg-white">
        {_.times(20, (i) => (
          <Dummy key={i} />
        ))}
      </div>
      <div className="w-80">
        <div className="p-4 mb-4 bg-white border rounded-lg">
          <Dummy />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default index;
