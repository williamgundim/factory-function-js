class View{

    constructor(div){

        this._div = div;

    }

    update(model){
        //Adiciona os elementos do método template na pagina index.html
        this._div.innerHTML = this.template(model);
    }  
 
}