import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, 
    ImageGridContainer, 
    Heading, 
    IconContainer,
    Icon,
    SearchContainer, 
    SearchBar, 
    CardWrapper, 
    CustomLink,
    UserCardList } from '../styles';


export default function HomePage() {

    const [ dataUsers, setDataUsers ] = useState([])

    useEffect(() => {
        // get the list of users
        async function getUsers(){
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const listUsers = await res.json()
            setDataUsers(listUsers)
        }
        getUsers()
    }, [])    


    return (
        <Container>
            <Heading>
                List of all Users
            </Heading>
            <SearchContainer>
                <IconContainer>
                    <Icon>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </Icon>
                </IconContainer>
                <SearchBar
                    placeholder="Search any user"
                />
            </SearchContainer>
            <ImageGridContainer>
                {dataUsers.map((obj, id) => {
                    return(
                        <CardWrapper key = {id}>
                            <UserCardList>
                                <li>{obj.id}</li>
                                <li>{obj.name}</li>
                                <li>{obj.username}</li>
                                <li>{obj.email}</li>
                                <li>{obj.phone}</li>
                                <li>{obj.company.name}</li>
                                <li>
                                    <Link style={{
                                        color: '#7c4dff',
                                        fontWeight: 400
                                    }} to={`/albums/${obj.id}`}>
                                        SEE ALBUMS
                                    </Link>
                                </li>
                            </UserCardList>
                        </CardWrapper>
                    )
                })}
            </ImageGridContainer>
        </Container>
    )
}
