/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    // Define variable for total
    let total = 0;
    // Define all roman values
    const romanChars = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    // Loop over given input
    for (let i=0;i<s.length;i++) {
        // Define value that will be added to total so we can modify it
        let lastChar    = i!=0 ? s[i-1] : '',
            currentChar = s[i],
            value       = romanChars[currentChar];
        // Use switch statement to check lastChar then use
        // ternary operator to check if the currentChar
        // is compatiable. Then subtract the lastChar's value
        // from the value.
        switch (lastChar) {
            case 'I':
                /V|X/.test(currentChar) && (value -= romanChars[lastChar] * 2);
                break;
            case 'X':
                /L|C/.test(currentChar) && (value -= romanChars[lastChar] * 2);
                break;
            case 'C':
                /D|M/.test(currentChar) && (value -= romanChars[lastChar] * 2);
                break;
        }
        // Add value to the total
        total += value;
    }
    // Return total
    return total;
};