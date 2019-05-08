import React from 'react';
import { arrowFunctionExpression } from '@babel/types';

interface IState {
  episodes: [];
  favourites: [];
}

interface IAction {
  type: string;
  payload: any;
}

//https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes

const initialState: IState = {
  episodes: [],
  favourites: []
};
export const Store = React.createContext<IState>(initialState);

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>;
}
