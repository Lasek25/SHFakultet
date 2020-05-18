import { IStoreState } from '../store';
import { createSelector } from 'reselect';

export const todosSelector = createSelector(
    (state: IStoreState) => state.todos,
    todos => todos.list
);