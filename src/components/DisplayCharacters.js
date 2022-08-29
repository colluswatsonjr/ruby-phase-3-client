import CharacterCard from "./CharacterCard"

function DisplayCharacters({ characters, onCharacterUpdate, onCharacterDelete }) {
    return (
        <ul>
            {characters.map((character) => {
                return <li  key={character.id}><CharacterCard character={character} onCharacterUpdate={onCharacterUpdate} onCharacterDelete={onCharacterDelete} /></li>
            })}
        </ul>
    )

}

export default DisplayCharacters