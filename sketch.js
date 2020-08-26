var players, player1, player2, player3, player4;
var dragon;
var monsters;
var gameState = 0;
var database;
var form, player, game;
var ground;
var playerCount;
var allPlayers;
var distance = 0;

function preload(){
ground = loadImage('sprites/Forest.jpg')
//player1_img = loadImage('sprites/player1.png')
}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
