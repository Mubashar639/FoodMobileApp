// @flow
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Item,
  Button,
  Input,
  Icon,
  CheckBox,
  Body,
  ListItem,
  Picker
} from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: undefined,
      name: "",
      email: "",
      password: "",
      birth: "",
      role:"user"
    };
  }

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
              type="FontAwesome"
              name="user-circle-o"
              style={{ color: "#4050b5" }}
            />
            <Input
              onChangeText={e => this.setState({ name: e })}
              name="name"
              placeholder="Your Full Name"
              placeholderTextColor="#dddddd"
            />
          </Item>
        </View>
        <View style={{ flex: 1 }}>
          <Item>
            <Icon
              type="MaterialCommunityIcons"
              name="email-outline"
              style={{ color: "#4050b5" }}
            />
            <Input
              name="email"
              onChangeText={e => this.setState({ email: e })}
              placeholder="Your-Email@gmail.com"
              placeholderTextColor="#dddddd"
            />
          </Item>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Item>
            <Icon
              type="MaterialIcons"
              name="lock-outline"
              style={{ color: "#4050b5" }}
            />
            <Input
              name="password"
              onChangeText={e => this.setState({ password: e })}
              placeholder="************"
              placeholderTextColor="#dddddd"
            />
          </Item>
        </View>
        <View style={{ flex: 1 }}>
          <Item>
            <Icon
              type="FontAwesome"
              name="calendar"
              style={{ color: "#4050b5" }}
            />
            <Input
              name="birth"
              onChangeText={e => this.setState({ birth: e })}
              placeholder="Date Of Birth"
              placeholderTextColor="#dddddd"
            />
          </Item>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Item picker>
            <Icon type="Feather" name="users" style={{ color: "#4050b5" }} />
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="Gender"
              placeholderTextColor="#dddd"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.gender}
              onValueChange={e => this.setState({ gender: e })}
            >
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>
          </Item>
        </View>

        <View style={styles.buttonStyle}>
          <Button
            style={{ justifyContent: "center" }}
            onPress={() => {
              console.log(this.state);
              this.props.getSignupData(this.state);
              // this.props.navigation.navigate("Home");
            }}
          >
            <Text style={styles.buttonTextStyle}>Sign Up</Text>
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
    marginBottom: hp("2")
  },
  buttonTextStyle: {
    fontSize: hp("2.5"),
    alignSelf: "center",
    textAlign: "center",
    color: "#fff"
    // marginLeft: hp("25")
  }
});
export default Signup;
