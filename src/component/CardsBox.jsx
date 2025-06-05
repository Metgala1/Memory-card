
import '../styles/cardsBox.css'
import '../styles/cards.css'


function CardsBox({data, onCardClick}) {

    return (
        <div className="cardsBox">
             {data.map((pokemon) => (
                <div className="card" key={pokemon.id} onClick={() => onCardClick(pokemon.id)}>
                    <div className="card-img">
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>
                    <h2 className="card-name">{pokemon.name}</h2>
                </div>
            ))}

        </div>
    )
}

export default CardsBox