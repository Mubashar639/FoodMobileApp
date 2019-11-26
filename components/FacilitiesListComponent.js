import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Alert,
  ScrollView
} from "react-native";
import { Container, Content, Button, Text, Center, Input } from "native-base";
// import DropDownItem from "react-native-drop-down-item";
import Accordion from '@dooboo-ui/native-accordion'
import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";

// assets

class FacilitiesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isContentVisible:false,
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
        }
      ]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.contents
            ? this.state.contents.map((param, i) => {
                return (
                  <Accordion
                    key={i}
                    style={styles.dropDownItem}
                    contentVisible={false}
                    underlineColor={"red"}   
                    invisibleImage={require("../assets/icons/arrow2.png")}
                    visibleImage={require("../assets/icons/uparrow.png")}
                    // onPress = {()=>Alert.alert('WORKING')}
                    header={
                     
                      <View onPress = {()=>Alert.alert('WORKING')} style={styles.headerStyle}>
                        <Text style={styles.headerTitle}>{param.title}</Text>
                        {/* {this.state.isContentVisible ? (
                          <Image
                            style={styles.arrows}
                            source={require("../assets/icons/downarrow.png")}
                          />
                        ) : (
                          <Image
                            style={styles.arrows}
                            source={require("../assets/icons/uparrow.png")}
                          />
                        )} */}
                      </View>
                    }
                  >
                    <View style={styles.detailsStyle}>
                      <Text style={styles.fDTS}>
                        Facilities Details: {param.FacilitiesDetails}
                      </Text>
                    </View>
                    <View style={styles.detailsStyle}>
                      <Text style={styles.fDTS}>address: {param.address}</Text>
                    </View>
                  </Accordion>
                );
              })
            : null}
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
    paddingTop:-20
  },
  headerStyle: {
    width: "100%",
    height: 60,
    // paddingTop:20,
    backgroundColor: "#fceccf",
    borderColor: "#f0e2ce",
    borderWidth: 1,
    borderStyle: "solid",
    paddingLeft: 10
  },
  headerTitle: {
    fontSize: 26,
    color: "#3b448b",
    padding: 8
  },
  detailsStyle: {
    width: "100%",
    height: "auto",
    borderBottomColor: "#f0e2ce",
    borderBottomWidth: 1,
    paddingLeft: 10
  },
  fDTS: {
    fontSize: 16,
    color: "#3b448b",
    textAlignVertical: "center",
    marginTop: 15,
    marginBottom: 15
  },
  arrows: {
    position: "absolute",
    top: 20,
    right: 20
  }
});

export default FacilitiesList;
