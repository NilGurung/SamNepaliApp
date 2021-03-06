import React, {Component} from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/EvilIcons';
import CompanyItem from './CompanyItem';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
})
                  
class CompanyList extends Component {

    static navigationOptions = {
        tabBarLabel: 'Companies',
        tabBarIcon: ({ tintColor }) =>
        <Icon name={'question'} size={45}  style={[{color: tintColor}]} />
    }

    render() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2,
        });
        this.dataSource = ds.cloneWithRows(this.props.companies)
        return(
            <View style={styles.container}>
                <ListView
                    enableEmptySections={true}
                    dataSource = {this.dataSource}
                    renderRow = {
                        (rowData) => 
                            <CompanyItem companies={rowData} />
                        }
                />    
            </View>
        )   
  }
}

const mapStateToProps = state => {
    const people = _.map(state.people, (val, uid) => {
      return { ...val, uid};
    });
  
    const companies =
      _.chain(people)
      .groupBy('company')
      .map((value, key) => {
        return {
          company: key,
          names: value
        };
      })
      .value();
      return {
        companies,
      };
  };
  
  export default connect(mapStateToProps)(CompanyList);