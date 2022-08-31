import CharacterCard from "./CharacterCard"

function DisplayCharacters({ characters, nations, roles, onCharacterUpdate, onCharacterDelete }) {
    return (
        <div>
            {characters.map((character) => {
                return <CharacterCard key={character.id} character={character} nations={nations} roles={roles} onCharacterUpdate={onCharacterUpdate} onCharacterDelete={onCharacterDelete} />
            })}
        </div>
    )

}

export default DisplayCharacters