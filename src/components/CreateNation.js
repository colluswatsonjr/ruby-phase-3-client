import { useState } from "react"

function CreateNation({ nations, onNationCreate, onNationDelete }) {
    const [form, setForm] = useState({ nation_name: '', nation_location: '' })

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
                onNationCreate(data)
            })
            .catch(e => console.log(e))
        setForm({ nation_name: '', nation_location: '' })
    }
    function handleDelete(id) {
        fetch(`http://localhost:9292/nations/${id}`, {
            method: "DELETE"
        });
        onNationDelete(id);
    }


    const listNations = nations.map((nation) => {
        return (
            <li key={nation.id}>
                {nation.nation_name} located in the {nation.nation_location}
                <br />
                <br />
                <button onClick={()=>handleDelete(nation.id)}>
                    <span role="img" aria-label="delete">
                        🗑
                    </span>
                </button>
            </li>
        )
    })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>Create Nation!</div>
                <br />
                <label>
                    Nation Name:
                    <br />
                    <input type="text" name="nation_name" onChange={(e) => { setForm({ ...form, nation_name: e.target.value }) }} />
                </label>
                <br />
                Nation Location:
                <br />
                <select name="nation_location" value={form.nation_location} onChange={(e) => { setForm({ ...form, nation_location: e.target.value }) }}>
                    <option value={null}>-</option>
                    <option value={'Mountains'}>Mountains</option>
                    <option value={'Canyons'}>Canyons</option>
                    <option value={'Valleys'}>Valleys</option>
                    <option value={'Plains'}>Plains</option>
                </select>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <ul>
                {listNations}
            </ul>
        </div>
    )
}

export default CreateNation