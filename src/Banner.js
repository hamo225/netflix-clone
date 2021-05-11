import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  //   need the logic to bring up a random movie each time

  useEffect(() => {
    async function fetchData() {
      // fetch the data
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        //   we are setting the movie to a random choice of movie from the data that is sent back
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      //   always rememebr to return the request
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  //   keeping descriptionshort with option to increase
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* we are using truthy values built in and how OR works */}
        {/* question mark is optional chaining and saves a lot */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* div > 2 buttons */}
        <div className="banner_buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
        {/* description */}
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
