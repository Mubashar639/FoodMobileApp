import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
//Import Components
import Products from "../components/ProductsComponent";
import ProductsHeader from "../headers/ProductsHeader";
import { connect } from "react-redux";
import { Getfood } from "../Redux/Epics/food";

class ProductsScreen extends React.Component {

 
  static navigationOptions = ({ navigation }) => {
    let name = navigation.getParam("category");
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

      headerTitle: () => <ProductsHeader name={name} />
    };
  };
  componentWillMount() {
    let name = this.props.navigation.getParam("category");
    this.props.dispatch(Getfood(name));
  }
 
  
  render() {
    return (
      <>
        {this.props.foods ? (
          <Products
            foods={this.props.foods ? this.props.foods : []}
            navigation={this.props.navigation}
          />
        ) : null}
      </>
    );
  }
}

const styles = StyleSheet.create({
  leftButton: {
    marginLeft: hp("2.5")
  }
});


  mapStateToProps = state => {
    console.log(state);
    return {
      foods: state.Foods.foods
    };
  }


export default connect(mapStateToProps)(ProductsScreen);
