import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../share/services/api';
import Props from "../../share/models/props";
import trataErro from "../../share/services/trata-erro";

export default class Login extends Component<Props> {
  signIn = async () => {
    try {
      const response: any = await api.accounts.post('/accounts/sessao/autenticar', {
        cpfCnpj: "",
        senha: ""
      });

      const user = response.data.nome;
      const token = response.data.token.accessToken;

      await AsyncStorage.multiSet([
        ['@CodeApi:token', token],
        ['@CodeApi:user', JSON.stringify(user)],
      ]);

      this.props.navigation.navigate('Home');
    } catch (err) {
      trataErro.exib(err)
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.signIn} title="Enter"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});