import AsyncStorage from '@react-native-community/async-storage';

import {create} from 'apisauce';

import settings from "../settings";

class Api {
  accounts: any;
}

const apiAccounts = create({
  baseURL: settings.urlLogin
});
apiAccounts.addAsyncRequestTransform(request => addAsyncRequestTransform(request));
apiAccounts.addResponseTransform = addResponseTransform;

const api = new Api();
api.accounts = apiAccounts;

export default api;

async function addAsyncRequestTransform(request: any) {
  const token = await AsyncStorage.getItem('@CodeApi:token');
  let context = await AsyncStorage.getItem('@CodeApi:context');

  if (token) {
    request.headers['Content-Type'] = `application/json`;
    request.headers['Authorization'] = `Bearer ${token}`;
    request.headers['context'] = context;
  }

}

function addResponseTransform(response: any) {
  if (!response.ok) {
    throw response;
  }
}