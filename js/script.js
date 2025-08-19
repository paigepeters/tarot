"use strict";

const deck = [
    "img/0ma.png",
    "img/1ma.png",
    "img/2ma.png",
    "img/3ma.png",
    "img/4ma.png",
    "img/5ma.png",
    "img/6ma.png",
    "img/7ma.png",
    "img/8ma.png",
    "img/9ma.png",
    "img/10ma.png",
    "img/11ma.png",
    "img/12ma.png",
    "img/13ma.png",
    "img/14ma.png",
    "img/15ma.png",
    "img/16ma.png",
    "img/17ma.png",
    "img/18ma.png",
    "img/19ma.png",
    "img/20ma.png",
    "img/21ma.png",
    "img/cups2.png",
    "img/cups3.png",
    "img/cups4.png",
    "img/cups5.png",
    "img/cups6.png",
    "img/cups7.png",
    "img/cups8.png",
    "img/cups9.png",
    "img/cups10.png",
    "img/cupsace.png",
    "img/cupsking.png",
    "img/cupsknight.png",
    "img/cupspage.png",
    "img/cupsqueen.png",
    "img/pen2.png",
    "img/pen3.png",
    "img/pen4.png",
    "img/pen5.png",
    "img/pen6.png",
    "img/pen7.png",
    "img/pen8.png",
    "img/pen9.png",
    "img/pen10.png",
    "img/penace.png",
    "img/penking.png",
    "img/penknight.png",
    "img/penpage.png",
    "img/penqueen.png",
    "img/swords2.png",
    "img/swords3.png",
    "img/swords4.png",
    "img/swords5.png",
    "img/swords6.png",
    "img/swords7.png",
    "img/swords8.png",
    "img/swords9.png",
    "img/swords10.png",
    "img/swordsace.png",
    "img/swordsking.png",
    "img/swordsknight.png",
    "img/swordspage.png",
    "img/swordsqueen.png",
    "img/wands2.png",
    "img/wands3.png",
    "img/wands4.png",
    "img/wands5.png",
    "img/wands6.png",
    "img/wands7.png",
    "img/wands8.png",
    "img/wands9.png",
    "img/wands10.png",
    "img/wandsace.png",
    "img/wandsking.png",
    "img/wandsknight.png",
    "img/wandspage.png",
    "img/wandsqueen.png",
];

let draw = function () {
let a = Math.floor(Math.random() * deck.length);
let cardOne = deck[a];

let b = Math.floor(Math.random() * deck.length);
let cardTwo = deck[b];

let c = Math.floor(Math.random() * deck.length);
let cardThree = deck[c];

while (a == c || b == a || b == c) {
    draw()
}

let imageOne = document.getElementById("cardOne");
let imageTwo = document.getElementById("cardTwo");
let imageThree = document.getElementById("cardThree");

imageOne.src = deck[a];
imageTwo.src = deck[b];
imageThree.src = deck[c];
}

let buttonPress = document.getElementById("drawCards");
    buttonPress.addEventListener("click", draw);