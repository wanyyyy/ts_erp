/* eslint-disable */
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "./MovieList";
import Header from "./Header";
import axios from "axios";
import { NowType } from "../types/NowPlayingType";


const Home = () => {

    const [ nowMovies, setNowMovies ] = useState<NowType[]>();

    useEffect(()=> {
        axiosTest();
    },[]);

    const axiosTest = async () => {
        const res = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=299eb487c2f258d28174138c9debb714&language=ko-KR"
        )
        return (setNowMovies(res.data.results)
        ,console.log(res.data.results))
    }

    return (
    <>
        <Header/>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={2}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        nowMovies && nowMovies.map(movie => (
                            <Link style={{textDecoration:"none", color:"white"}} to={`/movie/${movie.id}`}>
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="post" />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average : ""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList/>
            </div>
        </>
    )
}

export default Home