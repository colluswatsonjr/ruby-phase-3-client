import CharacterCard from "./CharacterCard"

function DisplayCharacters({ characters, onCharacterUpdate, onCharacterDelete }) {

    return (
        <li>
            {characters.map((character) => {
                return <CharacterCard key={character.id} character={character} onCharacterUpdate={onCharacterUpdate} onCharacterDelete={onCharacterDelete} />
            })}
        </li>
    )

}

export default DisplayCharacters