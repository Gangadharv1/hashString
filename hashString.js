function stringHash(s, k) {
    let result = '';
    let n = s.length;
    for (let i = 0; i < n; i += k) {
        let hashSum = 0;
        let substring = s.substring(i, i + k);
        for (let char of substring) {
            hashSum += char.charCodeAt(0) - 97; 
        }
        let hashedChar = String.fromCharCode(97 + hashSum % 26);
        result += hashedChar;
    }

    return result;
}