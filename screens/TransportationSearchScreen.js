import React, { PureComponent } from "react";
import { Text, View,StyleSheet } from "react-native";
import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import TransportationSearch from "../components/TransportationSearchComponent";
import TransportationHeader from '../headers/TransportationHeader'


class TransportationSearchScreen extends PureComponent {
  state = {
    name:"search"
  }
    static navigationOptions = ({ navigation }) => {
        return {
          // title: "TRANSPORTAION",
          headerStyle: {
            backgroundColor: "#fceccf",
            height: hp("8.5")
          },
          headerTitleStyle: {
            fontSize:hp('1')
          },
          headerLeft: () => (
            <AntDesign
            onPress={() => navigation.goBack()}
            style={styles.leftButton}
            name="left"
            size={hp("3")}
            color="gray"
            />
          ),
    
          headerTitle: () => <TransportationHeader getState = {navigation.state} />,
        };
      };
      componentDidMount(){
        this.props.navigation.setParams({
          myTitle: this.getValues
         })
      }
      getValues = (value)=>{
        console.log('value',value)
      }
  render() {
    return (
      <View>
        <TransportationSearch navigation={this.props.navigation} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    leftButton: {
      marginLeft: hp('2.5')
    },
    
  });
export default TransportationSearchScreen;
