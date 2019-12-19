import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
//Import Components
import MyTrips from "../components/MyTripsComponent";
import MyTripsHeader from '../headers/MyTripsHeader'

class MyTripsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "FACILITIES",
      headerStyle: {
        backgroundColor: "#fceccf",
        height: hp("8.5")

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

      headerTitle: () => <MyTripsHeader />,
    };
  };
  render() {
    return <MyTrips navigation={this.props.navigation} />;
  }
}

const styles = StyleSheet.create({
  leftButton: {
    marginLeft: 20
  },
  
});

export default MyTripsScreen;
