var car = {} ;

car.color = "Red" ;
car.price = 55000 ;
car.turnKey = function() {
    console.log("Das Auto wurde gestartet") ;
    
};
car.lightsOn = function() {
    console.log("The lights are on.")
} ;

console.log(car) ;
car.turnKey() ;
car.lightsOn() ;
