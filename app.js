class Robots { //this is the overall object generator for the game, this will be used to create the human and AI robots
    constructor(Name,HP,Attack,Accuracy){
    this.Name=Name,
    this.HP=HP,              //These are all of the attributes for the robots
    this.Attack=Attack,     
    this.Accuracy=(Math.floor(Math.random() * 3) + 6) / 10 //I grabbed the random hit formula from the space battle game
}   //The gist is there are 5 rounds the first person to win 5 rounds wins the game

punchButton (robot){
 let chancetoPunch = Math.random()
 if(this.Accuracy >= chancetoPunch){//the robot lands the attack
     robot.HP -= this.Attack;
 }else{ //Robot misses the attack, I want to add sound effects for whenever the punch lands
 console.log("You miss")//This is just a placeholder for now, I want to have the arms flail or something
} 
}
}
// Punch (robot){
//  let chancetoPunch = Math.random()
//  if(this.Accuracy >= chancetoPunch){
//      robot.HP -= this.Attack;
//      //I want to add sound effects for whenever the punch lands
//      if(robot.HP <= 0) {alert("You Lost round 1")} // 1 of the players lose
//  }else{ //Robot misses the attack
//  console.log("You miss")//This is just a placeholder for now, I want to have the arms flail or something
// }
// }
// }    //Right here this is the old Punch function I decided to change it to make it more simple
// and for the function to strictly just punch. I also wanted to keep it here as a reference.


// const startGame1 = () =>{        at first I was going to do a loop and have
//     let round1WinArr =[];        each win add to an array but i think i figured out
//     for(let i = 0; i < 1; i++){  a different method
//         if 
//     }
// }

const humanWinArr = [];
const aiWinArr = [];




const Round1 = () => { //There will be 5 rounds, I'll start it simple by having a function for each round
    let playerRobot = new Robots ("PR1", 5, 1);
    let aiRobot = new Robots ("AIR1", 5, 1);
    let i = 0;
    let x = 0;
    const round1HumWinArr = [];
    const round1AiWinArr = [];

    if(playerRobot.HP <= 0){ //this is to start the fight, however I just realized I already have the same losing conditions in the punch function as well
        console.log("AI Player wins this round") // Ai wins round 1
    }if(aiRobot.HP <= 0){
        console.log("Human Player wins this round") // Human wins round 1
    }if(playerRobot.HP === 0){
        console.log("Round 1 is over") && i + 2
    }if(aiRobot.HP === 0){
        console.log("Round 1 is over") && x + 2
    }if(i > 1){ //I had a break statement here but the terminal kept saying it was illegal so i took it out for now
       round1HumWinArr.push(1) // so i decided to push 1 to the array to signify the end of round 1
    }if(x > 1){
        round1AiWinArr.push(1)
    }if(round1HumWinArr.length > 0){
        console.log("human player has 1 win") && humanWinArr.push(1)
    }if(round1AiWinArr.length > 0){
        console.log("ai player has 1 win") && aiWinArr.push(1)
    }
} 



// Ok so I know this Round1 code has a lot going on but I can explain lol. Before I get 
// started its like this because my knowledge is pretty rudimentary and I wanted a 
// way to track the wins of the human player and AI player. There are probably fancier ways
// to do it but this was the way I was able to figure out with my level of knowledge.
// Basically I created 2 arrays to track the total overall wins of the game. The goal
// is to be the first player to get 3 wins. Winning a round pushes 1 win into either
// the human or AI Array.


//After creating round 1, I went ahead and copy and pasted the other 4 rounds from round 1
// However I still have a long way to go. Because now I have to figure out how to code
// for whoever reaches 3 wins first

// I went ahead and commented out the rounds that I copy and pasted just to check and see if
// I can get 1 round to work.

// const Round2 = () => { 
//     let playerRobot = new Robots ("PR2", 5, 1);
//     let aiRobot = new Robots ("AIR2", 5, 1);
//     if(playerRobot.HP <= 0){ 
//         console.log("AI Player wins this round") 
//     }if(aiRobot.HP <= 0){
//         console.log("Human Player wins this round") 
//     }if(playerRobot.HP === 0 || aiRobot.HP === 0 ){
//         console.log("Round 2 is over")
//     }

// } 
// const Round3= () => { 
//     let playerRobot = new Robots ("PR3", 5, 1);
//     let aiRobot = new Robots ("AIR3", 5, 1);
//     if(playerRobot.HP <= 0){ 
//         console.log("AI Player wins this round") 
//     }if(aiRobot.HP <= 0){
//         console.log("Human Player wins this round") 
//     }if(playerRobot.HP === 0 || aiRobot.HP === 0 ){
//         console.log("Round 3 is over")
//     }

// } 

// const Round4= () => { 
//     let playerRobot = new Robots ("PR4", 5, 1);
//     let aiRobot = new Robots ("AIR4", 5, 1);
//     if(playerRobot.HP <= 0){ 
//         console.log("AI Player wins this round") 
//     }if(aiRobot.HP <= 0){
//         console.log("Human Player wins this round") 
//     }if(playerRobot.HP === 0 || aiRobot.HP === 0 ){
//         console.log("Round 4 is over")
//     }

// } 

// const Round5= () => { 
//     let playerRobot = new Robots ("PR5", 5, 1);
//     let aiRobot = new Robots ("AIR5", 5, 1);
//     if(playerRobot.HP <= 0){ 
//         console.log("AI Player wins this round") 
//     }if(aiRobot.HP <= 0){
//         console.log("Human Player wins this round") 
//     }if(playerRobot.HP === 0 || aiRobot.HP === 0 ){
//         console.log("Round 5 is over")
//     }

// } 

// let robot1 = new Robots ("Jimmy",5,1)
// let robot2 = new Robots ("Tommy",5,1)

// robot1.Punch(robot2)
// robot2.Punch(robot1)
// robot1.Punch(robot2)
// robot2.Punch(robot1)
// robot1.Punch(robot2)
// robot2.Punch(robot1)
// robot1.Punch(robot2)
// console.log(robot2.HP)
// console.log(robot1.HP)