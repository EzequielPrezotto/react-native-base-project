import {DtoGenerico} from "./dto-generico";

export class Bairro extends DtoGenerico{
  iBairro: any;
  nome: any;

  constructor() {
    super('Bairro', '/bairros');
  }
}