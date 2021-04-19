var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var car1, car2, car3,car4;
var cars;   //array for holding all the 4 car sprites
var car1Img, car2Img, car3Img, car4Img, ground, track;
//create a variable called 'allPlayers' --> store the info (name and distance) of all 4 players
var allPlayers;

function preload(){
//varName = loadImage("ImageName"); 
car1Img = loadImage("images/car1.png")
car2Img = loadImage("images/car2.png")
car3Img = loadImage("images/car3.png")
car4Img = loadImage("images/car4.png")
ground = loadImage("images/ground.png")
track = loadImage("images/track.jpg") 
}

function setup(){
  //displayWidth & displayHeight - to stretch the canvas to the entire width and height of the screen
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}


function draw(){
  if(playerCount===4){
    //update(state) belongs to the Game class
    game.update(1)
  }
  if(gameState===1){
    clear();
    game.play();
  }
  if(gameState===2){
  game.end();
  }
  
}
