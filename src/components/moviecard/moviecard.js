import React from "react";
import "./moviecard.css";
import { Link } from "react-router-dom";

const Moviecard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="carditem">
        <div className="cardinner">
          <div className="cardtop">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="cardbottom">
            <div className="cardinfo">
              <h4>{movie.Title} </h4>
              <p>{movie.Year} </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Moviecard;
