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
                  top: -20,
                  left: 105
                }}
                name="caretup"
                size={48}
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
                  top: -20,
                  left: 105
                }}
                name="caretup"
                size={48}
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
                  top: -20,
                  left: 105
                }}
                name="caretup"
                size={48}
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
          <TouchableOpacity onPress={() => isShowMethod('myCare')}>
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
                  top: -20,
                  left: 105
                }}
                name="caretup"
                size={48}
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
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  backgroundImg: {
    width: "100%",
    height: "100%"
  },
  homeIcon: {
    width: 100,
    height: 150,
    resizeMode: "stretch",
    position: "absolute",
    top: 350,
    left: 30
  },
  accountIconCon: {
    width: 200,
    position: "absolute",
    top: 125,
    left: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  myAccountIcon: {
    width: 80,
    height: 80,
    resizeMode: "stretch"
  },
  accountText: {
    color: "#263690",
    fontSize: 21,
    fontWeight: "bold",
    marginLeft: 20
  },

  facilitiesIconCon: {
    width: 200,
    position: "absolute",
    top: 300,
    left: 230,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  facilitiesIcon: {
    width: 80,
    height: 80,
    resizeMode: "stretch"
  },
  facilitiesText: {
    color: "#263690",
    fontSize: 21,
    fontWeight: "bold",
    marginLeft: 20
  },
  transportIconCon: {
    width: 200,
    position: "absolute",
    top: 500,
    left: 225,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  transportIcon: {
    width: 80,
    height: 80,
    resizeMode: "stretch"
  },
  transportText: {
    color: "#263690",
    fontSize: 21,
    fontWeight: "bold",
    marginLeft: 20
  },
  myCareIconCon: {
    width: 200,
    position: "absolute",
    top: 650,
    left: 110,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  myCareIcon: {
    width: 80,
    height: 80,
    resizeMode: "stretch"
  },
  myCareText: {
    color: "#263690",
    fontSize: 21,
    fontWeight: "bold",
    marginLeft: 20
  },
  contentStyle: {
    width: "100%",
    height: "auto",
    paddingLeft: 10
  },
  contentText: {
    backgroundColor: "#4545a0",
    marginTop: 10
  },
  catCon: {
    width: 250,
    zIndex: 1000,
    height: "auto",
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    position: "absolute",
    top: 100,
    left: -90,
    backgroundColor: "#feedd3"
  },
  catText: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 7,
    color: "#acbddd"
  }
});

export default Home;
