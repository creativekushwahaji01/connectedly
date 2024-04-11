import React from "react";
import bgimg from '../imgs/communitybgimg.png'
import Bio from "./Bio";

function Home() {
  return (
    <div className="landing-page">
      
      <div className="content">
        <div className="container">
          <div className="info">
            <h1> we are what,</h1>
            <h1> we choose to be...</h1>
            <p>
            Join our community website for resource sharing, networking, and collaborative learning in a supportive and inclusive environment.
            </p>
            <button>Explore</button>
          </div>
          <div className="image">
            <img
              src={bgimg}
              alt="Inspiration"
            />
          </div>
        </div>
      </div>
      <Bio/>
    </div>
  );
}
export default Home;
