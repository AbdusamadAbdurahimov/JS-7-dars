// let matn = "Quyosh shrqdan chiqib g'arbga botadi";
// document.write(matn.slice(-15));

// let son = 7;
// let matnSon = "8";
// //document.write(typeof son.toString());
// document.write(typeof parseInt(matnSon));

// let list = [];
// list.push("Ozad");
// list.push("16 yoshda");
// list.push("Ilhom");
// list.push("18 yoshda");
// list.push("Xulkar");
// list.push("20 yoshda");
// console.log(list.length);
// console.log(list);
// console.log(list.pop());
// console.log(list);
// console.log(list.pop());
// console.log(list);
// console.log(list.pop());
// console.log(list);

// let list = [];
// list.unshift("Ozod");
// list.unshift("16 yoshda");
// list.unshift("Ilhom");
// list.unshift("18 yoshda");
// list.unshift("Xulkar");
// list.unshift("20 yoshda");
// console.log(list.length);
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);

// let list = ["Abbos","Jahon","Qodir","Behruz","Doston","Ramazon","Abdulaziz"];
//console.log(list.sort());
// console.log(list.sort().reverse());

// let sonlar = [13,343,5,676,6764,28,773,3];
//  let tartiblanganSonlar = sonlar.sort(function(a,b){
//      return a-b;
// });
// console.log(tartiblanganSonlar.reverse());

// let belgilar = "qwertyuiopasdfghjklzxcvbnm0123456789QWERTYUIOPASDFGHJKLZXCVBNM"

// function parolBer(){
//     let i = 0;
//     let parol = "";

// while(i < 8){
//     let son = parseInt(Math.random() * belgilar.length);
//     parol += belgilar[son];
//     i++;
//     }
//     document.querySelector("input").value = parol;
// }

document.querySelector(".tugma").addEventListener("click",function(){
    let ekran = document.querySelector(".ekran");
    console.log(typeof parseInt(ekran.value));
    ekran.value = parseInt(ekran.value) + 1;
});

document.querySelector(".nolga").addEventListener("click",function(){
    document.querySelector(".ekran").value = 0;
});







