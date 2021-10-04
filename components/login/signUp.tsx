import { Container, Row, Input } from '@nextui-org/react'
import React from 'react'

const SignUp = () => {
    return (
        <Container wrap="wrap" fluid>
        <Row>
            <Input rounded bordered color="primary" label="Email" placeholder="example@email.com"></Input>
        </Row>
        <Row>
            <Input rounded bordered color="primary" label="Password" type="password"></Input>        
        </Row>
        </Container>
        
    )
}

export default SignUp
