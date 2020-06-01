const API = `https://jsonplaceholder.typicode.com/`;

export default class Conection {

    static getAllPosts(){
        return `${API}posts`;
    }

    static getComments(){
        return `${API}comments`;
    }

    static getUsers(){
        return `${API}users`;
    }
}