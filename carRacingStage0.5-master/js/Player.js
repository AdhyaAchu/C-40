class Player {
  constructor(){
    //properties of the player object = index, distance,name
    this.index = null;  //p1,p2,p3,p4
    this.distance = 0
    this.name = null;
    this.rank = null;
  }

  //read the no. of players
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  //update the playerCount in the database
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  //update the name and distance of the player
  update(){
    //create a new entry in the database called 'players' inside which you'll have all the 4 player's name and distance

    //Eg. 1st player = player1, 2nd player = player2, 3rd player = player3
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({

      //updating the name entry in the database to the name input by the user
      name:this.name,
      distance: this.distance
    });
  }

  //ENTRIES IN THE DATABASE - gameState, playerCount, players

  //function to store all the player's information inside the 'allPlayers' variable --> getPlayerInfo()
 static getPlayerInfo(){
var playerInfoRef = database.ref('players');
playerInfoRef.on("value",(data)=>{
  allPlayers = data.val();
})
    
  }

  //function to get/read the number of cars at the end --> getCarsAtEnd()
  getCarsAtEnd(){
    //to refer to the database and listen to the 'carsAtEnd' to find out the number of cars at end and store it inside the 'this.rank'
    database.ref('carsAtEnd').on("value", (data)=>{
      this.rank = data.val()
    })
  }

  //static function to update the 'carsAtEnd' entry in the database --> updateCarsAtEnd(rank)
  static updateCarsAtEnd(rank){
    database.ref('/').update({
      carsAtEnd:rank
    })
  }
}

/*
DATABASE:
carsAtEnd:0
gameState:0
playerCount:0
players:
      player1:
          name:
          distance
      player2:
          name:
          distance:
      player3:
          name:
          distance:
      player4:
          name:
          distance:
                    STATIC -  WORK FOR MORE THAN ONE OBJECT
*/

