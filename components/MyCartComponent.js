import React, { PureComponent } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground
} from "react-native";
import {
  Card,
  CardItem,
  Radio,
  Left,
  Button,
  Form,
  Item,
  Input,
  Icon
} from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import AwesomeAlert from "react-native-awesome-alerts";
class MyCart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { showAlert: false };
  }
  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.backImg}
          source={require("../assets/images/backImg.png")}
        >
          <ScrollView>
            <View style={styles.containerView}>
              <View style={styles.imageCon}>
                <Image
                  style={styles.productImage}
                  source={require("../assets/images/forgetpasswordscreenlogo.png")}
                />
              </View>
              <View style={styles.productDetails}>
                <View style={styles.detailsContainer}>
                  <Text style={styles.productTitle}>Pepsi cola</Text>
                  <Text style={styles.productTitle}>(12 Bottle)</Text>
                  <Text style={styles.productSize}>250ml</Text>
                </View>

                <View style={styles.productPriceCon}>
                  <Text style={styles.productE}>x</Text>
                  <Text style={styles.productQ}>x6</Text>
                  <Text style={styles.productPrice}>$60</Text>
                </View>
              </View>
            </View>
            <View style={styles.productDiv}></View>
            <View style={styles.totalCon}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalText}>$320</Text>
            </View>
            <Form style={styles.formStyle}>
              <Text style={styles.titleStyle}>Drop Off Location</Text>
              <Item regular style={styles.itemStyle}>
                <Input
                  placeholderTextColor="#c3bdb1"
                  placeholder="Writr Address Here..."
                />
                <Icon
                  type="Entypo"
                  name="location-pin"
                  style={{ color: "#c3bdb1" }}
                />
              </Item>
              <Text style={styles.titleStyle}>Date</Text>
              <Item regular style={styles.itemStyle}>
                <Input
                  placeholderTextColor="#c3bdb1"
                  placeholder="28-Aug-2019"
                />
                <Icon
                  type="MaterialIcons"
                  name="date-range"
                  style={{ color: "#c3bdb1" }}
                />
              </Item>
              <Text style={styles.titleStyle}>Time</Text>
              <Item regular style={styles.itemStyle}>
                <Input placeholderTextColor="#c3bdb1" placeholder="9:00 AM" />
                <Icon
                  // type="Fontisto"
                  name="md-time"
                  style={{ color: "#c3bdb1" }}
                />
              </Item>
              <View style={styles.buttonStyle}>
                <Button
                  style={{ borderRadius: 40, justifyContent: "center" }}
                  onPress={() => {
                    this.showAlert();
                  }}
                  success
                >
                  <Text style={styles.buttonTextStyle}>Confirm</Text>
                </Button>
               
              </View>
            </Form>
             <AwesomeAlert
                  show={this.state.showAlert}
                  showProgress={false}
                  title="Order Confirm!"
                  // message="Thnak you"
                  closeOnTouchOutside={true}
                  closeOnHardwareBackPress={false}
                  showCancelButton={true}
                  showConfirmButton={true}
                  cancelText="No, cancel"
                  confirmText="Yes, confirm it"
                  confirmButtonColor="#DD6B55"
                  onCancelPressed={() => {
                    this.hideAlert();
                  }}
                  onConfirmPressed={() => {
                    this.hideAlert();
                  }}
                />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbf4e4"
  },

  containerView: {
    display: "flex",
    width: "100%",
    height: hp("13"),
    flexDirection: "row",
    marginTop: hp("5")
    // backgroundColor: "red"
  },
  productDiv: {
    width: wp("85"),
    height: hp("0.1"),
    backgroundColor: "#d4d1c8",
    alignSelf: "center",
    marginTop: hp("1")
  },
  imageCon: {
    width: "30%",
    height: hp("13")
  },
  productImage: { width: "100%", height: hp("13") },
  productDetails: {
    display: "flex",
    flexDirection: "row",
    width: "70%"
  },
  detailsContainer: { width: "60%", height: hp("13") },
  productTitle: {
    fontSize: hp("3"),
    color: "#5a564b",
    marginLeft: hp("1")
  },
  productSize: {
    color: "#5a564b",
    marginLeft: 10
  },

  productQ: {
    // marginLeft: hp("9"),
    color: "#5a564b"
  },
  productE: {
    color: "#ff4646"
    // marginLeft: hp("10")
  },

  productPriceCon: {
    width: "40%",
    height: hp("13"),
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center"
  },
  productPrice: {
    fontSize: hp("3"),
    // textAlign: "",
    color: "#5a564b"
    // marginLeft: hp("1")
  },
  totalCon: {
    height: hp("8"),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: hp("5"),
    paddingRight: hp("5"),
    marginTop: hp("1")
  },
  totalText: {
    fontSize: hp("3"),
    fontWeight: "bold",
    color: "#8dc41e"
  },
  formStyle: {
    width: "95%",
    height: hp("45"),
    marginTop: hp("-3"),
    alignSelf: "center",
    backgroundColor: "#fbf4e4"
  },
  titleStyle: {
    marginLeft: hp("3"),
    marginRight: hp("1"),
    fontSize: hp("2"),
    color: "#adaeac"
  },
  itemStyle: {
    width: "90%",
    height: hp("6.5"),
    marginBottom: hp("1"),
    paddingLeft: hp("1"),
    marginLeft: hp("3")
  },
  buttonStyle: {
    width: "50%",
    marginTop: hp("3"),
    alignSelf: "center"
  },
  buttonTextStyle: {
    fontSize: hp("3"),
    color: "#fff"
    // marginLeft: hp("9")
  },
  backImg: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  }
});
export default MyCart;
