let p1Health;
let p2Health;

p1Attack = false;
p2Attack = false;
p1Heal = false;
p2Heal = false;

let turns;
let playerTurn;
let winner;

let p1TotalHealth = []; //Total health used by player1
let p2TotalHealth = []; //Total health used by player2
let p1TotalDamage = []; //Todal damage done by player1
let p2TotalDamage = []; //Total damage done by player2

let p1ToatalHealthAdded = 0; 
let p2ToatalHealthAdded = 0; 
let p1ToataldamageAdded = 0; 
let p2ToatalDamageAdded = 0;

min = 1;
max = 10;

var Rand = Math.random() * (max - min) + min;
Rand = parseInt(Rand)
Math.trunc(Rand);

vastus = Rand % 2;
console.log(vastus);

if(vastus == 1)
{
    playerTurn = 1
}
if(vastus == 0)
{
    playerTurn = 2
}

document.getElementById("#PlayerTurns").textContent = "player" + playerTurn + " turn";

function action(action) //Main function called bt html and player controller
{
    if(action == 1)
    {
        if(playerTurn == 1)
        {
            player1.damage();
            p1Attack = true;
        }
        if(playerTurn == 2)
        {
            player2.damage();
            p2Attack = true;
        }
    }
    if(action == 0)
    {
        if(playerTurn == 1)
        {
            player1.heal();
            p1Heal = true;
        }
        if(playerTurn == 2)
        {
            player2.heal();
            p2Heal = true;
        }
    }

    if(playerTurn == 1)
    {
        playerTurn = 2
    }
    if(playerTurn == 2)
    {
        playerTurn = 1
    }

    turns ++;

    if(turns == 2)
    {
        calculateMoves()
    }
}

function calculateMoves()
{
    if(p1Attack == true)
    {
        player1.damage();
    }
    if(p2Attack == true)
    {
        player2.damage();
    }
    if(p1Heal == true)
    {
        player1.heal();
    }
    if(p2Heal == true)
    {
        player2.heal();
    }

    document.getElementById("#PlayerHealth").textContent = "Player1 health: " + p1Health;
    document.getElementById("#EnemyHealth").textContent = "Player2 health: " + p2Health;

    log();

    if(p1Health == 0)
    {
        winner = "Player1";
        gameOver();
    }
    if(p2Health == 0)
    {
        winner = "Player2";
        gameOver();
    }
}

function log()
{
    console.log("----------");
    console.log("Player1 health: " + p1Health);
    console.log("Player2 health: " + p2Health);
    if (p1Attack == true)
    {
        console.log("Player1 atacc");
        p2TotalHealth.push(10);
        p1TotalDamage.push(10);
    }
    if (p1Heal == true)
    {
        console.log("Player1 heal");
    }
    if (p2Attack == true)
    {
        console.log("player2 atacc");
        p1TotalHealth.push(10);
        p2TotalDamage.push(10);
    }
    if (p2Heal == true)
    {
        console.log("Player2 heal");
    }
    console.log("----------");
}

function gameOver()
{
    p1TotalHealth.forEach(function(add){p1ToatalHealthAdded += add});
    p2TotalHealth.forEach(function(add){p2ToatalHealthAdded += add});
    p1TotalDamage.forEach(function(add){p1ToataldamageAdded += add});
    p2TotalDamage.forEach(function(add){p2ToatalDamageAdded += add});

    console.log("----------");
    console.log("The game was won by: " + winner)
    console.log("Player1 total health used: " + p1ToatalHealthAdded);
    console.log("Player2 total health used: " + p2ToatalHealthAdded);
    console.log("Player1 total damage given: " + p1ToataldamageAdded);
    console.log("Player2 total damage given: " + p2ToatalDamageAdded);
    console.log("----------");

    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("endScreen").style.display = "block";

    document.getElementById("GameWinner").innerHTML = "Winner: " + winner;
    document.getElementById("PlayerScoreHealth").innerHTML = "Player1 total health used: " + p1ToatalHealthAdded;
    document.getElementById("EnemyScoreHealth").innerHTML = "Player2 total health used: " + p2ToatalHealthAdded;
    document.getElementById("PlayerScoreDamage").innerHTML = "Player1 total damage given: " + p1ToataldamageAdded;
    document.getElementById("EnemyScoreDamage").innerHTML = "Player2 total damage given: " + p2ToatalDamageAdded;
}

function playAgain()
{
    p1Health;
    p2Health;

    p1Attack = false;
    p2Attack = false;
    p1Heal = false;
    p2Heal = false;

    turns = 0;
    playerTurn;
    winner = "mina";

    p1TotalHealth.length = 0;
    p2TotalHealth.length = 0;
    p1TotalDamage.length = 0;
    p2TotalDamage.length = 0;

    p1ToatalHealthAdded = 0; 
    p2ToatalHealthAdded = 0; 
    p1ToataldamageAdded = 0; 
    p2ToatalDamageAdded = 0;

    document.getElementById("#PlayerHealth").textContent = "Player1 health: " + p1Health;
    document.getElementById("#EnemyHealth").textContent = "Player2 health: " + p1Health;

    document.getElementById("endScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
}

player1 = {
    health: 100,

    damage: function()
    {
        this.health -= 10;
        p1Health = JSON.stringify(this.health)
    },

    heal: function()
    {
        this.health += 20;
        p1Health = JSON.stringify(this.health)
    }
}

player2 ={
    health: 100,

    damage: function()
    {
        this.health -= 10;
        p2Health = JSON.stringify(this.health)
    },

    heal: function()
    {
        this.health += 20;
        p2Health = JSON.stringify(this.health)
    }
}