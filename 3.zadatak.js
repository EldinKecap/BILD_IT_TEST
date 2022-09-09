function firstNonRepeatChar(str) {
    let arr = str.split('');
    // console.log(arr);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i]==arr[j]) {
                count++;
                if (count>2) {
                    count=0;
                    break;
                }
            }
        }
        if (count == 1) {
            console.log(arr[i]);
            break;
        }
    }
}

firstNonRepeatChar('yellow')