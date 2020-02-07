import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";


//Import Components
import Home from "../components/HomeComponent";
import { connect } from "react-redux";
import {GetFacilities} from '../Redux/Epics/facilities'
import {GetTranport} from '../Redux/Epics/transportation'
import {GetCategories} from '../Redux/Epics/categories'
import { Getfood } from "../Redux/Epics/food";

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  componentDidMount() {
    this.props.dispatch(Getfood());
  
    this.props.dispatch(GetFacilities());
    this.props.dispatch(GetTranport());
    this.props.dispatch(GetCategories());
  }
  render() {
    return <Home navigation={this.props.navigation} />;
  }
}

export default connect()(HomeScreen);
