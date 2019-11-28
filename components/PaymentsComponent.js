import React, { PureComponent } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Card, CardItem, Radio, Left } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { RNSlidingButton, SlideDirection } from "rn-sliding-button";

class Payments extends PureComponent {
  onSlideRight = () => {
    //perform Action on slide success.
    alert("success");
  };
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <CardItem style={styles.cardItemStyle}>
            <Image
              source={require("../assets/images/paypal.png")}
              //
              width="100px"
            />
            <Radio
              style={{ position: "absolute", top: 20, right: 20 }}
              selected={true}
            />

            <View style={styles.detailStyle}>
              <Text
                style={{
                  fontSize: 20,
                  color: "#ada193",
                  left: 15
                }}
              >
                example@exmple.com
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "#ada193",
                  left: 15,
                  marginTop: 50
                }}
              >
                added 8-3-2019
              </Text>
            </View>

            {/* <Text>example@exmple.com</Text> */}
          </CardItem>
        </Card>
        <Card style={styles.card}>
          <CardItem style={styles.cardItemStyle}>
            <Image
              source={require("../assets/images/visalogo.png")}
              // style ={{,marginTop:-20,left:-20}}
            />
            <Radio
              style={{ position: "absolute", top: 20, right: 20 }}
              selected={true}
            />

            <View style={styles.detailStyle}>
              <Text
                style={{
                  fontSize: 20,
                  color: "#ada193",
                  left: 15
                }}
              >
                **** **** **** 9597
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "#ada193",
                  left: 15,
                  marginTop: 50
                }}
              >
                Expireed 8-3-2024
              </Text>
            </View>

            {/* <Text>example@exmple.com</Text> */}
          </CardItem>
        </Card>

        <RNSlidingButton
          style={{
            width: "80%",
            marginTop: 120,
            left: 50,
            backgroundColor: "#27378f",
            borderRadius: 30
          }}
          height={60}
          onSlidingSuccess={this.onSlideRight}
          slideDirection={SlideDirection.RIGHT}
        >
          <View>
            <Text numberOfLines={1} style={styles.titleText}>
              +
            </Text>
          </View>
        </RNSlidingButton>
        <Text style={styles.slideText}>Add Payment Method</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fbf4e4",
    height: "100%"
  },
  card: {
    width: "93%",
    height: 250,
    marginTop: 20,
    marginLeft: 18,
    backgroundColor: "#ffeed0"
  },
  cardItemStyle: {
    width: "100%",
    backgroundColor: "#ffeed0"
  },
  detailStyle: {
    width: "80%",
    height: 100,
    position: "absolute",
    top: 80
  },
  titleText: {
    width: 60,
    height: 60,
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#27378f",
    backgroundColor: "#fff",
    borderRadius: 50,
    zIndex: 999
  },
  slideText: {
    position: "absolute",
    opacity: 0.8,
    top: 680,
    left: 130,
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff"
  }
});
export default Payments;
