import { Container, Loading, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import useUser from "../../hooks/useUser";

const ProtectedLoginWrapper: React.FC = ({ children }: any) => {
    const router = useRouter();

    const { isLoading, isError, error } = useUser();

    if (isLoading) {
        return (
            <Container className="h-screen" fluid justify="center">
                <Row justify="center">
                    <Loading color="success" size={200} />
                </Row>
            </Container>
        );
    }

    if (!isError) {
        router.push("/profile");
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
export default ProtectedLoginWrapper;
