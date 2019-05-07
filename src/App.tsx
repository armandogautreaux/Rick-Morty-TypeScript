import React from 'react';
import { Store } from './Store';
const App = (): JSX.Element => {
  const store = React.useContext(Store);
  return (
    <React.Fragment>
      <h1>Rick and Morty</h1>
      <p>Pick your favorite episode</p>
    </React.Fragment>
  );
};

export default App;
