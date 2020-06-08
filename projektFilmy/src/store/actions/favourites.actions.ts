import {IMovieProps} from "../../services/movies.service";

export enum FavouriteStoreActions {
    ADD_MOVIE_TO_FAVOURITES = 'ADD_MOVIE_TO_FAVOURITES',
    DELETE_MOVIE_FROM_FAVOURITES = 'DELETE_MOVIE_FROM_FAVOURITES',
}

export interface IAddMovie {
    type: FavouriteStoreActions.ADD_MOVIE_TO_FAVOURITES,
    payload:{
        movie: IMovieProps;
    }
}

export interface IDeleteMovie {
    type: FavouriteStoreActions.DELETE_MOVIE_FROM_FAVOURITES,
    payload:{
        movie: IMovieProps;
    }
}

export const favouritesActions = {
    IAddMovie: (movie: IMovieProps) => ({
        type: FavouriteStoreActions.ADD_MOVIE_TO_FAVOURITES,
        payload:{
            movie
        }
    }),

    IDeleteMovie: (movie: IMovieProps) => ({
        type: FavouriteStoreActions.DELETE_MOVIE_FROM_FAVOURITES,
        payload:{
            movie
        }
    })
};

export type Actions = IAddMovie & IDeleteMovie;

