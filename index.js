// Generate random numbers
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
// Get dice image
var getImage1 = 'images/dice' + randomNumber1 + '.png';
var getImage2 = 'images/dice' + randomNumber2 + '.png';
// Select HTML
var image1 = document.querySelectorAll('img')[0];
var image2 = document.querySelectorAll('img')[1];
// Add image
image1.setAttribute('src', getImage1);
image2.setAttribute('src', getImage2);
// Winners and draws
if (randomNumber1 < randomNumber2){
  document.querySelector('h1').innerHTML = 'Player 2 Wins';
} else if(randomNumber1 > randomNumber2 ){
  document.querySelector('h1').innerHTML = 'Player 1 Wins';
} else{
  document.querySelector('h1').innerHTML = 'Draw';
}
