import { Navigation } from 'react-native-navigation';


import HomeScreen from './Home';
import RoomScreen from './Rooms';
import JobScreen from './Jobs';
import AdScreen from './Ads';
import SideDrawerScreen from './SideDrawer';
import Icon from 'react-native-vector-icons/Ionicons';


//register all of your app's screens
Navigation.registerComponent('neil.HomeScreen', () => HomeScreen);
Navigation.registerComponent('neil.RoomScreen', () => RoomScreen);
Navigation.registerComponent('neil.JobScreen', () => JobScreen);
Navigation.registerComponent('neil.AdScreen', () => AdScreen);
Navigation.registerComponent('neil.SideDrawerScreen', () => SideDrawerScreen);



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
          title: 'Room',
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
          title: 'Job',
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
          title: 'Ad',
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
  }) 
}



export default MainTab;