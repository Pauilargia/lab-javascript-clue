var cards = {
  suspects: [
    {firstName: "Jacob", lastName: "Green", colour: "Green", description: "He has a lot of connections and is always willing to help people out -- for a price."},
    {firstName: "Doctor", lastName: "Orchid", colour: "White", description: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning."},
    {firstName: "Victor", lastName: "Plum", colour: "Purple", description: "He is a billionaire video game designer who is embracing his new popularity."},
    {firstName: "Kasandra", lastName: "Scarlet", colour: "Red", description: "She is an A-list movie star whose past haunts her."},
    {firstName: "Eleanor", lastName: "Peacock", colour: "Blue", description: "She is from a wealthy family and uses her status and money to earn popularity."},
    {firstName: "Jack", lastName: "Mustard", colour: "Yellow", description: "He is a former football player who tries to get by on his former glory."}
  ],
  rooms: [
    {name: "Dining room"},
    {name: "Conservatory"},
    {name: "Kitchen"},
    {name: "Study"},
    {name: "Library"},
    {name: "Billiard room"},
    {name: "Lounge"},
    {name: "Ballroom"},
    {name: "Spa"},
    {name: "Hall"},
    {name: "Living room"},
    {name: "Observatory"},
    {name: "Theater"},
    {name: "Guest house"},
    {name: "Patio"}
  ],
  weapons: [
    {name: "Rope", colour: "Brown", weight: 1},
    {name: "Knife", colour: "Grey", weight: 1},
    {name: "Candlestick", colour: "Yellow", weight: 2},
    {name: "Dumbbell", colour: "Blue", weight: 2},
    {name: "Poison", colour: "Green", weight: 0},
    {name: "Axe", colour: "Black", weight: 3},
    {name: "Bat", colour: "Brown", weight: 2},
    {name: "Trophy", colour: "Yellow", weight: 5},
    {name: "Pistol", colour: "Black", weight: 3}
  ]
};

function selectCard(array){
  return Math.floor(Math.random()*array.length);
}

function getCards(cards, confidential){
  var murderer = selectCard(cards.suspects);
  var weapon = selectCard(cards.weapons);
  var room = selectCard(cards.rooms);
  confidential.push(cards.suspects[murderer], cards.weapons[weapon], cards.rooms[room]);
  return confidential;
}

function revealMystery(cards, confidential){
  return getCards(cards, confidential);
}

var confidential = [];
var solution = revealMystery(cards, confidential);
console.log("The solution is: ");
console.log(" - Murderer: " + confidential[0].firstName + " " + confidential[0].lastName);
console.log(" - With: " + confidential[1].name);
console.log(" - In: " + confidential[2].name);
