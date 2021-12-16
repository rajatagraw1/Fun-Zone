var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

// to start the game
$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level "+ level);
        nextSequence();
        started = true;
    }
}); 

// function to restart
function restart() {
    gamePattern = [];
    started = false;
    level = 0;
}

// When game starts, generate a sequence
function nextSequence() {
       
    level++;
    $("#level-title").text("Level "+ level);

    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random()*4);
    console.log(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
 
    gamePattern.push(randomChosenColour);
    // play a sound for game sequence
    playSound(randomChosenColour);
    // flash the button of sequence
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
}

// to play, user will click any button 
// which will show animation and play a sound
// further, it increases the level and display it and then checks whether pattern is matching with computer
$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    console.log(userClickedPattern, gamePattern);
    animatePress(userChosenColour);
    // level++;
    // $("#level-title").text("Level "+ level);
    checkAnswer(userClickedPattern.length -1);
});


// fuction to play a sound
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// function to add animation
function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed");
    setTimeout(function () {
        $("#"+currentColour).removeClass("pressed");
    },100);
}

// function to check the pattern
function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){
        console.log("yes");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            },1000);
        }
    }
    // for game over
    else{
        $("body").addClass("game-over");
        var wrong = new Audio("sounds/" + "wrong" + ".mp3");
        wrong.play();
        setTimeout(function () {
            $("body").removeClass("game-over")
        },200);

        // to restart
        $("#level-title").text("Game Over, Press Any Key to Restart");
        // started = false;
        restart();
        console.log("no");
    }
}
