function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}

let sentence = "I love Javasript!";
let correctedSentence = correctfn(sentence, "Javasript", "JavaScript");

console.log(correctedSentence); 
