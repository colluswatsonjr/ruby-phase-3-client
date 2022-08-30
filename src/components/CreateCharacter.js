import { useState } from "react"

function CreateCharacter({ nations, roles, onCharacterCreate }) {
    const [form, setForm] = useState({ character_name: '', nation_id: 1, role_id: 1 })

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:9292/characters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        })
            .then(r => r.json())
            .then(data => {
                onCharacterCreate(data)
            })
            .catch(e => console.log(e))
        // onCharacterCreate(form)
        setForm({ character_name: '', nation_id: 1, role_id: 1 })
    }

    const listNations = nations.map((nation) => {
        return <option key={nation.id} value={nation.id}>{nation.nation_name}</option>
    })
    const listRoles = roles.map((role) => {
        return <option key={role.id} value={role.id}>{role.role_title}</option>
    })


    return (
        <form onSubmit={handleSubmit}>
            <div>Create Character!</div>
            <br />
            <label>
                Name:
                <br />
                <input type="text" name="character_name" value={form.character_name} onChange={(e) => { setForm({ ...form, character_name: e.target.value }) }} />
            </label>
            <br />
            <label>
                Select Nation:
                <br />
                <select name="nation_id" value={form.nation_id} onChange={(e) => { setForm({ ...form, nation_id: Number(e.target.value) }) }}>
                    {listNations}
                </select>
            </label>
            <br />
            <label>
                Select Role:
                <br />
                <select name="role_id" value={form.role_id} onChange={(e) => { setForm({ ...form, role_id: Number(e.target.value) }) }}>
                    {listRoles}
                </select>
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default CreateCharacter