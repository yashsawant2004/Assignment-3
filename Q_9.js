function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}

let paragraph = "JavaScript is a powerful programming language used for web development.";
console.log(countWords(paragraph)); 
