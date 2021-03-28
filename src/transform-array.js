const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let isDiscardNext = false;
  if (typeof(arr) !== 'object') return Error;

  let newArr = [],
      i = 0;

  while (i < arr.length){

    if (arr[i] == `--discard-next` && i !== (arr.length - 1)){
      newArr.push(arr[i]);
      i+=2;
      if (arr[i] === `--discard-next`) {
        newArr.push(arr[i]);
        i+=2;
        if (arr[i] === `--discard-next`) {
          newArr.push(arr[i]);
          i+=2;
          if (arr[i] === `--discard-next`) {
            newArr.push(arr[i]);
            i+=2;
          };
        };
      };
      isDiscardNext = true;
    }

    if (arr[i] == `--discard-prev` && i !== 0){
      newArr.pop();
      newArr.push(arr[i]);
    }

    if (arr[i] == `--double-next` && i !== (arr.length - 1)){
      newArr.push(arr[i]);
      newArr.push(arr[i + 1]);
      i++;
    }

    if (arr[i] == `--double-prev` && i !== 0 && arr[i-2] !== `--discard-next`){
      newArr.push(arr[i - 1]);
      newArr.push(arr[i]);
    } else if (arr[i] == `--double-prev` && i !== 0 && arr[i-2] == `--discard-next`){
      newArr.pop();
      newArr.push(arr[i]);
      i++;
    }

      newArr.push(arr[i]);
      i++;
  }
  

  return newArr.filter(item => {
    return (item != `--discard-next` && item != `--discard-prev` && item != `--double-next` && item != `--double-prev` && item != undefined)
  });

};
