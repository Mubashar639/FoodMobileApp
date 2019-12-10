import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from "react-native-responsive-screen";
import { ScreenOrientation } from 'expo';

class Demo extends Component {
  state = {
    orientation: ""
  };
  componentDidMount() {
      console.log(ScreenOrientation)
    Dimensions.addEventListener("change", ({ window: { height, width } }) => {
      if (width > height) {
        ScreenOrientation.Orientation.LANDSCAPE = 'LANDSCAPE'
        this.setState({ orientation: "Portrait" });

      } else {
        this.setState({ orientation: "landspacse" });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.myText}>Demo</Text>
          <Text style={styles.myText}>{this.state.orientation}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  textWrapper: {
    height: hp("70%"), // 70% of height device screen
    width: wp("80%"), // 80% of width device screen
    backgroundColor: "red"
  },
  myText: {
    fontSize: hp("5") // End result looks like the provided UI mockup
  }
});

export default Demo;
