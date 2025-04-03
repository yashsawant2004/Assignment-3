function countVowelsAndConsonants(str) {
    let vowels = "AEIOUaeiou";
    let consonants = "BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz";

    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (consonants.includes(char)) {
            consonantCount++;
        }
    }

    return { vowels: vowelCount, consonants: consonantCount };
}

let inputString = "Yash Sawant is a good boy!";
let counts = countVowelsAndConsonants(inputString);

console.log(`Vowels: ${counts.vowels}, Consonants: ${counts.consonants}`);
