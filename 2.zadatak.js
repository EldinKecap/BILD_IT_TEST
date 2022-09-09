function howMuchMoney(money) {
    arrOfCoin=[];
    numOfCoin = 0;
    end:
    while(money!=0){
        if(money!=0){
           while(money>0){
               money-=5
               if (money>=0) { 
                arrOfCoin.push(5);               
                numOfCoin++;
                if (money==0) {
                    break end;
                }
               }
           }
           money+=5
           while(money>0){
            money -=3;
            if (money>=0) {     
                arrOfCoin.push(3);
                numOfCoin++;
               }
               if (money==0) {
                break end;
            }
           }
           money +=3;
           while(money>0){
            money -=1;
            if (money>=0) {   
                arrOfCoin.push(1);               
                numOfCoin++;
                if (money==0) {
                    break end;
                }
               }
           }

        }
        console.log(money);
    }
    let ans = `${numOfCoin} (`;
    for (let i = 0; i < arrOfCoin.length; i++) {
       if (arrOfCoin.length-1 != i) {
           ans = ans.concat(arrOfCoin[i]+',');
       }else{
        ans = ans.concat(arrOfCoin[i]);

       }
    }
    
    ans = ans.concat(')');
    return ans;
    
}

console.log(howMuchMoney(20));