'use strict';

var StartButton = document.querySelector('.start-button');
var cardPokemon = document.querySelector('.card-pokemon');
var numberCheck = document.querySelectorAll('.number-check');
var ourNumber;
var fetchURL;
var valor4 = document.querySelector('.valor4');
var valor6 = document.querySelector('.valor6');
var valor8 = document.querySelector('.valor8');
var listPokemon = document.querySelector('.list-pokemon');
var pokeImg;
var cardImg;
var listItem;


function selectNumber(event) {

    var clickedNumber = event.currentTarget;
    console.log(clickedNumber);
    ourNumber = clickedNumber.getAttribute('data-number');
    console.log(ourNumber);
    fetchURL = 'https://raw.githubusercontent.com/Adalab/cards-data/master/' + ourNumber + '.json';
    console.log(fetchURL);
}

valor4.addEventListener('click', selectNumber);
valor6.addEventListener('click', selectNumber);
valor8.addEventListener('click', selectNumber);

function showCard() {
   listPokemon.innerHTML = '';
    fetch(fetchURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json[1].image);
           for (var i = 0; i < json.length; i++) { 
            listItem = document.createElement('li');
            pokeImg = document.createElement('img');
            cardImg = document.createElement('img');
          
            pokeImg.src = json[i].image;
            pokeImg.classList.add('pokemonImage');
            pokeImg.classList.add('hidden');
            cardImg.classList.add('adalab-image');
            listItem.classList.add('list-element');
            cardImg.src = 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB';
            listPokemon.appendChild(listItem);
            listItem.appendChild(pokeImg);
            listItem.appendChild(cardImg);
            cardImg.addEventListener('click', showPokemon);
           }
        }
        )
}

StartButton.addEventListener('click', showCard);

function showPokemon(event){
    var cardClicked = event.currentTarget;
    if ( pokeImg.classList.contains('hidden')){
        pokeImg.classList.remove('hidden');
    console.log(cardClicked);
    console.log(pokeImg);
  }
        else {pokeImg.classList.add('hidden');}
    }

