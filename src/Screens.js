import { Navigation } from 'react-native-navigation';
import HomeScreen from './screens/Home';
import RoomScreen from './screens/Rooms';
import JobScreen from './screens/Jobs';
import AdScreen from './screens/Ads';
import SideDrawerScreen from './screens/SideDrawer';
import LoginScreen from './components/Login';
import AddScreen from './components/room/AddRoom';
import EntryScreen  from './screens/Entry';


export function registerScreens(store, provider) {
    //register all of your app's screens
    Navigation.registerComponent('neil.EntryScreen', () => EntryScreen);
    Navigation.registerComponent('neil.HomeScreen', () => HomeScreen);
    Navigation.registerComponent('neil.RoomScreen', () => RoomScreen);
    Navigation.registerComponent('neil.JobScreen', () => JobScreen);
    Navigation.registerComponent('neil.AdScreen', () => AdScreen);
    Navigation.registerComponent('neil.LoginScreen', () => LoginScreen);
    Navigation.registerComponent('neil.SideDrawerScreen', () => SideDrawerScreen);
    Navigation.registerComponent('neil.AddScreen', () => AddScreen);
}   

