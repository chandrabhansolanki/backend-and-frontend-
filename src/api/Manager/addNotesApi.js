import {post} from "../client"

const AddNotesApi = (params) => {
    return post("api/notes/addnote", params)
}

export default AddNotesApi