import {get} from "../client"

const getAllNotesApi = () => {
    return get("api/notes/fetchallnotes")
}
export default getAllNotesApi