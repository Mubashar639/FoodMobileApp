import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";

//Import Components
import Transportation from "../components/TransportationComponent";
import TransportationHeader from '../headers/TransportationHeader'

class TransportationScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "TRANSPORTAION",
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

      headerTitle: () => <TransportationHeader />,
    };
  };
  render() {
    return <Transportation navigation={this.props.navigation} />;
  }
}

const styles = StyleSheet.create({
  leftButton: {
    marginLeft: 20
  },
  
});

export default TransportationScreen;
