
import { useState } from "react";
import EditCharacter from "./EditCharacter";

function CharacterCard({ character, nations, roles, onCharacterUpdate, onCharacterDelete }) {

    const [isEditing, setIsEditing] = useState(false);

    const { id, character_name, nation_id, role_id } = character
    // const nationName = nations.find((nation=>))
    const nation = nations.filter((nation)=>nation_id === nation.id)
    const role = roles.filter((role)=>role_id === role.id)
    

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
                nations={nations}
                roles={roles}
                onUpdateCharacter={handleUpdateCharacter}

                 />
                :
                <div>
                    <h2>{character_name}</h2>
                    <h3>{role[0].role_title} of {nation[0].nation_name}</h3>

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