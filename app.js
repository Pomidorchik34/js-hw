// console.log("Hello world");
// let password = "123";
// alert(`hello `);
// let name = prompt(`what's your name?`);
// confirm(`${name} is it?`);
// document.write("salom ", name);

// 1
// let uzunlik = 1000;
// let resault = uzunlik / 100;
// console.log(`${resault}m`);

// 2
// let ogirlik = 1000;
// let resault = ogirlik / 1000;
// console.log(`${resault}t`);

// 3
// let hajm = 2048;
// let resault = hajm / 1024;
// console.log(`${resault}kb`);

// 4
// let num1 = 2;
// let num2 = 5;
// let a;
// let b;
// if (num1 > num2) {
//   a = num1;
//   b = num2;
// } else {
//   b = num1;
//   a = num2;
// }
// console.log(`${a / b} marta joylashadi `);

// 5
// let num1 = 2;
// let num2 = 5;
// let a;
// let b;
// if (num1 > num2) {
//   a = num1;
//   b = num2;
// } else {
//   b = num1;
//   a = num2;
// }
// console.log(`${a % b} sigmadi`);

// 6
// let n = 23;
// console.log((n % 100) - (n % 10), n % 10);

// 7
// let n = 24;
// console.log((n % 10) + (n - (n % 10)) / 10);

// 8
// let n = 24;
// console.log(n % 10, (n - (n % 10)) / 10);

// 9
// let n = 123;
// console.log(((n % 1000) - (n % 100)) / 100);

// 10
// let n = 123;
// console.log(
//   ((n % 1000) - (n % 100)) / 100,
//   ((n % 100) - (n % 10)) / 10,
//   n % 10
// );

// 11
// let n = 123;
// console.log(
//   ((n % 1000) - (n % 100)) / 100 + ((n % 100) - (n % 10)) / 10 + (n % 10)
// );

// 12
// let n = 123;
// console.log(
//   n % 10,
//   ((n % 100) - (n % 10)) / 10,
//   ((n % 1000) - (n % 100)) / 100
// );

// 13
// let n = 123;
// console.log(
//   ((n % 100) - (n % 10)) / 10,
//   n % 10,
//   ((n % 1000) - (n % 100)) / 100
// );

// 1
// Foydalanuvchidan son kiritish
// let son = +prompt("Iltimos, sonni kirting:"));

// // Sonni tekshirish va o'zgartirish
// if (son > 0) {
//     son += 1;
// }

// // Natijani chiqarish
// console.log("Natija: " + son);

// 2
// // Foydalanuvchidan son kiritish
// let son = parseInt(prompt("Iltimos, butun sonni kiriting:"));

// // Sonni tekshirish va o'zgartirish
// if (son > 0) {
//     son += 1;
// } else {
//     son -= 2;
// }

// // Natijani chiqarish
// console.log("Natija: " + son);

// 3
// Foydalanuvchidan son kiritish
// let son = parseInt(prompt("Iltimos, butun sonni kiriting:"));

// // Sonni tekshirish va o'zgartirish
// if (son > 0) {
//     son += 1;
// } else if (son < 0) {
//     son -= 2;
// } else {
//     son = 10;
// }

// // Natijani chiqarish
// console.log("Natija: " + son);

// 4
// Foydalanuvchidan uchta butun son kiritish
// let son1 = parseInt(prompt("1-sonni kiriting:"));
// let son2 = parseInt(prompt("2-sonni kiriting:"));
// let son3 = parseInt(prompt("3-sonni kiriting:"));

// // Nechta musbat son borligini hisoblash
// let musbatSonlarSoni = 0;

// if (son1 > 0) {
//     musbatSonlarSoni++;
// }

// if (son2 > 0) {
//     musbatSonlarSoni++;
// }

// if (son3 > 0) {
//     musbatSonlarSoni++;
// }

// // Natijani chiqarish
// console.log("Uchta kiritilgan sonlar orasida " + musbatSonlarSoni + " ta musbat son bor.");

// 5
// Foydalanuvchidan uchta butun son kiritish
// let son1 = parseInt(prompt("1-sonni kiriting:"));
// let son2 = parseInt(prompt("2-sonni kiriting:"));
// let son3 = parseInt(prompt("3-sonni kiriting:"));

// // Nechta musbat va manfiy sonlar borligini hisoblash
// let musbatSonlarSoni = 0;
// let manfiySonlarSoni = 0;

// if (son1 > 0) {
//     musbatSonlarSoni++;
// } else if (son1 < 0) {
//     manfiySonlarSoni++;
// }

// if (son2 > 0) {
//     musbatSonlarSoni++;
// } else if (son2 < 0) {
//     manfiySonlarSoni++;
// }

// if (son3 > 0) {
//     musbatSonlarSoni++;
// } else if (son3 < 0) {
//     manfiySonlarSoni++;
// }

// // Natijani chiqarish
// console.log("Uchta kiritilgan sonlar orasida " + musbatSonlarSoni + " ta musbat son va " + manfiySonlarSoni + " ta manfiy son bor.");

// 6
// // Foydalanuvchidan ikkita butun son kiritish
// let son1 = parseInt(prompt("1-sonni kiriting:"));
// let son2 = parseInt(prompt("2-sonni kiriting:"));

// // Kattani aniqlash
// let kattaSon;

// if (son1 > son2) {
//     kattaSon = son1;
// } else {
//     kattaSon = son2;
// }

// // Natijani chiqarish
// console.log("Katta son: " + kattaSon);

// 7
// // Foydalanuvchidan ikkita butun son kiritish
// let son1 = parseInt(prompt("1-sonni kiriting:"));
// let son2 = parseInt(prompt("2-sonni kiriting:"));

// // Kiritilgan sonlarni solishtirish
// let kattaSon;
// let kichikSon;

// if (son1 > son2) {
//     kattaSon = son1;
//     kichikSon = son2;
// } else {
//     kattaSon = son2;
//     kichikSon = son1;
// }

// console.log("Awal katta son: " + kattaSon);
// console.log("Keyin kichik son: " + kichikSon);

// 8
// // Foydalanuvchidan ikkita haqiqiy son kiritish
// let A = +prompt("A sonni kiriting:");
// let B = +prompt("B sonni kiriting:");

// // Sonlarni solishtirish
// if (A > B) {
//   console.log("A:", A);
//   console.log("B:", B);
// } else {
//   console.log("A:", A);
//   console.log("B:", B);
// }

// 9
// // Foydalanuvchidan ikkita butun son kiritish
// let A = parseInt(prompt("A sonni kiriting:"));
// let B = parseInt(prompt("B sonni kiriting:"));

// // Sonlarni solishtirish va o'zlashtirish
// if (A != B) {
//   A = A + B;
//   B = A;
// } else {
//   A = 0;
//   B = 0;
// }

// console.log("A:", A);
// console.log("B:", B);

// 10
// // Foydalanuvchidan ikkita butun son kiritish
// let A = parseInt(prompt("A sonni kiriting:"));
// let B = parseInt(prompt("B sonni kiriting:"));

// // Sonlarni solishtirish va o'zlashtirish
// if (A != B) {
//     if (A > B) {
//         B = A;
//     } else {
//         A = B;
//     }
// } else {
//     A = 0;
//     B = 0;
// }

// console.log("A:", A);
// console.log("B:", B);

// 11
// let son1 = +prompt("1-sonni kiriting:");
// let son2 = +prompt("2-sonni kiriting:");
// let son3 = +prompt("3-sonni kiriting:");

// // Kichik sonni aniqlash
// let kichikSon = son1;

// if (son2 < kichikSon) {
//     kichikSon = son2;
// }

// if (son3 < kichikSon) {
//     kichikSon = son3;
// }

// console.log("Kichik son:", kichikSon);

// 12
// let son1 = +prompt("1-sonni kiriting:");
// let son2 = +prompt("2-sonni kiriting:");
// let son3 = +prompt("3-sonni kiriting:");

// // O'rta sonni aniqlash
// let ortaSon;

// // Sonlarni solishtirish
// if ((son1 >= son2 && son1 <= son3) || (son1 <= son2 && son1 >= son3)) {
//     ortaSon = son1;
// } else if ((son2 >= son1 && son2 <= son3) || (son2 <= son1 && son2 >= son3)) {
//     ortaSon = son2;
// } else {
//     ortaSon = son3;
// }

// console.log("O'rta son:", ortaSon);

// 13
// let son1 = +prompt("1-sonni kiriting:");
// let son2 = +prompt("2-sonni kiriting:");
// let son3 = +prompt("3-sonni kiriting:");

// // Kichik va katta sonlarni aniqlash
// let kichikSon, kattaSon;

// // Sonlarni solishtirish
// if (son1 <= son2 && son1 <= son3) {
//     kichikSon = son1;
//     if (son2 >= son3) {
//         kattaSon = son2;
//     } else {
//         kattaSon = son3;
//     }
// } else if (son2 <= son1 && son2 <= son3) {
//     kichikSon = son2;
//     if (son1 >= son3) {
//         kattaSon = son1;
//     } else {
//         kattaSon = son3;
//     }
// } else {
//     kichikSon = son3;
//     if (son1 >= son2) {
//         kattaSon = son1;
//     } else {
//         kattaSon = son2;
//     }
// }

// console.log("Avval kichik son:", kichikSon);
// console.log("Keyin katta son:", kattaSon);

// 14

// 15
// let son1 = +prompt("1-sonni kiriting:");
// let son2 = +prompt("2-sonni kiriting:");
// let son3 = +prompt("3-sonni kiriting:");
// let yigindi1 = son1 + son2;
// let yigindi2 = son1 + son3;
// let yigindi3 = son2 + son3;
// let engKattaYigindi, sonlar;

// if (yigindi1 >= yigindi2 && yigindi1 >= yigindi3) {
//   engKattaYigindi = yigindi1;
//   sonlar = [son1, son2];
// } else if (yigindi2 >= yigindi1 && yigindi2 >= yigindi3) {
//   engKattaYigindi = yigindi2;
//   sonlar = [son1, son3];
// } else {
//   engKattaYigindi = yigindi3;
//   sonlar = [son2, son3];
// }

// console.log("Eng katta yig'indini topgan ikkita son:", sonlar);
