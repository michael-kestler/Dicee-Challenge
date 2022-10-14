



function diceRoll(){
  let randomNumber1 =  Math.floor(Math.random() * 6) + 1;
  if(randomNumber1 == 1) img1.setAttribute('src', 'images/dice1.png')
  else if(randomNumber1 == 2) img1.setAttribute('src', 'images/dice2.png')
  else if(randomNumber1 == 3) img1.setAttribute('src', 'images/dice3.png')
  else if(randomNumber1 == 4) img1.setAttribute('src', 'images/dice4.png')
  else if(randomNumber1 == 5) img1.setAttribute('src', 'images/dice5.png')
  else if(randomNumber1 == 6) img1.setAttribute('src', 'images/dice6.png')

}
