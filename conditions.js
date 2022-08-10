
//With if else condition 

var light = "green" ;

if (light == "green") {
    console.log("Drive")
}

else if (light == "orange") {
    console.log("Get ready !")
}

else if (light == "red") {
    console.log("STOP!")
}

else {
    console.log("The light is not re, green or orange!");
}


// with switch

switch(light){
    case 'green' :
        console.log("Drive.") ;
        break ;
    
    case 'orange' :
        console.log("Get Ready !");
        break ;

    case 'red' :
        console.log("Stop!") ;
        break  ;
    
    default :
        console.log("The light is not green, orange or red..") ; 
        break ;
}