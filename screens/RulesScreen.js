import React from "react";
import { StyleSheet } from "react-native";
import {
  EvilIcons,
  AntDesign,
  Entypo,
  MaterialCommunityIcons
} from "@expo/vector-icons";

//Import Components
import Rules from "../components/RulesComponent";

class RulesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "RULES & REGULATIONS",
      headerStyle: {
        backgroundColor: "#fceccf",
        height: 80
      },
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 25,
        color: "#3b448b",
        textAlign: "center",
        marginLeft: 50
      },
      headerRight: () => (
        <MaterialCommunityIcons
          style={styles.iconStyle}
          name="bottle-wine"
          size={48}
          color="gray"
        />
      ),
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
    return <Rules navigation={this.props.navigation} />;
  }
}
const styles = StyleSheet.create({
  leftButton: {
    marginLeft: 20
  },
  iconStyle:{
      right:20
  }
});
export default RulesScreen;
