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
      selected2: undefined
    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
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
            <Icon type="FontAwesome" name="user-circle-o" style={{ color: "#4050b5" }} />
            <Input
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
            <Input placeholder="************" placeholderTextColor="#dddddd" />
          </Item>
        </View>
        <View style={{ flex: 1 }}>
          <Item>
            <Icon
              type="FontAwesome"
              name="calendar"
              style={{ color: "#4050b5" }}
            />
            <Input placeholder="Date Of Birth" placeholderTextColor="#dddddd" />
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
              placeholderTextColor = '#dddd'
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="Male" value="key0" />
              <Picker.Item label="Female" value="key1" />
            </Picker>
          </Item>
        </View>

        <View style={styles.buttonStyle}>
          <Button style={{ justifyContent: "center" }}
            onPress={() => this.props.navigation.navigate("Home")}
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
