let arr = [
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8],
    ],
  ];
  let sum = 0;
  function sumNestedArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        sumNestedArray(arr[i]);
      } else {
        sum += arr[i];
      }
    }
  }
  sumNestedArray(arr);
  console.log(sum);
  