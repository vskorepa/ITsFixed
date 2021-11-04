import {
    Button,
    Col,
    Container,
    Row,
    Spacer,
    Text,
    Link as NextUiLink,
} from "@nextui-org/react";
import React, { useState } from "react";
import Foot from "../components/Foot";
import Login from "../components/login/login";
import TopNav from "../components/Nav/topNav";
import ProtectedLoginWrapper from "../components/protected/protectedLogin";

const loginPage = () => {
    return (
        <ProtectedLoginWrapper>
            <div className="h-screen ">
                <Login />
            </div>
        </ProtectedLoginWrapper>
    );
};

export default loginPage;
