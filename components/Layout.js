import Footer from "./Footer"
import Header from "./Header"
import layoutStyles from '../styles/Layout.module.css'

function Layout( { children } ) {
    return (
        <>
            <Header />
                <main>
                    {children}
                </main>
            <Footer />
           
        </>
    )
}

export default Layout
