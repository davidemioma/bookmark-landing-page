"use strict";
let display = document.querySelector(".modal");
let toggler = document.querySelector(".nav_toggler");
let close = document.querySelector(".close_modal");
let showOne = document.querySelector(".bookmark");
let showTwo = document.querySelector(".searching");
let showThree = document.querySelector(".sharing");
let artOne = document.querySelector(".article1");
let artTwo = document.querySelector(".article2");
let artThree = document.querySelector(".article3");
let lineOne = document.querySelector(".line1");
let lineTwo = document.querySelector(".line2");
let lineThree = document.querySelector(".line3");
let contactBtn = document.querySelector(".contact_btn");
let hImg = document.querySelector(".h_img");
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible_expanded");
  })
);

toggler.addEventListener("click", function () {
  display.classList.remove("hidden");
  hImg.classList.add("hidden");
});

close.addEventListener("click", function () {
  display.classList.add("hidden");
  hImg.classList.remove("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !display.classList.contains("hidden")) {
    display.classList.add("hidden");
    hImg.classList.remove("hidden");
  }
});

showOne.addEventListener("click", function () {
  artOne.classList.remove("hid");
  artTwo.classList.add("hid");
  artThree.classList.add("hid");
  lineOne.classList.remove("hidden");
  lineTwo.classList.add("hidden");
  lineThree.classList.add("hidden");
});

showTwo.addEventListener("click", function () {
  artTwo.classList.remove("hid");
  artOne.classList.add("hid");
  artThree.classList.add("hid");
  lineOne.classList.add("hidden");
  lineTwo.classList.remove("hidden");
  lineThree.classList.add("hidden");
});

showThree.addEventListener("click", function () {
  artOne.classList.add("hid");
  artTwo.classList.add("hid");
  artThree.classList.remove("hid");
  lineOne.classList.add("hidden");
  lineTwo.classList.add("hidden");
  lineThree.classList.remove("hidden");
});

function clearText() {
  let email = document.getElementById("email").value;
  let invalid = document.querySelector(".invalid");
  let errorMessage = document.querySelector(".error");
  let text = document.querySelector(".text");
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email === "") {
    invalid.classList.add("hidden");
    errorMessage.classList.add("hidden");
  }
}

contactBtn.addEventListener("click", function () {
  let email = document.getElementById("email").value;
  let invalid = document.querySelector(".invalid");
  let errorMessage = document.querySelector(".error");
  let text = document.querySelector(".text");
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email === "") {
    invalid.classList.remove("hidden");
    errorMessage.classList.remove("hidden");
    text.innerHTML = "Enter your email address";
  }

  if (email.match(pattern)) {
    invalid.classList.add("hidden");
    errorMessage.classList.add("hidden");
  }

  if (!email.match(pattern)) {
    invalid.classList.remove("hidden");
    errorMessage.classList.remove("hidden");
  }
});
