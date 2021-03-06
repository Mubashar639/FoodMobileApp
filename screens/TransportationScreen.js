import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
//Import Components
import Transportation from "../components/TransportationComponent";
import TransportationHeader from "../headers/TransportationHeader";
import { connect } from "react-redux";

class TransportationScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "TRANSPORTAION",
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

      headerTitle: () => <TransportationHeader />
    };
  };
  render() {
    return (
      <Transportation
        transports={this.props.transports.transports}
        navigation={this.props.navigation}
      />
    );
  }
}

const styles = StyleSheet.create({
  leftButton: {
    marginLeft: hp("2.5")
  }
});
mapStateToProps = state => {
  // console.log(state)
  return {
    transports: state.Transport
  };
};
export default connect(mapStateToProps)(TransportationScreen);
