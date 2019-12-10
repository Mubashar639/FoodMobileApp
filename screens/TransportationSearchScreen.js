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
    static navigationOptions = ({ navigation }) => {
        return {
          title: "TRANSPORTAION",
          headerStyle: {
            backgroundColor: "#fceccf",
            height:hp("10")
          },
          headerTitleStyle: {
            fontSize:hp('1')
          },
          headerLeft: () => (
            <AntDesign
              onPress={() => navigation.goBack()}
              style={styles.leftButton}
              name="left"
              size={hp('6')}
              color="gray"
            />
          ),
    
          headerTitle: () => <TransportationHeader />,
        };
      };
  render() {
    return (
      <View>
        <TransportationSearch />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    leftButton: {
      marginLeft: 20
    },
    
  });
export default TransportationSearchScreen;
