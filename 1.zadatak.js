function uniqueNums(arr) {
    let cnt = 0;
    let arrUnique= [];
    for (let i = 0; i < arr.length; i++) {
       for (let j = 0; j < arr.length; j++) {
         if(!arrUnique.includes(arr[i])){
            arrUnique.push(arr[i]);
         }
        
       } 
       
    }
        return arrUnique;
}
console.log(uniqueNums([4,3,1,5,6,8,4,2,1,4,3,5,6,1]));
