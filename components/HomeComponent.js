// @flow
import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { Card, CardItem } from "native-base";
import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";

const Home = props => {
  const [isAccount, setIsAccount] = useState(false);
  const [isFacilities, setIsFacilities] = useState(false);
  const [isTransport, setIsTransport] = useState(false);
  const [isCare, setIsCare] = useState(false);
  isShowMethod = type => {
    if (type == "account") {
      setIsAccount(!isAccount);
    } else if (type == "facility") {
      setIsFacilities(!isFacilities);
    } else if (type == "Transport") {
      setIsTransport(!isTransport);
    } else if (type == "myCare") {
      setIsCare(!isCare);
    }
  };
  navigatorMethod = type => {
    props.navigation.navigate(type);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.backgroundImg}
        source={require("../assets/images/backgroundimage.png")}
      >
        <Image
          source={require("../assets/icons/icon.png")}
          style={styles.homeIcon}
        />

        <View style={{ flex: 1, backgroundColor: "pink", opacity: 0.3 }}></View>
        {/* Account */}

        <View style={styles.accountIconCon}>
          <View style={styles.accContent}>
            <TouchableOpacity onPress={() => isShowMethod("account")}>
              <Image
                source={require("../assets/icons/myaccounticon.png")}
                style={styles.myAccountIcon}
              />
            </TouchableOpacity>
            <Text style={styles.accountText}>MY ACCOUNT</Text>

            {isAccount ? (
              <View style={styles.catCon}>
                <AntDesign
                  style={{
                    position: "absolute",
                    top: hp("-2"),
                    left: hp("8")
                  }}
                  name="caretup"
                  size={hp("4")}
                  color="#feedd3"
                />

                <View>
                  <TouchableOpacity onPress={() => navigatorMethod("MyTrips")}>
                    <View style={styles.contentText}>
                      <Text style={styles.catText}>MY TRIPS</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigatorMethod("Payments")}>
                    <View style={styles.contentText}>
                      <Text style={styles.catText}>PAYMENTS</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigatorMethod("MyTrips")}>
                    <View style={styles.contentText}>
                      <Text style={styles.catText}>MY ORDERS</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigatorMethod("ForgotPassword")}
                  >
                    <View style={styles.contentText}>
                      <Text style={styles.catText}>Forgot Password</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ) : null}
          </View>
        </View>
        {/* facilities */}

        <View style={styles.facilitiesIconCon}>
          <View style={styles.facilitiesContent}>
            <TouchableOpacity onPress={() => isShowMethod("facility")}>
              <Image
                source={require("../assets/icons/facilitiesicon.png")}
                style={styles.facilitiesIcon}
              />
            </TouchableOpacity>
            <Text style={styles.facilitiesText}>FACILITIES</Text>

            {isFacilities ? (
              <View style={styles.catCon}>
                <AntDesign
                  style={{
                    position: "absolute",
                    top: hp("-2"),
                    left: hp("8")
                  }}
                  name="caretup"
                  size={hp("4")}
                  color="#feedd3"
                />

                <View>
                  <TouchableOpacity
                    onPress={() => navigatorMethod("FacilitiesList")}
                  >
                    <View style={styles.contentText}>
                      <Text style={styles.catText}>Facility Search</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigatorMethod("Rules")}>
                    <View style={styles.contentText}>
                      <Text style={styles.catText}>Rule & Regulations</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigatorMethod("Products")}>
                    <View style={styles.contentText}>
                      <Text style={styles.catText}>Products</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigatorMethod("MyCart")}>
                    <View style={styles.contentText}>
                      <Text style={styles.catText}>View Cart</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ) : null}
          </View>
        </View>
        {/* Transport */}
        <View style={styles.transportIconCon}>
          <View style={styles.transportContent}>
            <TouchableOpacity onPress={() => isShowMethod("Transport")}>
              <Image
                source={require("../assets/icons/transportationicon.png")}
                style={styles.transportIcon}
              />
            </TouchableOpacity>
            <Text style={styles.transportText}>TRANSPORT</Text>

            {isTransport ? (
              <View style={styles.catCon}>
                <AntDesign
                  style={{
                    position: "absolute",
                    top: hp("-2"),
                    left: hp("8")
                  }}
                  name="caretup"
                  size={hp("4")}
                  color="#feedd3"
                />

                <View>
                  <TouchableOpacity
                    onPress={() => navigatorMethod("FacilitiesSearch")}
                  >
                    <View style={styles.contentText}>
                      <Text style={styles.catText}>Facility Lookup</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ) : null}
          </View>
        </View>
        {/* my care */}
        <View style={styles.myCareIconCon}>
          <View style={styles.mycareContent}>
            <TouchableOpacity onPress={() => isShowMethod("myCare")}>
              <Image
                source={require("../assets/icons/carepackagesicon.png")}
                style={styles.myCareIcon}
              />
            </TouchableOpacity>
            <Text style={styles.myCareText}>CARE PACKAGES</Text>

            {isCare ? (
              <View style={styles.catCon}>
                <AntDesign
                  style={{
                    position: "absolute",
                    top: hp("-2"),
                    left: hp("8")
                  }}
                  name="caretup"
                  size={hp("4")}
                  color="#feedd3"
                />

                <View>
                  <TouchableOpacity onPress={() => navigatorMethod("Orders")}>
                    <View style={styles.contentText}>
                      <Text style={styles.catText}>My Care Packages</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ) : null}
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: "pink", opacity: 0.3 }}></View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  backgroundImg: {
    flex: 1,
    // width:'100%',
    // resizeMode: "center",
    position: "relative"
  },
  homeIcon: {
    width: wp("22"),
    height: hp("18"),
    resizeMode: "center",
    position: "absolute",
    top: hp("42"),
    left: hp("2")
  },
  accountIconCon: {
    flex: 1,
    // position:'absolute',
    // top: hp("-1"),
    // left:hp("-5"),
    // backgroundColor: "yellow",
    // opacity: 0.3,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  accContent: {
    top: hp("-2"),
    left: hp("-5"),
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  myAccountIcon: {
    width: wp("18"),
    height: hp("10"),
    resizeMode: "stretch"
  },
  accountText: {
    color: "#263690",
    fontSize: hp("2%"),
    fontWeight: "bold",
    marginLeft: wp("4")
  },

  facilitiesIconCon: {
    flex: 1,
    // backgroundColor: "blue",
    // opacity: 0.3,
    // top:hp('-2'),
    // left: hp("10"),
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  facilitiesContent: {
    top: hp("-2"),
    left: hp("9"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  facilitiesIcon: {
    width: wp("18"),
    height: hp("10"),
    resizeMode: "stretch"
  },
  facilitiesText: {
    color: "#263690",
    fontSize: hp("2%"),
    fontWeight: "bold",
    marginLeft: wp("4")
  },
  transportIconCon: {
    flex: 1,
    // backgroundColor: "green",
    // opacity: 0.3,
    justifyContent: "center",
    // top:hp('2'),
    // left: hp("10"),

    flexDirection: "row",
    alignItems: "center"
  },
  transportContent: {
    top: hp("2"),
    left: hp("10"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  transportIcon: {
    width: wp("18"),
    height: hp("10"),
    resizeMode: "stretch"
  },
  transportText: {
    color: "#263690",
    fontSize: hp("2%"),
    fontWeight: "bold",
    marginLeft: wp("4")
  },
  myCareIconCon: {
    flex: 1,
    // backgroundColor: "red",
    // opacity: 0.3,
    justifyContent: "center",
    // left:hp("-3"),
    flexDirection: "row",

    alignItems: "center"
  },
  mycareContent: {
    left: hp("-3"),
    top: hp("1"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  myCareIcon: {
    width: wp("18"),
    height: hp("10"),
    resizeMode: "stretch"
  },
  myCareText: {
    color: "#263690",
    fontSize: hp("2%"),
    fontWeight: "bold",
    marginLeft: wp("4")
  },

  contentText: {
    backgroundColor: "#4545a0",
    marginTop: hp("1")
  },
  catCon: {
    width: wp("40"),
    zIndex: 1000,
    height: "auto",
    borderRadius: 5,
    paddingLeft: wp("1.5"),
    paddingRight: wp("1.5"),
    paddingBottom: wp("1.5"),
    position: "absolute",
    top: hp("11.5"),
    left: hp("-5.2"),
    backgroundColor: "#feedd3"
  },
  catText: {
    fontSize: hp("1.5%"),
    fontWeight: "bold",
    padding: wp("1"),
    color: "#acbddd"
  }
});

export default Home;
