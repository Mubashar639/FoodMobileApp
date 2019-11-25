import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
//Import Navigation Container
import AppContainer from './navigation/appNavigation'


 class App extends React.Component {
      constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
    async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  render(){
        if (!this.state.isReady) {
      return <AppLoading />;
    }
        return ( 
           <AppContainer />     
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default App