import React, {Component} from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import { connect } from 'react-redux'; 
import _ from 'lodash';
import HomeItem from '../components/home/HomeItem';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import Icon from 'react-native- vector-icons/';
//import HomeDetails from '../components/home/HomeDetails';
//import { loadInitialContacts } from '../actions';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 353,
      flexWrap: 'wrap',
      paddingTop: 20,
      paddingLeft: 20,
    },
})
                  
class Home extends Component {

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
        console.log(props);
    }

    onNavigatorEvent = event => {
        if(event.type === "NavBarButtonPress") {
            if(event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
                    animated: true, // does the toggle have transition animation or does it happen immediately (optional)
                    
                  });
            }
        }
    }

    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) =>
        <Icon name={'home'} size={45}  color={tintColor} />
    }

    componentWillMount() {
        //this.props.loadInitialContacts();
    }

    renderInitialView() {
        // const ds = new ListView.DataSource({
        //     rowHasChanged: (r1,r2) => r1 !== r2,
        // });
        // this.dataSource = ds.cloneWithRows(this.props.people)
        // if(this.props.detailsView === true) {
        //     return (
        //          <HomeDetails />
        //     );
        // } else {
        //     return (
        //     <ListView
        //             enableEmptySections={true}
        //             dataSource = {this.dataSource}
        //             renderRow = {
        //                 (rowData) => 
        //                     <HomeItem job={rowData} />
        //                 }
        //         />
        //         )
        // }
    }


    render() {
        return (
          <View style={styles.container}>
            {/* {this.renderInitialView()} */}
            <Text>Home</Text>
          </View>
        );
      }
}

// const mapStateToProps = state => {
//     const job = _.map(state.job, (val, uid) => {
//         return {...val, uid};
//     });
//     return { 
//         job,
//         detailsView: state.detailsView
//     };
// };

export default Home;
