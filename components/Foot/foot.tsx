import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Container, Link as NextUiLink } from "@nextui-org/react";
import useTranslation from "next-translate/useTranslation";
import { BsTools } from "react-icons/bs";
export const Foot = () => {
    const { t } = useTranslation("common");
    const router = useRouter();
    return (
        <footer className="text-gray-400 bg-gray-900 body-font w-full bottom-3">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <BsTools />
                    <span className="ml-3 text-xl">FixedIT</span>
                </a>
                <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
                    © 2021 FixedIT —
                    <a
                        href="https://github.com/vskorepa"
                        className="text-gray-500 ml-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @vskorepa
                    </a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    {router.locales?.map((locale) => (
                        <a className="ml-3 text-gray-400">
                            <Link passHref href={router.asPath} locale={locale}>
                                <NextUiLink block color="success">
                                    {locale}
                                </NextUiLink>
                            </Link>
                        </a>
                    ))}
                </span>
            </div>
        </footer>
    );
};
