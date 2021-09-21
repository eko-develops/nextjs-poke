import Card from "./Card"
import cardStyles from "../styles/CardList.module.css"

const CardList = ({pokemon}) => {

    return (
        <div className={cardStyles.container}>
            {
                pokemon.map( (pokemon, index) => <Card key={index} pokemon={pokemon} />)
            }
        </div>
    )
}

export default CardList
