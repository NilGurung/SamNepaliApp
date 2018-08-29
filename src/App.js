/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { Navigation } from 'react-native-navigation';
import {Provider } from 'react-redux';
import { registerScreens }  from './Screens';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/PeopleReducer';
import Thunk from 'redux-thunk';
                 
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(Thunk));


registerScreens(store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'neil.EntryScreen', // unique ID registered with Navigation.registerScreen
    title: 'Sam Nepali App', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
  
})

