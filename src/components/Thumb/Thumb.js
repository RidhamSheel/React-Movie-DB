import React from 'react'
import { Link } from 'react-router-dom'
//Styles
import { Thumbnail } from './Thumb.style'

export const Thumb = ({image, movieId, clickable}) => (
    <div>
        {clickable? (
            <Link to = {`/${movieId}`}>
                <Thumbnail src={image} alt="movie-thumb"/>
            </Link>
        ) : (
            <Thumbnail src={image} alt="movie-thumb"/>
        )}
    </div>
)


