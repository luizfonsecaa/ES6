class NegociacaoController {

  constructor(){
    let $ = document.querySelector.bind(document);
    this._inputData       = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor      = $('#valor');
  }

  adiciona(event) {
    event.preventDefault();
    let helper = new DateHelper();
    let data = helper.textParaData(this._inputData.value);
    console.log(data);
    return;
    let negociacao = new Negociacao(data, this._inputQuantidade.value, this._inputValor.value);

    console.log(negociacao);

    console.log(helper.dataParaTexto(negociacao.data));
    //adicionar a negociação em uma lista
  }
}