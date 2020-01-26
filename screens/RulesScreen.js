import React from "react";
import { StyleSheet ,Image } from "react-native";

import {
  EvilIcons,
  AntDesign,
  Entypo,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
//Import Components
import Rules from "../components/RulesComponent";

class RulesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "RULES & REGULATIONS",
      headerStyle: {
        backgroundColor: "#fceccf",
        height: hp("8.5")

      },
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: hp('2.7'),
        color: "#3b448b",
        textAlign: "center",
        marginLeft: hp('6')
      },
      headerRight: () => (
        <Image
          source = {require('../assets/icons/icon.png')}
          style={styles.iconStyle}
       
        />
      ),
      headerLeft: () => (
        <AntDesign
        onPress={() => navigation.goBack()}
        style={styles.leftButton}
        name="left"
        size={hp("3")}
        color="gray"
        />
      )
    };
  };
  render() {
    return <Rules navigation={this.props.navigation} />;
  }
}
const styles = StyleSheet.create({
  leftButton: {
    marginLeft:hp('2.5')

  },
  iconStyle:{
    width :wp('6'),
    height:hp('5'),
    position: "absolute",
    right: wp('4'),
  }
});
export default RulesScreen;
