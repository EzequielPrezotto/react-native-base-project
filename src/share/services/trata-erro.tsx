import {Alert} from "react-native";

class TrataErro {
  exib = function (err: any, mensagem = '') {
    if (process.env.NODE_ENV === 'development') {
      console.log(mensagem, err);
      Alert.alert(mensagem, err.toString());
    } else {
      Alert.alert(mensagem);
    }
  }
}

const trataErro = new TrataErro();
export default trataErro;
