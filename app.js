'use strict';

//配列を定義
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
  if(memo.has(n)) {
   //配列に値がある場合
    return memo.get(n);
  }
   //配列に値がない場合
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value);
  return value;
}

const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}


/* function fib(n) {
  
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
 */
/* const length = 40;

for (let i = 0; i <= length; i++){
    console.log(fib(i));
} */