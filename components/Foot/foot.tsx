import React from 'react'
import { useRouter } from "next/router";
import  Link  from "next/link";
import { Container, Link as NextUiLink } from "@nextui-org/react";

export const Foot = () =>
{
    const router = useRouter();
    return (
        <Container>
        <ul>
            {router.locales?.map((locale)=>(
                <li key={locale}>
                    <Link passHref href={router.asPath} locale={locale}> 
                        <NextUiLink block color="success">{locale}</NextUiLink>
                    </Link>
                </li>       
            ))}
        </ul>
    </Container>
    )
}


