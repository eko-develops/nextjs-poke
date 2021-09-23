import Footer from "./Footer"
import Header from "./Header"
import HeadMeta from "./HeadMeta"

function Layout( { children } ) {
    return (
        <>  
            <HeadMeta />
            <Header />
                <main>
                    {children}
                </main>
            <Footer />
           
        </>
    )
}

export default Layout
