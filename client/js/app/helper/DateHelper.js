class DateHelper{

    constructor(){

        throw new Error('DateHelper não pode ser instanciada');
    }

    static dataParaTexto(data){
         //formaração da data 
            // return data.getDate() 
            // + '/' + (data.getMonth() + 1) 
            // + '/' + data.getFullYear();

        //template string
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
    }

    static textoParaData(texto){
        // 'split sera  string em um array''mapa mapea o array  receebndo o o array e o indice tudo isso em um arrow function'
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error('Deve estar no formado  aaaa-mm-dd');
        return new Date(...texto.split('-').map((item, indice) => item -indice % 2)); 
    }

}