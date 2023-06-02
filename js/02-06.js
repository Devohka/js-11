// завдання 1

const logItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    const newArr = i + 1;
    const sumArr = newArr + "-" + array[i];
    console.log(sumArr);
  }
};

// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// завдання 2

const calculateEngravingPrice = function (message, pricePerWord) {
  const findPrice = message.split("").length * pricePerWord;
  return findPrice;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);

// завдання 3

const findLongestWord = function (string) {
  const word = string.split(" ");
  let maxWord = word[0];
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > maxWord.length) {
      maxWord = word[i];
    }
  }
  return maxWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// завдання 4

const formatString = function (row) {
  let newRoow = " ";
  if (row.length < 40) {
    newRoow = row;
  } else {
    newRoow = row.slice(0, 40) + "...";
  }
  return newRoow;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curabitur ligula sapien."));
console.log(formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."));

// завдання 5

const checkForSpam = function (message) {
    message.toLowerCase().includes("sale");
    message.toLowerCase().includes("spam");
}

console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!')); 

// завдання 6

let input = prompt("ввести число").split("");

    const numbers = [];
    const arr = numbers.concat(input);
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = arr[i] + arr.length;
        console.log(total)

    }






