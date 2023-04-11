var choices = ["paper", "rock", "scissors"];
var i = Math.floor(Math.random() * 3);
var ComChoice = choices[i];
var UserPoints = 0;
var ComPoints = 0;

function score(){
    var score_div = document.getElementById("score").innerHTML = UserPoints + " - " + ComPoints;
}
setInterval(score, 50);

function convert(word){
    if(word === "paper") return '<i class="far fa-hand-paper"></i>';
    if(word === "rock") return '<i class="far fa-hand-rock"></i>';
    return '<i class="far fa-hand-scissors"></i>'
}
var rounds = [];
function game(UserChoice){
    var box = document.getElementById("challenge");
    box.style.display = "inline-flex";
    var userDiv = document.getElementById("YourObject");
    userDiv.innerHTML = convert(UserChoice);
    var comDiv = document.getElementById("ComObject");
    comDiv.innerHTML = convert(ComChoice);
    if(UserChoice === "paper" && ComChoice === "rock" || UserChoice === "rock" && ComChoice === "scissors" || UserChoice === "scissors" && ComChoice === "paper"){
        win(UserChoice);
    }
    else if(UserChoice === ComChoice){
        draw(UserChoice);
    }
    else{
        lose(UserChoice);
    }

    function continueGame(){
        i = Math.floor(Math.random() * 3);
        ComChoice = choices[i];
        box.style.display = "none";
    }
    setTimeout(continueGame, 2000);
	rounds.push({user: UserChoice, computer: ComChoice, result: result});
	var roundHistoryDiv = document.getElementById("roundHistory");
    roundHistoryDiv.innerHTML = ""; // clear the previous round history
    for (var i = 0; i < rounds.length; i++) {
        var round = rounds[i];
        var roundResult = round.result == "win" ? "You win!" :
                          round.result == "lose" ? "You lose..." :
                          "It's a draw.";
        roundHistoryDiv.innerHTML += "<div>" + round.user + " vs " + round.computer + " - " + roundResult + "</div>";
};
}
function win(bn){
    UserPoints++;
    document.getElementById("who").innerHTML = "You win!";
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("green");
    setTimeout(() => {
        bn.classList.add("bn");
        bn.classList.remove("green");
    }, 1200);

    if(UserPoints == 5){
        gameover("You have reached 5 Points win!");
    };
}

function draw(bn){
    document.getElementById("who").innerHTML = "It's a Draw.";
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("gray");
    setTimeout(() => {
        bn.classList.add("bn");
        bn.classList.remove("gray");
    }, 1200);
}

function lose(bn){
    ComPoints++;
    document.getElementById("who").innerHTML = "You lose...";
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("red");
    setTimeout(() => {
        bn.classList.add("bn");
        bn.classList.remove("red");
    }, 1200);

    if(ComPoints == 5){
        gameover("The Computer reached 5 Points You lose!");
    }
}

function gameover(message){
    alert(message);
	location.reload();
}
