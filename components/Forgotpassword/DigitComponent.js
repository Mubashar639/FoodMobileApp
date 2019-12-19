import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card, CardItem, Button, Form, Item, Input } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
const DigitComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require("../../assets/images/forgetpasswordscreenlogo.png")}
      />
      <Form style={styles.formStyle}>
        <Text style={styles.titleStyle}>
          You will get a 6 digit pin on your Email in 60 sec. Enter here if you
          didn`t get get the email, Please <Text  style={styles.titleStyle} style = {{color:'#3f51b5'}}>Try again!</Text>
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Item regular style={styles.itemStyle}>
            <Input maxLength={1} />
          </Item>
          <Item regular style={styles.itemStyle}>
            <Input maxLength={1} />
          </Item>
          <Item regular style={styles.itemStyle}>
            <Input maxLength={1} />
          </Item>
          <Item regular style={styles.itemStyle}>
            <Input maxLength={1} />
          </Item>
          <Item regular style={styles.itemStyle}>
            <Input maxLength={1} />
          </Item>
          <Item regular style={styles.itemStyle}>
            <Input maxLength={1} />
          </Item>
        </View>
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
   flex:1,
    backgroundColor: "#fbf4e4"
  },
  formStyle: {
    width: "100%",
    marginLeft: 0,
    marginTop: hp('42')
  },
  titleStyle: {
    marginLeft: hp('1'),
    marginRight: hp('1'),
    fontSize: hp('2.8'),
    color: "#b1aa9a",
    marginBottom: hp('4'),
    textAlign:'center'
  },
  itemStyle: {
    width: "10%",
    marginBottom: hp('2'),
    paddingLeft: hp('1'),
    marginLeft: hp('1.5')
  },
  buttonStyle: {
    width: "90%",
    marginLeft: hp('3')
  },
  buttonTextStyle: {
    fontSize: hp('3'),
    color: "#fff",
    // marginLeft: hp('25')
  },
  imageStyle: { alignSelf: "center", top: hp("6"), position: "absolute" }
});
export default DigitComponent;
