
class  NegociacaoController{

        constructor(){
            let $ = document.querySelector.bind(document);
            this._inpultData      = $("#data");
            this._inpulQuantidade = $("#quantidade");
            this._inpulValor      = $("#valor");

        }

    adiciona(event){
        event.preventDefault();
        let negociacao = new Negociacao(
            new Date(this._inpultData.value.replace(/-/g, ',')),
            this._inpulQuantidade.value,
            this._inpulValor.value
        );

        console.log(negociacao);
    }
}