import {useState} from "react";
import MovieCard from "../../molecules/MovieCard/MovieCard";

function Search({movies, likedMovies, handleLikeButton}) {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movies) =>
    movies.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="search">
      <div className="search--box">
        <input
          className="search--input"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="search--movie-grid">
        {filteredMovies.map((movies) => (
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

export default Search;
