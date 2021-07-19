function rFactorial(num) {
    if (num <= 1) return num
    return (num * rFactorial(num-1))
  }
  
  console.log(rFactorial(6))