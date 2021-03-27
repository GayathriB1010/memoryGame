const gameContainer = document.getElementById("game");
let cardsChosen =[];
let card1 =null;
let card2 = null;
let noClicking = false;
let cardsflipped = 0;
let currentCard = null;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  if(noClicking) return;
  if(event.target.classList.contains("flipped")) return;

  console.log("you just clicked", event.target);
  let target = event.target;
  let backgroundColor = target.getAttribute('class');
  this.style.backgroundColor = backgroundColor;
  cardsChosen.push(event);
  if(cardsChosen.length ==2)
  {
    let flag=true;
    console.log("I am inside if loop")
    console.log("2 cards selected");
  card1 = cardsChosen[0].target;
  card2 = cardsChosen[1].target;
  console.log(card1)
  console.log(card2)
  console.log(card1 === card2)
  console.log(card1.classList)
  if (!card1.classList.contains("flipped"))
  card1.classList.add("flipped");
  if (!card2.classList.contains("flipped")) 
  card2.classList.add("flipped");
  else 
  flag=false;
  // }
  console.log(card1.getAttribute('class'))
  console.log(card2.getAttribute('class'))
    console.log(flag)
  if(card1.getAttribute('class') === card2.getAttribute('class') && flag) 
  {
    cardsflipped =  cardsflipped+2;
    card1.removeEventListener('click',handleCardClick);
    card2.removeEventListener('click',handleCardClick);
    card1 = null;
    card2 = null;
    noClicking = false;
  }
  else{
    setTimeout(function()
    {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
      card1.style.backgroundColor = "";
      card2.style.backgroundColor = "";
      card1 = null;
      card2 = null;
    },100);
    noClicking = false;
  }
  cardsChosen =[];
  if(cardsflipped == COLORS.length)
  {
    alert("Game over");
  }
  cardsChosen =[];

}
}

// when the DOM loads
createDivsForColors(shuffledColors);
