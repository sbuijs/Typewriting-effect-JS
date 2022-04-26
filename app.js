const texts = [`websites`, `bread`, `drawings`];


//Count looks at each individual text. It counts every word.
let count = 0;
//Index keeps track of the individual letters within a word.
let index = 0;
//The  text that us currently selected.
let currentText = ``;
//Specify the individual letter, that is added 1 by 1.
let letter = ``;


//This is a self invoked function it runs when it gets read
// (function type() {
// }());


(function type() {

    //If count (the words) hits the amount of text.length (there are 3 words, so 3) 
    //lenght: (this starts at 1 not at 0 like index.)
    //We want to reset it, so that it starts at the first word again
    if (count === texts.length) {
        //count is the word
        count = 0;
    }

    //set the current text to the right word
    currentText = texts[count];
    //every time it goes though here it will increment and will add it to the letter
    letter = currentText.slice(0, ++index);

    //add the letter
    document.querySelector('.typing').textContent = letter;

    //when the length of the word is equal to the length of the word, it will go to the next word
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }

    //This function runs every 400 milliseconds
    setTimeout(type, 300);

}());



