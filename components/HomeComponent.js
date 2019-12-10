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
        style={styles.backgroundImg}
        source={require("../assets/images/backgroundimage.png")}
      >
        <Image
          source={require("../assets/icons/icon.png")}
          style={styles.homeIcon}
        />

        {/* Account */}

        <View style={styles.accountIconCon}>
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
                  top: hp('-2.8'),
                  left: hp('14')
                }}
                name="caretup"
                size={hp('5')}
                color="#feedd3"
              />

              <View>
                <TouchableOpacity
                  onPress={() => navigatorMethod("FacilitiesList")}
                >
                  <View style={styles.contentText}>
                    <Text style={styles.catText}>MY TRIPS</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigatorMethod("Payments")}>
                  <View style={styles.contentText}>
                    <Text style={styles.catText}>PAYMENTS</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigatorMethod("Orders")}>
                  <View style={styles.contentText}>
                    <Text style={styles.catText}>MY ORDERS</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
        </View>
        {/* facilities */}

        <View style={styles.facilitiesIconCon}>
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
                  top: hp('-2.8'),
                  left: hp('14')
                }}
                name="caretup"
                size={hp('5')}
                color="#feedd3"
              />

              <View>
                <TouchableOpacity
                  onPress={() => navigatorMethod("FacilitiesSearch")}
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
              </View>
            </View>
          ) : null}
        </View>
        {/* Transport */}
        <View style={styles.transportIconCon}>
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
                  top: hp('-2.8'),
                  left: hp('14')
                }}
                name="caretup"
                size={hp('5')}
                color="#feedd3"
              />

              <View>
                <TouchableOpacity onPress={() => navigatorMethod("Transport")}>
                  <View style={styles.contentText}>
                    <Text style={styles.catText}>Facility Lookup</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
        </View>
        {/* my care */}
        <View style={styles.myCareIconCon}>
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
                  top: hp('-2.8'),
                  left: hp('14')
                }}
                name="caretup"
                size={hp('5')}
                color="#feedd3"
              />

              <View>
                <TouchableOpacity onPress={() => navigatorMethod("Products")}>
                  <View style={styles.contentText}>
                    <Text style={styles.catText}>My Care Packages</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("100%"),
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  backgroundImg: {
    width: wp("100%"),
    height: hp("100%")
  },
  homeIcon: {
    width: wp('22'),
    height: hp('18'),
    resizeMode: "stretch",
    position: "absolute",
    top: hp('40'),
    left:hp('2')
  },
  accountIconCon: {
    width: wp("50"),
    position: "absolute",
    top: hp("11.5"),
    left: wp("23"),
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  myAccountIcon: {
    width: wp("18"),
    height: hp("11"),
    resizeMode: "stretch"
  },
  accountText: {
    color: "#263690",
    fontSize: hp("2.3%"),
    fontWeight: "bold",
    marginLeft: wp('4')
  },

  facilitiesIconCon: {
    width: wp("50"),
    position: "absolute",
    top: hp("32"),
    left: wp("48"),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  facilitiesIcon: {
    width: wp("18"),
    height: hp("11"),
    resizeMode: "stretch"
  },
  facilitiesText: {
    color: "#263690",
    fontSize: hp("2.3%"),
    fontWeight: "bold",
    marginLeft: wp('4')
  },
  transportIconCon: {
    width: wp("50"),
    position: "absolute",
    top: hp('55'),
    left: wp('48'),
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  transportIcon: {
    width: wp("18"),
    height: hp("11"),
    resizeMode: "stretch"
  },
  transportText: {
    color: "#263690",
    fontSize: hp("2.3%"),
    fontWeight: "bold",
    marginLeft: wp('4')
  },
  myCareIconCon: {
    width: wp("50"),
    position: "absolute",
    top: hp('77.5'),
    left: wp('24'),
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  myCareIcon: {
    width: wp("18"),
    height: hp("11"),
    resizeMode: "stretch"
  },
  myCareText: {
    color: "#263690",
    fontSize: hp("2.3%"),
    fontWeight: "bold",
    marginLeft: wp('4')
  },

  contentText: {
    backgroundColor: "#4545a0",
    marginTop: hp('1')
  },
  catCon: {
    width: wp('55'),
    zIndex: 1000,
    height: "auto",
    borderRadius: 5,
    paddingLeft: wp('1.5'),
    paddingRight: wp('1.5'),
    paddingBottom:wp('1.5'),
    position: "absolute",
    top: hp('14'),
    left: hp('-11'),
    backgroundColor: "#feedd3"
  },
  catText: {
    fontSize: hp('2%'),
    fontWeight: "bold",
    padding: wp("1.5"),
    color: "#acbddd"
  }
});

export default Home;
