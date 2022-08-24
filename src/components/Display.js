import CharacterCard from "./CharacterCard"

function Display({ characters, nations, roles }) {

    return (
        <div className="Display">
            <h1>Display!!</h1>
            {characters.map((character) => {
                return <CharacterCard key={character.id} character={character} />
            })}
            {nations.map((nation)=>{
                return <h1 key={nation.id}>{nation.nation_name} located in {nation.nation_location}</h1>
            })}
            {roles.map((role)=>{
                return <h1 key={role.id}>{role.role_title} || {role.role_rating}</h1>
            })}
        </div>
    )
}

export default Display