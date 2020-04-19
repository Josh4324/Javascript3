const yugioh = (integer) => {
  let arr = [];
  for (let num = 1; num <= integer; num++) {
    if (num % 2 == 0 && num % 3 == 0 && num % 5 == 0) {
      arr.push("yu-gi-oh");
      continue;
    } else if (num % 2 == 0 && num % 3 == 0) {
      arr.push("yu-gi");
      continue;
    } else if (num % 2 == 0 && num % 5 == 0) {
      arr.push("yu-oh");
      continue;
    } else if (num % 3 == 0 && num % 5 == 0) {
      arr.push("gi-oh");
      continue;
    } else if (num % 2 == 0) {
      arr.push("yu");
      continue;
    } else if (num % 3 == 0) {
      arr.push("gi");
      continue;
    } else if (num % 5 == 0) {
      arr.push("oh");
      continue;
    } else {
      arr.push(num);
      continue;
    }
  }
  return arr;
};

console.log(yugioh(30));
