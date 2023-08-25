import MovieCard from "../../molecules/MovieCard/MovieCard";

function MovieGrid({ movies, selectedGenres, handleLikeButton, likedMovies }) {
  return (
    <div className="movie-grid">
      <h1 className="movie-grid--title">
        {selectedGenres ? `${selectedGenres} Movies` : `All Movies`}
      </h1>
      <div className="movie-grid--wrapper">
        {movies.map((movies) => (
          <MovieCard
            key={movies.title + movies.year}
            title={movies.title}
            year={movies.year}
            genre={movies.genres}
            thumbnail={movies.thumbnail}
            onLike={() => handleLikeButton(movies.title)}
            isLiked={likedMovies.some(
              (likedMovies) => likedMovies.title === movies.title
            )}
          />
        ))}
      </div>
    </div>
  );
}
export default MovieGrid;
