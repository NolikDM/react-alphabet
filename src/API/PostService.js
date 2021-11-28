import axios from "axios";

export default class postService {
    static async getAll() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data;
    }
}