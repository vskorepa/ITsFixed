import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import { Text } from "@nextui-org/react";
import TopNav from "../components/Nav/topNav";
import AuthProtectedWrapper from "../components/protected/UserProtected";
const Home: NextPage = () => {
    const { t } = useTranslation("common");

    return (
        <AuthProtectedWrapper role="operator">
            <TopNav />
            <div className="text-center">
                <Text className="text-sandy font-bold text-4xl" h1>
                    {t("aboutus")}
                </Text>
            </div>
        </AuthProtectedWrapper>
    );
};

export default Home;
