// console.log("Hello world");
// let password = "123";
// alert(`hello `);
// let name = prompt(`what's your name?`);
// confirm(`${name} is it?`);
// document.write("salom ", name);

// 1
// let uzunlik = 1000;
// let result = uzunlik / 100;
// console.log(`${result}m`);

// 2
// let ogirlik = 1000;
// let result = ogirlik / 1000;
// console.log(`${result}t`);

// 3
// let hajm = 2048;
// let result = hajm / 1024;
// console.log(`${result}kb`);

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

//
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

//
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

//
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

//
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

//
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

//
// console.log("Katta num: " + kattanum);

// 7
// // Foydalanuvchidan ikkita butun num kiritish
// let num1 = parseInt(prompt("1-numni kiriting:"));
// let num2 = parseInt(prompt("2-numni kiriting:"));

//
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

//
// if (A > B) {
//   console.log("A:", A);
//   console.log("B:", B);
// } else {
//   console.log("A:", A);
//   console.log("B:", B);
// }

// 9
//
// let A = parseInt(prompt("A numni kiriting:"));
// let B = parseInt(prompt("B numni kiriting:"));

//
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
//
// let A = parseInt(prompt("A numni kiriting:"));
// let B = parseInt(prompt("B numni kiriting:"));

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
// let ortanum;

//
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

//
// let kichiknum, kattanum;

//
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

// let p = 0;

// let num1 = +prompt("1-sonni kiriting");
// let num2 = +prompt("2-sonni kiriting");
// let num3 = +prompt("3-sonni kiriting");

// if (num1 % 2 == 1) {
//   p = p + num1;
// }
// if (num2 % 2 == 1) {
//   p = p + num2;
// }
// if (num3 % 2 == 1) {
//   p = p + num3;
// }
// console.log(p);

//

// let counter_ = 0;
// let counter = 0;
// let num1 = +prompt("1-sonni kiriting");
// let num2 = +prompt("2-sonni kiriting");
// let num3 = +prompt("3-sonni kiriting");
// if (num1 > 0 || num1 == 0) {
//   counter++;
// } else {
//   counter_++;
// }
// if (num2 > 0 || num2 == 0) {
//   counter++;
// } else {
//   counter_++;
// }
// if (num3 > 0 || num3 == 0) {
//   counter++;
// } else {
//   counter_++;
// }
// console.log(counter);
// console.log(counter_);

// let num1 = 1;
// let num2 = 4;
// if (num1 > num2) {
//   console.log(num1);
// } else {
//   console.log(num2);
// }

//

// let max;
// let min;
// let num1 = 1;
// let num2 = 4;
// if (num1 > num2) {
//   max = num1;
//   min = num2;
// } else {
//   max = num2;
//   min = num1;
// }
// console.log(max, min);

//

// let max;
// let min;
// let num1 = 1;
// let num2 = 4;
// if (num1 > num2) {
//   max = num1;
//   min = num2;
// }
// console.log(max, min);

//

// let max;
// let max;
// let num1 = 4;
// let num2 = 4;
// if (num1 < num2) {
//   max = num2;
//   num1 = max;
//   console.log(num1, num2);
// } else if (num1 == num2) {
//   num1 = 0;
//   num2 = 0;
//   console.log(num1, num2);
// }

//

// let num1 = 1;
// let num2 = 2;
// let num3 = 3;
// let max;
// if (num1 < num2) {
//   max = num2;
// } else {
//   max = num1;
// }
// if (max < num3) {
//   max = num3;
// }
// console.log(max);

// let num1 = 10;
// if (num1 > 0) {
//   console.log(num1 + 1);
// }

// 1

// let num1 = 5;
// let result;
// if (num1 > 0) {
//   result = `musbat`;
// } else {
//   result = `manfiy`;
// }
// console.log(result);

// 2

// let num1 = 5;
// let result;
// if (num1 % 2 == 1) {
//   result = `toq`;
// } else {
//   result = `juft`;
// }
// console.log(result);

// 3

// let num1 = 5;
// let result;
// if (num1 % 2 == 1) {
//   result = `toq`;
// } else {
//   result = `juft`;
// }
// console.log(result);

// 4

// let num1 = 3;
// let num2 = 3;
// if (num1 > 2 && num2 <= 3) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 5

// let num1 = 3;
// let num2 = 4;
// if (num1 >= 0 || num2 < -2) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 6

// let num1 = 3;
// let num2 = 4;
// let num3 = 5;
// if (num1 <= num2 <= num3) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 7

// let num1 = 3;
// let num2 = 4;
// let num3 = 6;
// if ((num1 < b && num2 < num3) || (num1 > num2 && num2 > num3)) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// 8

// let num1 = 3;
// let num2 = 5;
// if (num1 % 2 == 1 && num2 % 2 == 1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 9

// let num1 = 3;
// let num2 = 5;
// if (num1 % 2 == 1 || num2 % 2 == 1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 10

// let num1 = 3;
// let num2 = 5;
// if (num1 % 2 == 1) {
//   console.log(`birinchi son toq`);
// } else {
//   console.log(`birinchi son toq emas`);
// }
// if (num2 % 2 == 1) {
//   console.log(`ikkinchi son toq`);
// } else {
//   console.log(`ikkinchi son toq emas`);
// }

// 11

// let num1 = 3;
// let num2 = 5;
// if (num1 % 2 == 1) {
//   console.log(`birinchi son toq`);
// } else {
//   console.log(`birinchi juft son`);
// }
// if (num2 % 2 == 1) {
//   console.log(`ikkinchi son toq`);
// } else {
//   console.log(`ikkinchi juft son`);
// }

// 12

// let num1 = 3;
// let num2 = 5;
// if (num1 % 2 == 1) {
//   console.log(`birinchi son toq`);
// } else {
//   console.log(`birinchi juft son`);
// }
// if (num2 % 2 == 1) {
//   console.log(`ikkinchi son toq`);
// } else {
//   console.log(`ikkinchi juft son`);
// }

// 13

// let num1 = 3;
// let num2 = -5;
// let num3 = 7;
// if (num1 > 0 && num2 > 0 && num3 > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 14

// let num1 = 3;
// let num2 = 5;
// let num3 = 3;
// if (num1 > 0 || num2 > 0 || num3 > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 15

// let num1 = 3;
// let num2 = 5;
// let num3 = 3;
// if (num1 > 0 || num2 > 0 || num3 > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 16

// let num1 = 9;
// if (num1 % 10 == num1) {
//   console.log(`berilgan son ikki xonali emas`);
// } else {
//   console.log(`berilgan son ikki xonali`);
// }
// if (num1 % 2 != 1) {
//   console.log(`berilgan son juft`);
// } else {
//   console.log(`berilgan son toq`);
// }

// 17

// let num1 = 100;
// if (num1 % 100 == num1) {
//   console.log(`berilgan son uch xonali emas`);
// } else {
//   console.log(`berilgan son uch xonali`);
// }

// 18

// let num1 = 1023;
// let num2 = 100;
// let num3 = 100;
// if (num1 == num2 || num1 == num3 || num2 == num3 || num2 == num1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 19

// 20

// let num1 = 1023;
// let num2 = 100;
// let num3 = 100;
// if (num1 == num2 || num1 == num3 || num2 == num3 || num2 == num1) {
//   console.log(`barcha raqamalar xar xil emas`);
// } else {
//   console.log(`barcha raqamlar xar xil`);
// }

// 21

// let num1 = 124;
// let num2 = 123;
// let num3 = 100;
// if ((num1 > num2 && num2 > num3) || (num3 > num2 && num2 > num1)) {
//   console.log(`barcha raqamlar ketmaketlikda ketgan`);
// } else {
//   console.log(`barcha raqamlar ketmaketlikda ketmagan`);
// }

// 22

// let num1 = 124;
// let num2 = 125;
// let num3 = 1125;
// if (num1 > num2 && num2 > num3) {
//   console.log(`barcha raqamlar kopayish tartibida ketgan`);
// } else if (num3 > num2 && num2 > num1) {
//   console.log(`barcha raqamlar kamayish tartibida ketmagan`);
// }

// 23

// let num1 = 1;
// let num2 = 2;
// let num3 = 3;
// let max;
// let med;
// let min;
// if (num1 < num2) {
//   max = num2;
// } else {
//   max = num1;
// }
// if (max < num3) {
//   max = num3;
// }
// if (num1 > num2) {
//   min = num2;
// } else {
//   min = num1;
// }
// if (min > num3) {
//   min = num3;
// }

// let a = 0;
// let result;
// result = a > 0 ? true : a == 0 ? "equal" : false;
// console.log(result);

// let a = +prompt("ani kirgizing");
// let b = +prompt("bni kirfizing");
// let S = a * b;
// let P = (a + b) * 2;

// let result = S > P ? console.log(S) : console.log(P);
// console.log(result);

// 1
// let t = 6;
// let T = 10;
// console.log(console.log((t + T) % 24));

// 2

// let Celsius = 24;
// let K = Celsius + 273.15;
// let F = (Celsius * 9) / 5 + 32;
// console.log(K, F);

// 3

// 4

// let n = 6;
// let a = (n / 10) * 2;
// let b = n / 10;
// console.log(`${n - b}kg`);

// 5
// let n = 6;
// let result = (n - 2) * 180;
// console.log(result);
// 6

// 7
// let s = 12;
// let b = 87;
// console.log((s - 87) / -2);

// 8
// let d = 1000;
// let t = 500;
// console.log((d + t) / 2);

// 9
// let n = 6;
// console.log(n ** (n - 1));

// 10
// let num1 = 4;
// let num2 = 1;
// let num3 = 1;
// console.log(num1 - num2 * num3);
