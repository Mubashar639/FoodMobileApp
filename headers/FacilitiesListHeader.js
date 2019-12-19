import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { EvilIcons, Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
const FacilitiesHeader = props => {
    const [isSearch, setIsSearch] = useState(false);
  
    return (
      <View style={styles.container}>
        {isSearch ? (
          <View style = {{position:'relative'}}>
            {/* <Form style = {{backgroundColor:'red'}}>
            <Input defaultValue = 'abdure' placeholder="Username" /> */}
            {/* </Form>
             */}
            <TextInput
              style={styles.inputStyle}
              placeholder="Search Here..."
            />
            <Entypo
              onPress={() => setIsSearch(!isSearch)}
              style={styles.iconCrossStyle}
              name="cross"
              size={hp('4')}
              color="gray"
            />
          </View>
        ) : (
          <View>
            <Text style={styles.headerTitle}>FACILITIES</Text>
            <EvilIcons
              onPress={() => setIsSearch(!isSearch)}
              style={styles.iconStyle}
              name="search"
              size={hp('4')}
              color="gray"
            />
          </View>
        )}
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      width: "100%"
    },
    headerTitle: {
      fontWeight: "bold",
      fontSize: hp('3'),
      color: "#3b448b",
      marginLeft: wp('-13'),
      textAlign:'center'
    },
    iconStyle: {
      position: "absolute",
      right: wp('4'),
      top:hp('0.3')
    },
    iconCrossStyle: {
      position: "absolute",
      top:hp('3'),
      right:wp('3.5')
    
    },
   
    inputStyle: {
      fontSize:hp('2.5'),
      height: hp('10'),
      marginLeft:hp('1'),
      // position: "absolute",
      top:0
    }
  });

  export default FacilitiesHeader;