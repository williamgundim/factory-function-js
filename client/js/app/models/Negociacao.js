
class Negociacao{

    constructor(date, quant, valor) {

        this._data = date;
        this._quantidade = quant;
        this._valor = valor;
        Object.freeze(this);
    } 

    get volume() {
        return this._quantidade * this.valor;
    }

    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}
