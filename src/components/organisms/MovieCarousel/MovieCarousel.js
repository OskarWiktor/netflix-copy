import MovieCard from "../../molecules/MovieCard/MovieCard";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";

import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";

function MovieCarousel({ movies, carouselTitle, handleLikeButton, likedMovies }) {
  return (
    <section className="movie-carousel">
      <div className="movie-carousel--title--wrapper">
        <h1 className="movie-carousel--title">{carouselTitle}</h1>
      </div>
      <div className="movie-carousel--wrapper">
        <Swiper
          style={{
            "--swiper-navigation-color": "#9D0000",
            "--swiper-pagination-color": "#9D0000",
          }}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            375: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 6,
            },
            1920: {
              slidesPerView: 8,
            },
          }}
        >
          {movies.map((movies) => (
            <SwiperSlide key={movies.title + movies.year}>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
export default MovieCarousel;
