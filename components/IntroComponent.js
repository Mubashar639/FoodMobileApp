import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions
} from "react-native";
import { Container, Content, Button, Text, Center } from "native-base";
import Swiper from "react-native-swiper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
// assets
//import bording1Image from '../assets/images/On Boarding 1.png'
const { height, width } = Dimensions.get("window");
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
          nextButton={<Text style={styles.nextButtonContainer}>Next</Text>}
        >
          {posts.map((post, index) => (
            <View key={index} style={styles.slide1}>
              {/* topText */}
              <View style={styles.topTextContainer}>
                <View style={styles.skipCon}>
                  {index !== 2 ? (
                    <Button
                      onPress={() => props.navigation.navigate("Home")}
                      style={styles.skipButton}
                      small
                      transparent
                    >
                      <Text style= {{fontSize:hp('1.8%')}}>skip</Text>
                    </Button>
                  ) : null}
                </View>
                <Text style={styles.topText}>{post.upperText}</Text>
              </View>
              {/* image */}
              <View style={styles.imageStyle}>
                <Image source={post.imageSrc} style={styles.backgroundImage} />
              </View>
              <View style={styles.dotCon}></View>
              {/* bottom text */}
              <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>{post.lowerText}</Text>
                <View style={styles.nextButtonCon}>
                  {index == 2 ? (
                    <Button
                      onPress={() => props.navigation.navigate("Home")}
                      style={styles.conButton}
                      bordered
                      rounded
                    >
                      <Text style={{ marginLeft: wp("4") }}>get started</Text>
                    </Button>
                  ) : (
                    <Button
                      // onPress={() => setIndexNo(indexNo + 1)}
                      style={styles.conButton}
                      bordered
                      rounded
                    >
                      <Text style={{ marginLeft: wp("6") }}>continue</Text>
                    </Button>
                  )}
                </View>
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

  wrapper: {
    flex: 1
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(253,244,226)"
  },
  imageStyle: {
    flex: 3
  },
  skipButton: {
    alignSelf: "flex-end"
  },
  conButton: {
    // justifyContent:'flex-start',
    width: wp("40"),
    marginLeft: wp("20"),
    marginTop: wp("5")
  },
  nextButtonContainer: {
    // width: wp("35"),
    // height: hp("8"),
    // left: wp("18"),
    // top: wp("-5"),
    backgroundColor: "red",
    opacity: 1
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
  dotCon: {
    flex: 0.8,
    backgroundColor: "blue"
  },
  dotStyle: {
    top: wp("-48")
  },
  activeDotStyle: {
    backgroundColor: "#2e3c91",
    top: wp("-48")
  },
  topTextContainer: {
    flex: 3,
    justifyContent: "center",
    alignContent: "center"
  },
  skipCon: {
    flex: 2,
    // backgroundColor: "green",
    justifyContent: "center"
  },
  bottomTextContainer: {
    flex: 3,
    justifyContent: "center",
    alignContent: "center"
  },
  topText: {
    flex: 3,
    // backgroundColor: "yellow",
    alignSelf:'center',
    color: "#2e3c91",
    fontSize: hp("3%"),
    fontWeight: "bold",
    textAlign: "center",
    width: wp("80")
  },
  bottomText: {
    flex: 3,
    // backgroundColor: "green",
    color: "#2e3c91",
    fontSize: hp("2.5%"),
    width: wp("80")

    // fontWeight: "bold"
  },
  nextButtonCon: {
    flex: 2,
    // backgroundColor: "yellow"
  },
  backgroundImage: {
    flex: 3,
    width: wp("100"),
    resizeMode: "stretch",
    margin: 0,
    padding: 0
  }
});

export default Introduction;
