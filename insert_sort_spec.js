var mdl = require("./insert_sort.js");


function integerComparer(val1, val2) {
    var dif = val1 - val2;
    if (dif > 0) {
        return 1;
    }
    else if (dif < 0) {
        return -1;
    }
    else {
        return 0;
    }
}

function orderByYear(car1,car2){
    /*
     expects object in the form
     {
     make:Ford
     model:Taurus
     year:2003
     }
     * */

    if(car1.year > car2.year) return 1;
    if(car1.year < car2.year) return -1;
    return 0;
}

function carFactory(make, model,year){
    return{
        "make":make ,
        "model":model,
        "year":year
    };
}


//does it work with integers
var list = [4, 7, 3, 4, 6, 5, 2, 2, 8];
console.log(mdl.insertSort(list, integerComparer));

//does it work for objects
var carList = [];
carList[0] = carFactory("Ford","Taurus",2003);
carList[1] = carFactory("Toyota","Camry",2015);
carList[2] = carFactory("Audi","A4",1997);
carList[3] = carFactory("Nissan","Murano",2010);
carList[4] = carFactory("Chevrolet","Cruze",2007);

console.log(mdl.insertSort(carList, orderByYear));