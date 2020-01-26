import React, { PureComponent } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, CardItem, Button, Form, Item, Input } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
class TransportationsSearch extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <CardItem style={styles.cardItemStyle}>
            <Form style={styles.formStyle}>
              <Text style={styles.titleStyle}>Search Transport</Text>
              <Item style={styles.itemStyle} rounded>
                <Input placeholder="Username" />
              </Item>
              <Item style={styles.itemStyle} rounded>
                <Input placeholder="Password" />
              </Item>

              <View style={styles.buttonStyle}>
                <Button onPress = {()=>this.props.navigation.navigate('Transport')} style={{ borderRadius: 40, justifyContent: "center" }}>
                  <Text style={styles.buttonTextStyle}>Search</Text>
                </Button>
              </View>
            </Form>
          </CardItem>
        </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbf4e4",
    // justifyContent:'center',
    alignContent: "center"
  },
  card: {
    width: wp("96%"),
    height: hp("45%"),
    // marginLeft: wp('2'),
    marginTop: wp("10"),
    backgroundColor: "#ffeed0",
    alignSelf: "center"
    // justifyContent:'center',
  },
  cardItemStyle: {
    width: wp("95%"),
    alignContent: "center",

    backgroundColor: "#ffeed0"
  },
  formStyle: {
    // marginLeft: wp('2.5'),
    alignContent: "center",

    width: "97%",
    backgroundColor: "#ffeed0"
  },
  titleStyle: {
    alignSelf: "center",
    fontSize: hp("3"),
    color: "#3f51b5",
    marginTop: hp("3"),
    marginBottom: hp("5")
  },
  itemStyle: {
    backgroundColor: "#fff",
    marginBottom: hp("4"),
    paddingLeft: hp("2")
  },
  buttonStyle: {
    width: wp("50"),
    alignSelf: "center"
  },
  buttonTextStyle: {
    fontSize: hp("3"),
    color: "#fff"
    // marginLeft: wp("17")
  }
});
export default TransportationsSearch;
