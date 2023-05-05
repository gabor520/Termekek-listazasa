class Aszinkron{
    constructor(){
        console.log("Aszinkron")
        
    }


    adatBeolvas(vegpont,callbackFv){
        fetch(vegpont,{
            method: "GET",
            headers:{
                "Content-Type": "application/json",
            },
        })
        .then((response)=> response.json())
        .then((data) => {
            callbackFv(data);
        })
        .catch((error)=> console.log(error));

    }
    adatTorles(vegpont,id){
        vegpont=vegpont+"/"+id
        console.log(vegpont);
        fetch(vegpont,{
            method: "DELETE",
        })
        
    }
}
export default Aszinkron;