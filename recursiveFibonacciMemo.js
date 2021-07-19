let fibMemo = []
  
function rFib(num){
  if (num < 2) return num
  if (fibMemo[num]) {
    console.log(`using memo [${num}]`)
  return fibMemo[num]
}  
  console.log(`calculating [${num}]`)
  const fib = rFib(num-1) + rFib(num-2)
  fibMemo[num] = fib
  return fib
}


// for (let i=1;i<10;i++){
// const x = rFib(i)
// console.log(x)
// }
console.log("-")
console.log(rFib(10))