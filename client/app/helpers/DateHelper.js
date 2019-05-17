class DateHelper {

	constructor(){
		throw new Error("DateHelper não pode ser instanciada")
	}

	static dataParatexto(data){
		return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
	}

	static textoParaData(texto){
		if(!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error("Data invalida  YY-YY-YYYY")
		return new Date(...texto.split('-').map((item, indice) => item - indice % 2))
	}
}