import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Item,
  Button,
  Input,
  Icon,
  CheckBox,
  Body,
  ListItem
} from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
class Signin extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          width: wp("90"),
          alignSelf: "center"
        }}
      >
        <View style={{ flex: 1, marginTop: hp("1") }}>
          <Item>
            <Icon
              type="MaterialCommunityIcons"
              name="email-outline"
              style={{ color: "#4050b5" }}
            />
            <Input
              placeholder="Your-Email@gmail.com"
              placeholderTextColor="#dddddd"
            />
          </Item>
        </View>
        <View style={{ flex: 1 }}>
          <Item>
            <Icon
              type="MaterialIcons"
              name="lock-outline"
              style={{ color: "#4050b5" }}
            />
            <Input placeholder="************" placeholderTextColor="#dddddd" />
          </Item>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <CheckBox style={{ marginLeft:hp("-1") }} />

            <Text style={{ marginLeft:hp("3") }} >Remember Me</Text>
          </View>
          <View>
              <Text>Forgot Password</Text>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text
            style={{
              alignSelf: "flex-start",
              color: "#2a3588"
            }}
          >
            Use Your Social Account To Sign In
          </Text>
          <Item regular style={styles.itemStyle}>
            <Icon
              type="Entypo"
              name="facebook-with-circle"
              style={{ color: "#4579d1" }}
            />
            <Icon
              type="Entypo"
              name="twitter-with-circle"
              style={{ color: "#6baae8" }}
            />
            <Icon
              type="FontAwesome"
              name="google-plus-official"
              style={{ color: "#cc5542" }}
            />
          </Item>
        </View>

        <View style={styles.buttonStyle}>
          <Button style={{justifyContent:'center', }}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text style={styles.buttonTextStyle}>Sign In</Text>
          </Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  itemStyle: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("1")
  },
  buttonStyle: {
    width: "100%",
    // marginLeft: hp("3"),
    marginTop: hp("2"),
    marginBottom: hp("2"),
    

  },
  buttonTextStyle: {
    fontSize: hp("2.5"),
    alignSelf:'center',
    textAlign:'center',
    color: "#fff",
    // marginLeft: hp("25")
  }
});
export default Signin;
