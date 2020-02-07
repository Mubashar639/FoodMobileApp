import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableHighlight,
  Alert,
  ScrollView
} from "react-native";
import { Accordion, Text, ListItem } from "native-base";
import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
// assets

class Transportation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isContentVisible: false,
      transports: this.props.transports
    };
  }

  _renderHeader = (items, expanded) => {
    return (
      <View style={styles.headerStyle}>
        <Text style={styles.headerTitle}>{items.name}</Text>
        <View style={styles.arrows}>
          {expanded ? (
            <AntDesign name="caretup" color={"#27368e"} size={hp("2.5")} />
          ) : (
            <AntDesign name="caretdown" color={"#27368e"} size={hp("2.5")} />
          )}
        </View>
      </View>
    );
  };
  _renderContent = items => {
    return (
      <View style={styles.contentStyle}>
        <View>
          <ListItem>
            <Text style={styles.textStyle}>
              Facilities:{" "}
              {items.facilities.map((item, i) => {
                return (
                  <Text style={styles.textStyle} key={i}>
                    {item},
                  </Text>
                );
              })}
            </Text>
          </ListItem>
          <ListItem>
            <Text style={styles.textStyle}>Day Of Operation: </Text>
            {items.operationDays.map((item, i) => {
              return (
                <Text
                  style={{
                    width: wp("9"),
                    height: wp("6"),
                    backgroundColor: "#2f398f",
                    marginLeft: hp("1"),
                    paddingTop: wp("0.3"),
                    textAlign: "center",
                    color: "white",
                    borderRadius: 7
                  }}
                  key={i}
                >
                  {item}
                </Text>
              );
            })}
          </ListItem>
          <ListItem>
            <Text style={styles.textStyle}>
              Ticket Prices:{" "}
              <Text style={styles.textStyle}>{items.ticketPrice.type} - </Text>
              <Text
                style={{
                  fontSize: wp("3"),
                  fontWeight: "bold",
                  color: "red"
                }}
              >
                ${items.ticketPrice.price}
              </Text>
            </Text>
          </ListItem>
          <ListItem>
            <Text style={styles.textStyle}>
              Pick Up Locations:{" "}
              {items.pickUpLocation.map((item, i) => {
                return (
                  <Text style={styles.textStyle} key={i}>
                    {item},
                  </Text>
                );
              })}
            </Text>
          </ListItem>
          <ListItem>
            <Text style={styles.textStyle}>Phone Number: {items.phone}</Text>
            <Image
              source={require("../assets/icons/whatsapp.png")}
              style={{
                width: wp("6.5"),
                height: hp("3.5"),
                left: wp("30")
              }}
            />
          </ListItem>
        </View>
      </View>
    );
  };

  render() {
    return (
      <ImageBackground
        style={styles.backImg}
        source={require("../assets/images/backImg.png")}
      >
        <View style={styles.container}>
          <ScrollView style={styles.scroll}>
            {this.state.transports ? (
              <Accordion
                dataArray={this.state.transports}
                // expanded={0}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
              />
            ) : null}
            <View style={{ height: 96 }} />
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

//styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },

  dropDownItem: {
    marginTop: wp("3"),
    paddingRight: wp("1"),
    paddingTop: wp("-3")
  },
  headerStyle: {
    width: wp("96"),
    height: hp("7.5"),
    alignSelf: "center",
    // paddingTop:20,
    backgroundColor: "#fceccf",
    borderColor: "#e9e0ce",
    borderWidth: 1,
    borderStyle: "solid",
    paddingLeft: wp("1"),
    marginTop: wp("4")
  },
  headerTitle: {
    fontSize: hp("3"),
    color: "#3b448b",
    padding: wp("2.5")
  },
  contentStyle: {
    width: "100%",
    height: "auto",
    paddingLeft: hp("1"),
    backgroundColor: "#fbf4e4"
  },
  contentText: {
    fontSize: hp("2"),
    borderBottomColor: "#f0e2ce",
    borderBottomWidth: 1,
    textAlignVertical: "center",
    marginTop: hp("2"),
    paddingBottom: hp("2"),
    paddingLeft: hp("1")
  },
  textStyle: {
    color: "#27368e"
  },
  arrows: {
    position: "absolute",
    top: hp("2.3"),
    right: hp("3.2")
  },
  backImg: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  }
});

export default Transportation;
