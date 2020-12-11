//read gameState
//update gameState
//start, gameOver, wait (responsibilities)
//display(greet, cars, win, leaderboard)
class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState');
        //going to location of gameState in database
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        });
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}