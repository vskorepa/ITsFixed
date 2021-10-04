import type { NextPage } from "next";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { Container, Row, Col, Link as NextUiLink } from "@nextui-org/react";
import  Link  from "next/link";
import PageHead from "../components/Head/";
import Foot from "../components/Foot";

const Home: NextPage = () => {
	const router = useRouter();
	const {t,lang} = useTranslation("common");


	return (
		<Container>
			<PageHead/>
			<Row>
				<Container>
					<h1>{t("greeting")}</h1>
				</Container>
			</Row>
			<Foot/>
		</Container>
	);
};

export default Home;
