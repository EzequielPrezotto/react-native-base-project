import React, {Component} from 'react';
import {Button, View} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import Props from "../models/props";

class HomeScreen extends Component<Props> {
  static navigationOptions = {
    title: 'Welcome',
  };

  state = {
    errorMessage: '',
    autenticated: '',
  };

  async componentDidMount() {
    this.isAutenticated();
    this.props.navigation.addListener(
      'didFocus',
      payload => {
        this.isAutenticated();
      });
  }

  async isAutenticated() {
    const token = await AsyncStorage.getItem('@CodeApi:token');
    const user = await AsyncStorage.getItem('@CodeApi:user');

    if (!token || !user) {
      this.setState({autenticated: false});
    } else {
      this.setState({autenticated: true});
    }
  }

  exit() {
    AsyncStorage.removeItem('@CodeApi:token');
    AsyncStorage.removeItem('@CodeApi:user');
    this.isAutenticated();
  }

  navigate(screen: string) {
    this.props.navigation.navigate(screen);
  }

  render() {
    return (
      <View>
        {this.state.autenticated
          ? <View><Button onPress={() => this.navigate('Bairro')} title="Bairros"/>
            <Button onPress={() => this.exit()} title="Exit"/></View>
          : <Button onPress={() => this.navigate('Login')} title="Login"/>}
      </View>
    );
  }
}

export default HomeScreen;