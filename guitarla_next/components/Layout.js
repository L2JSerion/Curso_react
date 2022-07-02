import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ( { children, pagina, guitarra } ) => {
    return (
        <div>
            <Head>
                <title>GuitarLA - {pagina}</title>
                <meta name="description" content="Sitio web de venta de Guitarras." />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;800;900&family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap" />
            </Head>

            <Header
                guitarra={guitarra}
            />
            {children}

            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    guitarra: null
}

export default Layout