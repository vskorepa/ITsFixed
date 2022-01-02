import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import { Avatar, Container, Loading, Row, Text } from "@nextui-org/react";
import TopNav from "../components/Nav/topNav";
import AuthProtectedWrapper from "../components/protected/UserProtected";
import useUser from "../hooks/useUser";

const Home: NextPage = () => {
    const { t } = useTranslation("common");
    const { data, isLoading } = useUser();

    return (
        <AuthProtectedWrapper role="user">
            <TopNav />
            <div className="h-85vh w-full flex flex-nowrap">
                {isLoading ? (
                    <Loading />
                ) : (
                    <div className="w-1/3 ">
                        <div className="flex h-1/4 w-full justify-center items-center">
                            <Avatar
                                src="/avatar1.png"
                                color="#4F98CA"
                                bordered
                                size={250}
                            />
                        </div>
                        <div className="w-full h-3/4 flex text-2xl flex-wrap gap-3">
                            <div className="flex h-10 justify-evenly w-full">
                                {/* <h2>{data.first_name}</h2>
                                <h2>{data.last_name}</h2> */}
                            </div>
                            <div className="flex flex-col items-center w-full">
                                <h2>{data?.roledata.role}</h2>
                                <h2>{data?.data.email}</h2>
                            </div>
                        </div>
                    </div>
                )}

                <div className="w-2/3 "></div>
            </div>
        </AuthProtectedWrapper>
    );
};

export default Home;
