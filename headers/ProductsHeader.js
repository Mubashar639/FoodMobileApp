import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { EvilIcons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const ProductsHeader = props => {
  const [isSearch, setIsSearch] = useState(false);
  //   bottle-wine
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>PRODUCTS</Text>
        <MaterialCommunityIcons
          onPress={() => setIsSearch(!isSearch)}
          style={styles.iconStyle}
          name="bottle-wine"
          size={48}
          color="gray"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#3b448b",
    marginLeft: 25
  },
  iconStyle: {
    position: "absolute",
    right: 20,
    top:-5
  },
  iconCrossStyle: {
    position: "absolute",
    top: 73,
    right: 22
  },

  inputStyle: {
    fontSize: 27,
    height: 200,
    marginLeft: 10,
    // position: "absolute",
    top: 0
  }
});

export default ProductsHeader;
