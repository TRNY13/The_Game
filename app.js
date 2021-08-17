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






const Round1 = () => { //There will be 5 rounds, I'll start it simple by having a function for each round
    let playerRobot = new Robots ("PR1", 5, 1);
    let aiRobot = new Robots ("AIR1", 5, 1);
    if(playerRobot.HP <= 0){ //this is to start the fight, however I just realized I already have the same losing conditions in the punch function as well
        console.log("AI Player wins this round") // Ai wins round 1
    }if(aiRobot.HP <= 0){
        console.log("Human Player wins this round") // Human wins round 1
    }if(playerRobot.HP === 0 || aiRobot.HP === 0 ){
        console.log("Round 1 is over")
    }//I had a break statement here but the terminal kept saying it was illegal so i took it out for now

} 

//After creating round 1, I went ahead and copy and pasted the other 4 rounds from round 1
// However I still have a long way to go. Because now I have to figure out how to code
// for whoever reaches 3 wins first


const Round2 = () => { 
    let playerRobot = new Robots ("PR2", 5, 1);
    let aiRobot = new Robots ("AIR2", 5, 1);
    if(playerRobot.HP <= 0){ 
        console.log("AI Player wins this round") 
    }if(aiRobot.HP <= 0){
        console.log("Human Player wins this round") 
    }if(playerRobot.HP === 0 || aiRobot.HP === 0 ){
        console.log("Round 2 is over")
    }

} 
const Round3= () => { 
    let playerRobot = new Robots ("PR3", 5, 1);
    let aiRobot = new Robots ("AIR3", 5, 1);
    if(playerRobot.HP <= 0){ 
        console.log("AI Player wins this round") 
    }if(aiRobot.HP <= 0){
        console.log("Human Player wins this round") 
    }if(playerRobot.HP === 0 || aiRobot.HP === 0 ){
        console.log("Round 3 is over")
    }

} 

const Round4= () => { 
    let playerRobot = new Robots ("PR4", 5, 1);
    let aiRobot = new Robots ("AIR4", 5, 1);
    if(playerRobot.HP <= 0){ 
        console.log("AI Player wins this round") 
    }if(aiRobot.HP <= 0){
        console.log("Human Player wins this round") 
    }if(playerRobot.HP === 0 || aiRobot.HP === 0 ){
        console.log("Round 4 is over")
    }

} 

const Round5= () => { 
    let playerRobot = new Robots ("PR5", 5, 1);
    let aiRobot = new Robots ("AIR5", 5, 1);
    if(playerRobot.HP <= 0){ 
        console.log("AI Player wins this round") 
    }if(aiRobot.HP <= 0){
        console.log("Human Player wins this round") 
    }if(playerRobot.HP === 0 || aiRobot.HP === 0 ){
        console.log("Round 5 is over")
    }

} 

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