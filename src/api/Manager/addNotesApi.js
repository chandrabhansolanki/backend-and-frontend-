import {post} from "../client"

const AddNotesApi = () => {
    return post("api/notes/addnote")
}

export default AddNotesApi