import Termek from "./termek.js"
import LISTA from "./adatok.js"


import Aszinkron from ".Aszinkron.js"


class Termekek {
    #kedvencek=[];


    /*const SZULOELEM = $("article");

    for (let index = 0; index < LISTA.length; index++) {
        const t1 = new Termek(LISTA[index], SZULOELEM);
        
    } */

    constructor(){
        console.log("termékek");
        const aszinkron = new Aszinkron()
        let vegpont="adatok.json"
        aszinkron.adatBeolvas(vegpont,this.#termekMegjelenito);


        $(window)
    

    $(window).on("123",(event)=>{
       KEDVENCLISTA.push(event.deatil);
       console.log(KEDVENCLISTA);
    });
}


    #termekMegjelenito(lista){
        console.log(lista.LISTA)
        let sajatlista=lista.LISTA

        const ARTICLE = $("article");
        for (let index = 0; index < sajatlista.length; index++) {
            const TERMEK = new Termek(ARTICLE,sajatlista[i],i);
            
        }

    }


}



export default Termekek;
