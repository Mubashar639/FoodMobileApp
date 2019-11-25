import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Alert,ScrollView } from "react-native";
import { Container, Content, Button, Text, Center } from "native-base";
import DropDownItem from "react-native-drop-down-item";
// assets
//import bording1Image from '../assets/images/On Boarding 1.png'

class Bording2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [
        {
          title: "Title 1",
          body: "Hi. I love this component. What do you think?"
        },
        {
          title: "See this one too",
          body: "Yes. You can have more items."
        },
        {
          title: "Thrid thing",
          body:
            "What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?"
        }
      ]
    };
  }
  render() {
    return (
        <View style={styles.container}>
        <ScrollView style={{ alignSelf: 'stretch' }}>
          {
            this.state.contents
              ? this.state.contents.map((param, i) => {
                return (
                  <DropDownItem
                    key={i}
                    // style={styles.dropDownItem}
                    contentVisible={false}
                    // invisibleImage={IC_ARR_DOWN}
                    // visibleImage={IC_ARR_UP}
                    header={
                      <View>
                        <Text style={{
                          fontSize: 16,
                          color: 'blue',
                        }}>{param.title}</Text>
                      </View>
                    }
                  >
                    <Text>
                      {param.body}
                    </Text>
                  </DropDownItem>
                );
              })
              : null
          }
          <View style={{ height: 96 }}/>
        </ScrollView>
      </View>
    );
  }
}

//styles

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    width: 250,
    height: 70,
    backgroundColor: " rgb(253,244,226)",
    position: "relative",
    left: 130,
    bottom: 25
  },
  button: {
    marginTop: 760,
    bottom: 35,
    width: 200,

    left: 140
  },
  skipButton: {
    width: 100,
    top: 45,
    left: 370
  },
  buttonText: {
    color: "rgb(58,70,149)",
    textAlign: "center",
    marginLeft: 30
  },
  //   rgb(253,244,226)
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
    position: "absolute"
  }
});

export default Bording2;
