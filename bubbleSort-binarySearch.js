function bubbleSort(numArray){
  
    let sorted=false
     
     while (!sorted){
       sorted = true
       for (let i=0; i<numArray.length-1;i++){
         
         if (numArray[i]>numArray[i+1]) {
   //         console.log(numArray)
           sorted = false
           const temp = numArray[i]
           numArray[i]=numArray[i+1]
           numArray[i+1]= temp
           }
        }
     }
     
     return numArray
    }
   
   const numArray = [0,1,3,5,3,5,3,2,9,8,77,567,55]
   const sortedNumArray = bubbleSort(numArray)
   
   
   
   function search(item, items){
     let startIndex = 0
     let endIndex = items.length
     
     while (endIndex>startIndex)  {
       console.log(`search ${item} in ${items.slice(startIndex,endIndex)}`)
       const midIndex = Math.floor((endIndex-startIndex)/2) + startIndex  
       console.log(`[${startIndex}][${midIndex}][${endIndex}]`)
       if (items[midIndex]=== item) return midIndex
       if (items[midIndex] < item) startIndex=midIndex  +1
       else endIndex = midIndex -1
     }
        
     return -1
   }
   
   console.log(search(567,sortedNumArray))
   
   console.log(search(11,sortedNumArray))
   
   
   
   