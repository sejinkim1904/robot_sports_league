import React from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
      </div>
    </Provider>
  );
}

export default App;
