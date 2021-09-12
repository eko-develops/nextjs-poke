import {useState} from 'react'
import searchStyles from "../styles/Search.module.css"

const search = ({data}) => {

    const [searchValue, setSearchValue] = useState("")
    const [filteredPokemon, setFilteredPokemon] = useState("")
    const [isError, setIsError] = useState(false)

    const pokemon = data.results;


    const submitSearch = (e, query) => {
        e.preventDefault()
        console.log("search button clicked")
        if(!query.length) return

        const filteredPokemon = pokemon.filter( (pokemon) => pokemon.name.includes(query))
        setFilteredPokemon(filteredPokemon)
    }

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
                onChange={ (e) => setSearchValue(e.target.value) }
                ></input>
                <div className={searchStyles.buttonWrapper}>
                    <button onClick={(e) => submitSearch(e, searchValue)} className={searchStyles.searchButton} type="submit">Search</button>
                    <button
                    onClick={() => {
                        setSearchValue("")
                        setFilteredPokemon("")}}
                        className={searchStyles.searchButton}
                        type="button">Clear</button>
                </div>
            </form>
            <div className={searchStyles.searchResults}>
                {isError && "Could not find any matches.."}
                {filteredPokemon.length > 0 && filteredPokemon.map( ({name}) => <p key={name}>{name}</p> )}
            </div>
        </div>
    )
}

export default search

export async function getStaticProps(){

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')
    const data = await response.json()


    return{
        props: {
            data
        }
    }
}