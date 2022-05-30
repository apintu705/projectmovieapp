import React from "react";
import "./home.css";
import Movielisting from "../movielisting/movielisting";
import { useDispatch } from "react-redux";
import { moviesactionfunc, showsactionfunc } from "../../features/redux/action";

const Home = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(moviesactionfunc());
    dispatch(showsactionfunc());
  }, [dispatch]);
  return (
    <div>
      <div className="bannerimage"></div>
      <Movielisting />
    </div>
  );
};
export default Home;
