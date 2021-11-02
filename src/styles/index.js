import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    padding: 1rem 1.5rem;
`

export const Heading = styled.h1`
    margin-top: 2rem;
    font-size: 1.6rem;
    line-height: 1.2;
    font-weight: 400;
`
export const CustomLink = styled.a`
    color: #7c4dff;
    font-weight: 400;
`

export const IconContainer = styled.div`
    position: absolute;
    left: 0.5rem;
    top: 0.8rem;
    color: gray;
`
export const Icon = styled.div`
    width: 1rem;
    height: 1.5rem;
`

export const SearchContainer = styled.div`
    margi-top: 1.2rem;
    display: inline-block;
    position: relative;
    width: 100%;
`

export const SearchBar = styled.input`
@media only screen and (max-width: 350px) {
    min-width: 250px;
    display: block;
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5;
    margin: 0rem;
    padding: 0.6rem 0rem 0.6rem 1.8rem;
    opacity: 1;
    color: black;
    background-clip: padding-box;
    border: none;
    background-color: rgba(229,231,235,1);
    border-width: 1px;
    border-radius: 9999px;
    &:focus, &:active {
        outline: none;
    }
}
@media only screen and (min-width: 350px) {
    min-width: 300px;
    display: block;
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5;
    margin: 0rem;
    padding: 0.6rem 0rem 0.6rem 1.8rem;
    opacity: 1;
    color: black;
    background-clip: padding-box;
    border: none;
    background-color: rgba(229,231,235,1);
    border-width: 1px;
    border-radius: 9999px;
    &:focus, &:active {
        outline: none;
    }
}
`

export const MainContainer = styled.div`
    margin: 2rem 0.2rem;
    max-width: 100%;
`


export const ALbumListItem = styled.li`
    margin: 0.8rem 0rem;
    font-size: 1rem;
    font-weight: 400;
`

export const ImageGridContainer = styled.div`
        display: grid;
        max-width: 100%;
        grid-template-columns: repeat(4, 1fr);
        margin: 2rem 0.2rem;
        @media only screen and (max-width: 500px) {
            display: grid;
            max-width: 100%;
            grid-template-columns: repeat(1, 1fr);
            margin: 2rem 0.2rem;
        }
        @media only screen and (min-width: 500px) {
            display: grid;
            max-width: 100%;
            grid-template-columns: repeat(2, 1fr);
            margin: 2rem 0.2rem;
        }
        @media only screen and (min-width: 900px){
            display: grid;
            max-width: 100%;
            grid-template-columns: repeat(4, 1fr);
            margin: 2rem 0.2rem;
        }
`

export const CardWrapper = styled.div`
    overflow: hidden;
    padding: 0.7rem;
    max-width: 300px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    font-weight: 400;
    letter-spacing: 0.1rem;
    display: flex;
    justify-content: center;
    margin: 0.4rem;
`

export const AlbumCardList = styled.ul`
    text-align: center;
    list-style-type: none;
    margin: 0.2rem 0rem;
    padding: 0;
`

export const UserCardList = styled.ul`
    text-align: center;
    list-style-type: none;
    margin: 0rem 0rem;
    padding: 0;
`
export const GridImage = styled.img`
    @media only screen and (max-width: 350px) {
        max-width: 250px;
        margin: 0.4rem;
        border-radius: 5px;
    }
    @media only screen and (min-width: 350px) {
        max-width: 300px;
        margin: 0.4rem;
        border-radius: 5px;
    }
    @media only screen and (min-width: 768px){
        max-width: 250px;
        margin: 0.4rem;
        border-radius: 5px;
    }
`