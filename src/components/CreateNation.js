function CreateNation() {
    return (
        <form onSubmit={null}>
            <div>Create Nation!</div>
            <br/>
            <label>
                Nation Name:
                <br/>
                <input type="text" name="nation_name" value={null} onChange={null} />
            </label>
            <br/>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default CreateNation