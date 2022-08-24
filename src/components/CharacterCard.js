// scf

function CharacterCard({character}){
    const {character_name, nation_id, role_id} = character

    return(
        <div>
            <h2>{character_name}</h2>
            <h3>{nation_id}:{role_id}</h3>
        </div>
    )
}

export default CharacterCard