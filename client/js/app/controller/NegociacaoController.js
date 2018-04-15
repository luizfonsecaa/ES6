
class  NegociacaoController{

        constructor(){
            let $ = document.querySelector.bind(document); // adicionando o $ no javascript puro, 'bind faz ele usar o metodo da classe querySelector' 
            // pegandod os valores do inpult
            this._inpultData       = $("#data");     
            this._inpulQuantidade  = $("#quantidade");
            this._inpulValor       = $("#valor");
            this._listaNegociacoes = new ListaNegociacoes();
    
        }
    
    // função com a ação do enviar na view
    adiciona(event){

        event.preventDefault(); 
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaformulario();
        console.log(this._listaNegociacoes.negociacoes);
    }

    //cria uma negociação
    _criaNegociacao(){

        return new Negociacao(
            DateHelper.textoParaData(this._inpultData.value),
            this._inpulQuantidade.value,
            this._inpulValor.value
        );
    }

    //limpa o formulario e da o foco no campo data
    _limpaformulario(){

        this._inpultData.value = '';
        this._inpulQuantidade.value = 1;
        this._inpulValor.value = 0.0;
        this._inpultData.focus();
    }

}