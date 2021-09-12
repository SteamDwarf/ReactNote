import axios from "axios";

export default class PostService {
    static async getAll() {
        let response;
        try {
            response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        } catch (e) {
            alert(e);
            response = {
                data: []
            };
        }

        return response.data;
    }
}