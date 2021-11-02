import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, ImageGridContainer, Heading, MainContainer, GridImage } from '../styles'

export default function GalleryPage() {
    // album id for getting all the pictures
    const { aid } = useParams()
    const [ albumImages, setAlbumImages ] = useState([])

    useEffect(() => {
        async function getImages(){
            const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${aid}/photos`)
            const photos = await res.json()
            console.log(photos)
            setAlbumImages(photos)
        }
        getImages()
    }, [])


    return (
       <Container>
           <Heading>Pictures in this Album</Heading>
           <MainContainer>
                <ImageGridContainer>
                    {albumImages.map((obj, id) => {
                        return(
                            <GridImage key={id} src={obj.url}/>
                        )
                    })}
                </ImageGridContainer>
           </MainContainer>
       </Container>
    )
}
