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
      var playerCountref = await database.ref("playerCount").once("value")
      if(playerCountref.exists()){
        playerCount = playerCountref.val()
        player.getCount();
      }
      
      form = new Form()
      form.display();
    }
 
    
 }

 play(){
   form.hide()
   text("gameStart",120,100)
   Player.getplayerinfo()
   if(allplayer!==undefined){
     var displayposition  =130
     for(var plr in allplayer){
       if(plr === "player"+player.index){
         fill("red")
       }
       else{
         fill("black")

       }
       displayposition+= 20
       text(allplayer[plr].name+"  "+allplayer[plr].distance,120,displayposition)
     }
   }
   

 }
}
