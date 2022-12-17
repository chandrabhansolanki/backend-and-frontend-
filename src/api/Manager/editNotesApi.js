import {put} from "../client"

const editNotesApi = (id, params) => {
    return put(`api/notes/updatenote/${id}`, params)
}

export default editNotesApi
