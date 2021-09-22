import Image from 'next/image'

const SinglePokemon = ({pokemon, image}) => {


    return (
        <div>
            <Image height={300} width={300} src={image} />
            <h1>{pokemon.name}</h1>
            <p>pokemon id: {pokemon.id}</p>
            <div className="stats">
                {
                    pokemon.stats.map( (stat, index) => (
                        <div key={stat + "-" + index} className="stat">
                            <h3>{stat.stat.name}</h3>
                            <span>{stat.base_stat}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SinglePokemon


export const getStaticProps = async (context) => {
    
    const id = context.params.id;

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    const IMAGE_API_URL = `https://assets.pokemon.com/assets/cms2/img/pokedex/full`;
    const paddedIndex = ('00' + (id)).slice(-3);
    const currentPokemonImage = `${IMAGE_API_URL}/${paddedIndex}.png`;

    return {
        props: {
            pokemon: data,
            image: currentPokemonImage
        }
    }
}

export const getStaticPaths = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
    const {results} = await response.json()

    const paths = results.map( (pokemon, index) => {
        return {
            params:{
                id: (index + 1).toString(),
            }
        }
    })

    return {
        paths,
        fallback: false,
    }
}