import {
    Col,
    Container,
    Grid,
    Link as NextUiLink,
    Row,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
const TopNav: React.FC = () => {
    return (
        <Grid.Container gap={1} justify="flex-end">
            <Grid justify="space-evenly">
                <Link href="/">
                    <NextUiLink block>Home</NextUiLink>
                </Link>
            </Grid>
            <Grid justify="space-evenly">
                <Link href="/login">
                    <NextUiLink block>Login</NextUiLink>
                </Link>
            </Grid>
            <Grid justify="space-evenly">
                <Link href="/tickets">
                    <NextUiLink block>Tickets</NextUiLink>
                </Link>
            </Grid>
        </Grid.Container>
    );
};

export default TopNav;
