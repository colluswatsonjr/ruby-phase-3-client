import { useState } from "react"

function CreateNation({ onNationCreate }) {
    const [form, setForm] = useState({ nation_name: '', nation_location: 'unknown' })

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:9292/nations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        })
            .then(r => r.json())
            .then(data => {
                console.log(data)
            })
            .catch(e => console.log(e))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>Create Nation!</div>
            <br />
            <label>
                Nation Name:
                <br />
                <input type="text" name="nation_name" onChange={(e) => { setForm({ ...form, nation_name: e.target.value }) }} />
            </label>
            <select name="nation_location" value={form.nation_location} onChange={(e) => { setForm({ ...form, nation_location: e.target.value }) }}>
                <option value={1}>Mountains</option>
                <option value={2}>Canyons</option>
                <option value={3}>Valleys</option>
            </select>
            <br />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default CreateNation