try {
    console.log(a + b) ;
} 
catch(e){
    console.log("There was an error up there !") ;
} 

//PYTHONDAKI TRY-EXCEPT ILE AYNI
// Python da except Exception as e yerine ----> catch(e) yazdik
//Burdaki e hata neyse onu temsil eder ve cikti olarak gösterir.


try {
    console.log(c * 12) ;
}
catch(err) {
    console.log("There is an errror!")
    console.log("Error Type ---->: ", err)
    console.log(err);
}

console.log("This line will run auf jeden Fall") 

//If there will be an error, the codes between catch tag will run. 
//If there will be not an error, the codes between try tag will run.
//try catch blogu disindaki code ise her durumda calisir.