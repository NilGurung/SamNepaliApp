import React, {Component} from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import { connect } from 'react-redux'; 
import _ from 'lodash';
import Jobs from '../components/Job/Jobs';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 353,
      flexWrap: 'wrap',
      padding: 5
    },
})
                  
class JobScreen extends Component {
    constructor(props) {
        super(props);
        // Bind the this context to the handler function
        this.setAddButtonStatus = this.setAddButtonStatus.bind(this);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
        
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
    componentWillMount() {
       // this.props.loadInitialContacts();
    }

    setAddButtonStatus() {
        this.props.navigator.push({
            screen: 'neil.AddScreen',
            title: 'Add a New Job',
            animated: true, // does the push have transition animation or does it happen immediately (optional)
            animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
            passProps: { onDone: () => this.addNewJob() }
        })
    }


    //add job
    addNewJob() {
        console.log('new job Added');
    }

    render() {
        return (
          <View style={styles.container}>
            <View style={styles.container}>
                <Jobs onPress={this.setAddButtonStatus.bind(this)}/>
            </View>
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

export default JobScreen;
