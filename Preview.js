// Reversing the string


//  function reverseFn(str) {
//     let reversed = "";
//     for (let char of str){
//         reversed = char + reversed
//     }
//     return reversed
//  }
//  console.log(reverseFn("CodingMoney"));
        
// function reverse(str) {
//     const strToArray = str.split("");
//     strToArray.reverse();
//     return strToArray.join("")
// }
// console.log(reverse("Mathenge"))

// function reverse(str) {
//     return str.split("").reverse().join("")
// }
// console.log(reverse("Mathenge"));

// function reverseInt(num) {
//     const reversed = num.toString().split('').reverse().join('');
//     return parseInt(reversed) * Math.sign(num)
// }

// console.log(reverseInt(14));

// PALINDRONE - STRINGS THAT FORM THE SAME WORDS IF REVERSED

// ((str) => {
//     let reversed = str.split("").reverse().join("");
//     if (reversed === str) {
//         return console.log(true)
//     } else{
//         return console.log(false)
//     }
// })("YES");

// function palindrome (str) {
//     const reversed = str.split("").reverse().join("");
//     return reversed === str
// }
// console.log(palindrome("HELLO"));

// RETURN THE MOST USED CHARACTER IN THE STRING;

// function maxChar(str) {

//     const charMap = {};
//     let max = 0;
//     let maxChar = "";
//     for (let char of str) { // converted str/arr to obj
//         if (charMap[char]) {
//             charMap[char] = charMap[char] + 1;
//         } else {
//             charMap[char] = 1;
//         }
//         // charMap[char] = ++charMap[char] || 10;
//     }
//     console.log(charMap);

//     for (let key in charMap) {
//         if (charMap[key] > max) {
//             max = charMap[key];
//             maxChar = key;
//         }
//     }
//     return maxChar;
// }

// console.log(maxChar("dufgggd"));

//ARRAY CHUNKING

// function chunk(array, size) {
//     const result = [];
//     let index = 0;
//     while (index < array.length) {
//         result.push(array.slice(0, index+size));
//         index += size;
//     }

//     return result;
// }

// console.log(chunk([1, 2, 3, 4], 2));



