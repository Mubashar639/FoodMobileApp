import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";

//Import Components
import Auth from "../components/Auth/index";

class AuthScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <Auth navigation={this.props.navigation} />;
  }
}


export default AuthScreen;
