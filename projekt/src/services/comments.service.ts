import jsonData from './utils';
import Conection from "./Conection";

const API_URL = Conection.getComments();

export interface IComments {
    comments: IComment[];
}

interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

const CommentsService = {
    getComments: async () => {
        try {
            const response = await jsonData.get(API_URL);
            const result: IComments = {
                comments: response.map((comment: IComment) => ({
                    postId: comment.postId,
                    id: comment.id,
                    name: comment.name,
                    email: comment.email,
                    body: comment.body,
                })),
            };
            return result;
        }
        catch (e) {
            console.log(e);
        }
    }
};

export default CommentsService;