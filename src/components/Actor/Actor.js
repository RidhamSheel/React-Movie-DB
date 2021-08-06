import React from 'react'

//Styles
import { Wrapper, Image } from './Actor.style'

export const Actor = ({name, character, imageurl}) => (
    <Wrapper>
        <Image src = {imageurl} alt = "actor-img" />
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
)
