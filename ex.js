// Part 1
// Big Letter
function BigLetter() {
    let str = document.getElementById('str').value;
    let res = str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');        
    document.getElementById('res').textContent = res;      
}

// The Longest Word
function LongestWord(){
    let str = document.getElementById('input').value;
    let words = str.split(' ');
    let res = words.reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;}, '');
    document.getElementById('result').textContent = 'Longest word is: ' + res;
}

// Second Lowest and Second Greatest 
function findSecondLowAndHigh(array) {
    array.sort((a, b) => a - b);
    let secondLowest = array[1];
    let secondGreatest = array[array.length - 2];
    return [secondLowest, secondGreatest];
}

let array = [23, 21, 24, 10, 5];
let result = findSecondLowAndHigh(array);
console.log(result); 

// Spaces remove
function SpaceRemove() {
    let string = document.getElementById('string').value;
    let ress = string.replace(/\s+/g, '');
    document.getElementById('ress').textContent = 'The result is: ' + ress;
}

// Part 2
// Combinations
function Combinations() {
    let text = document.getElementById('text').value;
    let combinations = [];
    for (let i = 0; i < text.length; i++) {
        for (let j = i + 1; j <= text.length; j++) {
            combinations.push(text.substring(i, j)); 
        }
    }
    document.getElementById('rres').innerText = combinations.join(',');
}

// Array Range
function range(x, y) {
    if (x >= y - 1) {
        return [];
    }
    return [x + 1, ...range(x + 1, y)];
}
let rees = range(34, 46);
console.log(rees);  

// Array Range
 var arr = [10, 21, 39, 4, 5, 6];
 function computeSum(arr) {
     return arr.reduce((sum, current) => sum + current, 0);
 }
 var sum = computeSum(arr);
 document.getElementById('rees').textContent = 'Sum of the array is: ' + sum;

 // Middle three
 function MiddleThree() {
    let stringg = document.getElementById('stringg').value;
    let mid = Math.floor(stringg.length / 2);
    let rreess = stringg.slice(mid - 1, mid + 2);
    document.getElementById('rreess').textContent = "The result is:" + rreess;
 }