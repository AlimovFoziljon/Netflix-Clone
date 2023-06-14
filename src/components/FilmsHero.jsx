import axios from '../api/axios'
import request from '../api/api';
import { useEffect, useState } from 'react';

const FilmsHero = () => {
    const [movie, setMovie] = useState()

    useEffect(() =>{
        const fetchMovie = async () => {
            const resData = await axios.get(request.fetchNetflixOriginals)
            setMovie(
                resData.data.results[
                    Math.floor(Math.random() * resData?.data?.results?.length)
                ]
            );
        };

        fetchMovie()
    }, [])

    return (
        <header style={{
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        }}>
            <div className="films-hero">
                <div className="hero-content">
                    <h1>{movie?.original_name}</h1>
                    <div className='buttons'>
                        <button className='btn'>Play</button>
                        <button className='btn'>My List</button>
                    </div>
                    <p>{movie?.overview}</p>
                </div>
            </div>
        </header>
    );
}

export default FilmsHero;