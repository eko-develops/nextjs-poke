import cardStyles from "../styles/CardList.module.css"
import Link from 'next/link'
import Image from 'next/image'

const CardList = ({pokemon}) => {

    return (
        <div className={cardStyles.container}>
            {
                pokemon.map( (pokemon, index) => (
                <div className={cardStyles.card} key={pokemon.name + "-" + (index + 1)}>
                    <Link href={`/pokemon/${index + 1}`}>
                        <a>
                            <Image src={pokemon.image} width={150} height={150}/>
                            <h2>{pokemon.name}</h2>
                        </a>
                    </Link>
                </div>
                ))
            }
        </div>
    )
}

export default CardList
