const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in nums) {
  if (x == 5) {
    break; // Stop the loop when x is 5
  }
  console.log(`${x} = ${nums[x]}`); // Output: 1, 2, 3, 4
}

for (y in nums) {
  if (y == 5) {
    continue; // Skip the iteration when y is 5
  }
  console.log(`${y} = ${nums[y]}`); // Output: 1, 2, 3, 4, 6, 7, 8, 9, 10
}

externo:
for (a in nums) {
  for (b in nums) {
    if (a ==2 && b == 3) {
      break externo; // Break out of the outer loop when b is 2
    }
    console.log(`a = ${a}, b = ${b}`); // Output: a = 0, b = 0; a = 0, b = 1; a = 1, b = 0; a = 1, b = 1
  }
}

console.log('End of the loop'); // Output: End of the loop