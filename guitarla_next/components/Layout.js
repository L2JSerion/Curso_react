import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>GuitarLA</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
        </div>
    )
}

export default Layout