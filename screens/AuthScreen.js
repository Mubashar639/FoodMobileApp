import React from "react";




//Import Components
import Auth from "../components/Auth/index";

class AuthScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  
  render() {
    return <Auth navigation={this.props.navigation} />;
  }
}


export default AuthScreen;
