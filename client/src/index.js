import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
//import Immutable from 'immutable';
import rootReducer from '../src/redux/reducers';

const initialState = {};
 
// // import Footer from './component/Footer';
// const AppWrapper = ({ children}) =>{
//   const store = createStore(
//     rootReducer,
//     initialState,
//     applyMiddleware(reduxThunk,createLogger({stateTransformer:state => state.toJS() }))
// );
// return (<Provider store={store}>{children}</Provider>);
//}
ReactDOM.render(
  
    <BrowserRouter>
      <Switch>
        <App />
      </Switch>
    </BrowserRouter>,
    document.getElementById('root')
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
