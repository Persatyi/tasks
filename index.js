/* 
Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.

DESCRIPTION:
Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.

Examples
("--++--", "++--++") ➞ "000000"

("-+-+-+", "-+-+-+") ➞ "-+-+-+"

("-++-", "-+-+") ➞ "-+00"
*/

function neutralise(s1, s2) {
  let newStr = "";

  for (let i = 0; s1.length - 1 !== i - 1; i += 1) {
    if (s1[i] === s2[i]) {
      newStr += s1[i];
    } else {
      newStr += "0";
    }
  }

  return newStr;
}

console.log("🚀 ~ neutralise:", neutralise("--++--", "++--++"));
console.log("🚀 ~ neutralise:", neutralise("-+-+-+", "-+-+-+"));
console.log("🚀 ~ neutralise:", neutralise("-++-", "-+-+"));
