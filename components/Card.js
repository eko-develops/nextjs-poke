import Image from 'next/image'
import cardStyles from "../styles/Card.module.css"

function Card({pokemon}) {

    const { abilities, location_area_encounters, moves, name, sprites, stats, types, order, id} = pokemon

    return (
        <div className={cardStyles.container} key={`${name + "_" + id}`}>
            <div className={cardStyles.imageWrapper}>
                <Image width={100} height={100} layout="responsive" src={sprites.front_default} />
            </div>
            <h3>{name} #{order}</h3>

            <div className={cardStyles.type}>
                <h4>{types.length > 1 ? "Types: " : "Type: "}</h4>
                {types.map( (theType) => <p key={theType.type.name}>{theType.type.name} </p> )}
            </div>

            <div className={cardStyles.statsWrapper}>
                <h4>Stats:</h4>
                <div className={cardStyles.stats}>
                    {
                        stats.map( (stat) =>  (
                            <p key={stat.stat.name}>
                                {stat.stat.name}: {stat.base_stat}
                            </p>
                        ))
                    }
                </div>
            </div>

            <div className={cardStyles.abilities}>
                <h4>Abilities:</h4>
                <div className={cardStyles.stats}>
                    {
                        abilities.map( (ability) => (
                            <p key={ability.ability.name}>
                                {ability.ability.name} 
                            </p>
                        ))
                    }
                </div>
            </div>



        </div>
    )
}

export default Card
