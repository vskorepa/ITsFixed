import React, { ReactElement } from 'react'
import NextDocument, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from 'next/document'
import { CssBaseline } from '@nextui-org/react'

class MyDocument extends NextDocument {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const initialProps = await NextDocument.getInitialProps(ctx)
        const styles = CssBaseline.flush()

        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {styles}
                </>
            ),
        }
    }

    render(): ReactElement {
        return (
            <Html>
                <Head />
                <body className=" bg-light text-black dark:bg-dark dark:text-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
