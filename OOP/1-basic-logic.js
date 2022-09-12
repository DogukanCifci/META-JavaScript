//-----------
//first method

let shoes = 100;
let stateTax = 1.2;

const totalPrice = (tax, shoes) => {
  return tax * shoes;
};

let result = totalPrice(stateTax, shoes);
console.log(result);

//second method ***********
let calculation;
let purchase1 = {
  ayakkabi: 100,
  tax: 1.2,
  totalPrice1: function () {
    calculation = purchase1.ayakkabi * purchase1.tax;
    console.log(`Total Price = ${calculation}`);
  },
};

//Yukarda purchase1 icindeki fonksiyonu cagirmak icin ;
purchase1.totalPrice1(); //120

//*************VEYA  */
//Ayni object ten bir tane daha yapmak zorunda kaldim ama bu sefer ismi farkli. Her seferinde zorluk olmamasi icin pruchase1..... yazmak yerine
let calculation2;
let purchase2 = {
  ayakkabi: 50,
  tax: 1.2,
  totalPrice2: function () {
    calculation2 = this.ayakkabi * this.tax;
    console.log(`Total Price = ${calculation2}`);
  },
};
purchase2.totalPrice2(); //60
