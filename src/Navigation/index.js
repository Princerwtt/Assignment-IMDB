import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import Cards from "../Cards";

function Index() {

  return (
    <>
      <div className="navBar">
        <div className="logo">
          {/* Link to home */}
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
              alt="logo-imdb"
              className="navBarIcon"
            />
          </Link>
        </div>
        <div className="all">
        <Link to="/"> Populer</Link>
        </div>
        <div className="all">
        <Link to="/top-rated"> Top Rated</Link>
        </div>
        <div className="all">
        <Link to="/"> Upcoming</Link>
        </div>
       </div>
    </>
  );
}

export default Index;
