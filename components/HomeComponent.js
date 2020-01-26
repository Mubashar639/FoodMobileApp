// @flow
import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Accordion, ListItem, Radio } from "native-base";
import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";
let content = [
  {
    title: "MY TRIPS",

    name: "Trip History",
    navigateRout: "MyTrips"
  },
  {
    title: "PAYMENTS",

    name: "Cradit/Debit",
    navigateRout: "Payments"
  },
  {
    title: "MY CARE PACKAGES",

    name: "My Orders",
    navigateRout: "Orders"
  }
];
let _renderHeader = (items, expanded) => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.headerTitle}>{items.title}</Text>
      <View style={styles.arrows}>
        {expanded ? (
          <AntDesign name="caretup" color={"#27368e"} size={hp("1.5")} />
        ) : (
          <AntDesign name="caretdown" color={"#27368e"} size={hp("1.5")} />
        )}
      </View>
    </View>
  );
};
let _renderContent = items => {
  return (
    <View style={styles.contentStyle}>
      {items.accountMenu.map((item, i) => (
        <View key={i}>
          <TouchableOpacity onPress={() => navigatorMethod(item.navigateRout)}>
            <View style={styles.contentText}>
              <View style={styles.radio}></View>
              <View>
                <Text style={styles.catText}>{item.name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};
const Home = props => {
  const [isAccount, setIsAccount] = useState(false);
  const [isFacilities, setIsFacilities] = useState(false);
  const [isTransport, setIsTransport] = useState(false);
  const [isCare, setIsCare] = useState(false);
  const [contents] = useState(content);
  const [accImg, setAccImg] = useState(
    require("../assets/icons/myaccounticon.png")
  );
  const [facImg, setFacImg] = useState(
    require("../assets/icons/facilitiesicon.png")
  );
  const [tranImg, setTranImg] = useState(
    require("../assets/icons/transportationicon.png")
  );
  const [careImg, setCareImg] = useState(
    require("../assets/icons/carepackagesicon.png")
  );
  chanageImage = (type, value) => {
    if (type == "account" && value == "in") {
      setAccImg(require("../assets/icons/accoutBlue.png"));
    } else if (type == "account" && value == "out") {
      setAccImg(require("../assets/icons/myaccounticon.png"));
    } else if (type == "facility" && value == "in") {
      setFacImg(require("../assets/icons/facility.png"));
    } else if (type == "facility" && value == "out") {
      setFacImg(require("../assets/icons/facilitiesicon.png"));
    } else if (type == "transport" && value == "in") {
      setTranImg(require("../assets/icons/transport.png"));
    } else if (type == "transport" && value == "out") {
      setTranImg(require("../assets/icons/transportationicon.png"));
    } else if (type == "care" && value == "in") {
      setCareImg(require("../assets/icons/care.png"));
    } else if (type == "care" && value == "out") {
      setCareImg(require("../assets/icons/carepackagesicon.png"));
    }
  };
  isShowMethod = type => {
    if (type == "account") {
      setIsAccount(!isAccount);
      setIsFacilities(false);
      setIsTransport(false);
      setIsCare(false);
    } else if (type == "facility") {
      setIsFacilities(!isFacilities);
      setIsAccount(false);
      setIsTransport(false);
      setIsCare(false);
    } else if (type == "Transport") {
      setIsTransport(!isTransport);
      setIsFacilities(false);
      setIsAccount(false);

      setIsCare(false);
    } else if (type == "myCare") {
      setIsCare(!isCare);
      setIsTransport(false);
      setIsFacilities(false);
      setIsAccount(false);
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

        <View style={{ flex: 1 }}></View>
        {/* Account */}

        <View style={styles.accountIconCon}>
          <View style={styles.accContent}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPressIn={() => chanageImage("account", "in")}
              onPressOut={() => chanageImage("account", "out")}
              onPress={() => isShowMethod("account")}
            >
              <Image
                resizeMode="contain"
                source={accImg}
                style={styles.myAccountIcon}
              />
            </TouchableOpacity>
            <Text style={styles.accountText}>MY ACCOUNT</Text>

            {isAccount ? (
              <View style={styles.catCon}>
                <AntDesign
                  style={styles.contentArrow}
                  name="caretup"
                  size={hp("4")}
                  color="#feedd3"
                />

                <ScrollView style={styles.scroll}>
                  {contents.length
                    ? contents.map((item, i) => {
                        return (
                          <View key={i}>
                            <View style={styles.headerStyle}>
                              <Text style={styles.headerTitle}>
                                {item.title}
                              </Text>
                              <View style={styles.arrows}>
                                <AntDesign
                                  name="caretdown"
                                  color={"#27368e"}
                                  size={hp("1.5")}
                                />
                              </View>
                            </View>
                            <View style={styles.contentStyle}>
                              <TouchableOpacity
                                onPress={() =>
                                  navigatorMethod(item.navigateRout)
                                }
                              >
                                <View style={styles.contentText}>
                                  <View style={styles.radio}></View>
                                  <View>
                                    <Text style={styles.catText}>
                                      {item.name}
                                    </Text>
                                  </View>
                                </View>
                              </TouchableOpacity>
                            </View>
                          </View>
                        );
                      })
                    : null}
                  {/* <View style={{ height: 96 }} /> */}
                </ScrollView>
              </View>
            ) : null}
          </View>
        </View>

        {/* End Account */}

        {/* facilities */}

        <View style={styles.facilitiesIconCon}>
          <View style={styles.facilitiesContent}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPressIn={() => chanageImage("facility", "in")}
              onPressOut={() => chanageImage("facility", "out")}
              onPress={() => isShowMethod("facility")}
            >
              <Image 
               resizeMode= "contain"
              source={facImg} style={styles.facilitiesIcon} />
            </TouchableOpacity>
            <Text style={styles.facilitiesText}>Facilities</Text>

            {isFacilities ? (
              <View style={styles.catCon}>
                <AntDesign
                  style={styles.contentArrow}
                  name="caretup"
                  size={hp("4")}
                  color="#feedd3"
                />

                <View>
                  <TouchableOpacity
                    onPress={() => navigatorMethod("FacilitiesList")}
                  >
                    <View style={styles.contentText}>
                      <View style={styles.radio}></View>
                      <View>
                        <Text style={styles.catText}>Facility Search</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigatorMethod("Rules")}>
                    <View style={styles.contentText}>
                      <View style={styles.radio}></View>
                      <View>
                        <Text style={styles.catText}>Rule & Regulations</Text>
                      </View>
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
            <TouchableOpacity
              activeOpacity={0.9}
              onPressIn={() => chanageImage("transport", "in")}
              onPressOut={() => chanageImage("transport", "out")}
              onPress={() => isShowMethod("Transport")}
            >
              <Image 
              resizeMode= "contain"
              source={tranImg} style={styles.transportIcon} />
            </TouchableOpacity>
            <Text style={styles.transportText}>Transport</Text>

            {isTransport ? (
              <View style={styles.catCon}>
                <AntDesign
                  style={styles.contentArrow}
                  name="caretup"
                  size={hp("4")}
                  color="#feedd3"
                />

                <View>
                  <TouchableOpacity
                    onPress={() => navigatorMethod("FacilitiesSearch")}
                  >
                    <View style={styles.contentText}>
                      <View style={styles.radio}></View>
                      <View>
                        <Text style={styles.catText}>Facility Lookup</Text>
                      </View>
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
            <TouchableOpacity
              activeOpacity={0.9}
              onPressIn={() => chanageImage("care", "in")}
              onPressOut={() => chanageImage("care", "out")}
              onPress={() => isShowMethod("myCare")}
            >
              <Image 
              resizeMode= "contain"
              source={careImg} style={styles.myCareIcon} />
            </TouchableOpacity>
            <Text style={styles.myCareText}>Care Packages</Text>

            {isCare ? (
              <View style={styles.catCon}>
                <AntDesign
                  style={styles.contentArrow}
                  name="caretup"
                  size={hp("4")}
                  color="#feedd3"
                />

                <View>
                  <TouchableOpacity onPress={() => navigatorMethod("CarePackages")}>
                    <View style={styles.contentText}>
                      <View style={styles.radio}></View>
                      <View>
                        <Text style={styles.catText}>My Care Packages</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ) : null}
          </View>
        </View>
        <View style={{ flex: 1 }}></View>
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
    height: hp("10")
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
    // zIndex:100,
    top: hp("-2"),
    left: hp("9"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  facilitiesIcon: {
    width: wp("18"),
    height: hp("10"),
    resizeMode: "contain"
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
    resizeMode: "contain"
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
    resizeMode: "contain"
  },
  myCareText: {
    color: "#263690",
    fontSize: hp("2%"),
    fontWeight: "bold",
    marginLeft: wp("4")
  },

  contentText: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#4545a0",
    marginTop: hp("0.5"),
    padding: hp("0.8")
  },
  catCon: {
    width: wp("50"),
    zIndex: 1000,
    borderRadius: 5,
    paddingTop: wp("4"),
    paddingLeft: wp("3"),
    paddingRight: wp("3"),
    paddingBottom: wp("4"),

    position: "absolute",
    top: hp("11.5"),
    left: hp("-9"),
    backgroundColor: "#feedd3"
  },
  contentArrow: {
    position: "absolute",
    top: hp("-2"),
    left: hp("12")
  },
  catText: {
    fontSize: hp("1.5%"),
    fontWeight: "bold",
    color: "#fff"
  },
  arrows: {
    position: "absolute",
    top: 0,
    right: 0
  },

  headerStyle: {
    height: hp("3"),
    marginTop: wp("0.5")
  },
  headerTitle: {
    textAlign: "left",
    color: "#3b448b"
  },
  radio: {
    width: 7,
    height: 7,
    backgroundColor: "#fff",
    color: "#fff",
    borderRadius: 20,
    marginTop: 5,
    marginRight: 5
  }
});

export default Home;
