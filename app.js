class Robots {
    constructor(Name,HP,Attack,Accuracy){
    this.Name=Name,
    this.HP=HP,
    this.Attack=Attack,
    this.Accuracy=math.random()
}


Punch (Robot){
 let chancetoPunch = Math.random()
 if(this.Accuracy >= chancetoPunch){
     Robot.HP -= this.Attack;
     //I want to add sound effects for whenever the punch lands
     if(Robot.HP <= 0) {alert("You Lost round 1")} // 1 of the players lose
 }else{ //Robot misses the attack
 alert("You miss")//This is just a placeholder for now, I want to have the arms flail or something
}
}
}
