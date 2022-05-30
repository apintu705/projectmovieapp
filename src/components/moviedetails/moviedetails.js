import React from "react";
import { useParams } from "react-router-dom";
import "./moviedetails.css";
import { useDispatch, useSelector } from "react-redux";
import { detailsactionfunc, removedetails } from "../../features/redux/action";

const Moviedetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { details } = useSelector((state) => state.details);
  console.log(details);
  React.useEffect(() => {
    dispatch(detailsactionfunc(id));

    // cleanupfunction
    return () => {
      dispatch(removedetails());
    };
  }, [dispatch, id]);
  return (
    <div className="moviesection">
      <div className="sectionleft">
        <div className="movietitle">{details.Title} </div>
        <div className="movierating">
          <span>
            IMDB Rating<i className="fa fa-star"></i> : {details.imdbRating}
          </span>
          <span>
            IMDB Votes:<i className="fa fa-thumbs-up"></i> : {details.imdbVotes}
          </span>
          <span>
            IMDB Votes:<i className="fa fa-film"></i> : {details.Runtime}
          </span>
          <span>
            IMDB Votes:<i className="fa fa-calendar"></i> : {details.Year}
          </span>
        </div>

        <div className="movieplot">{details.plot} </div>
        <div className="movieinfo">
          <div>
            <span>Director</span>
            <span>{details.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{details.Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{details.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{details.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{details.Awards}</span>
          </div>
        </div>
      </div>
      <div className="sectionright">
        <img src={details.Poster} alt={details.Title} />
      </div>
    </div>
  );
};
export default Moviedetails;
