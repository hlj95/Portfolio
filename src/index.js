import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './store/reducer/reducer';
import BaseLayout from './components/Baselayout';
import Home from './components/Home.js';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( reducer, composeEnhancers(
  applyMiddleware(thunk)
))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <BaseLayout>
          <Routes>
            <Route element={ < Home /> }  exact path="/" />
            <Route element={ < Projects /> } path="/projects" />
            <Route element={ < Skills /> } path="/skills" />
            <Route element={ < Contact /> } path="/contact" />
          </Routes>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
