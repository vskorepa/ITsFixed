import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Link as NextUiLink } from '@nextui-org/react'
import { BsTools } from 'react-icons/bs'
export const Foot: React.FC = () => {
    const router = useRouter()
    return (
        <footer className="bottom-0 text-gray-400  bg-darkDarker sm:h-7.5vh h-max body-font w-full items-center z-50">
            <div className="container h-full px-5 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <BsTools />
                    <span className="ml-3 text-xl">ITsFixed</span>
                </a>
                <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
                    © 2022 ITsFixed —
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
                        <Link
                            key={locale}
                            passHref
                            href={router.asPath}
                            locale={locale}
                        >
                            <NextUiLink block color="success">
                                {locale}
                            </NextUiLink>
                        </Link>
                    ))}
                </span>
            </div>
        </footer>
    )
}
