class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.distance = 0;
    }
    
    getCount(){
     var playerCountRef = database.ref('playerCount')
    playerCountRef.on("value",(data)=>{
        playerCount = data.val();
    });
 }

    updateCount(count){
    database.ref('/').update({
        playerCount:count
    })
    }

    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({

        distance:this.distance,
        name:this.name
        })
    }

    static getplayerInfo(){
        var playerInfoRef = database.ref('players')
            playerInfoRef. on("value",(data)=>{

                allPlayers = data.val();
            })
    }
}