import React from "react";
import { StyleSheet } from "react-native";
import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
//Import Components
import Payments from "../components/PaymentsComponent";

class PaymentsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "PAYMENTS",
      headerStyle: {
        backgroundColor: "#fceccf",
        height: hp("8.5")
      },
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: hp('3'),
        color: "#3b448b",
        marginLeft: wp('20'),
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
    return <Payments navigation={this.props.navigation} />;
  }
}
const styles = StyleSheet.create({
  leftButton: {
    marginLeft: hp('2.5')
  }
});
export default PaymentsScreen;
