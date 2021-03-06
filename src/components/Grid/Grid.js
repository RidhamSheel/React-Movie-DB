import React from 'react'

//Styles
import { Wrapper, Content } from './Grid.style'

export const Grid = ({header, children}) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
)