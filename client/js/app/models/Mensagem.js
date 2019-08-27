
/*Classe para definir as mensagens que serão exibidas no HTML*/
class Mensagem {

    //valor default.
    constructor(cTxt=''){
        this._texto = cTxt ;
    }

    get texto(){
        return this._texto;
    }

    set texto(cTxt){
        this._texto = cTxt;
    }
}