/***
  MaterialUIのSSR対応のため追加
  MaterialUIがSSR非対応のため再レンダリング時に、クラス名を参照できずエラーを吐き出してしまうのが理由。
***/

import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'

class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        })

    const initialProps = await Document.getInitialProps(ctx)

    return {
        ...initialProps,
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    }
}

export default MyDocument