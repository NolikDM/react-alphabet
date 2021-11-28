import axios from "axios";

export default class postService {
    static async getAll() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
}