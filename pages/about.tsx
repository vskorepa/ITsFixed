import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import { Text } from "@nextui-org/react";
import TopNav from "../components/Nav/topNav";
import ProtectedWrapper from "../components/protected/protected";
const Home: NextPage = () => {
    const { t } = useTranslation("common");

    return (
        <ProtectedWrapper>
            <TopNav />
            <div className="text-center">
                <Text className="text-sandy font-bold text-4xl" h1>
                    {t("greeting")}
                </Text>
            </div>
        </ProtectedWrapper>
    );
};

export default Home;
