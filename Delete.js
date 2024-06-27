// reversing the string 

// function reverse(str) {
//     let reversed = ""
//     for (let i=0; i<str.length; i++) {
//         reversed = str[i] + reversed
//     }

//     return reversed
// }
// console.log(reverse("Mathenge"))

// function reverse(str) {
//     let reversed = ""
//     for (char of str) {
//         reversed = char + reversed
//     }
//     return reversed
// }

// console.log(reverse("Mathenge"));

// function reverse(str) {

//     const strToArray = str.split("");
//     strToArray.reverse();
//     return strToArray.join("");
// }
// console.log(reverse("YES"));

// console.log(reverse("Mathenge"))


// function reverse(str) {
//     return str.split("").reverse().join("")
// }
// console.log(reverse("YES"))

// function reverse(num) {
//     const reversedInt = num.toString().split("").reverse().join("");
//     return parseInt(reversedInt) * Math.sign(num)
// }

// console.log(reverse(-78))

// function maxChar(str) {
//     const charMap = {};
//     let max = 0;
//     let maxChar = "";
//     for(char of str) {
//         if(charMap[char]) {
//             charMap[char] = charMap[char] + 1;
//         } else {
//             charMap[char] = 1;
//         }
//     }
//     console.log(charMap);
//     for (key in charMap) {
//         if (charMap[key] > max) {
//             max = charMap[key]
//             maxChar = key
//         }
//     }
//     return {maxChar, max};
// }

// console.log(maxChar("mississippi"))

