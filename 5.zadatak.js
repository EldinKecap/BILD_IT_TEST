function removeRepeatingChars(str) {
    
    str = str.split('');
    for (let i = 0; i < str.length-1; i++) {
        if (str[i].toLowerCase() == str[i+1].toLowerCase()) {
            str.splice(i+1,1);
            i--;
        }
    }
    return str.join('');
}
console.log(
    removeRepeatingChars('Shelless mollusk lives in walles house in wellness. Aaaarrghh!'));