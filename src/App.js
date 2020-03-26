import React from 'react';
import DummyContainer from './containers/dummyContainer.js';
import OverviewContainer from './containers/overviewContainer';

function App() {
  return (
    <div className="App">
      <h1>Redux App</h1>
      <DummyContainer />
      <OverviewContainer />
    </div>
  );
}

export default App;
