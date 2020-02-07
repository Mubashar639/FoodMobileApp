import { createStackNavigator } from "react-navigation-stack";
// import { createMaterialTopTabNavigator } from "react-navigation-tabs";
// import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

//Import Screens
import IntroScreen from "../screens/IntroScreen";
import FacilitiesListScreen from "../screens/FacilitiesListScreen";
import MyCarePackagesScreen from "../screens/MyCarePackagesScreen";
import TransportationScreen from "../screens/TransportationScreen";
import TransportationSearchScreen from "../screens/TransportationSearchScreen";
import NewPassScreen from "../screens/NewPassScreen";
import DigitScreen from "../screens/DigitScreen";
import EmailScreen from "../screens/EmailScreen";
import PaymentsScreen from "../screens/PaymentsScreen";
import RulesScreen from "../screens/RulesScreen";
import ProductsScreen from "../screens/ProductsScreen";
import AuthScreen from "../screens/AuthScreen";

import HomeScreen from "../screens/HomeScreen";
import MyCartScreen from "../screens/MyCartScreen";
import MyTripsScreen from "../screens/MyTripsScreen";
import MyOrdersScreen from "../screens/MyOrdersScreen";
import Demo from "../screens/Demo";
//Tabs Components
import Signup from "../components/Auth/SignupComponent";
import Signin from "../components/Auth/SigninComponent";

const AppStackNavigator = createStackNavigator(
  {
    Intro: {
      // screen: MyTripsScreen
      screen: IntroScreen
    },
    Home: {
      screen: HomeScreen
    },
    Digit: {
      screen: DigitScreen
    },
    Email: {
      screen: EmailScreen
    },
    NewPass: {
      screen: NewPassScreen
    },
    Auth: {
      screen: AuthScreen
    },
    MyCart: {
      screen: MyCartScreen
    },
    MyTrips: {
      screen: MyTripsScreen
    },
    FacilitiesSearch: {
      screen: TransportationSearchScreen
      // screen: TransportationScreen
    },
    Transport: {
      screen: TransportationScreen
    },
    Rules: {
      screen: RulesScreen
    },
    Products: {
      screen: ProductsScreen
    },
    FacilitiesList: {
      screen: FacilitiesListScreen
      // screen: MyCarePackagesScreen,
      // screen: TransportationScreen,
      // screen: TransportationSearchScreen,
      // screen: NewPassScreen,
      // screen: PaymentsScreen,
      // screen: RulesScreen,
      // screen: ProductsScreen,
      // screen: AuthScreen,
      // screen: HomeScreen
    },
    Payments: {
      screen: PaymentsScreen
    },
    Orders: {
      screen: MyOrdersScreen
    },
    CarePackages: {
      screen: MyCarePackagesScreen
    }
  },
  {
    initialRouteName: "Intro"
  }
);

//Tabs Navigation

export default createAppContainer(AppStackNavigator);
