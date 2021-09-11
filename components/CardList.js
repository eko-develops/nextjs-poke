const CardList = ({data}) => {
    return (
        <div>
            {
                data ?
                data.map( (pokemon) => <h2 key={pokemon.id}>{pokemon.name}</h2>)
                : "No Pokemon Found"
             }
        </div>
    )
}

export default CardList
