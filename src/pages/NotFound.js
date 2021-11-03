import React from 'react'
import { AssetImage, CenterContainer, ErrorHeading, ErrorText } from '../styles'

export default function NotFound() {
    return (
        <CenterContainer>
            <AssetImage src='/assets/empty_img.png'/>
            <ErrorHeading>404</ErrorHeading>
            <ErrorText>The page you were looking for doesn't exist.</ErrorText>
        </CenterContainer>
    )
}
