import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ImageBackground
} from "react-native";
import Signin from "./SigninComponent";
import Signup from "./SignupComponent";
import Tabs from "react-native-tabs";
import { connect } from "react-redux";
import  SignupAction  from "../../Redux/Epics/signup";
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "signin",
    };
  }
  getSignupData = (data)=>{
    let self = this
    self.props.dispatch(SignupAction(data))
  }
  render() {
    var self = this;
    // console.log('PRops',this.props)

    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <ImageBackground
            // resizeMode="stretch"
            style={styles.backImg}
            source={require("../../assets/images/signin.png")}
          >
            <View
              style={
                this.state.page === "signin"
                  ? styles.transViewGrayStyle
                  : styles.transViewBlueStyle
              }
            >
              <Tabs
                selected={this.state.page}
                style={{ backgroundColor: "transparant" }}
                // selectedStyle={{ color: "red" }}
                onSelect={el => this.setState({ page: el.props.name })}
              >
                <Text
                  name="signin"
                  selectedIconStyle={{
                    borderBottomWidth: 3,
                    borderBottomColor: "blue"
                  }}
                  style={
                    this.state.page === "signin"
                      ? styles.transTextGrayStyle
                      : styles.transTextBlueStyle
                  }
                >
                  SIGN IN
                </Text>
                <Text
                  name="signup"
                  selectedIconStyle={{
                    borderBottomWidth: 3,
                    borderBottomColor: "#f5eac7"
                  }}
                  style={
                    this.state.page === "signin"
                      ? styles.transTextGrayStyle
                      : styles.transTextBlueStyle
                  }
                >
                  SIGN UP
                </Text>
              </Tabs>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.container}>
          {this.state.page === "signin" ? (
            <Signin navigation={this.props.navigation} />
          ) : (
            <Signup getSignupData = {this.getSignupData} navigation={this.props.navigation} />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: 'center',
    // alignItems: 'center',
    // width:'100%',
    // backgroundColor: 'blue',
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  backImg: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  transViewBlueStyle: {
    flex: 1,
    backgroundColor: "blue",
    opacity: 0.4
  },
  transViewGrayStyle: {
    flex: 1,
    backgroundColor: "gray",
    opacity: 0.4
  },
  transTextBlueStyle: {
    color: "#f5eac7"
  },
  transTextGrayStyle: {
    color: "blue"
  }
});
export default connect()(Example);
