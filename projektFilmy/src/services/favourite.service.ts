import store from '../store';
import {favouritesActions} from "../store/actions/favourites.actions";
import {IMovieProps} from "./movies.service";

export class FavouriteMovieService {

    addMovie(movie: IMovieProps) {
        store.dispatch(favouritesActions.IAddMovie(movie));
    }
    deleteMovie(movie: IMovieProps) {
        store.dispatch(favouritesActions.IDeleteMovie(movie));
    }

}