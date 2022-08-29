function CreateRole() {
    return (
        <form onSubmit={null}>
            <div>Create Role!</div>
            <br />
            <label>
                Role Title:
                <br/>
                <input type="text" name="role_title" value={null} onChange={null} />
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