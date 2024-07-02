//console.log('Hello, World!');

// var myName = "Maii";
// var mySchool = "Banpong tutor";
// var myAge = 25;

// mySchool = "KMUTT";

// console.log(myName + 5);
// // console.log(mySchool);
// console.log(myAge + "5");

//ต้องการแลกเงิน 543 บาท
//จะได้ธนบัตร 100 บาท กี่   ใบ
//เหรียญ 10  บาท  กี่   เหรียญ
//เหรียญ 1   บาท  กี่   เหรียญ

function moneyExchange() {
  var inputMoney = document.querySelector("#money-input");
  console.log(inputMoney.value);

  var money = inputMoney.value;
  var cash1000 = 0;
  var cash500 = 0;
  var cash100 = 0;
  var coin10 = 0;
  var coin5 = 0;
  var coin1 = 0;

  //process...
  cash1000 = Math.floor(money / 1000);
  money = money % 1000;
  console.log("cash1000:" + cash1000);
  console.log("money:" + money);
  
  cash500 = Math.floor(money / 500);
  money = money % 500;
  console.log("money = " + money);
  cash100 = Math.floor(money / 100);
  money = money % 100;
  coin10 = Math.floor(money / 10);
  money = money % 10;
  coin5 = Math.floor(money / 5);
  money = money % 5;
  coin1 = money;

  //output
  document.querySelector("#cash1000").innerHTML = cash1000;
  document.querySelector("#cash500").innerHTML = cash500;
  document.querySelector("#cash100").innerHTML = cash100;
  document.querySelector("#coin10").innerHTML = coin10;
  document.querySelector("#coin5").innerHTML = coin5;
  document.querySelector("#coin1").innerHTML = coin1;
}