import HeroSlide from "../../molecules/HeroSlide/HeroSlide";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Autoplay} from "swiper";

import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";

function HeroCarousel({ randomMovies, handleLikeButton, likedMovies }) {
  return (
    <section className="hero-carousel">
      <Swiper
        style={{
          "--swiper-navigation-color": "#9D0000",
          "--swiper-pagination-color": "#9D0000",
        }}
        slidesPerView={1}
        navigation={true}
        loop={true}
        autoplay
        modules={[Navigation, Autoplay]}
      >
        {randomMovies.map((movies) => (
          <SwiperSlide key={movies.title + movies.year}>
            <HeroSlide
              title={movies.title}
              genres={movies.genres}
              thumbnail={movies.thumbnail}
              description={movies.extract}
              onLike={() => handleLikeButton(movies.title)}
              isLiked={likedMovies.some(
                (likedMovies) => likedMovies.title === movies.title
              )}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroCarousel;
