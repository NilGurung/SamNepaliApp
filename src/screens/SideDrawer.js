import React, {Component} from 'react';
import {View, Text ,Dimensions, StyleSheet, ListView } from 'react-native';
import MenuItem from '../components/MenuItem';
export default class SideDrawer extends Component {
   

    render() {
        var menus = [
            {
                "title": "Home",
                "icon": 'md-home'
            },
            {
                "title": "Room",
                "icon": 'md-cube'
            },
            {
                "title": "Job",
                "icon": 'md-briefcase'
            },
            {
                "title": "Ads",
                "icon": 'md-megaphone'
            },
            {
                "title": "Logout",
                "icon": 'md-log-out'
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