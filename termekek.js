import Termek from "./termek.js"
import LISTA from "./adatok.js"


class Termekek {
    #kedvencek=[];
}

constructor(){
    const SZULOELEM = $("article");

    for (let index = 0; index < LISTA.length; index++) {
        const t1 = new Termek(LISTA[index], SZULOELEM);
        
    }
    $(window).on("123",(event)=>{
        event.detail
    });


}



export default Termekek;
