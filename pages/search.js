import {useState, useEffect} from 'react'
import searchStyles from "../styles/Search.module.css"
import Link from "next/link"

const search = ({newData}) => {

    const [searchValue, setSearchValue] = useState("")
    const [filteredPokemon, setFilteredPokemon] = useState([])
    const [isError, setIsError] = useState(false)
    const [count, setCount] = useState(0)

    const pokemon = newData;   //array of 20 pokemon

    const handleClear = () => {
        setSearchValue("")
        setFilteredPokemon([])
        setIsError(false)
        setCount(0)
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
            <h1>Search Pokemon</h1>
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
                {/* {filteredPokemon.map( (pokemon, index) => <Link key={pokemon.name + "-" + index} href={`/pokemon/${pokemon.id}`}><a key={index}>{pokemon.name}</a></Link> )} */}
                {filteredPokemon && filteredPokemon.map( (pokemon, index) => (
                    <Link key={pokemon.name + "-" + index} href={`/pokemon/${pokemon.id}`}><a key={index}>{pokemon.name}</a></Link>
                ))
                }
            </div>
        </div>
    )
}

export default search

export const getStaticProps = async () => {

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
    const {results} = await response.json()

    const newData = results.map( (pokemon, index) => {
        return {
            ...pokemon,
            id: index + 1,
        }
    })

    return {
        props: {
            newData,
        }
    }
}
