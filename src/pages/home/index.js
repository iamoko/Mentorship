import React from "react";
import _ from "lodash";
import Dummy from "../dummy";

function index() {
  return (
    <div className="flex pt-2 gap-5 home-container">
      <div className="w-60">
        <div className="rounded-lg p-4 mb-4 bg-red-600">
          <p>Testing webflow got github pages</p>
          <Dummy />
        </div>

        <div className="rounded-lg p-4 mb-4 bg-orange-600 mt-3 sticky top-16">
          <Dummy />
        </div>
      </div>
      <div className="bg-white  w-1/2 p-4 mb-4">
        {_.times(20, (i) => (
          <Dummy key={i} />
        ))}
      </div>
      <div className="w-80">
        <div className="rounded-lg p-4 mb-4 bg-blue-600">
          <Dummy />
        </div>

        <div className="rounded-lg p-4 mb-4 bg-green-600 mt-3 sticky top-16">
          <Dummy />
        </div>
      </div>
    </div>
  );
}

export default index;
