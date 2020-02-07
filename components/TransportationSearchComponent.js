import React, { PureComponent } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Card, CardItem, Button, Form, Item, Input } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import { FilterTransport } from "../Redux/Actions/authentication";
import { GetTranport } from "../Redux/Epics/transportation";

class TransportationsSearch extends PureComponent {
  state = {
    facility: "",
    transport: ""
  };
  getFilter = () => {
    this.props.dispatch(FilterTransport(this.state));
  };
  render() {
    return (
      <ImageBackground
        style={styles.backImg}
        source={require("../assets/images/backImg.png")}
      >
        <View style={styles.container}>
          <Card style={styles.card}>
            <CardItem style={styles.cardItemStyle}>
              <Form style={styles.formStyle}>
                <Text style={styles.titleStyle}>Search Transport</Text>
                <Item style={styles.itemStyle} rounded>
                  <Input
                    placeholder="Enter Facility"
                    onChangeText={e => this.setState({ facility: e })}
                  />
                </Item>
                <Item style={styles.itemStyle} rounded>
                  <Input
                    placeholder="Enter Transport Service"
                    onChangeText={e => this.setState({ transport: e })}
                  />
                </Item>

                <View style={styles.buttonStyle}>
                  <Button
                    onPress={() => {
                      this.getFilter();
                      this.props.navigation.navigate("Transport");
                    }}
                    style={{ borderRadius: 40, justifyContent: "center" }}
                  >
                    <Text style={styles.buttonTextStyle}>Search</Text>
                  </Button>
                </View>
              </Form>
            </CardItem>
          </Card>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1

    // justifyContent:'center',
  },
  card: {
    width: wp("96%"),
    height: hp("45%"),
    // marginLeft: wp('2'),
    marginTop: wp("10"),
    backgroundColor: "#ffeed0",
    alignSelf: "center"
    // justifyContent:'center',
  },
  cardItemStyle: {
    width: wp("95%"),
    alignContent: "center",

    backgroundColor: "#ffeed0"
  },
  formStyle: {
    // marginLeft: wp('2.5'),
    alignContent: "center",

    width: "97%",
    backgroundColor: "#ffeed0"
  },
  titleStyle: {
    alignSelf: "center",
    fontSize: hp("3"),
    color: "#3f51b5",
    marginTop: hp("3"),
    marginBottom: hp("5")
  },
  itemStyle: {
    backgroundColor: "#fff",
    marginBottom: hp("4"),
    paddingLeft: hp("2")
  },
  buttonStyle: {
    width: wp("50"),
    alignSelf: "center"
  },
  buttonTextStyle: {
    fontSize: hp("3"),
    color: "#fff"
    // marginLeft: wp("17")
  },
  backImg: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  }
});
mapStateToProps = state => {
  return {
    transports: state.Transport.transports
  };
};
export default connect(mapStateToProps)(TransportationsSearch);
