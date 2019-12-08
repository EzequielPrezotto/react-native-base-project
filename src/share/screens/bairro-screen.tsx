import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import api from '../services/api';
import {Bairro} from "../models/bairro";

export default class BairroScreen extends Component {
  state = {
    errorMessage: '',
    bairros: [],
  };

  async componentDidMount() {
    try {
      const response: any = await api.accounts.get('/bairros');
      console.log(response.data);
      const projects = response.data.conteudo;
      this.setState({bairros: projects});
    } catch (err) {
      this.setState({errorMessage: err});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {!!this.state.errorMessage && <Text>{this.state.errorMessage}</Text>}
        {this.state.bairros.map((project: Bairro) => (
          <View key={project.iBairro} style={{marginTop: 15}}>
            <Text style={{fontWeight: 'bold'}}>{project.nome}</Text>
          </View>
        ))}
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