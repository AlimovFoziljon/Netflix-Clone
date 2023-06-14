import axios from "../api/axios";
import { useEffect, useState } from "react";
import request from "../api/api";
import YoutubePlayer from 'react-youtube';
import { Tooltip } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const FilmsCategory = ({ title, movie_request, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        const fetchDatas = async () => {
            const responseData = await axios.get(movie_request)
            setMovies(responseData?.data?.results);
        }
        fetchDatas();
    }, [movie_request])

    const fetchMovieTrailer = async (movie) => {
        await axios.get("/movie/" + movie?.id.toString() + request.trailerQuery)
            .then((responseData) => {
                setTrailerUrl(responseData.data.results[0].key)
            })
            .catch((error) => console.error(error))
    }

    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl("")
        } else {
            fetchMovieTrailer(movie)
        }
    }

    const options = {
        playerVars: {
            autoplay: 1,
        },
    }

    return (
        <div className='films-category'>
            <h3>{title}</h3>
            <div className='films-trailer'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper"
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <Tooltip arrow title={movie?.original_name || movie?.original_title} key={movie?.id}>
                            <img src={
                                `https://image.tmdb.org/t/p/original/${
                                    isLargeRow ? movie?.poster_path : movie?.backdrop_path
                                }`}
                                alt={movie?.original_title}
                                onClick={() => handleClick(movie)}
                                loading="lazy"
                                className={`film-image ${isLargeRow && "film-poster-large"}`}
                                key={movie?.id}
                            />
                        </Tooltip>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
            {trailerUrl && <YoutubePlayer id='video-trailer' videoId={trailerUrl} options={options} />}
        </div>
    );
};


export default FilmsCategory;