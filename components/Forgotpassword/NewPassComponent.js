import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card, CardItem, Button, Form, Item, Input } from "native-base";

const NewPassComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require("../../assets/images/forgetpasswordscreenlogo.png")}
      />
      <Form style={styles.formStyle}>
        <Text style={styles.titleStyle}>Enter new password</Text>
        <Item regular style={styles.itemStyle}>
          <Input placeholder="********" />
        </Item>
        <Text style={styles.titleStyle}>Enter new password again</Text>

        <Item regular style={styles.itemStyle}>
          <Input placeholder="********" />
        </Item>

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
    marginTop: 370
  },
  titleStyle: {
    marginLeft: 15,
    fontSize: 17,
    color: "#3f51b5",
  },
  itemStyle: {
    width: "93%",
    marginBottom: 15,
    paddingLeft: 10,
    marginLeft: 15
  },
  buttonStyle: {
    width: "93%",
    marginLeft: 15
  },
  buttonTextStyle: {
    fontSize: 23,
    color: "#fff",
    marginLeft: "45%"
  },
  imageStyle: { alignSelf: "center", top: 80, position: "absolute" }
});
export default NewPassComponent;
