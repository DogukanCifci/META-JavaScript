var product;
let keys;
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy() {
  for (product of dairy) {
    console.log(product);
  }
}
logDairy();

const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

const birdCan = () => {
  for (keys of Object.keys(bird)) {
    console.log(`${keys} : ${bird[keys]}`);
  }
};

birdCan();

const animalCan = () => {
  for (var keysBird in bird) {
    console.log(`${keysBird} : ${bird[keysBird]}`);
  }
  for (var keysAnimals in animal) {
    console.log(`${keysAnimals} : ${animal[keysAnimals]}`);
  }
};
animalCan();
