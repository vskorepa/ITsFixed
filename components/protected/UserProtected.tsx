import { Container, Loading, Row } from "@nextui-org/react";
import { useRouter } from "next/router";
import useUser from "../../hooks/useUser";

const ProtectedWrapper: React.FC = ({ children }: any) => {
    const router = useRouter();
    const { isLoading, isError } = useUser();
    if (isLoading) {
        return (
            <Container
                className="h-screen dark:bg-black"
                fluid
                justify="center"
            >
                <Row justify="center">
                    <Loading color="success" size={200} />
                </Row>
            </Container>
        );
    }

    if (isError) {
        router.push("/login");
        return (
            <Container fluid justify="center">
                <Row justify="center">
                    <Loading color="success" size={200} />
                </Row>
            </Container>
        );
    }

    return <div>{children}</div>;
};
export default ProtectedWrapper;
