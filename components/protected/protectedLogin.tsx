import React from 'react'
import { Container, Loading, Row } from '@nextui-org/react'
import { useRouter } from 'next/router'
import useUser from '../../hooks/useUser'

const ProtectedLoginWrapper: React.FC = (children: React.ReactNode) => {
    const router = useRouter()

    const { isLoading, isError } = useUser()

    if (isLoading) {
        return (
            <Container className="h-screen" fluid justify="center">
                <Row justify="center">
                    <Loading color="success" size={200} />
                </Row>
            </Container>
        )
    }

    if (!isError) {
        router.push('/profile')
        return (
            <Container fluid justify="center">
                <Row justify="center">
                    <Loading color="success" size={200} />
                </Row>
            </Container>
        )
    }

    return <div>{children}</div>
}
export default ProtectedLoginWrapper
