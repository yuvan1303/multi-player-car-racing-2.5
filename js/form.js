class Form{
constructor(){
    this.title = createElement('h2');
    this.input = createInput("name");
    this.button = createButton('play');
    this.greeting = createElement('h3');
    this.reset = createButton('Reset');
}
hide(){
    this.title.hide();
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
}
display(){
    this.title.html("car racing game");
    this.title.position(130,10);   
    this.input.position(130,200);   
    this.button.position(250,250);
    this.reset.position(50,50);
    
    this.reset.mousePressed(()=>{
    game.update(0);
    player.updateCount(0);

    })

    this.button.mousePressed(()=>{
     this.input.hide();
     this.button.hide();
    player.name=this.input.value();
     playerCount = playerCount + 1
     player.index = playerCount 
     player.updateCount(playerCount);
     player.update();
    this.greeting.html("welcome "+player.name )
    this.greeting.position(130,80); 
    });

}
}