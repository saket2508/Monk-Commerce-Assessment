import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Heading, MainContainer, ImageGridContainer, CardWrapper, AlbumCardList } from '../styles'

export default function AlbumPage() {
    // user id for getting the list of albums
    const { uid } = useParams()
    const [ userAlbums, setUserAlbums ] = useState([])

    useEffect(() => {
        async function getAlbums(){
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${uid}/albums`)
            const albums = await res.json()
            setUserAlbums(albums)
        }
        getAlbums()
    }, [])

    return (
        <Container>
            <Heading>Available Albums</Heading>
            <MainContainer>
                <ImageGridContainer>
                    {userAlbums.map((obj, id) => {
                        return(
                            <CardWrapper key = {id}>
                            <AlbumCardList>
                                <li>{id+1}</li>
                                <li>{obj.title}</li>
                                <li>
                                    <Link style={{
                                        color: '#7c4dff',
                                        fontWeight: 400
                                    }} to={`/gallery/${obj.id}`}>
                                        SEE IMAGES
                                    </Link>
                                </li>
                            </AlbumCardList>
                        </CardWrapper>
                        )
                    })}
                </ImageGridContainer>
            </MainContainer>
        </Container>
    )
}
