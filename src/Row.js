import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const baseurl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  //   state is like short term memory that disapears on refresh
  //   state syntax, the name, the set name and set to usestate with an initial value of an empty array
  const [movies, setMovies] = useState([]);
  //   now need to fill it with information
  //   now need code snippet that runs based on specific conditions/variable
  //   when the row loads we want something to run. This is what we use useEffect for. Something to happen on page load.
  //   need to run an async function - cannot run async on useeffect so need to create an internal function
  //   must remmeber to call the function after
  useEffect(() => {
    async function fetchData() {
      // 1- make the request
      const request = await axios.get(fetchUrl);
      //   console.log(request.data.results); //test what data is coming back
      setMovies(request.data.results); //push the data that has come back into the movies state array
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // console.log(movies);
  // when using useEffect - if we are using a variable from outside the block than we MUST pass it as a dependency
  //   if dependenice blank. then run once when row loads and do not run again. If we were to pass in a variable then it will reload once that dependencie changes

  return (
    <div className="row">
      {/* Title */}
      <h2>{title}</h2>
      <div className="row__posters">
        {/* many row__poster(s) */}
        {movies.map((movie) => (
          <img
            // using the same component - we add a conditional
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            //  adding conditionals
            src={` 
              ${baseurl}${isLargeRow ? movie.poster_path : movie.backdrop_path}
            `}
            alt={`${baseurl}  ${movie.name} `}
            key={movie.id}
          />
        ))}
      </div>

      {/* container -> posters */}
    </div>
  );
}

export default Row;
