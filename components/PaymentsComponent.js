import React, { PureComponent } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Card, CardItem, Radio, Left } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { RNSlidingButton, SlideDirection } from "rn-sliding-button";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
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
                  fontSize: hp('3'),
                  color: "#ada193",
                  left: hp('3')
                }}
              >
                example@exmple.com
              </Text>
              <Text
                style={{
                  fontSize: hp('2.5'),
                  color: "#ada193",
                  left: hp('3'),
                  marginTop: hp('3')
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
                  fontSize: hp('3'),
                  color: "#ada193",
                  left: hp('3')
                }}
              >
                **** **** **** 9597
              </Text>
              <Text
                style={{
                  fontSize: hp('2.5'),
                  color: "#ada193",
                  left: hp('3'),
                  marginTop: hp('3')
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
            marginTop: hp('20'),
            alignSelf:'center',
            backgroundColor: "#27378f",
            borderRadius: hp('20')
          }}
          height={hp('9.2')}
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
    flex:1,
    backgroundColor: "#fbf4e4",
    // height: "100%"
  },
  card: {
    width: wp("93%"),
    alignSelf:'center',
    height: hp('25'),
    marginTop: hp('2'),
    // marginLeft: hp('2'),
    backgroundColor: "#ffeed0"
  },
  cardItemStyle: {
    width: "100%",
    backgroundColor: "#ffeed0"
  },
  detailStyle: {
    width: wp("80%"),
    height: wp('25'),
    position: "absolute",
    top: hp('12')
  },
  titleText: {
    width: wp('18'),
    height: hp('10'),
    fontSize: hp('4'),
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#27378f",
    backgroundColor: "#fff",
    borderRadius: hp('100'),
    zIndex: 999
  },
  slideText: {
    position: "absolute",
    opacity: 0.8,
    top: hp('78'),
    left: hp('15'),
    fontSize: hp('3'),
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff"
  }
});
export default Payments;
