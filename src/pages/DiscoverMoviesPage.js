import React, { useState } from "react";
import axios from "axios";
import Timeout from "await-timeout";
import { NavLink } from "react-router-dom";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");

  const [movies, set_movies] = useState([]);

  const [searchState, set_searchState] = useState("idle");

  const search = async () => {
    console.log("Start searching for:", searchText);
    const queryParam = encodeURIComponent(searchText);

    set_searchState("Searching");

    await Timeout.set(2000);

    const data = await axios.get(
      `https://omdbapi.com/?apikey=30ac077e&s=${queryParam}`
    );

    console.log("Success!", data.data.Search);
    set_movies(data.data.Search);

    set_searchState("Done");
  };

  const displayMovies = movies.map((movieCard) => {
    return (
      <NavLink to={`/discover/${movieCard.imdbID}`}>
        <div>
          <p>{movieCard.Title}</p>
          <p>{movieCard.Year}</p>
          <img
            src={movieCard.Poster}
            alt="Movies poster"
            width="300"
            height="300"
          ></img>
        </div>
      </NavLink>
    );
  });

  return (
    <div>
      <h1>Discover some movies!</h1>
      <h3>{searchState}</h3>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
        {displayMovies}
      </p>
    </div>
  );
}
