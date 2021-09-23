import Head from 'next/head'

const HeadMeta = ({title}) => {
    return (
        <Head>
            <title> {title ? `${title} - NextJS Poke` : "NextJS Poke"} </title>
        </Head>
    )
}

export default HeadMeta
