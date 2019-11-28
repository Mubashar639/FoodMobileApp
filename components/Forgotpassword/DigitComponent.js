import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card, CardItem, Button, Form, Item, Input } from "native-base";

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
          didn`t get get the email <Text  style={styles.titleStyle} style = {{color:'#3f51b5'}}>Try again!</Text>
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
          <Button large>
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
    marginLeft: 0,
    marginTop: 370
  },
  titleStyle: {
    marginLeft: 15,
    marginRight: 15,
    fontSize: 21,
    color: "#b1aa9a",
    marginBottom: 40,
    textAlign:'center'
  },
  itemStyle: {
    width: "10%",
    marginBottom: 25,
    paddingLeft: 10,
    marginLeft: 15
  },
  buttonStyle: {
    width: "90%",
    marginLeft: 25
  },
  buttonTextStyle: {
    fontSize: 23,
    color: "#fff",
    marginLeft: "45%"
  },
  imageStyle: { alignSelf: "center", top: 80, position: "absolute" }
});
export default DigitComponent;
