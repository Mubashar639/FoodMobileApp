import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";

//Import Components
import MyCarePackages from "../components/MyCarePackagesComponent";
import MyCarePackagesHeader from '../headers/MyCarePackagesHeader'

class MyCarePackagesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "FACILITIES",
      headerStyle: {
        backgroundColor: "#fceccf",
        height: 80
      },
      headerLeft: () => (
        <AntDesign
          onPress={() => navigation.goBack()}
          style={styles.leftButton}
          name="left"
          size={36}
          color="gray"
        />
      ),

      headerTitle: () => <MyCarePackagesHeader />,
    };
  };
  render() {
    return <MyCarePackages navigation={this.props.navigation} />;
  }
}

const styles = StyleSheet.create({
  leftButton: {
    marginLeft: 20
  },
  
});

export default MyCarePackagesScreen;
