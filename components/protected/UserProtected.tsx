import { Container, Loading, Row } from "@nextui-org/react";
import { useRouter } from "next/router";
import useUser from "../../hooks/useUser";

type AuthProtectedWrapperProps = {
    role: string;
    childredn?: any;
};

const AuthProtectedWrapper: React.FC<AuthProtectedWrapperProps> = ({
    children,
    role,
}) => {
    const router = useRouter();
    const { data, isLoading, isError } = useUser();
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
        router.push("/auth/login");
        return (
            <Container fluid justify="center">
                <Row justify="center">
                    <Loading color="success" size={200} />
                </Row>
            </Container>
        );
    }

    if (role === "operator") {
        if (
            data?.roledata.role !== "operator" &&
            data?.roledata.role !== "admin"
        ) {
            router.push("/");
            return (
                <Container fluid justify="center">
                    <Row justify="center">
                        <Loading color="success" size={200} />
                    </Row>
                </Container>
            );
        }
    }
    if (role === "admin") {
        if (data?.roledata.role !== "admin") {
            router.push("/");
            return (
                <Container fluid justify="center">
                    <Row justify="center">
                        <Loading color="success" size={200} />
                    </Row>
                </Container>
            );
        }
    }

    return <div>{children}</div>;
};
export default AuthProtectedWrapper;
