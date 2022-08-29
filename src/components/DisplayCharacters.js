import CharacterCard from "./CharacterCard"

function DisplayCharacters({ characters, onCharacterUpdate, onCharacterDelete }) {

    return (
        <ul>
            {characters.map((character) => {
                return <li><CharacterCard key={character.id} character={character} onCharacterUpdate={onCharacterUpdate} onCharacterDelete={onCharacterDelete} /></li>
            })}
        </ul>
    )

}

export default DisplayCharacters