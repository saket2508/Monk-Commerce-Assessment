import React, { useState, useEffect } from 'react'
import { useParams, useLocation, withRouter, Link } from 'react-router-dom'
import { Container, 
        ImageGridContainer, 
        Heading, 
        NavigationMenu, 
        MainContainer, 
        GridImage } from '../styles'
import Error from './Error'
import Loading from './Loading'


const GalleryPage = () => {
    // album id for getting all the pictures
    let location  = useLocation()
    const { aid } = useParams()
    const [ userInfo, setUserInfo ] = useState({})
    const [ error, setError ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    const [ albumImages, setAlbumImages ] = useState([])

    useEffect(() => {
        if(error){
            return
        }
        async function getImages(){
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${aid}/photos`)
                const photos = await res.json()
                setAlbumImages(photos)
                setLoading(false)
            } catch (err) {
                console.log(err.message)
                setError(true)
                setLoading(false)
            }
        }

        async function getImagesAndUserInfo(){
            const responses = await Promise.all([
                fetch(`https://jsonplaceholder.typicode.com/albums/${aid}`)
                    .then(res =>{
                        if(!res.ok){
                            throw Error
                        }
                        else
                            return res.json()
                    })
                    .then(async(data) => {
                        let id = data.userId
                        let userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
                        return {...data, ...{name: userRes.name}}
                    }).catch((err) => {
                        setError(true)
                        setLoading(false)
                        console.log('error')
                        console.log(err.message)
                        return
                    }),
                fetch(`https://jsonplaceholder.typicode.com/albums/${aid}/photos`)
                    .then(res => {
                        if(!res.ok){
                            throw Error
                        }
                        else
                            return res.json()
                    })
                    .catch((err) => {
                        setError(true)
                        setLoading(false)
                        console.log(err.message)
                        return
                    })
            ])
            setAlbumImages(responses[1])
            setUserInfo(responses[0])
            setLoading(false)
        }
        if(location && location.state){
            getImages()
            setUserInfo({name: location.state.username, title: location.state.title, userId: location.state.id, id: aid })
        } else {
            getImagesAndUserInfo()
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
           <Heading>Pictures in this Album</Heading>
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
                <Link
                    to = {`/albums/${userInfo.userId}`}
                    style = {{ color: 'gray' }}
                >
                        {userInfo.name}
                </Link>
                <span style = {{ marginLeft: '0.4rem', marginRight: '0.4rem' }}>
                   {'>'}
                </span>
                <span>{userInfo.title}</span>
            </NavigationMenu>
           <MainContainer>
                <ImageGridContainer>
                    {albumImages && albumImages.map((obj, id) => {
                        return(
                            <GridImage key={id} src={obj.url}/>
                        )
                    })}
                </ImageGridContainer>
           </MainContainer>
       </Container>
    )
}

export default withRouter(GalleryPage)
