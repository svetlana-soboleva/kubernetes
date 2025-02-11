export const getNotes = async () => {
    const notes = await fetch('http://35.228.137.250:8080/api/v1/notes')
    const data = await notes.json()
    return data
}