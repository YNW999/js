// console.log ("Hello, World!")
// console.log(2+3)
// console.log(10-2); 
// console.log(2*3); 
// console.log(10/5);
// console.log(2**3);
// console.log((2+3)+(10-2)+(2*3)+(10/5)+(2**3));

// let, const

// Типы данных в JS
// let num = 1 // number

// let str1 = "My name is ibragim" // string
// let str2 = 'My name is ibragim'
// let str3 = `My name is ibragim`
// console.log(str3);

// let bool1 = true // boolean
// let bool2 = false

// undefined, null, object, symbol

// str3 = "My name is Khan"

// console.log(str3);

// let a1 = 1+4
// let a2 = 5-4
// let a3 = 4*1
// let a4 = 14/2
// let a5 = 5**2

// console.log(a1, a2, a3, a4, a5)

// let b1 = "hello"
// let b2 = "bye"
// let b3 = "My name is ibra"
// let b4 = "Good"
// let b5 = "BAD"

// console.log(b1, b2, b3, b4, b5);

// a1 = 3+1
// a2 = 4-4
// a3 = 4*2
// a4 = 10/5
// a5 = 2**3
// b1 = "hh"
// b2 = "bb"
// b3 = "mm"
// b4 = "gg"
// b5 = "aa"
// console.log(a1, a2, a3, a4, a5);
// console.log(b1, b2, b3, b4, b5);

// 0 1 2 3 4 5 6 
// let nums = [ 1,2,3,4,5,6,7]
//  0   1  2   3
// let names = ["adam","ali",":mo,alik"]
// console.log(names)[1];
// let nameage1 = ["Maga", 22,"Apti", 31,"Adam", 19,"Andy", 5,"Doka", 55]

// console.log("Имя:",nameage1[0],",","Возраст:", nameage1[1]);
// console.log("Имя:",nameage1[2],",","Возраст:", nameage1[3]);
// console.log("Имя:",nameage1[4],",","Возраст:", nameage1[5]);
// console.log("Имя:",nameage1[6],",","Возраст:", nameage1[7]);
// console.log("Имя:",nameage1[8],",","Возраст:", nameage1[9]);

// let myname = ibra
// let age = 25
// let myfriendName = nurik
// let car = TAZ
// let mycar = car
// console.log("Мое имя" myname "," "моя машина" mycar "такая же как у" myfriendName +"Его машина"car) ;
// let names = [["maga", 14],["nurik", 25],["deni",21],["said",24]]
// console.log("My friends name is ",names[0][0] + ", His age " + names[0][1]);
// console.log("My friends name is",names[1][0] + ", his age " +  names[1][1]);
// console.log("My friends name is",names[2][0] + ", his age " +  names[2][1]);
// let str = "I live in Grozny"
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);
// console.log(str[5]);
// console.log(str[6]);
// console.log(str[7]);
// console.log(str[8]);
// console.log(str[9]);
// console.log(str[10]);
// console.log(str[11]);
// console.log(str[12]);
// console.log(str[13]);
// console.log(str[14]);
// console.log(str[15]);
// let index = 0
// let religion = "islam"
// let str = "muslim"
// console.log(religion[index]);
// console.log(religion[index + 1]);
// console.log(religion[index + 2]);
// console.log(religion[index + 3]);
// console.log(religion[index + 4]);
// let index = 0
// let religion = "islam"
// console.log();

// let srt = "slime life all the time"
// let arr = [1, 2, 4, 5, 6, 7]
// console.log(srt.length);
// console.log(3>5);
// console.log(3<5);
// console.log(3<=3);
// console.log(3>=2);
// console.log("ab"==="ab");
// console.log("ad"!=="ab");
// console.log("ad"==="ad");

// let age = 10
// let myName = "Lua"
// let horror ="Ужас"
// let actionmovies ="Боевик"
// let cartoon ="Мультик"

// if (age > 18) {console.log("Вам "+ age +"лет,можно смотреть " + horror +"жанр")
//     }
// else if (age > 12) {
//     console.log("Вам "+ age +"лет,можно смотреть " + actionmovies +"жанр")
//     } 
//     else  console.log("Вам " + age + " лет ,можно смотреть " + cartoon +"жанр")


//  let s = "Chechnya"   
//  for (let i = 0;i < s.length; i++) {
//     console.log(s[i])
//  }       

// for (let i = 21; i < 122; i += 2)
//     console.log(i);

// for (let b = 2; b <= 36; b++) {
//     if (b % 2 === 0) {
//         console.log(b);
//     }

// }

// for (let c = 3; c <= 37; c++) {
//     if (c % 2 === 1) {
//         console.log(c);
//     }

// }
// for (let d = 0; d < 100; d++)
//     if (d % 2 === 0) {
//         console.log(d);
//     }
// else(d % 2 === 1) {
//     console.log(d);
// }

// let names = ["Adam", "Maga", "Nurik", "ibra"]

// for (let i = 0; i < names.length; i++) {
//     if (names[i] === "ibra") {
//         console.log(names[i], "i won.");
//         continue
//     }

//     if (i === names.length - 1) {
//         if (names[i] !== "ibra") {
//             console.log(names[i], "i lose.");
//         }
//     }
// }
// let names = ["Adam", "Lee", "Movsar", "Kazbek", "Alibek"]
// for (let i = 0; i < names.length; i++) {
//     let currentName = names[i];
//     let firstLetter = currentName[0];
//     let lastLetter = currentName[currentName.length - 1]
//     let nameLenght = currentName.length;
// //  console.log(currentName, firstLetter,lastLetter,nameLenght);
// }
// let names = ["Adam", "Lee", "Movsar", "Kazbek", "Alibek"]
// // console.log(names[names.length-1]);
// let alibek = names[names.length-1]
let names = ["Adam", "Lee", "Movsar", "Kazbek", "Alibek"]
// let upperCaseNames = []
// for (let i = 0; i < names.length; i++) {
//     let currentName = names[i].toUpperCase()
// upperCaseNames.push(currentName)}
// console.log(upperCaseNames);


// // let lowerCaseNames = []
// for (i = 0; i < names.length; i++) {
// //     lowerCaseNames.push(names[i].toLowerCase())
// // }
// // console.log(lowerCaseNames);


// let mixCaseLetters = []
// for (i = 0; i < names.length; i++)
// if (i % 2 === 0) {
//     mixCaseLetters.push(names[i].toUpperCase())
// }
// else if (i % 2 === 1) {
//     mixCaseLetters.push(names[i].toLowerCase())
// }
// console.log(mixCaseLetters);


let diffNamesLength
for (i = 0; i < names.length; i++)
if (names[i].length % 2 === 1)
diffNamesLength.push(names[i])
console.log(diffNamesLength);

// console.log("privet,poka,kak dela?".substring(6));









