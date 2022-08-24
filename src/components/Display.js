import CharacterCard from "./CharacterCard"

function Display({ characters, nations, roles }) {

    return (
        <div className="Display">
            <h1>Display!!</h1>
            {characters.map((character) => {
                return <CharacterCard character={character} />
            })}
            {nations.map((nation)=>{
                return <h1>{nation.nation_name} located in {nation.nation_location}</h1>
            })}
            {roles.map((role)=>{
                return <h1>{role.role_title} || {role.role_rating}</h1>
            })}
        </div>
    )
}

export default Display