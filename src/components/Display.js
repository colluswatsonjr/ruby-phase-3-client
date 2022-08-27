import CharacterCard from "./CharacterCard"

function Display({ characters, nations, roles, onCharacterUpdate, onCharacterDelete }) {

    return (
        <div className="Display">
            <h1>Display!!</h1>
            {characters.map((character) => {
                return <CharacterCard key={character.id} character={character} onCharacterUpdate={onCharacterUpdate} onCharacterDelete={onCharacterDelete} />
            })}
        </div>
    )
}

export default Display