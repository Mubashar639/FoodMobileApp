import React from "react";
import { StyleSheet } from "react-native";
import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
//Import Components
import Email from "../components/Forgotpassword/EmailComponent";

class EmailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Forgot Password",
      headerStyle: {
        backgroundColor: "#fceccf",
        height: hp("8.5")

      },
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: hp('3'),
        color: "#3b448b",
        marginLeft: wp('17'),
        textAlign:'center'
      },
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
    return <Email navigation={this.props.navigation} />;
  }
}
const styles = StyleSheet.create({
  leftButton: {
    marginLeft: hp('2.5')
  }
});
export default EmailScreen;
