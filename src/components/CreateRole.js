import { useState } from "react"

function CreateRole({onRoleCreate}) {
    const [form, setForm] = useState({ role_name: '', role_location: 'unknown' })

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
    }

    return (
        <form onSubmit={null}>
            <div>Create Role!</div>
            <br />
            <label>
                Role Title:
                <br/>
                <input type="text" name="role_title" onChange={null} />
            </label>
            <br />
            <label>
                Role Description:
                <br/>
                <textarea rows="4" cols="50"></textarea>
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default CreateRole