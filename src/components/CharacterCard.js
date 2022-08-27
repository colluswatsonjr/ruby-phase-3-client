
import { useState } from "react";
import EditCharacter from "./EditCharacter";

function CharacterCard({ character, onCharacterUpdate, onCharacterDelete }) {

    const [isEditing, setIsEditing] = useState(false);

    const { id, character_name, nation_id, role_id } = character

    function handleUpdateCharacter(data){
        setIsEditing(false)
        onCharacterUpdate(data)
        console.log('Character card')
        console.log(data)
    }
    function handleDelete() {
        fetch(`http://localhost:9292/characters/${id}`, {
            method: "DELETE"
        });
        onCharacterDelete(id);
    }

    return (
        <div>
            {isEditing ?
                <EditCharacter 
                character={character}
                onUpdateCharacter={handleUpdateCharacter}
                 />
                :
                <div>
                    <h2>{character_name}</h2>
                    <h3>{nation_id}:{role_id}</h3>
                    <button onClick={() => setIsEditing(true)}>
                        <span role="img" aria-label="edit">
                            ✏️
                        </span>
                    </button>
                    <button onClick={handleDelete}>
                        <span role="img" aria-label="delete">
                            🗑
                        </span>
                    </button>
                </div>
            }

        </div>
    )
}

export default CharacterCard