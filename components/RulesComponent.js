import React, { PureComponent } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Card, CardItem, Radio, Left } from "native-base";

class Rules extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <CardItem style={styles.cardItemStyle}>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  marginTop: 10,
                  color: "#443f39"
                }}
              >
                BEFORE YOU VISIT{" "}
              </Text>

              <Text style={{ fontSize: 15, color: "#8b8378" }}>
                Make sure you to know visiting rules
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  marginTop: 10,
                  color: "#443f39"
                }}
              >
                WHO CAN VISIT?
              </Text>

              <Text style={{ fontSize: 15, color: "#8b8378" }}>
                Make sure you to know visiting rules
              </Text>
            </View>
          </CardItem>
        </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fbf4e4",
    height: "100%"
  },
  card: {
    width: "93%",
    height: 250,
    marginTop: 20,
    marginLeft: 18,
    backgroundColor: "#ffeed0"
  },
  cardItemStyle: {
    width: "100%",
    backgroundColor: "#ffeed0"
  }
});
export default Rules;
