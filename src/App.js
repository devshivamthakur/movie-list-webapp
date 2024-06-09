import React from 'react';
import HomePage from './screens/HomePage';
import './App.css';
import { store } from './store'
import { Provider } from 'react-redux'
const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <HomePage />
      </Provider>
    </div>
  );
};

export default App;
