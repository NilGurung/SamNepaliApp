import { Navigation } from 'react-native-navigation';
import {Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/PeopleReducer';
import Thunk from 'redux-thunk';
import { registerScreens }  from '../Screens';
import Icon from 'react-native-vector-icons/Ionicons';
                 
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(Thunk));

registerScreens(store, Provider);

// start the app
const MainTab = () => {
  Promise.all([
                Icon.getImageSource('md-home', 30),
                Icon.getImageSource('md-cube', 30),
                Icon.getImageSource('md-briefcase', 30),
                Icon.getImageSource('md-megaphone', 30),
                Icon.getImageSource('md-menu', 30),
          ])
         .then(sources => {
            Navigation.startTabBasedApp({
              tabs: [
                {
                  label: 'Home',
                  screen: 'neil.HomeScreen', // this is a registered name for a screen
                  icon:  sources[0],
                  title: 'Home',
                  navigatorButtons: {
                      leftButtons: [
                        {
                          icon: sources[4],
                          title: "Menu",
                          id: "sideDrawerToggle",
                        }
                      ]
                  }
                },
                {
                  label: 'Room',
                  screen: 'neil.RoomScreen',
                  icon: sources[1],
                  title: 'Rooms',
                  navigatorButtons: {
                    leftButtons: [
                      {
                        icon: sources[4],
                        title: "Menu",
                        id: "sideDrawerToggle",
                      }
                    ]
                }
                },
                {
                  label: 'Job',
                  screen: 'neil.JobScreen',
                  icon: sources[2],
                  title: 'Jobs',
                  navigatorButtons: {
                    leftButtons: [
                      {
                        icon: sources[4],
                        title: "Menu",
                        id: "sideDrawerToggle",
                      }
                    ]
                }
                },
                {
                  label: 'Ad',
                  screen: 'neil.AdScreen',
                  icon: sources[3],
                  title: 'Ads',
                  navigatorButtons: {
                    leftButtons: [
                      {
                        icon: sources[4],
                        title: "Menu",
                        id: "sideDrawerToggle",
                      }
                    ]
                }
                }
              ],
              drawer: { // optional, add this if you want a side menu drawer in your app
                  left: { // optional, define if you want a drawer from the left
                    screen: 'neil.SideDrawerScreen', // unique ID registered with Navigation.registerScreen
                    // type: 'MMDrawer', // optional, iOS only, types: 'TheSideBar', 'MMDrawer' default: 'MMDrawer'
                    // animationType: 'door', //optional, iOS only, for MMDrawer: 'door', 'parallax', 'slide', 'slide-and-scal                                     // for TheSideBar: 'airbnb', 'facebook', 'luvocracy','wunder-list'
                    
                },
              }
            });
      }).catch(error => {
        console.log(error);
      }) 
}



export default MainTab;