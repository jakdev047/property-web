import React from 'react';

// router
import { BrowserRouter } from "react-router-dom";

// sass
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/index.scss';

// router
import AppRoute from './routes/AppRoute';

// store
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <AppRoute/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
