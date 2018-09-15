import { Navigation } from 'react-native-navigation';
import HomeScreen from './screens/home.screen';
import RoomScreen from './screens/room.screen';
import JobScreen from './screens/job.screen';
import AdScreen from './screens/ad.screen';
import SideDrawerScreen from './screens/slide.drawer';
import LoginScreen from './components/Login';
import AddScreen from './components/room/AddRoom';
import EntryScreen  from './screens/entry.screen';
import SplashScreen  from './screens/splash.screen';


export function registerScreens(store, provider) {
    //register all of your app's screens
    Navigation.registerComponent('neil.SplashScreen', () => SplashScreen);
    Navigation.registerComponent('neil.EntryScreen', () => EntryScreen);
    Navigation.registerComponent('neil.HomeScreen', () => HomeScreen);
    Navigation.registerComponent('neil.RoomScreen', () => RoomScreen, store, provider);
    Navigation.registerComponent('neil.JobScreen', () => JobScreen);
    Navigation.registerComponent('neil.AdScreen', () => AdScreen);
    Navigation.registerComponent('neil.LoginScreen', () => LoginScreen);
    Navigation.registerComponent('neil.SideDrawerScreen', () => SideDrawerScreen);
    Navigation.registerComponent('neil.AddScreen', () => AddScreen);
}   

