function bubbleSort(array) {
  let swapped = true;
  do {
    swapped = false;
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

let prueba = [
  6, 48, 108, 198, 139, 132, 97, 5, 165, 122, 9, 185, 42, 192, 96, 141, 194, 79,
  154, 147, 7, 34, 83, 135, 16, 100, 14, 176, 60, 69, 146, 200, 29, 110, 10,
  102, 52, 130, 25, 27, 140, 125, 126, 174, 158, 12, 164, 2, 80, 43, 117, 84,
  156, 186, 129, 94, 183, 90, 13, 54, 21, 195, 22, 170, 51, 160, 104, 57, 63,
  61, 155, 115, 32, 40, 28, 39, 71, 148, 187, 143, 173, 105, 59, 179, 138, 175,
  121, 188, 8, 134, 107, 168, 37, 92, 184, 166, 68, 85, 128, 15,
];

console.log(bubbleSort(prueba))
