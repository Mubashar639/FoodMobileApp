import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
//Import Components
import FacilitiesList from "../components/FacilitiesListComponent";
import FacilitiesHeader from "../headers/FacilitiesListHeader";

//Redux config
import { connect } from "react-redux";
import { GetFacilities } from "../Redux/Epics/facilities";
import { facility_filter } from "../Redux/Actions/authentication";

class FacilitiesListScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      facilities: []
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "FACILITIES",
      headerStyle: {
        backgroundColor: "#fceccf",
        height: hp("8.5")
      },
      headerLeft: () => (
        <AntDesign
          onPress={() => navigation.goBack()}
          style={styles.leftButton}
          name="left"
          size={hp("3")}
          color="gray"
        />
      ),

      headerTitle: () => (
        <FacilitiesHeader getFilteredFacilities={navigation.state.params} />
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      getFilteredFacilities: this.getFilteredFacilities
    });
  }

  getFilteredFacilities = e => {
    //  this.props.dispatch(facility_filter(e))
    let filter = this.props.Facility.facilities.filter(facility => {
      return facility.name.toLowerCase().indexOf(e.toLowerCase()) !== -1;
    });
    console.log(filter);

    this.setState({
      facilities: filter
    });
    //  this.forceUpdate()
  };

  render() {
    return (
      <FacilitiesList
        facilities={
          this.state.facilities.length
            ? this.state.facilities
            : this.props.Facility.facilities
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  leftButton: {
    marginLeft: hp("2.5")
  }
});
const mapStateToProps = state => {
  // console.log(state.Facility)
  return {
    Facility: state.Facility
  };
};
export default connect(mapStateToProps)(FacilitiesListScreen);
