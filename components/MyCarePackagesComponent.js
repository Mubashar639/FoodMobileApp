import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Alert,
  ScrollView
} from "react-native";
import { Accordion, Text, ListItem, Radio, Body, Icon } from "native-base";
import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";

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
        <Image
          style={styles.arrows}
          source={
            expanded
              ? require("../assets/icons/uparrow.png")
              : require("../assets/icons/downarrow.png")
          }
        />
      </View>
    );
  };
  _renderContent = items => {
    return (
      <View>
        {items.subContents.map((subItem, i) => (
          <ListItem style={styles.contentStyle} disabled key={i}>
            <Radio color="#fff" selected={true} selectedColor="#ffeed0" />
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
    );
  }
}

//styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcf2e5"
  },
  dropDownItem: {
    marginTop: 20,
    paddingRight: 10,
    paddingTop: -20
  },
  headerStyle: {
    width: "100%",
    height: 60,
    // paddingTop:20,
    backgroundColor: "#fceccf",
    borderColor: "#f0e2ce",
    borderWidth: 1,
    borderStyle: "solid",
    paddingLeft: 40,
    marginTop: 15
  },
  headerTitle: {
    fontSize: 26,
    color: "#3b448b",
    padding: 8
  },
  headerIcon: { position: "absolute", left: 15, top: 12 },
  contentStyle: {
    backgroundColor: "#27378f",
    marginTop: 10,
    marginRight: 15,
    paddingLeft: 10
  },
  contentText: {
    fontSize: 26,
    color: "#fff"
  },
  arrows: {
    position: "absolute",
    top: 15,
    right: 20
  }
});

export default MyCarePackages;
