import React, { useState, useEffect } from 'react'
import { useParams, useLocation, withRouter, Link } from 'react-router-dom'
import { Container, 
        Heading, 
        MainContainer, 
        NavigationMenu,
        ItemGridContainer, 
        CardWrapper, 
        AlbumCardList } from '../styles'
import Error from './Error'
import Loading from './Loading';

const AlbumPage = () => {
    // user id for getting the list of albums
    let location = useLocation()
    const { uid } = useParams()
    const [ error, setError ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    const [ username, setUsername ] = useState()
    const [ userAlbums, setUserAlbums ] = useState([])

    useEffect(() => {
        if(error){
            return
        }
        async function getAlbums(){
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${uid}/albums`)
                if(!res.ok){
                    throw Error   
                }
                const albums = await res.json()
                setUserAlbums(albums)
                setLoading(false)
            } catch (err) {
                setError(true)
                setLoading(false)
                console.log(err.message)
            }
        }
        async function getAlbumsAndUserInfo(){
            try {
                const response = await Promise.all([
                    fetch(`https://jsonplaceholder.typicode.com/users/${uid}`),
                    fetch(`https://jsonplaceholder.typicode.com/users/${uid}/albums`)
                ])
                if(!response[0].ok || !response[1].ok){
                    throw Error
                }
                let resUser = await response[0].json()
                let resAlbum = await response[1].json()
                let user_name = resUser.name
                setUsername(user_name)
                setUserAlbums(resAlbum)
                setLoading(false)
            } catch (err) {
                setError(true)
                setLoading(false)
                console.log(err.message)
            }
        }
        if(location && location.state){
            setUsername(location.state.username)
            getAlbums()
        } else {
            getAlbumsAndUserInfo()
        }
    }, [location.state, error])

    if(error){
        return(
            <Error/>
        )
    }

    if(loading){
        return(
            <Loading/>
        )
    }

    return (
        <Container>
            <Heading>Available Albums</Heading>
            <NavigationMenu>
                <Link
                    to = '/users'
                    style = {{ color: 'gray' }}
                >
                        Users
                </Link>
                <span style = {{ marginLeft: '0.4rem', marginRight: '0.4rem' }}>
                   {'>'}
                </span>
                <span>{username}</span>
            </NavigationMenu>
            <MainContainer>
                <ItemGridContainer>
                    {userAlbums.map((obj, id) => {
                        return(
                            <CardWrapper key = {id}>
                            <AlbumCardList>
                                <li>{id+1}</li>
                                <li>
                                    <Link style={{
                                        color: 'gray',
                                        fontWeight: 500
                                    }} to={{pathname : `/gallery/${obj.id}`, state: { username: username, title: obj.title, id: uid }}}>
                                        {obj.title}
                                    </Link>
                                </li>
                            </AlbumCardList>
                        </CardWrapper>
                        )
                    })}
                </ItemGridContainer>
            </MainContainer>
        </Container>
    )
}

export default withRouter(AlbumPage)