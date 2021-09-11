import Image from 'next/image'

function Card({pokemon}) {

    const { abilities, location_area_encounters, moves, name, sprites, stats, types, order} = pokemon

    return (
        <div>
            <Image width={100} height={100} src={sprites.front_default} />
            <h3>{name} #{order}</h3>
            <p>Type(s): {types.map( (theType) => <span>{theType.type.name} </span> )}</p>
            <div>
                <p>Stats:</p>
                <div>
                    {
                        stats.map( (stat) =>  (
                            <span>
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
                            <span>
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
