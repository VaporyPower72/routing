import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import NavBar from "./components/NavBar";
import MoviePage from "./pages/MoviePage";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/discover/:imdb_id" component={MoviePage} />
        <Route path="/discover/" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}
