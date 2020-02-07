import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { connect } from "react-redux";

//Import Components
import MyCarePackages from "../components/MyCarePackagesComponent";
import MyCarePackagesHeader from '../headers/MyCarePackagesHeader'

class MyCarePackagesScreen extends React.Component {
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

      headerTitle: () => <MyCarePackagesHeader />,
    };
  };
  render() {
    return <MyCarePackages category = {this.props.category.category} navigation={this.props.navigation} />;
  }
}

const styles = StyleSheet.create({
  leftButton: {
    marginLeft: 20
  },
  
});
mapStateToProps = state => {
  // console.log(state.Category)
  return {
    category: state.Category
  };
};
export default connect(mapStateToProps)(MyCarePackagesScreen);
