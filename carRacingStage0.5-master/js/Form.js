class Form {
  constructor() {
  //properties of the form object = input, button, greeting & title
  this.input = createInput("Name");
  this.button = createButton('Play');
  this.greeting = createElement('h3');
  this.title = createElement('h2');
  this.reset = createButton("reset");
  }

  //hide input, button and greeting --> hide(){}
   hide(){
     this.button.hide();
     this.input.hide();
     this.greeting.hide();
     this.title.hide();
   }
  display(){
    
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2-50,0);

    this.input.position(displayWidth/2-40,displayHeight/2-80);
    this.button.position(displayWidth/2+30,displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();


      player.name = this.input.value();
      
      playerCount+=1;

      player.index = playerCount;
      //p1 p2 p3 p4 = 1 2 3 4
      player.update()
      player.updateCount(playerCount);
     
      this.greeting.html("Hello " + player.name )
      this.greeting.position(displayWidth/2-70,displayHeight/4)
    });
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        var playerInfoRef = database.ref('players');
        playerInfoRef.remove();
      });
  }
}
