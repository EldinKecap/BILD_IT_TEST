function removeChars(arg) {
    arg = arg.split(',');
    str = arg[0];
    chars = arg[1].trim();;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < chars.length; j++) {
            if (str[i]==chars[j]) {
                str=str.replace(chars[j],'');
            }
        }
    }
    return str;
    
}
console.log(removeChars('how are you, abc'));
