
import { createStackNavigator } from 'react-navigation-stack';

//Import Screens
import IntroScreen from '../screens/IntroScreen'
import FacilitiesListScreen from '../screens/FacilitiesListScreen';
import MyCarePackagesScreen from '../screens/MyCarePackagesScreen';
import TransportationScreen from '../screens/TransportationScreen';


 
const AppStackNavigator = createStackNavigator({
  
  Intro: {
    screen: IntroScreen,
  },
  FacilitiesList: {
    // screen: FacilitiesListScreen,
    // screen: MyCarePackagesScreen,
    screen: TransportationScreen,
  },

},
   {
    initialRouteName: 'Intro',
  });

export default  AppStackNavigator;
