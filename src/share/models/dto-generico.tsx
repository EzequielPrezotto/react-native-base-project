export class DtoGenerico {
  id = null;
  flagAtivo = true;
  excluir = false;
  online = false;
  readonly className: string;
  readonly urlApi: string;

  constructor(className: string, urlApi: string) {
    this.className = className;
    this.urlApi = urlApi;
  }

}