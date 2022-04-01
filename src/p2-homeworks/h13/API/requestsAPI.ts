// https://neko-cafe-back.herokuapp.com/auth/test
// body: {success: true}
import axios from "axios";


export const requestsAPI = {
    postCheckbox(success: boolean) {
        return axios.post('// https://neko-cafe-back.herokuapp.com/auth/test', {
            body: {
                success
            }
        })
    }
}