import MovieCarousel from "../../organisms/MovieCarousel/MovieCarousel";
import HeroCarousel from "../../organisms/HeroCarousel/HeroCarousel";

function Home({
  randomMovies,
  movies2023,
  moviesGenreHorror,
  moviesGenreComedy,
  moviesGenreThriller,
  moviesGenreAnimated,
  moviesGenreFantasy,
  moviesGenreSuperhero,
  moviesGenreAction,
  handleLikeButton,
  likedMovies,
}) {
  return (
    <div className="App">
      <HeroCarousel
        randomMovies={randomMovies}
        handleLikeButton={handleLikeButton}
        likedMovies={likedMovies}
      />
      <MovieCarousel
        carouselTitle={"Movies from 2023"}
        movies={movies2023}
        handleLikeButton={handleLikeButton}
        likedMovies={likedMovies}
      />
      <MovieCarousel
        carouselTitle={"Horror"}
        movies={moviesGenreHorror}
        handleLikeButton={handleLikeButton}
        likedMovies={likedMovies}
      />
      <MovieCarousel
        carouselTitle={"Comedy"}
        movies={moviesGenreComedy}
        handleLikeButton={handleLikeButton}
        likedMovies={likedMovies}
      />
      <MovieCarousel
        carouselTitle={"Thriller"}
        movies={moviesGenreThriller}
        handleLikeButton={handleLikeButton}
        likedMovies={likedMovies}
      />
      <MovieCarousel
        carouselTitle={"Animated"}
        movies={moviesGenreAnimated}
        handleLikeButton={handleLikeButton}
        likedMovies={likedMovies}
      />
      <MovieCarousel
        carouselTitle={"Fantasy"}
        movies={moviesGenreFantasy}
        handleLikeButton={handleLikeButton}
        likedMovies={likedMovies}
      />
      <MovieCarousel
        carouselTitle={"Superhero"}
        movies={moviesGenreSuperhero}
        handleLikeButton={handleLikeButton}
        likedMovies={likedMovies}
      />
      <MovieCarousel
        carouselTitle={"Action"}
        movies={moviesGenreAction}
        handleLikeButton={handleLikeButton}
        likedMovies={likedMovies}
      />
    </div>
  );
}

export default Home;
