import {post} from "../client"

const loginApi = (params) => {
    return post("/api/auth/login",params)
}

export default loginApi