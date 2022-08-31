import { useState } from "react"

function CreateRole({ roles, onRoleCreate }) {
    const [form, setForm] = useState({ role_title: '', role_rating: '', role_description: '' })

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:9292/roles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        })
            .then(r => r.json())
            .then(data => {
                onRoleCreate(data)
            })
            .catch(e => console.log(e))
        // onRoleCreate(form)
        setForm({ role_title: '', role_rating: '', role_description: '' })
    }
    const listRoles = roles.map((role) => {
        return <li key={role.id}>{role.role_title} || {role.role_rating}<br/>{role.role_description}</li>
    })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>Create Role!</div>
                <br />
                <label>
                    Role Title:
                    <br />
                    <input type="text" name="role_title" onChange={(e) => { setForm({ ...form, role_title: e.target.value }) }} />
                </label>
                <br />
                Role Rating:
                <br />
                <select name="role_rating" value={form.role_rating} onChange={(e) => { setForm({ ...form, role_rating: e.target.value }) }}>
                    <option value={null}>-</option>
                    <option value={'S'}>S</option>
                    <option value={'A'}>A</option>
                    <option value={'B'}>B</option>
                    <option value={'C'}>C</option>
                    <option value={'D'}>D</option>
                    <option value={'F'}>F</option>
                </select>
                <br />
                <label>
                    Role Description:
                    <br />
                    <textarea name="role_description" value={form.role_description} onChange={(e) => { setForm({ ...form, role_description: e.target.value }) }} rows="4" cols="50">{form.role_description}</textarea>
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <ul>
                {listRoles}
            </ul>
        </div>
    )
}

export default CreateRole