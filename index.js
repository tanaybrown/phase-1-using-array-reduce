const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// batteries s/b a number
// add batteryBatches together


const totalBatteries = batteryBatches.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
},0)

console.log(output)