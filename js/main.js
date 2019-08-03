window.addEventListener('load' , init);

//globals

//Available levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
};
let currentLevel = levels.easy;
//change Difficulty
function changeDifficulty(num){
  if(num === 1){
    currentLevel = levels.easy;
    document.querySelector("#diff").innerHTML = "Easy";
    seconds.innerHTML = currentLevel;
  }
  else if(num === 2){
    currentLevel = levels.medium;
    document.querySelector("#diff").innerHTML = "Medium";
    seconds.innerHTML = currentLevel;
  }
  else{
    currentLevel = levels.hard;
    document.querySelector("#diff").innerHTML = "Hard";
    seconds.innerHTML = currentLevel;
  }
}

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = ['repaeat','rage' , 'rythm' , 'close' , 'dispensary' , 'job' , 'collect' , 'rendezvous' , 'alphabet' , 'alphonse', 'youtube' ,  
  'developer',
  'establishment',
  'hero',
  'javascript',
  'echo',
  'siblings',
  'investigate',
  'symptom',
  'master',
  'space',
  'definition',
  'magic',
  'horrendus',
  'revolver',
  'hats'
];

//Initialize Game
function init(){

  //show number of seconds in UI
  seconds.innerHTML = currentLevel;

  //load word from the array
  showWord(words);
  
  //Start matching on word input
  wordInput.addEventListener('input' , startMatch);
  
  //call countdown every second
  setInterval(countdown , 1000)
  
  //check game status
  setInterval(checkStatus , 15);
}

//Start Match
function startMatch(){
  if(matchWords()){
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  //if score is -1 display zero
  if(score == -1)
  scoreDisplay.innerHTML = 0;
  else
  scoreDisplay.innerHTML = score;

}

//Match current word to WordInput
function matchWords(){
  if(wordInput.value == currentWord.innerHTML){
    message.innerHTML = 'Correct!!!';
    return true;
  }
  else{
    message.innerHTML = '';
    return false;
  }
}

//Pick and show a random word
function showWord(words)
{
  //Generate array index
  const randIndex = Math.floor(Math.random() * words.length);
  //output random word
  currentWord.innerHTML = words[randIndex];
}

//Countdown Timer
function countdown(){
  //Make sure time is not over
  if(time>0){
    //decrement the time
    time--;
  }
  else if(time == 0){
    //Game is over
    isPlaying = false;
  }
  //show time
  timeDisplay.innerHTML = time;
}

//check game status
function checkStatus(){
  if(!isPlaying && time == 0){
    message.innerHTML = 'Game Over!!!!';
    score = -1;
  }
}


