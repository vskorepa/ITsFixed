import React from 'react'
import { useRouter } from "next/router";
import  Link  from "next/link";
import { Container, Link as NextUiLink } from "@nextui-org/react";
import useTranslation from "next-translate/useTranslation";

export const Foot = () =>
{
    const {t} = useTranslation("common");
    const router = useRouter();
    return (
        <Container justify="flex-end">
        <ul>
            {router.locales?.map((locale)=>(
                <li key={locale}>
                    <Link passHref href={router.asPath} locale={locale}> 
                        <NextUiLink block color="success">{locale}</NextUiLink>
                    </Link>
                </li>       
            ))}
            </ul>
            <Link href="..">
                <NextUiLink>{t("back")}</NextUiLink>
            </Link>
    </Container>
    )
}


