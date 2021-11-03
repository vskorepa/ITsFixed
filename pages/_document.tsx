import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";
import { CssBaseline } from "@nextui-org/react";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        const styles = CssBaseline.flush();

        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {styles}
                </>
            ),
        };
    }

    render() {
        return (
            <Html>
                <Head />
                <body className=" bg-white text-black dark:bg-black dark:text-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
