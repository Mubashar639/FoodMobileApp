import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import { Container, Content, Button, Text, Center } from "native-base";
import Swiper from "react-native-swiper";
// assets
//import bording1Image from '../assets/images/On Boarding 1.png'

const postArry = [
  {
    upperText:
      "L.I.T can help you easily and conveniently find transportation to visit your incarcerated loved ones",
    imageSrc: require("../assets/images/OnBoardingE1.png"),
    lowerText:
      " When a loved one becaome incarcerated it not only affects them,but also may be an overwhelming time for the family. You want tohelp your loved one as much as you can during this difficulttime but may not know where to start"
  },
  {
    upperText: " Bring a little bit of home & hope",
    imageSrc: require("../assets/images/OnBoardingE2.png"),
    lowerText:
      " With Our Care Package you can Conveniently puchase fresh fruits.vegetables,prepared foods, canned goods,snacks,candy & drinks to give your loved one one your visit"
  },
  {
    upperText: " Punctual, Professional & Polite",
    imageSrc: require("../assets/images/OnBoardingE3.png"),
    lowerText:
      "L.I.T professional carriers will hand pick your order, Package and deliver it to you! Hassle free"
  }
];

const Introduction = props => {
  const [posts, setPosts] = useState(postArry);
  const [indexNo, setIndexNo] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Swiper
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          style={styles.wrapper}
          onIndexChanged={index => {
            setIndexNo(index);
          }}
          showsButtons={indexNo == 2 ? false : true}
          buttonWrapperStyle={{
            backgroundColor: "transparent",
            position: "absolute",
            top: 300,
            left: -200
            // flex: 1,
          }}
          prevButton={<Text></Text>}
          nextButton={
            <View style={styles.nextButtonContainer}>
              <Text style={styles.buttonText}>Next</Text>
            </View>
          }
        >
          {posts.map((post, index) => (
            <View key={index} style={styles.slide1}>
              {/* topText */}
              <View style={styles.topTextContainer}>
                {index !== 2 ? (
                  <Button
                    onPress={() => props.navigation.navigate("FacilitiesList")}
                    style={styles.skipButton}
                    small
                    transparent
                  >
                    <Text>skip</Text>
                  </Button>
                ) : null}
                <Text style={styles.topText}>{post.upperText}</Text>
              </View>
              {/* image */}
              <View style={styles.imageStyle}>
                <Image source={post.imageSrc} style={styles.backgroundImage} />
              </View>
              {/* bottom text */}
              <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>{post.lowerText}</Text>
                {index == 2 ? (
                  <Button
                    onPress={() => props.navigation.navigate("FacilitiesList")}
                    style={styles.conButton}
                    bordered
                    rounded
                  >
                    <Text>get started</Text>
                  </Button>
                ) : (
                  <Button
                    // onPress={() => setIndexNo(indexNo + 1)}
                    style={styles.conButton}
                    bordered
                    rounded
                  >
                    <Text style = {{textAlign:'center'}}>continue</Text>
                  </Button>
                )}
              </View>
            </View>
          ))}
        </Swiper>
      </View>
    </View>
  );
};

//styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(253,244,226)"
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(253,244,226)"
  },
  imageStyle: {
    top: -25,
    width: "100%",
    height: 270
  },
  skipButton: {
    top: -20,
    position: "absolute",
    right: 0
  },
  conButton: {
    left: 150,
    paddingLeft: 17,
    width: 150,
    position: "absolute",
    bottom: -15,
    textAlign:'center'
  },
  nextButtonContainer: {
    width: 150,
    height: 50,
    left: 40,
    marginTop: 150,
    backgroundColor: "red",
    opacity: 0
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(253,244,226)"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(253,244,226)"
  },
  dotStyle: {
    top: -250
  },
  activeDotStyle: {
    backgroundColor: "#2e3c91",
    top: -250
  },
  topTextContainer: {
    position: "absolute",
    height: 230,
    top: 20,
    width: "95%",
    padding: 40,
    marginTop: 50,
    marginLeft: 30
  },
  bottomTextContainer: {
    position: "absolute",
    height: 230,
    top: 520,
    width: "95%",
    padding: 40,
    marginTop: 50,
    marginLeft: 30
  },
  topText: {
    color: "#2e3c91",
    fontSize: 30,
    fontWeight: "bold"
  },
  bottomText: {
    color: "#2e3c91",
    fontSize: 20
    // fontWeight: "bold"
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
    position: "absolute"
  }
});

export default Introduction;
