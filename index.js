function removeDuplicates(arr) {
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])){ 
      result.push(arr[i]);
    }
  }
  
  return result;
}


let input = ["1","2","3","2","4",];
let output = removeDuplicates(input);
console.log(output);
console.log(input);