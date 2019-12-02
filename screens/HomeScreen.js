import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";

//Import Components
import Home from "../components/HomeComponent";

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <Home navigation={this.props.navigation} />;
  }
}

export default HomeScreen;
