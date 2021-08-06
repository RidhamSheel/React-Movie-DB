import React from 'react'
import { useParams } from 'react-router-dom'
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'

//Components
import { Grid } from './Grid/Grid'
import Spinner from './Spinner/Spinner'
import { BreadCrumb } from './BreadCrumb/BreadCrumb'
import { MovieInfo } from './MovieInfo/MovieInfo'
import { MovieInfoBar } from './MovieInfoBar/MovieInfoBar'
import { Actor } from './Actor/Actor'

//Hook
import { useMovieFetch } from '../hooks/useMovieFetch'

//Image
import NoImage from "../images/no_image.jpg";

export const Movie = () => {
    const {movieId} = useParams();
    const {state, loading, error} = useMovieFetch(movieId);

    if(loading) return <Spinner />;
    if(error) return <div>Something Went Wrong...</div>;
    console.log(state);

    return (
        <>
            <BreadCrumb movieTitle = {state.original_title} />
            <MovieInfo movie = {state}/>
            <MovieInfoBar time = {state.runtime} budget = {state.budget} revenue = {state.revenue} />
            <Grid header = "Actors">
                {state.actors.map(actor => (
                    <Actor 
                        key = {actor.credit_id}
                        name = {actor.name}
                        character = {actor.character}
                        imageurl = {actor.profile_path? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage}
                    />
                ))}
            </Grid>
        </>
    )
}
