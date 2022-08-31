import { useState } from "react"

function EditCharacter({character, nations, roles, onUpdateCharacter}) {

    const [form, setForm] = useState(character)
    console.log(form)

    function handleSubmit(e){
        e.preventDefault()

        fetch(`http://localhost:9292/characters/${character.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(
              form
            ),
          })
            .then((r) => r.json())
            .then((data) => onUpdateCharacter(data));
    }
    const listNations = nations.map((nation) => {
        return <option key={nation.id} value={nation.id}>{nation.nation_name}</option>
    })
    const listRoles = roles.map((role) => {
        return <option key={role.id} value={role.id}>{role.role_title}</option>
    })

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="character_name" value={form.character_name} onChange={(e) => { setForm({ ...form, character_name: e.target.value }) }} />
            </label>
            <label>
                Select Role:
                <select name="role_id" value={form.role_id} onChange={(e) => { setForm({ ...form, role_id: Number(e.target.value) }) }}>
                    {listRoles}
                </select>
            </label>
            <label>
                Select Nation:
                <select name="nation_id" value={form.nation_id} onChange={(e) => { setForm({ ...form, nation_id: Number(e.target.value) }) }}>
                    {listNations}
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default EditCharacter