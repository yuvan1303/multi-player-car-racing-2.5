class Game{
    constructor(){}
    
    getState(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",(data)=>{
        gameState = data.val()
    })

    }

    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    start(){
        if(gameState === 0){

        player = new Player();
        player.getCount()
        form = new Form();
        form.display()

        }

        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1,car2,car3,car4 ];
        car1.addImage(car1I);
        car2.addImage(car2I);
        car3.addImage(car3I);
        car4.addImage(car4I);

    }
    play()
    {
        form.hide();
        background(ground)
        image(track,0,-displayHeight*4,width,(height*5)+250)
        drawSprites();
        Player.getplayerInfo();
        if(allPlayers !== undefined){
            var index  = 0;
            var x = 150;
            var y = 0;

            for(var plr in allPlayers){
                index += 1;
                x += 200;
                y = height- allPlayers[ plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
            
        if( index === player.index){
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y
            textSize(20)
            fill(0,0,0);
            text(player.name,x,camera.position.y);
        }
    }   
        }
        if(keyIsDown(UP_ARROW)&&player.index!== null){
            player.distance += 50
            player.update();
        }

        
       
    }
}