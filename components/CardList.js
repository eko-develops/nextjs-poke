import Card from "./Card"

const CardList = ({data}) => {
    return (
        <div>
            {
                data ?
                data.map( (pokemon) => (
                    <Card key={pokemon.id} pokemon={pokemon}/>
                ))
                : "No Pokemon Found"
             }
        </div>
    )
}

export default CardList
