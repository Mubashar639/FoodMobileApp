import React from "react";
import { View, Text, StyleSheet } from "react-native";

import EmailComponent from "./EmailComponent";
import DigitComponent from "./DigitComponent";
import NewPassComponent from "./NewPassComponent";

const Index = () => {
  return (
    <View style={styles.container}>
      <EmailComponent />
      {/* <DigitComponent /> */}
      {/* <NewPassComponent /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignContent:'center'
  }
});
export default Index;
