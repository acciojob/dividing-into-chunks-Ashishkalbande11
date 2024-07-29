const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	  let result = [];
    let subarray = [];
    let sum = 0;

      for (let a of arr) {
        if (sum + a > n) {
			result.push(subarray);
            subarray = [a];
            sum = a;      
        } else {
            subarray.push(a);
            sum += a;
        }
    }


    // Don't forget to push the last subarray if it has elements
    if (subarray.length > 0) {
        result.push(subarray);
    }

    return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
