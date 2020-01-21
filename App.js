import React from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Ionicons } from "@expo/vector-icons";
//Import Navigation Container
import AppContainer from "./navigation/stackNavigation";

//Redux Config
import { Provider } from "react-redux";
import store from "./Redux/store";

//firbase cnfig

import firebase from "firebase";
import { firebaseConfig } from "./config";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
    firebase.initializeApp(firebaseConfig);
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
