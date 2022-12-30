"use strict";

//**Global variables */
let word = "";
let counter = 0;
let space = "";

//**Functions */
function changeImage() {
  if (counter == 14) {
    setTimeout(function () {
      let cardFront = document.getElementById("front");
      let cardBack = document.getElementById("back");

      cardFront.className += " card__side--front-effect";
      cardBack.className += " card__side--back-effect";
    }, 1000);
  }
}

function winGame() {
  if (counter == 22) {
    setTimeout(function () {
      console.log("You win!");
      popup.style.opacity = "1";
      popup.style.visibility = "visible";
      popupContent.style.opacity = "1";
      popupContent.style.transform = "translate(-50%, -50%) scale(1)";
    }, 500);
  }
}

const chooseWord = function () {
  console.log("First choose a word");
};

const incorrect = function () {
  console.log("Incorrect");
};

//**************************************************************************/

//**Popup */
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");
const popupClose = document.getElementById("popup-close");

popupClose.addEventListener("click", function () {
  popup.style.opacity = "0";
  popup.style.visibility = "hidden";
  popupContent.style.opacity = "0";
  popupContent.style.transform = "none";

  setTimeout(function () {
    window.location.reload();
  }, 500);
});

//**Words first image */
const head = document.getElementById("head");
const mouth = document.getElementById("mouth");
const arm = document.getElementById("arm");
const waist = document.getElementById("waist");
const neck = document.getElementById("neck");
const hand = document.getElementById("hand");
const nose = document.getElementById("nose");
const eye = document.getElementById("eye");
const navel = document.getElementById("navel");
const chest = document.getElementById("chest");
const penis = document.getElementById("penis");
const foot = document.getElementById("foot");
const leg = document.getElementById("leg");
const vagina = document.getElementById("vagina");
const backWaist = document.getElementById("backWaist");
const backWaist2 = document.getElementById("backWaist-2");
const back = document.getElementById("hBack");
const back2 = document.getElementById("hBack-2");
const buttocks = document.getElementById("buttocks");
const buttocks2 = document.getElementById("buttocks-2");
const anus = document.getElementById("anus");
const anus2 = document.getElementById("anus-2");

//**Empty spaces */
const space1 = document.getElementById("space-1");
const space2 = document.getElementById("space-2");
const space3 = document.getElementById("space-3");
const space4 = document.getElementById("space-4");
const space5 = document.getElementById("space-5");
const space6 = document.getElementById("space-6");
const space7 = document.getElementById("space-7");
const space8 = document.getElementById("space-8");
const space9 = document.getElementById("space-9");
const space10 = document.getElementById("space-10");
const space11 = document.getElementById("space-11");
const space12 = document.getElementById("space-12");
const space13 = document.getElementById("space-13");
const space14 = document.getElementById("space-14");
const space15 = document.getElementById("space-15");
const space16 = document.getElementById("space-16");
const space17 = document.getElementById("space-17");
const space18 = document.getElementById("space-18");
const space19 = document.getElementById("space-19");
const space20 = document.getElementById("space-20");
const space21 = document.getElementById("space-21");
const space22 = document.getElementById("space-22");

//**************************************************************************/
nose.addEventListener("click", function () {
  word = "nose";
  console.log(word);
});

eye.addEventListener("click", function () {
  word = "eye";
  console.log(word);
});

neck.addEventListener("click", function () {
  word = "neck";
  console.log(word);
});

chest.addEventListener("click", function () {
  word = "chest";
  console.log(word);
});

hand.addEventListener("click", function () {
  word = "hand";
  console.log(word);
});

vagina.addEventListener("click", function () {
  word = "vagina";
  console.log(word);
});

foot.addEventListener("click", function () {
  word = "foot";
  console.log(word);
});

head.addEventListener("click", function () {
  word = "head";
  console.log(word);
});

mouth.addEventListener("click", function () {
  word = "mouth";
  console.log(word);
});

arm.addEventListener("click", function () {
  word = "arm";
  console.log(word);
});

navel.addEventListener("click", function () {
  word = "navel";
  console.log(word);
});

waist.addEventListener("click", function () {
  word = "waist";
  console.log(word);
});

penis.addEventListener("click", function () {
  word = "penis";
  console.log(word);
});

leg.addEventListener("click", function () {
  word = "leg";
  console.log(word);
});

backWaist.addEventListener("click", function () {
  word = "backWaist";
  console.log(word);
});

backWaist2.addEventListener("click", function () {
  word = "backWaist";
  console.log(word);
});

back.addEventListener("click", function () {
  word = "back";
  console.log(word);
});

back2.addEventListener("click", function () {
  word = "back";
  console.log(word);
});

anus.addEventListener("click", function () {
  word = "anus";
  console.log(word);
});

anus2.addEventListener("click", function () {
  word = "anus";
  console.log(word);
});

buttocks.addEventListener("click", function () {
  word = "buttocks";
  console.log(word);
});

buttocks2.addEventListener("click", function () {
  word = "buttocks";
  console.log(word);
});

//**************************************************************************/

space1.addEventListener("click", function () {
  if (word === "") {
    chooseWord();
  } else if (word == "nose") {
    nose.style.top = "24.8rem";
    nose.style.left = "8.04rem";
    nose.style.color = "#fff";
    space1.style.backgroundColor = "#0abde3";

    counter = counter + 1;
    word = "";
    space = "";

    changeImage();
  } else {
    incorrect();
    space1.style.backgroundColor = "red";
    setTimeout(function () {
      space1.style.backgroundColor = "#fff";
    }, 450);
  }
});

space2.addEventListener("click", function () {
  if (word === "") {
    chooseWord();
  } else if (word === "eye") {
    eye.style.top = "25.2rem";
    eye.style.left = "39.7rem";
    space2.style.backgroundColor = "#0abde3";

    counter = counter + 1;
    word = "";
    space = "";

    changeImage();
  } else {
    incorrect();
    space2.style.backgroundColor = "red";
    setTimeout(function () {
      space2.style.backgroundColor = "white";
    }, 450);
  }
});

space3.addEventListener("click", function () {
  if (word === "") {
    chooseWord();
  } else if (word === "neck") {
    neck.style.top = "35.4rem";
    neck.style.left = "12.3rem";
    space3.style.backgroundColor = "#0abde3";

    counter = counter + 1;
    word = "";
    space = "";

    changeImage();
  } else {
    incorrect();
    space3.style.backgroundColor = "red";
    setTimeout(function () {
      space3.style.backgroundColor = "white";
    }, 450);
  }
});

space4.addEventListener("click", function () {
  if (word === "") {
    chooseWord();
  } else if (word === "chest") {
    chest.style.top = "34.2rem";
    chest.style.left = "35.7rem";
    space4.style.backgroundColor = "#0abde3";

    counter = counter + 1;
    word = "";
    space = "";

    changeImage();
  } else {
    incorrect();
    space4.style.backgroundColor = "red";
    setTimeout(function () {
      space4.style.backgroundColor = "white";
    }, 450);
  }
});

space5.addEventListener("click", function () {
  if (word === "") {
    chooseWord();
  } else if (word === "hand") {
    hand.style.top = "46.1rem";
    hand.style.left = "7.8rem";
    space5.style.backgroundColor = "#0abde3";

    counter = counter + 1;
    word = "";
    space = "";

    changeImage();
  } else {
    incorrect();
    space5.style.backgroundColor = "red";
    setTimeout(function () {
      space5.style.backgroundColor = "white";
    }, 450);
  }
});

space6.addEventListener("click", function () {
  if (word === "") {
    chooseWord();
  } else if (word === "vagina") {
    vagina.style.top = "48.2rem";
    vagina.style.left = "33.8rem";
    space6.style.backgroundColor = "#0abde3";

    counter = counter + 1;
    word = "";
    space = "";

    changeImage();
  } else {
    incorrect();
    space6.style.backgroundColor = "red";
    setTimeout(function () {
      space6.style.backgroundColor = "white";
    }, 450);
  }
});

space7.addEventListener("click", function () {
  if (word === "") {
    chooseWord();
  } else if (word === "foot") {
    foot.style.top = "51.8rem";
    foot.style.left = "10rem";
    space7.style.backgroundColor = "#0abde3";

    counter = counter + 1;
    word = "";
    space = "";

    changeImage();
  } else {
    incorrect();
    space7.style.backgroundColor = "red";
    setTimeout(function () {
      space7.style.backgroundColor = "white";
    }, 450);
  }
});

space8.addEventListener("click", function () {
  if (word === "") {
    chooseWord();
  } else if (word === "head") {
    head.style.top = "24.7rem";
    head.style.left = "109.4rem";
    space8.style.backgroundColor = "#0abde3";

    counter = counter + 1;
    word = "";
    space = "";

    changeImage();
  } else {
    incorrect();
    space8.style.backgroundColor = "red";
    setTimeout(function () {
      space8.style.backgroundColor = "white";
    }, 450);
  }
});

space9.addEventListener("click", function () {
  if (word === "") {
    chooseWord();
  } else if (word === "mouth") {
    mouth.style.top = "27rem";
    mouth.style.left = "81.5rem";
    space9.style.backgroundColor = "#0abde3";

    counter = counter + 1;
    word = "";
    space = "";

    changeImage();
  } else {
    incorrect();
    space9.style.backgroundColor = "red";
    setTimeout(function () {
      space9.style.backgroundColor = "white";
    }, 450);
  }
});

space10.addEventListener("click", function () {
  if (word === "") {
    chooseWord();
  } else if (word === "arm") {
    arm.style.top = "30.8rem";
    arm.style.left = "109.8rem";
    space10.style.backgroundColor = "#0abde3";

    counter = counter + 1;
    word = "";
    space = "";

    changeImage();
  } else {
    incorrect();
    space10.style.backgroundColor = "red";
    setTimeout(function () {
      space10.style.backgroundColor = "white";
    }, 450);
  }
});

space11.addEventListener("click", function () {
  if (word === "") {
    chooseWord();
  } else if (word === "navel") {
    navel.style.top = "35.8rem";
    navel.style.left = "78.7rem";
    space11.style.backgroundColor = "#0abde3";

    counter = counter + 1;
    word = "";
    space = "";

    changeImage();
  } else {
    incorrect();
    space11.style.backgroundColor = "red";
    setTimeout(function () {
      space11.style.backgroundColor = "white";
    }, 450);
  }
});

space12.addEventListener("click", function () {
  if (word === "") {
    chooseWord();
  } else if (word === "waist") {
    waist.style.top = "38.6rem";
    waist.style.left = "108.2rem";
    space12.style.backgroundColor = "#0abde3";

    counter = counter + 1;
    word = "";
    space = "";

    changeImage();
  } else {
    incorrect();
    space12.style.backgroundColor = "red";
    setTimeout(function () {
      space12.style.backgroundColor = "white";
    }, 450);
  }
});

space13.addEventListener("click", function () {
  if (word === "") {
    chooseWord();
  } else if (word === "penis") {
    penis.style.top = "47.2rem";
    penis.style.left = "83.1rem";
    space13.style.backgroundColor = "#0abde3";

    counter = counter + 1;
    word = "";
    space = "";

    changeImage();
  } else {
    incorrect();
    space13.style.backgroundColor = "red";
    setTimeout(function () {
      space13.style.backgroundColor = "white";
    }, 450);
  }
});

space14.addEventListener("click", function () {
  if (word === "") {
    chooseWord();
  } else if (word === "leg") {
    leg.style.top = "49.7rem";
    leg.style.left = "105.6rem";
    space14.style.backgroundColor = "#0abde3";

    counter = counter + 1;
    word = "";
    space = "";

    changeImage();
  } else {
    incorrect();
    space14.style.backgroundColor = "red";
    setTimeout(function () {
      space14.style.backgroundColor = "white";
    }, 450);
  }
});

space17.addEventListener("click", function () {
  space = "space-17";
  console.log(space);
  con1719(space);
});

space19.addEventListener("click", function () {
  space = "space-19";
  console.log(space);
  con1719(space);
});

space16.addEventListener("click", function () {
  space = "space-16";
  console.log(space);
  con1621(space);
});

space21.addEventListener("click", function () {
  space = "space-21";
  console.log(space);
  con1621(space);
});

space15.addEventListener("click", function () {
  space = "space-15";
  console.log(space);
  con1520(space);
});

space20.addEventListener("click", function () {
  space = "space-20";
  console.log(space);
  con1520(space);
});

space18.addEventListener("click", function () {
  space = "space-18";
  console.log(space);
  con1822(space);
});

space22.addEventListener("click", function () {
  space = "space-22";
  console.log(space);
  con1822(space);
});

const con1719 = function (value) {
  if (value == "space-17") {
    moveWaist();
  } else if (value == "space-19") {
    moveWaist2();
  } else {
    console.log("Error");
  }
};

const con1621 = function (value) {
  if (value == "space-16") {
    moveanus();
  } else if (value == "space-21") {
    moveanus2();
  } else {
    console.log("Error");
  }
};

const con1520 = function (value) {
  if (value == "space-15") {
    moveBack();
  } else if (value == "space-20") {
    moveBack2();
  } else {
    console.log("Error");
  }
};

const con1822 = function (value) {
  if (value == "space-18") {
    moveButtocks();
  } else if (value == "space-22") {
    moveButtocks2();
  } else {
    console.log("Error");
  }
};

//**************************************************************************/

const moveWaist = function () {
  if (word === "") {
    chooseWord();
  } else if (word === "backWaist") {
    backWaist.style.top = "41.2rem";
    backWaist.style.left = "40.3rem";
    space17.style.backgroundColor = "#0abde3";

    backWaist2.classList.remove("hide");

    word = "";
    counter = counter + 1;

    winGame();
  } else {
    incorrect();
    space17.style.backgroundColor = "red";
    setTimeout(function () {
      space17.style.backgroundColor = "white";
    }, 450);
  }
};

const moveWaist2 = function () {
  if (word === "") {
    chooseWord();
  } else if (word === "backWaist") {
    backWaist2.classList.remove("hide");

    setTimeout(function () {
      backWaist2.style.top = "34.2rem";
      backWaist2.style.left = "108rem";
      space19.style.backgroundColor = "#0abde3";
    }, 260);

    counter = counter + 1;
    word = "";

    winGame();
  } else {
    incorrect();
    space19.style.backgroundColor = "red";
    setTimeout(function () {
      space19.style.backgroundColor = "white";
    }, 450);
  }
};

const moveanus = function () {
  if (word === "") {
    chooseWord();
  } else if (word === "anus") {
    anus.style.top = "45.5rem";
    anus.style.left = "14.3rem";
    space16.style.backgroundColor = "#0abde3";

    word = "";
    counter = counter + 1;

    anus2.classList.remove("hide");

    winGame();
  } else {
    incorrect();
    space16.style.backgroundColor = "red";
    setTimeout(function () {
      space16.style.backgroundColor = "white";
    }, 450);
  }
};

const moveanus2 = function () {
  if (word === "") {
    chooseWord();
  } else if (word === "anus") {
    anus2.classList.remove("hide");

    setTimeout(function () {
      anus2.style.top = "48rem";
      anus2.style.left = "84rem";
      space21.style.backgroundColor = "#0abde3";
    }, 260);

    word = "";
    counter = counter + 1;

    winGame();
  } else {
    incorrect();
    space21.style.backgroundColor = "red";
    setTimeout(function () {
      space21.style.backgroundColor = "white";
    }, 450);
  }
};

const moveBack = function () {
  if (word === "") {
    chooseWord();
  } else if (word === "back") {
    back2.classList.remove("hide");

    back.style.top = "37rem";
    back.style.left = "13rem";

    space15.style.backgroundColor = "#0abde3";

    word = "";
    counter = counter + 1;

    winGame();
  } else {
    incorrect();
    space15.style.backgroundColor = "red";
    setTimeout(function () {
      space15.style.backgroundColor = "white";
    }, 450);
  }
};

const moveBack2 = function () {
  if (word === "") {
    chooseWord();
  } else if (word === "back") {
    back2.classList.remove("hide");

    setTimeout(function () {
      back2.style.top = "38.8rem";
      back2.style.left = "82.2rem";
      space20.style.backgroundColor = "#0abde3";
    }, 260);

    word = "";
    counter = counter + 1;

    winGame();
  } else {
    incorrect();
    space20.style.backgroundColor = "red";
    setTimeout(function () {
      space20.style.backgroundColor = "white";
    }, 450);
  }
};

const moveButtocks = function () {
  if (word === "") {
    chooseWord();
  } else if (word === "buttocks") {
    buttocks2.classList.remove("hide");

    buttocks.style.top = "47.2rem";
    buttocks.style.left = "37.8rem";
    space18.style.backgroundColor = "#0abde3";

    word = "";
    counter = counter + 1;
    winGame();
  } else {
    incorrect();
    space18.style.backgroundColor = "red";
    setTimeout(function () {
      space18.style.backgroundColor = "white";
    }, 450);
  }
};

const moveButtocks2 = function () {
  if (word === "") {
    chooseWord();
  } else if (word === "buttocks") {
    buttocks2.classList.remove("hide");

    setTimeout(function () {
      buttocks2.style.top = "46.2rem";
      buttocks2.style.left = "106.4rem";
      space22.style.backgroundColor = "#0abde3";
    }, 260);

    word = "";
    counter = counter + 1;
    winGame();
  } else {
    incorrect();
    space22.style.backgroundColor = "red";
    setTimeout(function () {
      space22.style.backgroundColor = "white";
    }, 450);
  }
};

//**************************************************************************/
//*HERE IS THE CODE TO RELOCATE THE WORDS' POSITIONS AUTOMATICALLY
function coordinate(x, y) {
  this.x = x;
  this.y = y;
}

let arr = new Array();

arr.push(new coordinate(53.7, 48));
arr.push(new coordinate(63, 24));
arr.push(new coordinate(53.7, 40));
arr.push(new coordinate(63, 32));
arr.push(new coordinate(53.7, 44));
arr.push(new coordinate(63, 48));
arr.push(new coordinate(63, 40));
arr.push(new coordinate(53.7, 24));
arr.push(new coordinate(53.7, 28));
arr.push(new coordinate(53.7, 32));
arr.push(new coordinate(63, 28));
arr.push(new coordinate(53.7, 36));
arr.push(new coordinate(63, 36));
arr.push(new coordinate(63, 44));

//**************************************************************************/
//TODO: GENERATE AN ARRAY THAT CONTAINS NUMBERS FROM 0 TO 13 WITHOUT REPEATING
let newArray = new Array();

function generateNewArray() {
  let randomNumber = Math.floor(Math.random() * 14);
  newArray.push(randomNumber);

  for (let i = 0; i < 13; i++) {
    if (newArray.includes(randomNumber)) {
      do {
        randomNumber = Math.floor(Math.random() * 14);
      } while (newArray.includes(randomNumber));
      newArray.push(randomNumber);
    } else {
      newArray.push(randomNumber);
      i = i - 1;
    }
  }
}

let valueX;
let valueY;
let strX;
let strY;

function getX(value) {
  valueX = value;
  strX = valueX.toString();

  return strX;
}

function getY(value) {
  valueY = value;
  strY = valueY.toString();

  return strY;
}

function orderWords() {
  //*1. HEAD new position
  head.style.left = `${getX(arr[newArray[0]].x)}rem`;
  head.style.top = `${getX(arr[newArray[0]].y)}rem`;

  //*2. MOUTH new position
  mouth.style.left = `${getX(arr[newArray[1]].x)}rem`;
  mouth.style.top = `${getX(arr[newArray[1]].y)}rem`;

  //*3. ARM new position
  arm.style.left = `${getX(arr[newArray[2]].x)}rem`;
  arm.style.top = `${getX(arr[newArray[2]].y)}rem`;

  //*4. WAIST new position
  waist.style.left = `${getX(arr[newArray[3]].x)}rem`;
  waist.style.top = `${getX(arr[newArray[3]].y)}rem`;

  //*5. NECK new position
  neck.style.left = `${getX(arr[newArray[4]].x)}rem`;
  neck.style.top = `${getX(arr[newArray[4]].y)}rem`;

  //*6. HAND new position
  hand.style.left = `${getX(arr[newArray[5]].x)}rem`;
  hand.style.top = `${getX(arr[newArray[5]].y)}rem`;

  //*7. NOSE new position
  nose.style.left = `${getX(arr[newArray[6]].x)}rem`;
  nose.style.top = `${getX(arr[newArray[6]].y)}rem`;

  //*8. EYE new position
  eye.style.left = `${getX(arr[newArray[7]].x)}rem`;
  eye.style.top = `${getX(arr[newArray[7]].y)}rem`;

  //*9. NAVEL new position
  navel.style.left = `${getX(arr[newArray[8]].x)}rem`;
  navel.style.top = `${getX(arr[newArray[8]].y)}rem`;

  //*10. CHEST new position
  chest.style.left = `${getX(arr[newArray[9]].x)}rem`;
  chest.style.top = `${getX(arr[newArray[9]].y)}rem`;

  //*11. PENIS new position
  penis.style.left = `${getX(arr[newArray[10]].x)}rem`;
  penis.style.top = `${getX(arr[newArray[10]].y)}rem`;

  //*12. FOOT new position
  foot.style.left = `${getX(arr[newArray[11]].x)}rem`;
  foot.style.top = `${getX(arr[newArray[11]].y)}rem`;

  //*13. LEG new position
  leg.style.left = `${getX(arr[newArray[12]].x)}rem`;
  leg.style.top = `${getX(arr[newArray[12]].y)}rem`;

  //*14. VAGINA new position
  vagina.style.left = `${getX(arr[newArray[13]].x)}rem`;
  vagina.style.top = `${getX(arr[newArray[13]].y)}rem`;
}

//**************************************************************************/

let arr2 = new Array();

arr2.push(new coordinate(58.3, 29));
arr2.push(new coordinate(58.3, 33));
arr2.push(new coordinate(58.3, 37));
arr2.push(new coordinate(58.3, 41));

//**************************************************************************/
//TODO: GENERATE AN ARRAY THAT CONTAINS NUMBERS FROM 0 TO 3 WITHOUT REPEATING
let newArray2 = new Array();

function generateNewArray2() {
  let randomNumber = Math.floor(Math.random() * 4);
  newArray2.push(randomNumber);

  for (let i = 0; i < 3; i++) {
    if (newArray2.includes(randomNumber)) {
      do {
        randomNumber = Math.floor(Math.random() * 4);
      } while (newArray2.includes(randomNumber));
      newArray2.push(randomNumber);
    } else {
      newArray2.push(randomNumber);
      i = i - 1;
    }
  }
}

function orderWords2() {
  //*1. BACKWAIST new position
  backWaist.style.left = `${getX(arr2[newArray2[0]].x)}rem`;
  backWaist.style.top = `${getX(arr2[newArray2[0]].y)}rem`;

  //*1.2 BACKWAIST2 new position
  backWaist2.style.left = `${getX(arr2[newArray2[0]].x)}rem`;
  backWaist2.style.top = `${getX(arr2[newArray2[0]].y)}rem`;

  //*2. ANUS new position
  anus.style.left = `${getX(arr2[newArray2[1]].x)}rem`;
  anus.style.top = `${getX(arr2[newArray2[1]].y)}rem`;

  //*2.1 ANUS2 new position
  anus2.style.left = `${getX(arr2[newArray2[1]].x)}rem`;
  anus2.style.top = `${getX(arr2[newArray2[1]].y)}rem`;

  //*3. BACK new position
  back.style.left = `${getX(arr2[newArray2[2]].x)}rem`;
  back.style.top = `${getX(arr2[newArray2[2]].y)}rem`;

  //*3.2 BACK2 new position
  back2.style.left = `${getX(arr2[newArray2[2]].x)}rem`;
  back2.style.top = `${getX(arr2[newArray2[2]].y)}rem`;

  //*4. BUTTOCKS new position
  buttocks.style.left = `${getX(arr2[newArray2[3]].x)}rem`;
  buttocks.style.top = `${getX(arr2[newArray2[3]].y)}rem`;

  //*4.2 BUTTOCKS2 new position
  buttocks2.style.left = `${getX(arr2[newArray2[3]].x)}rem`;
  buttocks2.style.top = `${getX(arr2[newArray2[3]].y)}rem`;
}

//*INVOKING FUNCTIONS 😎️
generateNewArray();
generateNewArray2();
orderWords();
orderWords2();

//*POPUP
