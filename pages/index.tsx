import type { NextPage } from "next";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import {
    Container,
    Row,
    Col,
    Link as NextUiLink,
    Text,
} from "@nextui-org/react";
import Link from "next/link";
import PageHead from "../components/Head/";
import Foot from "../components/Foot";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import TopNav from "../components/Nav/topNav";
import ProtectedWrapper from "../components/protected";
const Home: NextPage = () => {
    const { t } = useTranslation("common");
    const [session, setSession] = useState(null);
    useEffect(() => {
        setSession(supabase.auth.session());
        supabase.auth.onAuthStateChange((_event: any, session: any) => {
            setSession(session);
        });
    }, []);
    return (
        <ProtectedWrapper>
            <Container fluid={true}>
                <PageHead />
                <TopNav />
                <Row>
                    <Container>
                        <h1>{t("greeting")}</h1>
                        {!session ? (
                            <Link href="./login">
                                <NextUiLink
                                    block
                                    color="success"
                                    href="./login"
                                >
                                    {t("loginRedirect")}
                                </NextUiLink>
                            </Link>
                        ) : (
                            <Text>You are logged in as {session.user.id} </Text>
                        )}
                    </Container>
                </Row>
                <Foot />
            </Container>
        </ProtectedWrapper>
    );
};

export default Home;
