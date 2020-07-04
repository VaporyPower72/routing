import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

export default function MoviePage() {
  const params = useParams();

  const [movieData, set_movieData] = useState({});

  const fetchData = async () => {
    const response = await Axios.get(
      `https://omdbapi.com/?i=${params.imdb_id}&apikey=30ac077e`
    );
    set_movieData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [params]);

  return (
    <div>
      <h1>Details page({params.imdb_id})</h1>
      <p>{movieData.Title}</p>
      <p>{movieData.Genre}</p>
      <p>{movieData.Language}</p>
      <p>{movieData.Runtime}</p>
      <p>{movieData.imdbRating}</p>
      <img src={movieData.Poster} />
    </div>
  );
}
