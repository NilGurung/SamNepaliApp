/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {Platform, StyleSheet, Text, View} from 'react-native';
import { Navigation } from 'react-native-navigation';
import EntryScreen  from './screens/Entry';
// import {Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import firebase from 'firebase';

// import Loader from './components/Loader';
// import reducers from './reducers/PeopleReducer';
// import Thunk from 'redux-thunk';


//register all of your app's screens
Navigation.registerComponent('neil.EntryScreen', () => EntryScreen);


Navigation.startSingleScreenApp({
  screen: {
    screen: 'neil.EntryScreen', // unique ID registered with Navigation.registerScreen
    title: 'Sam Nepali App', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
  
})

