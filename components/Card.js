import Image from 'next/image'
import cardStyles from "../styles/Card.module.css"

function Card({pokemon}) {
    
    return (
        <div key={pokemon.key}>
            <h2>{pokemon.name}</h2>
            <p>{pokemon.url}</p>
        </div>
    )
}

export default Card
