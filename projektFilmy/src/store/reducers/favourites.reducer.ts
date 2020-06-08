import {Reducer} from "redux";
import {IMovieProps} from "../../services/movies.service";
import {Actions, FavouriteStoreActions} from "../actions/favourites.actions";

export interface IFavouriteMoviesStoreState {
    favourites: IMovieProps[];
}

export const favouritesInitialState: IFavouriteMoviesStoreState = {
    favourites: [],
};

export const favouritesReducer: Reducer<IFavouriteMoviesStoreState, Actions>=(state: IFavouriteMoviesStoreState = favouritesInitialState, actions: Actions) => {
    switch (actions.type){
        case FavouriteStoreActions.ADD_MOVIE_TO_FAVOURITES :
            return {
                ...state,
                favourites: [...state.favourites, actions.payload.movie]
            };
        case FavouriteStoreActions.DELETE_MOVIE_FROM_FAVOURITES :
            return {
                ...state,
                favourites: state.favourites.filter(el=>el.id !== actions.payload.movie.id)
            };
        default:
            return state;
    }
};
