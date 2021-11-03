import React from 'react'
import { CenterContainer, ErrorHeading, ErrorText, AssetImage } from '../styles'

export default function Error() {
    return(
        <CenterContainer>
            <AssetImage src='/assets/not_found_img.png'/>
            <ErrorHeading>Error :(</ErrorHeading>
            <ErrorText>Sorry, there seems to be a problem with the server.</ErrorText>
        </CenterContainer>
    )
}
