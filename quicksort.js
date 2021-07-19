function quickSort(nums){
    console.log(`sorting ${nums}`)
    
    if (nums.length<=1) return nums
    
    const pivot = nums.pop()
    const smallerNums = []
    const largerNums = []
    
    for (let num of nums){
      if (num<pivot) smallerNums.push(num)
      else largerNums.push(num)
    }
    return [...quickSort(smallerNums), pivot, ...quickSort(largerNums)]
  }
  
  const nums = [1,22,3,55,7,6,5,333,2222,123,8765,56,9,9,9,9]
  
  const sortedNums = quickSort(nums)
  
  console.log(sortedNums)