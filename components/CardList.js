import Card from "./Card"
import cardStyles from "../styles/CardList.module.css"

const CardList = ({data}) => {
    return (
        <div className={cardStyles.container}>
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
