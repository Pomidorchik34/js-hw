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
// Foydalanuvchidan num kiritish
// let num = +prompt("Iltimos, numni kirting:"));

// // numni tekshirish va o'zgartirish
// if (num > 0) {
//     num += 1;
// }

// // Natijani chiqarish
// console.log("Natija: " + num);

// 2
// // Foydalanuvchidan num kiritish
// let num = parseInt(prompt("Iltimos, butun numni kiriting:"));

// // numni tekshirish va o'zgartirish
// if (num > 0) {
//     num += 1;
// } else {
//     num -= 2;
// }

// // Natijani chiqarish
// console.log("Natija: " + num);

// 3
// Foydalanuvchidan num kiritish
// let num = parseInt(prompt("Iltimos, butun numni kiriting:"));

// // numni tekshirish va o'zgartirish
// if (num > 0) {
//     num += 1;
// } else if (num < 0) {
//     num -= 2;
// } else {
//     num = 10;
// }

// // Natijani chiqarish
// console.log("Natija: " + num);

// 4
// Foydalanuvchidan uchta butun num kiritish
// let num1 = parseInt(prompt("1-numni kiriting:"));
// let num2 = parseInt(prompt("2-numni kiriting:"));
// let num3 = parseInt(prompt("3-numni kiriting:"));

// // Nechta musbat num borligini hisoblash
// let musbatnumlarnumi = 0;

// if (num1 > 0) {
//     musbatnumlarnumi++;
// }

// if (num2 > 0) {
//     musbatnumlarnumi++;
// }

// if (num3 > 0) {
//     musbatnumlarnumi++;
// }

// // Natijani chiqarish
// console.log("Uchta kiritilgan numlar orasida " + musbatnumlarnumi + " ta musbat num bor.");

// 5
// Foydalanuvchidan uchta butun num kiritish
// let num1 = parseInt(prompt("1-numni kiriting:"));
// let num2 = parseInt(prompt("2-numni kiriting:"));
// let num3 = parseInt(prompt("3-numni kiriting:"));

// // Nechta musbat va manfiy numlar borligini hisoblash
// let musbatnumlarnumi = 0;
// let manfiynumlarnumi = 0;

// if (num1 > 0) {
//     musbatnumlarnumi++;
// } else if (num1 < 0) {
//     manfiynumlarnumi++;
// }

// if (num2 > 0) {
//     musbatnumlarnumi++;
// } else if (num2 < 0) {
//     manfiynumlarnumi++;
// }

// if (num3 > 0) {
//     musbatnumlarnumi++;
// } else if (num3 < 0) {
//     manfiynumlarnumi++;
// }

// // Natijani chiqarish
// console.log("Uchta kiritilgan numlar orasida " + musbatnumlarnumi + " ta musbat num va " + manfiynumlarnumi + " ta manfiy num bor.");

// 6
// // Foydalanuvchidan ikkita butun num kiritish
// let num1 = parseInt(prompt("1-numni kiriting:"));
// let num2 = parseInt(prompt("2-numni kiriting:"));

// // Kattani aniqlash
// let kattanum;

// if (num1 > num2) {
//     kattanum = num1;
// } else {
//     kattanum = num2;
// }

// // Natijani chiqarish
// console.log("Katta num: " + kattanum);

// 7
// // Foydalanuvchidan ikkita butun num kiritish
// let num1 = parseInt(prompt("1-numni kiriting:"));
// let num2 = parseInt(prompt("2-numni kiriting:"));

// // Kiritilgan numlarni solishtirish
// let kattanum;
// let kichiknum;

// if (num1 > num2) {
//     kattanum = num1;
//     kichiknum = num2;
// } else {
//     kattanum = num2;
//     kichiknum = num1;
// }

// console.log("Awal katta num: " + kattanum);
// console.log("Keyin kichik num: " + kichiknum);

// 8
// // Foydalanuvchidan ikkita haqiqiy num kiritish
// let A = +prompt("A numni kiriting:");
// let B = +prompt("B numni kiriting:");

// // numlarni solishtirish
// if (A > B) {
//   console.log("A:", A);
//   console.log("B:", B);
// } else {
//   console.log("A:", A);
//   console.log("B:", B);
// }

// 9
// // Foydalanuvchidan ikkita butun num kiritish
// let A = parseInt(prompt("A numni kiriting:"));
// let B = parseInt(prompt("B numni kiriting:"));

// // numlarni solishtirish va o'zlashtirish
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
// // Foydalanuvchidan ikkita butun num kiritish
// let A = parseInt(prompt("A numni kiriting:"));
// let B = parseInt(prompt("B numni kiriting:"));

// // numlarni solishtirish va o'zlashtirish
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
// let num1 = +prompt("1-numni kiriting:");
// let num2 = +prompt("2-numni kiriting:");
// let num3 = +prompt("3-numni kiriting:");

// // Kichik numni aniqlash
// let kichiknum = num1;

// if (num2 < kichiknum) {
//     kichiknum = num2;
// }

// if (num3 < kichiknum) {
//     kichiknum = num3;
// }

// console.log("Kichik num:", kichiknum);

// 12
// let num1 = +prompt("1-numni kiriting:");
// let num2 = +prompt("2-numni kiriting:");
// let num3 = +prompt("3-numni kiriting:");

// // O'rta numni aniqlash
// let ortanum;

// // numlarni solishtirish
// if ((num1 >= num2 && num1 <= num3) || (num1 <= num2 && num1 >= num3)) {
//     ortanum = num1;
// } else if ((num2 >= num1 && num2 <= num3) || (num2 <= num1 && num2 >= num3)) {
//     ortanum = num2;
// } else {
//     ortanum = num3;
// }

// console.log("O'rta num:", ortanum);

// 13
// let num1 = +prompt("1-numni kiriting:");
// let num2 = +prompt("2-numni kiriting:");
// let num3 = +prompt("3-numni kiriting:");

// // Kichik va katta numlarni aniqlash
// let kichiknum, kattanum;

// // numlarni solishtirish
// if (num1 <= num2 && num1 <= num3) {
//     kichiknum = num1;
//     if (num2 >= num3) {
//         kattanum = num2;
//     } else {
//         kattanum = num3;
//     }
// } else if (num2 <= num1 && num2 <= num3) {
//     kichiknum = num2;
//     if (num1 >= num3) {
//         kattanum = num1;
//     } else {
//         kattanum = num3;
//     }
// } else {
//     kichiknum = num3;
//     if (num1 >= num2) {
//         kattanum = num1;
//     } else {
//         kattanum = num2;
//     }
// }

// console.log("Avval kichik num:", kichiknum);
// console.log("Keyin katta num:", kattanum);

// 14

// 15
// let num1 = +prompt("1-numni kiriting:");
// let num2 = +prompt("2-numni kiriting:");
// let num3 = +prompt("3-numni kiriting:");
// let resault1 = num1 + num2;
// let resault2 = num1 + num3;
// let resault3 = num2 + num3;
// let allresaults, numlar;

// if (resault1 >= resault2 && resault1 >= resault3) {
//   allresaults = resault1;
//   numlar = [num1, num2];
// } else if (resault2 >= resault1 && resault2 >= resault3) {
//   allresaults = resault2;
//   numlar = [num1, num3];
// } else {
//   allresaults = resault3;
//   numlar = [num2, num3];
// }

// console.log("Eng katta yig'indini topgan ikkita num:", numlar);
