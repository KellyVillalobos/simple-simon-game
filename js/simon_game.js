'use strict';


//variables I need
var playerArray = [];
var memoryArray = [];
// var playerCounter = 0;
// var arrayCounter = 0;
var running = false;
var matchingArrays = true;
// var levelCount = 1;
// var runMemory;

//2. start button
$('#start-button').click(function () {
    $('#start-button').removeClass('.btn btn-lg btn-dark');
    $('#start-button').addClass('.btn btn-lg btn-success');
    $('#start-button').text('GAME ON!');
    running = true;
    playerArray = [];
    memoryArray = [];
    // playerCounter = 0;
    // arrayCounter = 0;
    matchingArrays = true;
    // clearInterval(runMemory);
    newArray();
    // console.log(memoryArray);
    playback();
});


//this will only run once


//event functions I need
//1. colored button press function

// function coloredButton(id, color) {
//     this.id = id;
//     this.color = color;
// }
//
// var gre = new coloredButton(1, "gre");
// var red = new coloredButton(2, 'red');
// var yel = new coloredButton(3, 'yel');
// var blu = new coloredButton(4, 'blu');
var i = 0;
$('#red, #green, #yellow, #blue').click(function () {
    // console.log(this.id);
    playerArray.push(this.id);
    $(this).animate({'opacity': .3}, 250);
    $(this).animate({'opacity': 1}, 250);
    console.log(`player array is ${playerArray}`);
    console.log(`memory array is ${memoryArray}`);

    if (playerArray.toString() == memoryArray.toString()) {
        newArray();
        setTimeout(playback, 250);
        playerArray = [];
        i = 0;
    } else if (playerArray[i] == memoryArray[i]) {
        i++;
        console.log(playerArray);
        console.log(memoryArray);


    } else {
        alert('Wrong!! Game Over!!');   
        $('#start-button').text('Start Game');
        $('#start-button').removeClass('.btn btn-lg btn-success');
        $('#start-button').addClass('btn btn-lg btn-dark');
        i = 0


    }


});


// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop
function playback() {
    var count = 0;
    var max = memoryArray.length;
    var interval = 700; // interval time in milliseconds

    var intervalId = setInterval(function () {
        if (count >= max) {
            clearInterval(intervalId);
            console.log('All done');
        } else {
            $("#" + memoryArray[count]).animate({'opacity': .3}, 250);
            $("#" + memoryArray[count]).animate({'opacity': 1}, 250);
            count++;
            // arrayCounter++;
            console.log('Repeating this line ' + count);
        }
    }, interval);
    // console.log(count);
    // console.log(arrayCounter);
    // console.log(memoryArray);

}

//3. generate random color
function newArray() {
    var colorSwitch = Math.floor((Math.random() * 4) + 1);
    switch (colorSwitch) {
        case 1:
            memoryArray.push('green');
            console.log(`memory array here is ${memoryArray}`);
            break;
        case 2:
            memoryArray.push('red');
            console.log(`memory array here is ${memoryArray}`);
            break;
        case 3:
            memoryArray.push('yellow');
            console.log(`memory array here is ${memoryArray}`);
            break;
        case 4:
            memoryArray.push('blue');
            console.log(`memory array here is ${memoryArray}`);
            break;
    }


}

// model the problem /domain/process in natural language
//click start, simon moves
//simon move means the computer selects a box at random
//simon adds that move to its sequence of moves then
//lights up that box

//simon waits for a player to move a choice
// if a player chooses correctly for each sequence
//simon moves again

//if a player clicks a box, light up that box.




