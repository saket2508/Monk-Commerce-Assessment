import React from 'react'
import Loader from "react-loader-spinner";
import { CenterContainer } from '../styles';

export default function Loading() {
    return (
        <CenterContainer>
            <Loader type="TailSpin" color="#808080" height={60} width={60} timeout={3000}/>
        </CenterContainer>
    )
}
