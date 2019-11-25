
import { createStackNavigator } from 'react-navigation-stack';

//Import Screens
import IntroScreen from '../screens/IntroScreen';
import Bording2Screen from '../screens/Bording2Screen';
import Bording3Screen from '../screens/Bording3Screen';


 
const AppStackNavigator = createStackNavigator({
  
  Home: {
    screen: IntroScreen,
  },
 Bording2: {
    screen: Bording2Screen,
  },
 Bording3: {
    screen: Bording3Screen,
  },

},
   {
    initialRouteName: 'Home',
  });

export default  AppStackNavigator;
