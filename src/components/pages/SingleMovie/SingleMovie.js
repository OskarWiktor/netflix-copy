import {useParams} from "react-router-dom";

function SingleMovie({movies}) {
  const {formattedTitle} = useParams();

  const movie = movies.find(
    (movie) =>
      movie.title.toLowerCase().replace(/[^a-z0-9-]+/g, "-") === formattedTitle
  );
  const genresWithSpace = movie.genres.join(" ");

  return (
    <div className="single-movie-page--wrapper">
      <div
        className="single-movie-page--thumbnail"
        style={{backgroundImage: `url(${movie.thumbnail})`}}
      >
        <div className="single-movie-page--thumbnail__background">
          <img alt={movie.title} src={movie.thumbnail}></img>
        </div>
      </div>

      <div className="single-movie-page--info__wrapper">
        <div className="single-movie-page--info">
          <p className="single-movie-page--info__genres">{genresWithSpace}</p>
          <h1 className="single-movie-page--info__title">{movie.title}</h1>
          <p className="single-movie-page--info__year">{movie.year}</p>
          <p className="single-movie-page--info__description">
            {movie.extract}
          </p>
        </div>

        <div className="single-movie-page--cast">
          <p className="single-movie-page--cast__title">Cast:</p>
          <div className="single-movie-page--cast__list">
            {movie.cast.map((cast) => (
              <div key={cast} className="cast--list-item">
                <div className="cast--list-item__fake-photo"></div>
                <p className="cast--list-item__name">{cast}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleMovie;
