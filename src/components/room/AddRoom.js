import React, {Component} from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { MKTextField, MKColor, MKButton} from 'react-native-material-kit';
import { Dropdown } from 'react-native-material-dropdown';

import { connect } from 'react-redux';
// import * as actions from '../actions';

const styles = StyleSheet.create({
    form: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    fieldStyle : {
        height: 140,
        color: MKColor.Orange
    },
    addButton: {
        backgroundColor: 'red',
        marginTop: 120,
    }
})

const AddButton = MKButton.coloredButton()
    .withText('ADD')
    .build();
                  
class AddRoom extends Component {
    static navigationOptions = {
        tabBarLabel: 'Add Person',
        tabBarIcon: ({ tintColor }) =>
        <Icon name={'plus'} size={45}  styles={[{color: tintColor}, styles.icon]} />
    }

    onAddPress() {
        const { location, details} = this.props;

        this.props.createNewRoom({ location, details});
        
        this.props.navigation.navigate('Rooms');
    }
    
    render() {
        let data = [{
            value: 'VIC',
          }, {
            value: 'NSW',
          }, {
            value: 'Brisbane',
          }];
        return(
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <Dropdown
                        label='Select the State'
                        data={data}

                    />
                    <MKTextField
                        textInputStyle={styles.fieldStyle}
                        placeholder={'Details...'}
                        tintColor = {MKColor.Teal}
                        value={this.props.details}
                        //onChangeText={value => this.props.formUpdate({prop: 'details', value})}
                        
                    />
                    
                    <View style={styles.addButton}>
                        <AddButton onPress={this.onAddPress.bind(this)} />
                    </View>
                </View>
            </ScrollView>
        )   
  }
}

const mapStateToProps = state => {
    const { location, details} = state
    return { location, details};
};




export default AddRoom;
