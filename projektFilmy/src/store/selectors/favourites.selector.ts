import { IStoreState } from '../store';
import { createSelector } from 'reselect';

export const favouritesSelector = createSelector(
    (state: IStoreState) => state.favourites,
    favourites => favourites
);