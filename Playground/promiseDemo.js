function checkOdd(num){
  return new Promise((resolve, reject) => {
    if(typeof num === 'number'){
      resolve(num);
    }else{
      reject('Not a number');
    }
  });
}

checkOdd(8).then((num) => {
  if(num % 2 === 0){
    return console.log('The number is even');
  }
  console.log('The number is odd');
}, (message) => {
  console.log(message);
});
