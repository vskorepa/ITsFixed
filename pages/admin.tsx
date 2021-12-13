import type { NextPage } from "next";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { Container, Row, Text } from "@nextui-org/react";
import PageHead from "../components/Head/";
import Foot from "../components/Foot";
import TopNav from "../components/Nav/topNav";
import AuthProtectedWrapper from "../components/protected/UserProtected";
import TicketList from "../components/Tickets/TicketList";
const Home: NextPage = () => {
    const { t } = useTranslation("common");

    return (
        <AuthProtectedWrapper role="admin">
            <TopNav />
            <div className="text-center">
                <Text className="text-sandy font-bold text-4xl" h1>
                    ADMIN Page
                </Text>
            </div>
        </AuthProtectedWrapper>
    );
};

export default Home;
