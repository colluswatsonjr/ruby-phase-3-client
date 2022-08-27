import { useState } from "react"

function CreateCharacter({ onCreateCharacter }) {
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
                onCreateCharacter(data)
            })
            .catch(e => console.log(e))
            setForm({ character_name: '', nation_id: 1, role_id: 1 })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>Create Character!</div>
            <label>
                Name:
                <input type="text" name="character_name" value={form.character_name} onChange={(e) => { setForm({ ...form, character_name: e.target.value }) }} />
            </label>
            <label>
                Select Nation:
                <select name="nation_id" value={form.nation_id} onChange={(e) => { setForm({ ...form, nation_id: Number(e.target.value) }) }}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
            </label>
            <label>
                Select Role:
                <select name="role_id" value={form.role_id} onChange={(e) => { setForm({ ...form, role_id: Number(e.target.value) }) }}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default CreateCharacter