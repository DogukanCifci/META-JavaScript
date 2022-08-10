
/*
var storeManagerMovement = 4 ;
var storeManagerSocialSkills = 50 ;
var storeManagerStreetSmart = 50 ;
var storeManagerHealth = 30 ;

*/

//Instead of this i can create an object 

var storeManager = {} ;

storeManager.rangeTilesPerTurn = 4 ;
storeManager.socialSkills = 50 ;
storeManager.StreetSmart = 50 ;
storeManager.health = 30 ;
storeManager.specialAbility = "finding business opportunities" ;

console.log("1st Method :")
console.log(storeManager)
//or 

var storeManager = {
    rangeTilesPerTurn : 4,
    socialSkills : 50, 
    StreetSmart : 50,
    health : 30, 
    specialAbility : "finding business opportunities",
}

//all this method can be used

console.log("Second Method :")
console.log(storeManager)


// Example 

var house1 = { //First method
    window : 10,
    quadratmeter : 120,
    garden : true, 
    color : "pink",
} ;

var house2 = {} ; //Second Method

house2.window = 5 ;
house2.quadratmeter = 120 ;
house2.garden = true ;
house2.color = "red" ;

console.log("House1 : ", house1) ;

console.log("-----------------")

console.log("House2 : ", house2) ;

console.log("-----------------")
console.log("House1 window : ", house1.window) ;
console.log("House2 Window", house2.window) ;


//If I want to add some information :

console.log("After i added another information : ")
console.log("-----------------")
house1.door = 15 ;

console.log(house1)


// If i want to change something ;
console.log("After i changed some informations ")
house1.window = 15 ;

console.log(house1)


