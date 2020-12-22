var ball;
var database, position ;
var gameState = 0; 
var playerCount = 0
var game,player,form
var allPlayers
var car1,car2,car3,car4;
var cars = []
var car1I,car2I,car3I,car4I,track, ground;
function preload(){
    car1I = loadImage("images/car1.png")
    car2I = loadImage("images/car2.png")
    car3I = loadImage("images/car3.png")
    car4I = loadImage("images/car4.png")
    track = loadImage("images/track.jpg")
    ground = loadImage("images/ground.png")
}
function setup(){
    createCanvas(displayWidth - 50, displayHeight - 50);
    database = firebase.database();
    game = new Game ();
    game. getState();
    game.start()
}

function draw(){
   if(playerCount === 4){
    gameState = 1
    game.update(1)
   } 

   if (gameState === 1 ){
    clear();
    game.play()
    
   }
}

