import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Alert,
  ScrollView,
  ImageBackground
} from "react-native";
import { Accordion, Text, ListItem, Radio, Body, Icon } from "native-base";
import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
// assets

class MyCarePackages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isContentVisible: false,
      contents: [
        {
          title: "Title 1",
          FacilitiesDetails: "Hi. I love this component. What do you think?",
          address: "street 293 9 2 sarder faisalabad",
          icon: require("../assets/icons/uparrow.png"),
          subContents: ["Egg", "Bred", "Naan", "Tea"]
        },
        {
          title: "Title 1",
          FacilitiesDetails: "Hi. I love this component. What do you think?",
          address: "street 293 9 2 sarder faisalabad",
          icon: require("../assets/icons/uparrow.png"),

          subContents: ["Egg", "Bred", "Naan", "Tea"]
        },
        {
          title: "Title 1",
          FacilitiesDetails: "Hi. I love this component. What do you think?",
          address: "street 293 9 2 sarder faisalabad",
          icon: require("../assets/icons/uparrow.png"),

          subContents: ["Egg", "Bred", "Naan", "Tea"]
        }
      ]
    };
  }

  _renderHeader = (items, expanded) => {
    return (
      <View style={styles.headerStyle}>
        <Entypo style={styles.headerIcon} name="drink" size={30} color="gray" />
        <Text style={styles.headerTitle}>{items.title}</Text>
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
      <View>
        {items.subContents.map((subItem, i) => (
          <ListItem style={styles.contentStyle} disabled key={i}>
            <Radio  color="#fff" selected={true} selectedColor="#ffeed0" />
            <Body key={i}>
              <Text style={styles.contentText}>{subItem}</Text>
            </Body>
          </ListItem>
        ))}
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
        <ScrollView>
          {this.state.contents ? (
            <Accordion
              dataArray={this.state.contents}
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
    alignContent: "center",
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
    padding: wp("2.5"),
    paddingLeft:wp('10')
  },
  headerIcon: { position: "absolute", left: hp('2'), top: hp('2') },
  contentStyle: {
    height:hp('7'),
    backgroundColor: "#27378f",
    marginTop: hp('0.5'),
    marginRight: hp('2.3'),
    paddingLeft: hp('1')
  },
  contentText: {
    fontSize: hp('2.5'),
    fontWeight:'bold',
    color: "#fff"
  },
  arrows: {
    position: "absolute",
    top: hp("2.3"),
    right: hp("3.2")
  },
  backImg: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
 
  }
});

export default MyCarePackages;
