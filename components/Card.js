import Image from 'next/image'
import cardListStyles from "../styles/Card.module.css"

function Card({pokemon}) {

    const { abilities, location_area_encounters, moves, name, sprites, stats, types, order, id} = pokemon

    return (
        <div className={cardListStyles.container} key={`${name + "_" + id}`}>
            <Image width={100} height={100} src={sprites.front_default} />
            <h3>{name} #{order}</h3>
            <p>Type(s): {types.map( (theType) => <span key={theType.type.name}>{theType.type.name} </span> )}</p>
            <div>
                <p>Stats:</p>
                <div>
                    {
                        stats.map( (stat) =>  (
                            <span key={stat.stat.name}>
                                {stat.stat.name} {stat.base_stat}
                            </span>
                        ))
                    }
                </div>
            </div>
            <div>
                <p>Abilities:</p>
                <div>
                    {
                        abilities.map( (ability) => (
                            <span key={ability.ability.name}>
                                {ability.ability.name + " "} 
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Card
