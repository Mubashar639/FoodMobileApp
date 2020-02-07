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
import { EvilIcons, AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
// assets

class FacilitiesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isContentVisible: false,
      facilities: this.props.facilities
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.facilities.length !== this.props.facilities.length) {
      this.setState({ facilities: this.props.facilities });
    }
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
            <Text style={styles.textStyle}>Facilities: Details</Text>
          </ListItem>
          <ListItem>
            <Text style={styles.textStyle}>Address: {items.address}</Text>
          </ListItem>
          <ListItem>
            <Text style={styles.textStyle}>Phone: {items.phone}</Text>
            <Image
              source={require("../assets/icons/whatsapp.png")}
              style={{
                width: wp("6.5"),
                height: hp("3.5"),
                left: wp("30")
              }}
            />
          </ListItem>
          <ListItem>
            <Text style={styles.textStyle}>Male/Female: {items.sexType}</Text>
          </ListItem>
          <ListItem>
            <Text style={styles.textStyle}>
              Security: {items.securityLevel}
            </Text>
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
            {this.state.facilities ? (
              <Accordion
                dataArray={this.state.facilities}
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

export default FacilitiesList;
