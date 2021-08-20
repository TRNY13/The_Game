// I figured out the method for obtaining user input through a submit button from a youtube video.
//document refers to the dom(which the representation of the html document/browser)
//getElementById(getElementById is a method as well) is retrieving the id of the button which we set to MyButton
//buttons have a property of onclick
//the getElementById inside the function is getting the "myText" id from the HTML
//next I had to access the value of myText, so that is where .value comes in.
//I couldnt get regular buttons to work and I didnt want to use prompts so I decided to 
// assign user input to the userInput variable via the function linked to document.getelement.
// once I got that I assigned the accuracies of the human and robots chances to punch
// afterwards I gave the human and robot 10 hp, landing a punch subtracts 1 hp.
// Once either the human or ai reaches 0 hp the game is over and that is where
// the code break comes in.

// creating the variable for bottom row, and assinging it to a JS variable
let bottomRow = document.getElementById('bottomRow');
let leftInfoDiv = document.getElementById('leftInfoDiv');
// cool thing I found out, you can use this bottomRow.innerHTML to give real time prompts, kind of like a console.log

// function startFight(){
// }
// startFight() I tried to make a function to start the fight with the button I have, but as usual it doesnt work lol


// I put the HP variables outside of the function so the HP doesnt reset each time
let humanHP = 10;
let aiHP = 10;


// This whole document is to obtain the user input to start the game
document.getElementById("myButton").onclick = function () {
    let userInput = document.getElementById("myText").value; //The function then takes the text the user puts in and assigns it to the userInput variable
    let humanChancetoPunch = .6; //Both the Users and AI's chance to attack are set to .6,
    let robotChancetoPunch = .6; //to give both a slightly higher chance to land a punch
    if (humanHP === 0) { //These first 2 checks are to check to make sure neither human or robot are out of hp
        leftInfoDiv.innerHTML = "You lost the game! The AI knocked you out!", "Click to Play Again!";
        console.log("You lost the game!The AI knocked you out!", "Click to Play Again!")
    } else if (aiHP === 0) {
        leftInfoDiv.innerHTML = "You knocked the AI out & won the game!", "Click to Play Again!"
        console.log("You knocked the AI out & won the game!", "Click to Play Again!")
    } else { //this else statement starts the fighting for both characters
        // users turn
        if (userInput == "Punch!" && humanChancetoPunch > Math.random()) {
            aiHP--; //this decrements the Ai's hp if they get hit
            leftInfoDiv.innerHTML = "You landed a Punch!!!", "AIHealth: " + aiHP
            console.log("You landed a Punch!!!", "AIHealth: " + aiHP)
        } else {
            leftInfoDiv.innerHTML = "You missed!"
            console.log("You missed!");
        }
        //ais turn
        if (userInput == "Punch!" && robotChancetoPunch > Math.random()) {
            humanHP--; //this decrements the Humans Hp if they get hit
            leftInfoDiv.innerHTML = "The AI punched you!", "HumanHealth: " + humanHP
            console.log("The AI punched you!", "HumanHealth: " + humanHP);
        } else {
            leftInfoDiv.innerHTML = "AI missed!"
            console.log("AI missed!")
        }

    }
}


// Can't get this button to work for now
// i tried to create this function to reset
// the hp values back to 0 to restart the game
// i tried to link everything but it still would not work

// const playAgain = () => {
//     if (humanHP < 10 || aiHP < 10) {
//         humanHP === 10;
//         aiHP === 10;
//     }
// }

// playAgain();

// const playAgainBtn = document.getElementById("playAgainBtn")
// playAgainBtn.addEventListener("click",playAgain)



//     element.addEventListener('click', function() {
//         if(humanHP < 10 || aiHP < 10 ){
//             humanHP === 10;
//             aiHP === 10;
//         }
//     }
// }



 // i plan to add an addEventListener to restart the game once one of the players hits 0









    //     alert("You Lose!!")
    //     //break; the console kept saying it was illegal so i commented it out for now
    //     console.log("You lost the game! & The Ai rocked you!")
    //     return;
    // }if(aiHP === 0){
    //      //break; the console kept saying it was illegal so i commented it out for now
    //      console.log("You rocked the Ai & won the game!")
    //     return;









// All the notes below are me trying a previous route in the projoct of having a robots class
// and having each fight for 5 rounds. Unfortunately, I couldnt get my buttons to work, and figure
// out the logic in time to present on Friday. I'm writing this note at 11:40pm on Wednesday, 
// I ended up having to pivot to a much simpler code structure because at this point I still have
// not worked on any of my html or css. However I will continue working on this project and eventually
// I will figure out the logic for my first method in the game.

// class Robots { //this is the overall object generator for the game, this will be used to create the human and AI robots
//     constructor(Name,HP,Attack,Accuracy){
//     this.Name=Name,
//     this.HP=HP,              //These are all of the attributes for the robots
//     this.Attack=Attack,     
//     this.Accuracy=Accuracy //(Math.floor(Math.random() * 3) + 6) / 10 //I grabbed the random hit formula from the space battle game
// }   //The gist is there are 5 rounds the first person to win 5 rounds wins the game
// setHP(){
//     this.HP = 5
// }
//  punch = (robot) => {
//  let chancetoPunch = Math.random()
//  if(this.Accuracy > chancetoPunch){//the robot lands the attack
//      robot.HP -= this.Attack;
//  }else{ //Robot misses the attack, I want to add sound effects for whenever the punch lands
//  console.log("You miss")//This is just a placeholder for now, I want to have the arms flail or something
// } 
// }
// // }

// // const (variable for your button) = document.getElementById("id of your button in html");  
// //  -----when calling/using function ----------
// //   variable for you button.addEventListener("click", function () { things you want to run with your function});

// // const startround1 = getElementById(startround1);
// // round1.addEventListener("click", function(){

//     // .addEventListener("click", function(){
//     //     computerTurn()}

// //  const round1 = document.querySelector 

// // const humanWinArr = [];
// // const aiWinArr = [];

// // const playerRobot = new Robots ("PR1", 5, 1,.6);
// // const aiRobot = new Robots ("AIR1", 5, 1,.6);

// // let i = 0;
// // let x = 0;
// // let round = 1;
// // const round1HumWinArr = [];
// // const round1AiWinArr = [];


// //round1 = attack
// const round1= () => { //There will be 5 rounds, I'll start it simple by having a function for each round
//     if(playerRobot.HP > 0){
//         console.log("let the fight begin")
//     }if(aiRobot.HP > 0){
//         playerRobot.punch(aiRobot)
//      // if ai is still alive have them punch next
//         }else{//player is alive but the ai is dead, human wins this round 
//           if(round === 5){
//               round = 1; 
//               playerRobot.setHP();
//               aiRobot.setHP();//if players wins > airobots, add 1 to player wins, if else add 1 win to ai wins
//           }  
//         }
//     }else{ //player has no more health  
//     }
//     if(playerRobot.HP <= 0){ //this is to start the fight, however I just realized I already have the same losing conditions in the punch function as well
//         console.log("AI Player wins this round") // Ai wins round 1
//     }if(aiRobot.HP <= 0){
//         console.log("Human Player wins this round") // Human wins round 1
//     }if(playerRobot.HP === 0){
//         console.log("Round 1 is over") && i + 2
//     }if(aiRobot.HP === 0){
//         console.log("Round 1 is over") && x + 2
//     }if(i > 1){ //I had a break statement here but the terminal kept saying it was illegal so i took it out for now
//        round1HumWinArr.push("one") // so i decided to push 1 to the array to signify the end of round 1
//     }if(x > 1){
//         round1AiWinArr.push("one")
//     }if(round1HumWinArr.length > 0){
//         console.log("human player has 1 win") && humanWinArr.push("one win")
//     }if(round1AiWinArr.length > 0){
//         console.log("ai player has 1 win") && aiWinArr.push("one win")
//     }
// } 

// playerRobot.punch(aiRobot)

// console.log(aiRobot.HP)

// const round1Button = document.getElementById("round1Button");                  
// console.log(round1Button)
// round1Button.addEventListener("click",round1) //don't do

//once user clicks punch button it will start

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

// All of these comments down here are old scratch notes, I put them down here to get them out of the way.

//query is a method/function, call html tags with parenthesis. ;  .punch if class, #punch if id
// This was the method Teo showed me for getting the punch button to work
// I'm going to comment it out for the time being and this method I picked up from youtube
// const punch = document.querySelector("#punch");
// console.log(punch)

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
