class ListaNegociacoes{

    constructor(){

        this._negociacoes = [];

    }

    addneg(negociacao){    
        
        this._negociacoes.push(negociacao);
    
    }

    delete(){
        this._negociacoes = [];        
    }

    get negociacoes(){

        return [].concat(this._negociacoes);

    }
}