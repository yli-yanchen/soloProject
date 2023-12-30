import React from "react";
import homepic from "../../docs/assets/images/homepagePicNoText.png";

const HomepagePic = () => {
  return (
    <div>
      <img className="homepic" src={homepic} alt="homepage picture"></img>;
    </div>
  );
};

export default HomepagePic;