import Footer from "./Footer"
import Header from "./Header"
import layoutStyles from '../styles/Layout.module.css'

function Layout( { children } ) {
    return (
        <div className={layoutStyles.container}>
            <Header />
                <main>
                    {children}
                </main>
            <Footer />
           
        </div>
    )
}

export default Layout
