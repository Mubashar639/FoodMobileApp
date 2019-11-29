// import React from "react";
// import { View, Text, StyleSheet, Image,Dimensions  } from "react-native";
// import { Header, Tab, Tabs, ScrollableTab } from "native-base";

import Signup from "./SignupComponent";
import Signin from "./SigninComponent";

// const Index = () => {
//   return (
//     <View style={styles.container}>
//       <View
//         style={{
//           flex: 0,
//           backgroundColor: "green",
//           justifyContent: "center",
//           alignItems: "center"
//         }}
//       ></View>
//       <View style={{ flex: 2, backgroundColor: "red" }}>
//         <Image source={require("../../assets/images/OnBoardingE1.png")} />
//         <Tabs
//           renderTabBar={() => <ScrollableTab />}
//           tabBgColor="black"
//           style={{ backgroundColor: "black", position: "absolute", top: 40 }}
//         >
//           <Tab tabStyle={{ backgroundColor: "black" }} heading="SIGN IN">
//             <Signin />
//           </Tab>
//           <Tab heading="SIGN UP">
//             <Signup />
//           </Tab>
//         </Tabs>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignContent: "center",
//     backgroundColor: "red"
//   }
// });
// export default Index;

import * as React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

const SigninRoute = () => <Signin />;

const SignupRoute = () => <Signup />;

export default class Index extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "SIGN IN" },
      { key: "second", title: "SIGN UP" }
    ]
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: SigninRoute,
          second: SignupRoute
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get("window").width }}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  }
});
