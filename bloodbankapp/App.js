import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import DonarsScreen from "./src/screens/DonarsScreen";
import DonarProfile from "./src/screens/DonarProfile";
const navigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    RegistrationScreen: { screen: RegistrationScreen },
    DonarsScreen: { screen: DonarsScreen },
    DonarProfile: { screen: DonarProfile },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "By Ahad",
    },
  }
);
export default createAppContainer(navigator);
