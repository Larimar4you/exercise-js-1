"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const request = new XMLHttpRequest();
request.open("GET", "meowfacts.herokuapp.com");
console.log(request);
