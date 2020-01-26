import React from "react";
import { View, Text, StyleSheet, Alert,TouchableOpacity } from "react-native";
import { Item, Button, Input, Icon, CheckBox } from "native-base";
//firebase config
import firebase from "firebase";
import * as Facebook from "expo-facebook";
import * as Google from "expo-google-app-auth";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class Signin extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user !== "null") {
        console.log(user);
      } else {
        Alert.alert("Please Login");
      }
    });
  }
  async logInFb() {
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions
    } = await Facebook.logInWithReadPermissionsAsync("415338135920748", {
      permissions: ["public_profile"]
    });
    if (type === "success") {
      const crent = firebase.auth.FacebookAuthProvider.credential(token);
      firebase
        .auth()
        .signInWithCredential(crent)
        .catch(err => console.log("err", err));
    } else {
      // type === 'cancel'
    }
  }

  //Start Google Auth
  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };
  onSignIn = googleUser => {
    console.log("Google Auth Response", googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function(firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          console.log("getGoogle user", googleUser);
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
          console.log("getGoogle user", credential);

          firebase
            .auth()
            .signInWithCredential(credential)
            .then(function(result) {
              console.log("user signed in ", result);
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          console.log("User already signed-in Firebase.");
        }
      }.bind(this)
    );
  };
  async logInGoogle() {
    const userData = await Google.logInAsync({
      // iosClientId: `452620192433-iq5dpv80kaf06l7dbto9b0m8e2hfvvts.apps.googleusercontent.com`,
      androidClientId: `452620192433-d0iv8kihjv0u0rn2jnrmmt1h57ou4t0d.apps.googleusercontent.com`
    });

    if (userData.type === "success") {
      this.onSignIn(userData);
      console.log("google", userData);
      /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
    }
  }
  //End Google Auth

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          width: wp("90"),
          alignSelf: "center"
        }}
      >
        <View style={{ flex: 1, marginTop: hp("1") }}>
          <Item>
            <Icon
              type="MaterialCommunityIcons"
              name="email-outline"
              style={{ color: "#4050b5" }}
            />
            <Input
              placeholder="Your-Email@gmail.com"
              placeholderTextColor="#dddddd"
            />
          </Item>
        </View>
        <View style={{ flex: 1 }}>
          <Item>
            <Icon
              type="MaterialIcons"
              name="lock-outline"
              style={{ color: "#4050b5" }}
            />
            <Input placeholder="************" placeholderTextColor="#dddddd" />
          </Item>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <CheckBox style={{ marginLeft: hp("-1") }} />

            <Text style={{ marginLeft: hp("3") }}>Remember Me</Text>
          </View>
          <TouchableOpacity
            accessible={true}
            onPress={()=>this.props.navigation.navigate("Email")}
            accessibilityRole="link"
          >
            <View>
              <Text style = {{color:'#3b4a9c'}}>Forgot Password</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text
            style={{
              alignSelf: "flex-start",
              color: "#2a3588"
            }}
          >
            Use Your Social Account To Sign In
          </Text>
          <Item regular style={styles.itemStyle}>
            <Icon
              onPress={() => this.logInFb()}
              type="Entypo"
              name="facebook-with-circle"
              style={{ color: "#4579d1" }}
            />
            <Icon
              type="Entypo"
              name="twitter-with-circle"
              style={{ color: "#6baae8" }}
            />
            <Icon
              onPress={() => this.logInGoogle()}
              type="FontAwesome"
              name="google-plus-official"
              style={{ color: "#cc5542" }}
            />
          </Item>
        </View>

        <View style={styles.buttonStyle}>
          <Button
            style={{ justifyContent: "center" }}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text style={styles.buttonTextStyle}>Sign In</Text>
          </Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  itemStyle: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("1")
  },
  buttonStyle: {
    width: "100%",
    // marginLeft: hp("3"),
    marginTop: hp("2"),
    marginBottom: hp("2")
  },
  buttonTextStyle: {
    fontSize: hp("2.5"),
    alignSelf: "center",
    textAlign: "center",
    color: "#fff"
    // marginLeft: hp("25")
  }
});
export default Signin;
