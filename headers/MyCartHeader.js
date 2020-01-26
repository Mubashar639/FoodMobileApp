import React, { useState } from "react";
import {Image} from 'react-native'

import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { EvilIcons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
const MyCartHeader = props => {
  const [isSearch, setIsSearch] = useState(false);
  //   bottle-wine
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>MY CART</Text>
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
    width: "100%"
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: hp('3'),
    color: "#3b448b",
    marginLeft: wp('-13'),
    textAlign:'center'
  },
  iconStyle: {
    width :wp('6'),
    height:hp('5'),
    position: "absolute",
      right: wp('4'),
      top:hp('-0.5')
  },
});

export default MyCartHeader;
