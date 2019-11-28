import React from "react";
import { StyleSheet } from "react-native";
import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";

//Import Components
import ForgotPassword from "../components/Forgotpassword/index";

class ForgotPasswordScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Forgot Password",
      headerStyle: {
        backgroundColor: "#fceccf",
        height: 80
      },
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 25,
        color: "#3b448b",
        marginLeft: 80
      },
      headerLeft: () => (
        <AntDesign
          onPress={() => navigation.goBack()}
          style={styles.leftButton}
          name="left"
          size={30}
          color="gray"
        />
      )
    };
  };
  render() {
    return <ForgotPassword navigation={this.props.navigation} />;
  }
}
const styles = StyleSheet.create({
  leftButton: {
    marginLeft: 20
  }
});
export default ForgotPasswordScreen;
