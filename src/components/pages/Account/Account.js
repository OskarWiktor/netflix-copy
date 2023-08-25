import MovieCard from "../../molecules/MovieCard/MovieCard";

function Account({likedMovies, handleLikeButton}) {
  console.log(likedMovies);

  return (
    <div className="account">
      <h1 className="account--title">Favorite Movies</h1>
      <div className="account--movie-grid">
        {likedMovies.map((movies) => (
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

export default Account;
