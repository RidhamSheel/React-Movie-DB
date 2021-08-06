import React from 'react'

import { Wrapper } from './LoadButton.style'

export const LoadButton = ({text, callback}) => (
    <Wrapper type = "button" onClick = {callback}>
        {text}
    </Wrapper>
)

