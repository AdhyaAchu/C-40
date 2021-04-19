class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

 async start(){
    if(gameState === 0){
      player = new Player();

      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();

      }
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200);
    //spritename.addImage(Imagevariable)
    car1.addImage(car1Img)
    car2 = createSprite(300,200);
    car2.addImage(car2Img)
    car3 = createSprite(500,200);
    car3.addImage(car3Img)
    car4 = createSprite(700,200);  
    car4.addImage(car4Img)
    cars = [car1,car2,car3,car4];
  }

  play(){
//display the name and distance of each player

//hide the form

form.hide();



Player.getPlayerInfo();
player.getCarsAtEnd();

//to consider the info from the database --> defined values = not undefined
if(allPlayers!== undefined){

  //fill the ground Image as the background of the game
  background(ground)

  //to place the track image over the ground Image--> image(image's variable Name,x,y,width,height)
  image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
  //create a variable called index to fix the index of the array
  var index = 0;

  //creating variables called 'x'  and 'y' to store the x and y positions of each players inside the allPlayers
  var x = 175;
  var y;
  

  //for loop to display the info of every single player
  for(var i in allPlayers){    //i = every single player in allPlayer
    //to work for all the index
    index = index+1;

    //fix the x position of each player 200 pixels right to each other
    x = x + 200;

    //fix the y position of the each player based on the distance travelled values in the database
   y = displayHeight-allPlayers[i].distance;

   //assign the x and y positions of the cars to the x and y variables
   cars[index-1].x = x;
   cars[index-1].y = y;

    if(index === player.index){    //car1 = player1, car2 = player2
      fill("red");
      ellipse(x,y,60,60);
    cars[index-1].shapeColor = "blue"
    camera.position.x = displayWidth/2;
    camera.position.y = cars[index-1].y
  }
    else{
    cars[index-1].shapeColor = "black"
  }

  }
 
}

//press the up arrow to increase the distance
if(keyIsDown(UP_ARROW) && player.index !== null){
player.distance+=50;

//update the distance of the player in the database
player.update();
}

//to change the gameState to 2 (end) when the player's distance is greater than 3500
if (player.distance>3500) {
gameState = 2;
player.rank+=1;
Player.updateCarsAtEnd(player.rank);
text(player.rank,20,20)
}
drawSprites();
  }
  end()
{
console.log("Game Ended")
console.log(player.rank)
}
}

