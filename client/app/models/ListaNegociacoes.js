class ListaNegociacoes {

	constructor(){
		this._negociacoes = []

	}

	adiciona(negociacao) {
		this._negociacoes.push(negociacao);
	}


	get negociacoes(){
		/**
		 * create novo array e concatenando no array
		 */
		return [].concat(this._negociacoes)
	}

	esvazia(){
		this._negociacoes = []

	}
}

/*
 * function a ser executada
 * contesto que ela vai ser exacutada
 * argumentos que function tem
 *
 * Reflect.apply(this.armadinha, this, this)
 */