import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './screens/home-screen';
import Login from "../accounts/screens/login";
import BairroScreen from "./screens/bairro-screen";

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Login: {screen: Login},
  Bairro: {screen: BairroScreen},
});

const App = createAppContainer(MainNavigator);

export default App;