import React from "react";
import homepagecss from "./Homepage.module.css";
const HomePage = () => {
  return (
    <div className={homepagecss.main}>
      <div className={homepagecss.navigationBar}>
        <div className={homepagecss.marginalDiv}></div>
        <div className={homepagecss.navigationSlogan1}>
          <p>Empower Your Day, Master Your Tasks</p>
        </div>
        <div className={homepagecss.navigationTitle}>
          <p>Task Achiever</p>
        </div>
        <div className={homepagecss.navigationSlogan2}>
          <p>Where productivity finds its Path</p>
          <p>A todo manager which help You in modern way</p>
        </div>
        <div className={homepagecss.sidebtn}>
        <button>sidebtn</button>  
        </div>
      </div>
    </div>
  );
};
export default HomePage;
