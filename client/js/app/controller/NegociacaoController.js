
class  NegociacaoController{

        constructor(){
            let $ = document.querySelector.bind(document); // adicionando o $ no javascript puro, 'bind faz ele usar o metodo da classe querySelector' 
            // pegandod os valores do inpult
            this._inpultData      = $("#data");     
            this._inpulQuantidade = $("#quantidade");
            this._inpulValor      = $("#valor");
    
        }
       
    adiciona(event){
        event.preventDefault(); 
        //criando   a classe negociação
        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inpultData.value),
            this._inpulQuantidade.value,
            this._inpulValor.value
        );

        let dataFormatada = DateHelper.dataParaTexto(negociacao.data);
        console.log(negociacao);  
        console.log(dataFormatada);  
    }
}