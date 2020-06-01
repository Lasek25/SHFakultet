import jsonData from './utils';
import Conection from "./Conection";

const API_URL = Conection.getAllPosts();

export interface IPosts {
    posts: IPost[];
}

interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const PostsService = {
    getAllPosts: async () => {
        try {
            const response = await jsonData.get(API_URL);
            const result: IPosts = {
                posts: response.map((post: IPost) => ({
                    userId: post.userId,
                    id: post.id,
                    title: post.title,
                    body: post.body,
                })),
            };
            return result;
        }
        catch (e) {
            console.log(e);
        }
    }
};

export default PostsService;