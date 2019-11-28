
import { createStackNavigator } from 'react-navigation-stack';

//Import Screens
import IntroScreen from '../screens/IntroScreen'
import FacilitiesListScreen from '../screens/FacilitiesListScreen';
import MyCarePackagesScreen from '../screens/MyCarePackagesScreen';
import TransportationScreen from '../screens/TransportationScreen';
import TransportationSearchScreen from '../screens/TransportationSearchScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import PaymentsScreen from '../screens/PaymentsScreen';
import RulesScreen from '../screens/RulesScreen';


 
const AppStackNavigator = createStackNavigator({
  
  Intro: {
    screen: IntroScreen,
  },
  FacilitiesList: {
    // screen: FacilitiesListScreen,
    // screen: MyCarePackagesScreen,
    // screen: TransportationScreen,
    // screen: TransportationSearchScreen,
    // screen: ForgotPasswordScreen,
    // screen: PaymentsScreen,
    screen: RulesScreen,
  },

},
   {
    initialRouteName: 'Intro',
  });

export default  AppStackNavigator;
