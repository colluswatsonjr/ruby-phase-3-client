import { useState } from "react"

function CreateCharacter() {
    const [form, setForm] = useState({name: '', nation: 1, role: 1 })
    function handleSubmit(e){
        e.preventDefault()
        console.log(form)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" onChange={(e)=>{setForm({...form, name:e.target.value})}}/>
            </label>
            <label>
                Select Nation:
                <select name="nation" onChange={(e)=>{setForm({...form, nation:e.target.value})}}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
            </label>
            <label>
                Select Role:
                <select name="role" onChange={(e)=>{setForm({...form, role:e.target.value})}}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default CreateCharacter