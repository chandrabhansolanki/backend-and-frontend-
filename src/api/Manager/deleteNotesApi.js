import {del} from "../client"

const deleteNotesApi = (id) => {
    return del(`api/notes/deletenote/${id}`)
}

export default deleteNotesApi