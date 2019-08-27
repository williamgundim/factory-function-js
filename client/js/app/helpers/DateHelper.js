
class DateHelper{

    constructor(){
        
        throw new Error("Classe não pode ser instanciada!");

    }


    static DateToString(date) {
        
        return `${date.GetDate()}/${date.getMonth()}/${date.getFullYear()}`;
        //return date.GetDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(); 
    }

    static StringToDate(string) {
        return new Date(...string.split("-").map((item, indice)=> item - indice % 2 ));
    }

}