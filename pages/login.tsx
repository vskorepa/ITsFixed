import { Container } from '@nextui-org/react'
import React from 'react'
import Foot from '../components/Foot'
import Login from '../components/login/login'

const loginPage = () => {
    return (
        <Container fluid justify="center">
            <Login/>
            <Foot/>
        </Container>
    )
}

export default loginPage
