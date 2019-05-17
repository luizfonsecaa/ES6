class NegociacaoController {
	constructor(){
		let $ = document.querySelector.bind(document)
		this._inputData = $('#data')
		this._inputQuantdade = $('#quantidade')
		this._inputValor = $('#valor')
		this._NegociacoesView = new NegociacoesView($('#negociacoesView'))

        self = this;
		this._listaNegociacaoes = new Proxy(new ListaNegociacoes(), {
			get(target, prop, receiver) {
				if(['adiciona', 'esvazia'].includes(prop) && typeof(target[prop]) == typeof(Function)) {
					return function(){
					// console.log("target: ",target)
					// console.log("prop: ",prop)
					// console.log("receiver",receiver)
					// console.log("arguments",arguments)
					Reflect.apply(target[prop], target, arguments);
					self._NegociacoesView.update(target);
					}
			}
			return Reflect.get(target, prop, receiver);
		  }
		})

		this._NegociacoesView.update(this._listaNegociacaoes)

		this._mensagem = new Mesagem()
		this._mesagemView = new MesagemView($('#mesagemView'))
		this._mesagemView.update(this._mensagem)
	}

	adiciona(event){
		event.preventDefault()
		this._listaNegociacaoes.adiciona(this._criaNegociacao())
		this._mensagem.texto = 'Negociação adicionado com sucesso'
		this._mesagemView.update(this._mensagem)
		this._limpaFormulario();
	}

	apaga(){
		this._listaNegociacaoes.esvazia();
		this._mensagem.texto = "Lista de Negociações apagada"
		this._mesagemView.update(this._mensagem)
	}

	_criaNegociacao(){
		return new  Negociacao(
			DateHelper.textoParaData(this._inputData.value),
			this._inputQuantdade.value,
			this._inputValor.value
		)
	}

	_limpaFormulario(){
		this._inputData.value = ''
		this._inputQuantdade.value = 1
		this._inputValor.value = 0.0
		this._inputData.focus();
	}
}