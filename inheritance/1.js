var bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true,
};
let eagle1 = Object.create(bird);
console.log("Eagle1 : ", eagle1); //Burasi bos cevirir.

console.log("Eagle can fly : ", eagle1.canFly);
console.log("Eagle has wings : ", eagle1.hasWings);
console.log(`Eagle has Feathers : ${eagle1.hasFeathers}`);

//Yeni bir kus olusturabilirim tekrar. Bird object i üzerinden olusturusam özellikler yine ayni olarak gelecektir.

let eagle2 = Object.create(bird);
console.log("Eagle2 can fly : ", eagle2.canFly);

//Simdi yeni bir object olusturalim ama özellikleri bu sefer degistirecegim.

let penguin = Object.create(bird);

penguin.canFly = false;

console.log("Penguin can fly : ", penguin.canFly);
console.log("Penguin has Feathers", penguin.hasFeathers);
