import React from "react";
import { StyleSheet } from "react-native";
import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";

//Import Components
import Payments from "../components/PaymentsComponent";

class PaymentsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "PAYMENTS",
      headerStyle: {
        backgroundColor: "#fceccf",
        height: 80
      },
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 25,
        color: "#3b448b",
        textAlign:'center'
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
    return <Payments navigation={this.props.navigation} />;
  }
}
const styles = StyleSheet.create({
  leftButton: {
    marginLeft: 20
  }
});
export default PaymentsScreen;
