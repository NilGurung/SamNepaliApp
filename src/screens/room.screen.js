import React, {Component} from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import { connect } from 'react-redux'; 
import _ from 'lodash';
import rooms from '../reducers/room.json';
import RoomList from '../components/room/RoomList';
import SearchBar from 'react-native-search-bar'
//import { loadInitialRooms } from '../actions/room';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 353,
      flexWrap: 'wrap',
      paddingTop: 20,
      paddingLeft: 10,
    },
})
                  
class Rooms extends Component {
    
    constructor(props) {
        super(props);
        
        // Bind the this context to the handler function
        this.setAddButtonStatus = this.setAddButtonStatus.bind(this);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
        
        
    }

    state = {
        search: '',
        rooms: this.props.rooms
      }
    
    search1: SearchBar

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

    componentDidMount() {
        this.search1.focus();
        //this.props.addNewRoom = this.addNewRoom.bind(this)
    }


    setAddButtonStatus() {
        this.props.navigator.push({
            screen: 'neil.AddScreen',
            title: 'Add a New Room',
            animated: true, // does the push have transition animation or does it happen immediately (optional)
            animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
            passProps: { onDone: () => this.addNewRoom() }
        })
    }

    cancelSearchRooms() {
        this.setState({
            rooms: rooms
          });
          this.search1.unFocus()
    }

    componentWillMount() {
        //this.props.loadInitialRooms();
    }

    //add rooms
    addNewRoom() {
        console.log('new room Added');
    }


    searchRooms() {
        var searchText = this.state.search;
        var regexSearchWord = new RegExp(searchText, 'i');
        var searchRooms = [];
        this.state.rooms.map(
            function(room) {
                
                if(room.title.search(regexSearchWord) !== -1) {
                    searchRooms.push(room);
                 }
            } 
        )
        
        this.setState({
          rooms: searchRooms
        });
    }



    render() { 
        return (
          <View style={styles.container}>
            <SearchBar
                ref={ref => (this.search1 = ref)}
                onChangeText={search => this.setState({ search })}
                placeholder='Search Rooms'
                onSearchButtonPress={() => this.searchRooms()}
                onCancelButtonPress={() => this.cancelSearchRooms()}
            />
            <RoomList onPress={this.setAddButtonStatus.bind(this)} rooms={this.state.rooms}/>
          </View>
        );
      }
}
const mapStateToProps = state => {
    const rooms = _.map(state.rooms, (val) => {
        return {...val};
    });
    return {
        rooms,
        addView: state.addView
    };
};

export default connect(mapStateToProps, {})(Rooms);

