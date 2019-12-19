import React, { Component } from "react";
import { StyleSheet, View, Text,ImageBackground } from "react-native";
import { Container, Content } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
class MyTrips extends Component {
  render() {
    return (
        <ImageBackground
        style={styles.backImg}
        source={require("../assets/images/backgroundimage.png")}
      >
      <View style={styles.container}>
        <Content>
          <Grid style={{ height: hp("100") }}>
            <View style={styles.lineView1}></View>
            <View style={styles.lineView2}></View>

            {/* Header Row */}
            <Row style={styles.rowStyle}>
              <Col style={styles.headColStyle}>
                <Text style={styles.headerText}>Date</Text>
              </Col>
              <Col style={styles.headCol2Style}>
                <Text style={styles.headerText}>Facilities Visited</Text>
              </Col>
              <Col style={styles.headCol3Style}>
                <Text style={styles.headerText}>Tranportation</Text>
              </Col>
            </Row>
            {/* Body Row */}
            <Row style={styles.rowStyle}>
              <Col style={styles.bodyColStyle}>
                <Text style={styles.bodyText}>3/4/2019</Text>
              </Col>
              <Col style={styles.bodyCol2Style}>
                <Text style={styles.bodyText}>Tea Facility</Text>
              </Col>
              <Col style={styles.bodyCol3Style}>
                <Text style={styles.bodyText}>MANYA Sevice</Text>
              </Col>
            </Row>
          </Grid>
        </Content>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: wp("90"),
    height: hp("60"),
    alignSelf: "center",
    marginTop: hp("4"),
    borderRadius: 5,
    backgroundColor: "#ffefd0"
  },
  lineView1: {
    position: "absolute",
    height: hp("100"),
    width: 1,
    left: wp("19"),
    backgroundColor: "#e9ddc5"
  },
  lineView2: {
    position: "absolute",
    height: hp("100"),
    width: 1,
    left: wp("54.5"),
    backgroundColor: "#e9ddc5"
  },
  rowStyle: {
    borderBottomColor: "#e9ddc5",
    borderBottomWidth: 1,
    height: hp("6")
  },
  //   Header Col Style
  headColStyle: {
    flex: 1,
    borderTopLeftRadius: 5,
    height: hp("6"),
    padding: hp("1")
  },
  headCol2Style: {
    flex: 2,
    height: hp("6"),
    padding: hp("1")
  },
  headCol3Style: {
    flex: 2,
    height: hp("6"),
    padding: hp("1"),
    borderTopRightRadius: 5
  },
  //   Body Col Style
  bodyColStyle: {
    flex: 1,
    height: hp("6"),
    padding: hp("1")
  },
  bodyCol2Style: {
    flex: 2,
    height: hp("6"),
    padding: hp("1")
  },
  bodyCol3Style: {
    flex: 2,
    height: hp("6"),
    padding: hp("1")
  },
  //   header Col Text Style
  headerText: {
    fontSize: hp("2.2"),
    fontWeight: "bold",
    textAlign: "center",
    color: "#495398"
  },

  //   Body Col Text Style
  bodyText: {
    fontSize: hp("2"),
    fontWeight: "bold",
    textAlign: "center",
    color: "#495398"
  },
  backImg: {
    flex: 1,
    alignContent: "center",
 
  }
});
export default MyTrips;
