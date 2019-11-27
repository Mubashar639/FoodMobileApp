import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Alert,
  ScrollView
} from "react-native";
import { Accordion, Text } from "native-base";
import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";

// assets

class FacilitiesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isContentVisible: false,
      contents: [
        {
          title: "Title 1",
          FacilitiesDetails: "Hi. I love this component. What do you think?",
          address: "street 293 9 2 sarder faisalabad"
        },
        {
          title: "See this one too",
          FacilitiesDetails: "Yes. You can have more items.",
          address: "street 29 sarder bazar lahore"
        },
        {
          title: "Thrid thing",
          FacilitiesDetails:
            "What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?",
          address: "street  2 sarder isb"
        },
        {
          title: "Title 1",
          FacilitiesDetails: "Hi. I love this component. What do you think?",
          address: "street 293 9 2 sarder faisalabad"
        },
        {
          title: "See this one too",
          FacilitiesDetails: "Yes. You can have more items.",
          address: "street 29 sarder bazar lahore"
        },
        {
          title: "Thrid thing",
          FacilitiesDetails:
            "What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?",
          address: "street  2 sarder isb"
        },
        {
          title: "Title 1",
          FacilitiesDetails: "Hi. I love this component. What do you think?",
          address: "street 293 9 2 sarder faisalabad"
        },
        {
          title: "See this one too",
          FacilitiesDetails: "Yes. You can have more items.",
          address: "street 29 sarder bazar lahore"
        },
        {
          title: "Thrid thing",
          FacilitiesDetails:
            "What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?",
          address: "street  2 sarder isb"
        },
        {
          title: "Title 1",
          FacilitiesDetails: "Hi. I love this component. What do you think?",
          address: "street 293 9 2 sarder faisalabad"
        },
        {
          title: "See this one too",
          FacilitiesDetails: "Yes. You can have more items.",
          address: "street 29 sarder bazar lahore"
        },
        {
          title: "Thrid thing",
          FacilitiesDetails:
            "What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?",
          address: "street  2 sarder isb"
        },
        {
          title: "Title 1",
          FacilitiesDetails: "Hi. I love this component. What do you think?",
          address: "street 293 9 2 sarder faisalabad"
        },
        {
          title: "See this one too",
          FacilitiesDetails: "Yes. You can have more items.",
          address: "street 29 sarder bazar lahore"
        },
        {
          title: "Thrid thing",
          FacilitiesDetails:
            "What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?",
          address: "street  2 sarder isb"
        }
      ]
    };
  }

  _renderHeader = (items, expanded) => {
    return (
      <View style={styles.headerStyle}>
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
  _renderContent = (items) => {
    return (
      <View style={styles.contentStyle}>
        <Text style={styles.contentText}>Facilities:  {items.FacilitiesDetails}</Text>
        <Text style={styles.contentText}>address:  {items.address}</Text>
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
              renderContent = {this._renderContent}
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
    paddingLeft: 10,
    marginTop: 15,
  },
  headerTitle: {
    fontSize: 26,
    color: "#3b448b",
    padding: 8
  },
  contentStyle: {
    width: "100%",
    height: "auto",
    paddingLeft: 10,
   

  },
  contentText: {
    fontSize: 16,
    color: "#3b448b",
    borderBottomColor: "#f0e2ce",
    borderBottomWidth: 1,
    textAlignVertical: "center",
    marginTop: 15,
    paddingBottom: 15,
    paddingLeft: 10

  },
  arrows: {
    position: "absolute",
    top: 20,
    right: 20
  }
});

export default FacilitiesList;
