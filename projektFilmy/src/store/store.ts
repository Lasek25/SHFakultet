import { combineReducers } from "redux";
import {ITodosListStoreState, todosListInitialState, todosStoreReducer} from "./reducers/todos.reducer";
import * as TodosActions from './actions/todos.actions'
import {favouritesInitialState, favouritesReducer, IFavouriteMoviesStoreState} from "./reducers/favourites.reducer";
import {FavouriteStoreActions} from "./actions/favourites.actions";

export type StoreActions = TodosActions.Actions & FavouriteStoreActions;

export interface IStoreState {
    todos: ITodosListStoreState,
    favourites: IFavouriteMoviesStoreState,
}

export const initialStoreState: IStoreState = {
    todos: todosListInitialState,
    favourites: favouritesInitialState,
};

export const reducers = combineReducers<IStoreState>({
    todos: todosStoreReducer,
    favourites: favouritesReducer,
});