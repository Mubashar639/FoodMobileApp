import React, { PureComponent } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, CardItem, Button, Form, Item, Input } from "native-base";

class TransportationsSearch extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <CardItem style={styles.cardItemStyle}>
            <Form style={styles.formStyle}>
              <Text style={styles.titleStyle}>Search Transport</Text>
              <Item style={styles.itemStyle} rounded>
                <Input placeholder="Username" />
              </Item>
              <Item style={styles.itemStyle} rounded>
                <Input placeholder="Password" />
              </Item>

              <View style={styles.buttonStyle}>
                <Button style = {{borderRadius:40}}>
                  <Text style={styles.buttonTextStyle}>Search</Text>
                </Button>
              </View>
            </Form>
          </CardItem>
        </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fbf4e4"
  },
  card: {
    width: "96%",
    height: 400,
    marginLeft: 10,
    marginTop: 40,
    backgroundColor: "#ffeed0"
  },
  cardItemStyle: {
    width: "95%",
    backgroundColor: "#ffeed0"
  },
  formStyle: {
    marginLeft: 20,
    width: "97%",
    backgroundColor: "#ffeed0"
  },
  titleStyle: {
    alignSelf: "center",
    fontSize: 23,
    color: "#3f51b5",
    marginTop: 20,
    marginBottom: 45
  },
  itemStyle: {
    backgroundColor: "#fff",
    marginBottom: 25,
    paddingLeft: 10
  },
  buttonStyle: {
    width: "60%",
    alignSelf: "center",
    
  },
  buttonTextStyle: {
    fontSize: 23,
    color: "#fff",
    marginLeft: 80
  }
});
export default TransportationsSearch;
