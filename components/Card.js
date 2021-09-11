function Card({pokemon}) {

    const { abilities, location_area_encounters, moves, name, sprites, stats, types, order} = pokemon
    console.log(pokemon)

    return (
        <div>
            <h3>{name}</h3>
            <p>Order: {order}</p>
        </div>
    )
}

export default Card
