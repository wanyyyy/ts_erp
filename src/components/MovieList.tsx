/* eslint-disable */
import axios from "axios";
import React, {useEffect, useState} from "react";
import { NowType } from "../types/NowPlayingType";
import Cards from "./Card";


const MovieList = () => {

    const [movieList, setMovieList] = useState<NowType[]>()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=299eb487c2f258d28174138c9debb714&language=ko-KR"
        )
        return (setMovieList(res.data.results)
        ,console.log(res.data.results))
    }
    
    return (
        <div className="movie__list">
            <h2 className="list__title">{("Now Playing").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList && movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList