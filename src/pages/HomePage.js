import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Container, 
    ItemGridContainer, 
    Heading, 
    IconContainer,
    Icon,
    SearchContainer, 
    SearchBar, 
    CardWrapper, 
    UserCardList } from '../styles';
import Error from './Error';
import Loading from './Loading';


const HomePage = () => {

    const [ dataUsers, setDataUsers ] = useState([])
    const [ error, setError ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    const [ searchTerm, setSearchTerm ] = useState('')

    useEffect(() => {
        if(error){
            return
        }
        // get the list of users
        async function getUsers(){
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users')
                if(!res.ok){
                    throw Error
                }
                const listUsers = await res.json()
                setDataUsers(listUsers)
                setLoading(false)
            } catch (err) {
                setError(true)
                setLoading(false)
                console.log(err.message)
            }
        }
        getUsers()
    }, [error])    

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
                    value = {searchTerm}
                    onChange = {e => setSearchTerm(e.target.value)}
                />
            </SearchContainer>
            <ItemGridContainer>
                {dataUsers.
                    filter(object => object.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((obj, id) => {
                    return(
                        <CardWrapper key = {id}>
                            <UserCardList>
                                <li>{obj.id}</li>
                                <li>
                                    <Link style = {{
                                        color: 'gray',
                                        fontWeight: 500
                                    }} to={{pathname: `/albums/${obj.id}`, state: { username: obj.name }}}>
                                        {obj.name}
                                    </Link>
                                </li>
                                <li>{obj.username}</li>
                                <li>{obj.email}</li>
                                <li>{obj.phone}</li>
                                <li>{obj.company.name}</li>
                            </UserCardList>
                        </CardWrapper>
                    )
                })}
            </ItemGridContainer>
        </Container>
    )
}

export default withRouter(HomePage)