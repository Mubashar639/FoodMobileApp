import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card, CardItem, Button, Form, Item, Input } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
const EmailComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require("../../assets/images/forgetpasswordscreenlogo.png")}
      />
      <Form style={styles.formStyle}>
        <Text style={styles.titleStyle}>Please enter your email address</Text>
        <Item regular style={styles.itemStyle}>
          <Input placeholder="Username" />
        </Item>

        <View style={styles.buttonStyle}>
          <Button style = {{justifyContent:'center'}} large>
            <Text style={styles.buttonTextStyle}>Next</Text>
          </Button>
        </View>
      </Form>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fbf4e4"
  },
  formStyle: {
    width: "100%",
    marginTop: hp('52')
  },
  titleStyle: {
    marginLeft: hp("3"),
    marginRight: hp("1"),
    fontSize: hp("2.8"),
    color: "#3f51b5"
  },
  itemStyle: {
    width: "90%",
    marginBottom: hp("3"),
    paddingLeft: hp("1"),
    marginLeft: hp("3")
  },
  buttonStyle: {
    width: "90%",
    marginLeft: hp("3")
  },
  buttonTextStyle: {
    fontSize: hp("3"),
    color: "#fff",
    // marginLeft: hp("25")
  },
  imageStyle: { alignSelf: "center", top: hp("6"), position: "absolute" }
});
export default EmailComponent;
