import React, { PureComponent } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Card, CardItem, Radio, Left } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
class Rules extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <CardItem style={styles.cardItemStyle}>
            <View>
              <Text
                style={{
                  fontSize: hp('3'),
                  fontWeight: "bold",
                  marginTop: hp('1'),
                  color: "#443f39"
                }}
              >
                BEFORE YOU VISIT{" "}
              </Text>

              <Text style={{ fontSize: hp('2'), color: "#8b8378" }}>
                Make sure you to know visiting rules
              </Text>
              <Text
                style={{
                  fontSize: hp('3'),
                  fontWeight: "bold",
                  marginTop: hp('1'),
                  color: "#443f39"
                }}
              >
                WHO CAN VISIT?
              </Text>

              <Text style={{ fontSize: hp('2'), color: "#8b8378" }}>
                Make sure you to know visiting rules
              </Text>
            </View>
          </CardItem>
        </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fbf4e4",
    height: hp("100%")
  },
  card: {
    width: wp("93%"),
    height: hp('25'),
    marginTop: hp('2'),
    marginLeft: hp('2'),
    backgroundColor: "#ffeed0"
  },
  cardItemStyle: {
    width: wp("100%"),
    backgroundColor: "#ffeed0"
  }
});
export default Rules;
