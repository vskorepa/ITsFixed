import type { NextPage } from "next";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { Container, Row, Text } from "@nextui-org/react";
import PageHead from "../components/Head/";
import Foot from "../components/Foot";
import TopNav from "../components/Nav/topNav";
import ProtectedWrapper from "../components/protected/protected";
import TicketList from "../components/Tickets/TicketList";
const Home: NextPage = () => {
    const { t } = useTranslation("common");

    return (
        <ProtectedWrapper>
            <div className="text-center">
                <Text className="text-sandy font-bold text-4xl" h1>
                    {t("greeting")}
                </Text>
            </div>
        </ProtectedWrapper>
    );
};

export default Home;
