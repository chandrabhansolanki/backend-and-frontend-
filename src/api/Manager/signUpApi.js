import {post} from "../client"

const signUpApi = (params) => {
    return post("api/auth/createuser",params)
}

export default signUpApi