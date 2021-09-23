import Image from 'next/image'
import SinglePokemonStyles from '../../styles/SinglePokemon.module.css'

const SinglePokemon = ({pokemon, image}) => {


    return (
        <div className={SinglePokemonStyles.container}>
            <div className={SinglePokemonStyles.imageWrapper}>
                <Image height={300} width={300} src={image} />
            </div>
            <h1>{pokemon.name} #{pokemon.id}</h1>
            <div className={SinglePokemonStyles.statsWrapper}>
                {
                    pokemon.stats.map( (stat, index) => (
                        <div key={stat + "-" + index} className={SinglePokemonStyles.stat}>
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