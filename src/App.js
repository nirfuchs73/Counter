import React from 'react';
import store from './store';
import './App.css';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <Counter store={store} />
    </div>
  );
}

export default App;
