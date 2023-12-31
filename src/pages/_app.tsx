import Layout from "@/common/layout"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import { Fragment } from "react"
import { useRouter } from "next/router"
import { StyledEngineProvider } from "@mui/material"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <Fragment>
      <Head>
        <title>{`DS '23${
          router.pathname !== "/"
            ? ` | ${router.pathname
                .split("/")[1]
                .charAt(0)
                .toUpperCase()}${router.pathname.split("/")[1].slice(1)}`
            : " | Home"
        }`}</title>
        <meta name="description" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <StyledEngineProvider injectFirst>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StyledEngineProvider>
    </Fragment>
  )
}
