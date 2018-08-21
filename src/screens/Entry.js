/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
import Loader from '../components/Loader';
import Login from '../components/Login';
import MainTab from './MainTab';
import {Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../reducers/PeopleReducer';
import Thunk from 'redux-thunk';
                 
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(Thunk));


export default class Entry extends Component {
    
    state = { loggedIn: true};

    componentWillMount() {
       // Initialize Firebase
      var config = {
        apiKey: "AIzaSyB6sFDlCsKniSrz7GjstVVLQ0aFQpXin8U",
        authDomain: "crmrn-cba9c.firebaseapp.com",
        databaseURL: "https://crmrn-cba9c.firebaseio.com",
        projectId: "crmrn-cba9c",
        storageBucket: "crmrn-cba9c.appspot.com",
        messagingSenderId: "974678396615"
      };
      firebase.initializeApp(config);
  
      // firebase.auth().onAuthStateChanged((user) => {
      //    if(user) {
      //      this.setState({ loggedIn: true })
      //    } else {
      //      this.setState({loggedIn: false })
      //    }
      // })
    }
  
    renderIntialView() {
     
      switch(this.state.loggedIn) {
        case true:
            MainTab()
        case false:
            return <Login />
        default:
          return <Loader size="small" />
      }
    }
  
    render() {
      return (
        <Provider store={store}>
          <View style={styles.container}>
              {this.renderIntialView()}
          </View>
        </Provider>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  });