import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";

//Import Components
import FacilitiesList from "../components/FacilitiesListComponent";
import { Input, Form } from "native-base";
const FacilitiesHeader = props => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <View style={styles.container}>
      {isSearch ? (
        <View style = {{position:'relative'}}>
          {/* <Form style = {{backgroundColor:'red'}}>
          <Input defaultValue = 'abdure' placeholder="Username" /> */}
          {/* </Form>
           */}
          <TextInput
            style={styles.inputStyle}
            placeholder="Search Here..."
          />
          <Entypo
            onPress={() => setIsSearch(!isSearch)}
            style={styles.iconCrossStyle}
            name="cross"
            size={48}
            color="gray"
          />
        </View>
      ) : (
        <View>
          <Text style={styles.headerTitle}>FACILITIES</Text>
          <EvilIcons
            onPress={() => setIsSearch(!isSearch)}
            style={styles.iconStyle}
            name="search"
            size={48}
            color="gray"
          />
        </View>
      )}
    </View>
  );
};
class FacilitiesListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "FACILITIES",
      headerStyle: {
        backgroundColor: "#fceccf",
        height: 80
      },
      headerLeft: () => (
        <AntDesign
          onPress={() => navigation.goBack()}
          style={styles.leftButton}
          name="left"
          size={36}
          color="gray"
        />
      ),

      headerTitle: () => <FacilitiesHeader />,
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 30,
        color: "#3b448b",
        marginLeft: 105
      }
    };
  };
  render() {
    return <FacilitiesList navigation={this.props.navigation} />;
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#3b448b",
    marginLeft: 105
  },
  iconStyle: {
    position: "absolute",
    right: 20
  },
  iconCrossStyle: {
    position: "absolute",
    top:73,
    right:22
  
  },
  leftButton: {
    marginLeft: 20
  },
  inputStyle: {
    fontSize:27,
    height: 200,
    marginLeft:10,
    // position: "absolute",
    top:0
  }
});

export default FacilitiesListScreen;
