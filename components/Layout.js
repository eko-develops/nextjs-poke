function Layout( { children } ) {
    return (
        <>
        <header>
            this is the header
        </header>
        <main>
            {children}
        </main>
        <footer>
            this is the footer
        </footer>
        </>
    )
}

export default Layout
