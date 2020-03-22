'use strict';

function fib(n) {
  
    if (n === 0) {
    // 0の時は0    
    return 0;
  }else if (n === 1) {
    // 1の時は1  
    return 1;
  }
  // 0と1以外の時
  return fib(n - 1) + fib(n - 2);
}

const length = 40;

for (let i = 0; i <= length; i++){
    console.log(fib(i));
}