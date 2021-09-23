import {useState, useEffect} from 'react'
import searchStyles from "../styles/Search.module.css"
import CardList from '../components/CardList'

const search = ({newData}) => {

    const [searchValue, setSearchValue] = useState("")
    const [filteredPokemon, setFilteredPokemon] = useState([])
    const [isError, setIsError] = useState(false)
    const [count, setCount] = useState(0)

    const pokemon = newData;   //array of 20 pokemon

    const handleClear = () => {
        setSearchValue("")
        setFilteredPokemon(pokemon)
        setIsError(false)
        setCount(pokemon.length)
    }

    const handleOnChange = (e) => {
        setSearchValue(e.target.value)
    }

    useEffect( () => {
        const filterPokemon = pokemon.filter( (pokemon) => pokemon.name.includes(searchValue));
        setFilteredPokemon(filterPokemon);
        setCount(filterPokemon.length)
    },[searchValue])


    return (
        <div className={searchStyles.searchWrapper}>
            <h1>Search</h1>
            <form className={searchStyles.searchForm}>
                <input
                maxLength={20}
                className={searchStyles.searchInput}
                type="text"
                placeholder="Enter a pokemon name.."
                value={searchValue}
                onChange={ (e) => handleOnChange(e)}
                ></input>
                <div className={searchStyles.buttonWrapper}>
                    <button
                    onClick={handleClear}
                    className={searchStyles.searchButton}
                    type="button">Clear</button>
                </div>
            </form>
                <div className={searchStyles.countWrapper}><h4>Count: </h4><p>{count}</p></div>
            <div className={searchStyles.searchResults}>
                {isError && "Could not find any matches.."}
                {
                    filteredPokemon && <CardList pokemon={filteredPokemon} />
                }

            </div>
        </div>
    )
}

export default search

export const getStaticProps = async () => {

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
    const {results} = await response.json()
    
    const IMAGE_API_URL = `https://assets.pokemon.com/assets/cms2/img/pokedex/full`;
    const newData = results.map( (pokemon, index) => {
        const paddedIndex = ('00' + (index + 1)).slice(-3);
        const imageUrl = `${IMAGE_API_URL}/${paddedIndex}.png`;
        return {
            ...pokemon,
            id: index + 1,
            image: imageUrl
        }
    })

    return {
        props: {
            newData,
        }
    }
}
