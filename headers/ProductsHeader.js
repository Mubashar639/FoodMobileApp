import React, { useState } from "react";
import {Image} from 'react-native'

import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { EvilIcons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
const ProductsHeader = props => {
  //   bottle-wine
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>PRODUCTS</Text>
        <Image
          source = {require('../assets/icons/icon.png')}
          style={styles.iconStyle}
       
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp("100%")
  },
  headerTitle: {
    fontWeight: "bold",
      fontSize: hp('3'),
      color: "#3b448b",
      marginLeft: wp('22'),
   
  },
  iconStyle: {
    width :wp('6'),
    height:hp('5'),
    position: "absolute",
      left: hp('42'),
    //   top:hp('-0.5')
  },

});

export default ProductsHeader;
