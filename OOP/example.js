const bicycle = {
  zil: function () {
    return "Ring, ring, Watch out, please!";
  },
};

const door = {
  zil: function () {
    return "Ring ring, Come here, please!";
  },
};

console.log(bicycle.zil());
console.log(door.zil());

//2. cagirma yöntemi
//Burda da hangi nesne icin zil fonksiyonu cagiracagimizi belirliyoruz.
function ringTheBell(welche) {
  console.log(welche.zil());
}

ringTheBell(bicycle);
ringTheBell(door);
