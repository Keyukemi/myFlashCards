const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("createBox")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
//This array is simply checkimg if an item already exists in local storage and if it doesn't then the item gets added to the array
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// Calls the function and creates a flashcard from storage for each of the card that we had before exiting the page
 
contentArray.forEach(divMaker);

//This created the contect div that is appended into div with classname flashcards
function divMaker(text){
    var div = document.createElement('div');
    var h2Question = document.createElement('h2');
    var h2Answer = document.createElement('h2');

    div.className = 'flashcard';
    
    h2Question.setAttribute('style', "text-decoration: underline; text-align: center; ");
    h2Question.innerHTML = text.myQuestion;

    h2Answer.setAttribute('style', "text-align: center; display: none; color: ##e78fb3;");
    h2Answer.innerHTML = text.myAnswer;

    div.appendChild(h2Question);
    div.appendChild(h2Answer);

    div.addEventListener('click', function(){
        if(h2Answer.style.display == 'none'){ 
            h2Answer.style.display = 'block';
        }
        else{
            h2Answer.style.display = 'none';
        }
    });

    // div.addEventListener('dblclick')

    flashcards.appendChild(div);
}
//This is for creating a new card
function addFlashCard() {
    var flashcardInfo = {
        'myQuestion' : question.value,
        'myAnswer': answer.value
    };
    contentArray.push(flashcardInfo);
    localStorage.setItem('items', JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length - 1]);
    question.value='';
    answer.value='';
}
//This is for deleting all flashcard
function delFlashCards (){
    localStorage.clear();
    flashcards.innerHTML='';
    contentArray =[];
}
//This shows the box that lets you add a new card
function showCreateCardBox(){
    createBox.style.display = "block";
}
//This let you hide the box for add cards
function hideCreateBox(){
    createBox.style.display = "none";
}