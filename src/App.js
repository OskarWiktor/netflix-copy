import {Routes, Route} from "react-router-dom";
import Navbar from "./components/organisms/Navbar/Navbar";

import Home from "./components/pages/Home/Home";
import Category from "./components/pages/Category/Category";
import SingleMovie from "./components/pages/SingleMovie/SingleMovie";
import Search from "./components/pages/Search/Search";
import Account from "./components/pages/Account/Account";

import axios from "axios";
import {useEffect, useState} from "react";

function App() {
  const [movies, setMovies] = useState([]);

  // HP
  const [randomMovies, setRandomMovies] = useState([]);
  const [movies2023, setMovies2023] = useState([]);
  const [moviesGenreHorror, setMoviesGenreHorror] = useState([]);
  const [moviesGenreComedy, setMoviesGenreComedy] = useState([]);
  const [moviesGenreThriller, setMoviesGenreThriller] = useState([]);
  const [moviesGenreAnimated, setMoviesGenreAnimated] = useState([]);
  const [moviesGenreFantasy, setMoviesGenreFantasy] = useState([]);
  const [moviesGenreSuperhero, setMoviesGenreSuperhero] = useState([]);
  const [moviesGenreAction, setMoviesGenreAction] = useState([]);

  // Category page
  const [allGenres, setAllGenres] = useState([]);

  // Account page
  const [likedMovies, setLikedMovies] = useState([]);

  // favorite movies array
  const handleLikeButton = (title) => {
    const movie = movies.find((movie) => movie.title === title);

    if (movie) {
      if (likedMovies.some((likedMovie) => likedMovie.title === movie.title)) {
        setLikedMovies((prevLikedMovies) =>
          prevLikedMovies.filter(
            (likedMovie) => likedMovie.title !== movie.title
          )
        );
      } else {
        setLikedMovies((prevLikedMovies) => [movie, ...prevLikedMovies]);
      }
    }
  };

  useEffect(() => {
    axios
      .get("/db/movies.json")
      .then((res) => {
        setMovies(res.data);

        const moviesFrom2023 = res.data.filter((movie) => movie.year === 2023);
        setMovies2023(moviesFrom2023);

        const moviesHorror = res.data.filter((movie) =>
          movie.genres.includes("Horror")
        );
        setMoviesGenreHorror(moviesHorror);

        const moviesComedy = res.data.filter((movie) =>
          movie.genres.includes("Comedy")
        );
        setMoviesGenreComedy(moviesComedy);

        const moviesThriller = res.data.filter((movie) =>
          movie.genres.includes("Thriller")
        );
        setMoviesGenreThriller(moviesThriller);

        const moviesAnimated = res.data.filter((movie) =>
          movie.genres.includes("Animated")
        );
        setMoviesGenreAnimated(moviesAnimated);

        const moviesFantasy = res.data.filter((movie) =>
          movie.genres.includes("Fantasy")
        );
        setMoviesGenreFantasy(moviesFantasy);

        const moviesSuperhero = res.data.filter((movie) =>
          movie.genres.includes("Superhero")
        );
        setMoviesGenreSuperhero(moviesSuperhero);

        const moviesAction = res.data.filter((movie) =>
          movie.genres.includes("Action")
        );
        setMoviesGenreAction(moviesAction);

        const allGenres = Array.from(
          new Set(res.data.flatMap((movie) => movie.genres))
        );
        setAllGenres(allGenres.sort());
      })
      .catch((err) => console.log(err));
  }, []);

  // random movies for hero slider
  useEffect(() => {
    if (movies.length > 0) {
      const shuffledMovies = shuffleArray(movies);
      const selectedMovies = shuffledMovies.slice(0, 5);
      setRandomMovies(selectedMovies);
    }
  }, [movies]);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              randomMovies={randomMovies}
              movies2023={movies2023}
              moviesGenreHorror={moviesGenreHorror}
              moviesGenreComedy={moviesGenreComedy}
              moviesGenreThriller={moviesGenreThriller}
              moviesGenreAnimated={moviesGenreAnimated}
              moviesGenreFantasy={moviesGenreFantasy}
              moviesGenreSuperhero={moviesGenreSuperhero}
              moviesGenreAction={moviesGenreAction}
              likedMovies={likedMovies}
              handleLikeButton={handleLikeButton}
            />
          }
        ></Route>
        <Route
          path="/category"
          element={
            <Category
              movies={movies}
              allGenres={allGenres}
              handleLikeButton={handleLikeButton}
              likedMovies={likedMovies}
            />
          }
        />
        <Route
          path="/search"
          element={
            <Search
              movies={movies}
              handleLikeButton={handleLikeButton}
              likedMovies={likedMovies}
            />
          }
        />
        <Route
          path="/account"
          element={
            <Account
              movies={movies}
              handleLikeButton={handleLikeButton}
              likedMovies={likedMovies}
            />
          }
        />
        <Route
          path="/:formattedTitle"
          element={
            <SingleMovie
              movies={movies}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
