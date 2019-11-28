import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Alert,
  ScrollView
} from "react-native";
import { Accordion, Text, ListItem } from "native-base";
import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";

// assets

class Transportation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isContentVisible: false,
      contents: [
        {
          title: "Title 1",
          TransportationDetails: [
            {
              facilities: "tansportataions",
              dayOfOperation: ["mon", "tus", "wed"],
              ticketPrice: 500,
              pickUpLocation: "chak no 197 rn faisabadad",
              phoneNo: 15645148545
            }
          ]
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
  _renderContent = items => {
    return (
      <View style={styles.contentStyle}>
        {items.TransportationDetails.map((item, i) => (
          <View key = {i}>
            <ListItem>
              <Text >Facilities:  {item.facilities}</Text>
            </ListItem>
            <ListItem>
            <Text>DayOfOperation:  MON, TUE ,WED </Text>
            </ListItem>
            <ListItem>
              <Text >TicketPrice: {item.ticketPrice}</Text>
            </ListItem>
            <ListItem>
              <Text >PickUpLocation: {item.pickUpLocation}</Text>
            </ListItem>
            <ListItem>
              <Text >PhoneNo: {item.phoneNo}</Text>
            </ListItem>
          </View>
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
    paddingLeft: 10,
    marginTop: 15
  },
  headerTitle: {
    fontSize: 26,
    color: "#3b448b",
    padding: 8
  },
  contentStyle: {
    width: "100%",
    height: "auto",
    paddingLeft: 5
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
    top: 15,
    right: 20,
  }
});

export default Transportation;
