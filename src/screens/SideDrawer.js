import React, {Component} from 'react';
import {View, Text ,Dimensions, StyleSheet, ListView } from 'react-native';
import MenuItem from '../components/MenuItem';
import firebase from 'firebase';

export default class SideDrawer extends Component {
    constructor(props) {
        super(props)
        this._goToHome = this._goToHome.bind(this);
        this._goToRooms = this._goToRooms.bind(this);
        this._goToJobs = this._goToJobs.bind(this);
        this._goToAds = this._goToRooms.bind(this);
        this._logout = this._logout.bind(this);
		//this._open = this._openSearch.bind(this);
    }

    //open home
    _goToHome() {
		this._toggleDrawer();
		this.props.navigator.popToRoot({
			screen: 'neil.HomeScreen'
		});
	}

    //open room
    _goToRooms() {
		this._toggleDrawer();
		this.props.navigator.switchToTab({
            tabIndex: 1 // (optional) if missing, this screen's tab will become selected
          });
	}

    //open job
    _goToJobs() {
		this._toggleDrawer();
		this.props.navigator.switchToTab({
            tabIndex: 2 // (optional) if missing, this screen's tab will become selected
          });
	}

    //open ad
    _goToAds() {
		this._toggleDrawer();
		this.props.navigator.switchToTab({
            tabIndex: 3 // (optional) if missing, this screen's tab will become selected
          });
    }
    

    //Logout
    _logout() {
        var self = this
         firebase.auth().signOut()
            .then(function() {
                // Sign-out successful.
                self._toggleDrawer();
                self.props.navigator.popToRoot({
                    animated: true, // does the popToRoot have transition animation or does it happen immediately (optional)
                    animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the popToRoot have different transition animation (optional)
                  });
            })
            .catch(function(error) {
                // An error happened
                    console.log(error)
            })
        }

    // toggle drawer
    _toggleDrawer() {
		this.props.navigator.toggleDrawer({
			to: 'closed',
			side: 'left',
			animated: true
		});
	}

    render() {
        var menus = [
            {
                "title": "Home",
                "icon": "md-home",
                "tabIndex": 0,
                "onPress": this._goToHome
            },
            {
                "title": "Room",
                "icon": "md-cube",
                "tabIndex": 1,
                "onPress": this._goToRooms
            },
            {
                "title": "Job",
                "icon": "md-briefcase",
                "tabIndex": 2,
                "onPress": this._goToJobs
            },
            {
                "title": "Ads",
                "icon": "md-megaphone",
                "tabIndex": 3,
                "onPress": this._goToAds
            },
            {
                "title": "Logout",
                "icon": "md-log-out",
                 "onPress": this._logout
            },
        ]
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2,
        });
        this.dataSource = ds.cloneWithRows(menus)
        return (
            <View style={{width: Dimensions.get("window").width * 0.8}}>
                <ListView
                    enableEmptySections={true}
                    dataSource = {this.dataSource}
                    renderRow = {
                        (rowData) => 
                            <MenuItem menu={rowData} />
                        }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        backgroundColor: "white",
        flex: 1,
    }
})