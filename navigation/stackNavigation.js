
import { createStackNavigator } from 'react-navigation-stack';

//Import Screens
import IntroScreen from '../screens/IntroScreen'
import FacilitiesListScreen from '../screens/FacilitiesListScreen';


 
const AppStackNavigator = createStackNavigator({
  
  Intro: {
    screen: IntroScreen,
  },
  FacilitiesList: {
    screen: FacilitiesListScreen,
  },

},
   {
    initialRouteName: 'Intro',
  });

export default  AppStackNavigator;
