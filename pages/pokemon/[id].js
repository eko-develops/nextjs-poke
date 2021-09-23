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
            <div className={SinglePokemonStyles.typesWrapper}>
                <h3>Types</h3>
                {
                    pokemon.types.map( (type, index) => (
                        <span key={`${type}-${index}`} className={SinglePokemonStyles.typePill}>{type.type.name}</span>
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
    /**
     * Extract the last 3 characters from the sequence.
     * The full API url is for example: https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png
     * Starting from the end of the padded string, count each index and at the 3rd index, slice it off.
     * 
     * Exmaple: If the ID is 1, the paddedIndex will look like "001". Because there is no 3rd or more index
     * counting backwards, there is nothing to slice so it is fine.
     * 
     * Another example: If the ID is 123, the paddedIndex will look like "00123". So if we count from the
     * end of the string to the 3rd index, we land on the first 0 from the end. We then slice it off and
     * get "123" and then concat it to the end of the API url.
     */
    const paddedIndex = ('00' + id).slice(-3);  
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