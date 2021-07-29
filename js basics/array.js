const sampleArray = ["apple", "banana", "cabbage", "daikon"];
console.log(sampleArray);
console.log("length", sampleArray.length);

//add, remove & replace
console.log(
  "push will add the element to the end and return new length",
  sampleArray.push("eggplant")
);
console.log(sampleArray);
console.log(
  "pop will remove the element at the end and return that element",
  sampleArray.pop("eggplant")
);
console.log(sampleArray);
console.log(
  "shift will remove element at the start and return that element",
  sampleArray.shift()
);
console.log(sampleArray);
console.log(
  "Unshift will add element at the start and return new length",
  sampleArray.unshift("apple")
);
console.log(sampleArray);
console.log(
  "splice will add,remove or replace an item by index position i.e:remove - sampleArray.splice(pos,n) and return removed element(s)",
  sampleArray.splice(2, 1)
);
console.log(sampleArray);
console.log(
  "i.e:add - sampleArray.splice(pos,index,item)",
  sampleArray.splice(2, 0, "cabbage")
);
console.log(sampleArray);
console.log(
  "i.e:replace - sampleArray.splice(pos,index,item) and return replaced item",
  sampleArray.splice(2, 1, "carrot", "cactus")
);
console.log(sampleArray);
console.log(
  "fill method changes all elements in an array with static values i.e fill(static value, start index, end index) and return the modified array",
  sampleArray.fill("cellary", 3, 6)
);

//shallow copy & merge
const sampleArray1 = sampleArray.slice();
console.log(
  "slice will run a shallow copy of array into a new array",
  sampleArray1
);
const sampleArray2 = ["eggplant", "fruits", "ganoush"];
const sampleArray3 = sampleArray1.concat(sampleArray2);
console.log("concat merges 2 arrays into 1", sampleArray3);
console.log(
  "copyWithin shallow copies part of an array to another location in same array",
  sampleArray3.copyWithin(2, 3)
);

console.log("reverse , reverses the array", sampleArray3.reverse());
