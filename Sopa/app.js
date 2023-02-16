"use strict";

const img = document.getElementById("img");
const containerInfo = document.getElementById("container-info");
const containerLetters = document.getElementById("container-letters");
const containerCard = document.getElementById("container-card");

const title = document.getElementById("title");
const paragraph = document.getElementById("paragraph");

img.addEventListener("click", function () {
  containerInfo.style.opacity = "0";

  setTimeout(function () {
    containerLetters.style.opacity = "1";
  }, 1000);
});

const letterA = document.getElementById("letter-A");
letterA.addEventListener("click", function () {
  containerLetters.style.opacity = "0";

  setTimeout(function () {
    title.innerText = "Abogado/Abogada";
    paragraph.innerText =
      "Son personas que trabajan para defender los derechos de las niñas, niños, y adolecentes. (Suprema Corte de Justicia de la Nación, 2012).";
    containerInfo.style.zIndex = "999";
  }, 500);

  setTimeout(function () {
    containerCard.style.display = "block";
  }, 800);

  setTimeout(function () {
    containerInfo.style.opacity = "1";
  }, 1200);
});

const letterC = document.getElementById("letter-C");
letterC.addEventListener("click", function () {
  containerLetters.style.opacity = "0";

  setTimeout(function () {
    title.innerText = "lorem5";
    paragraph.innerText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed finibus ante. Vestibulum suscipit convallis dolor. Nunc laoreet quis massa in vulputate.";
    containerInfo.style.zIndex = "999";
  }, 500);

  setTimeout(function () {
    containerInfo.style.opacity = "1";
  }, 800);
});

const letterD = document.getElementById("letter-D");
letterD.addEventListener("click", function () {
  containerLetters.style.opacity = "0";

  setTimeout(function () {
    title.innerText = "Denuncia";
    paragraph.innerText =
      "Forma en la que alguien le avisa a la autoridad acerca del daño que una persona le hizo a otra (Suprema Corte de Justicia de la Nación, 2003).";
    containerInfo.style.zIndex = "999";
  }, 500);

  setTimeout(function () {
    containerInfo.style.opacity = "1";
  }, 800);
});

const letterE = document.getElementById("letter-E");
letterE.addEventListener("click", function () {
  containerLetters.style.opacity = "0";

  setTimeout(function () {
    title.innerText = "Evaluación Psicológica";
    paragraph.innerText =
      "Es cuando una psicológa platica con niñas, niños y adolecentes, les hace preguntas y hacen actividades para que puedan entender cómo se sienten y que piensan después de lo que les pasó (Kirchner, Torres, y Forns, 1998).";
    containerInfo.style.zIndex = "999";
  }, 500);

  setTimeout(function () {
    containerInfo.style.opacity = "1";
  }, 800);
});

const letterI = document.getElementById("letter-I");
letterI.addEventListener("click", function () {
  containerLetters.style.opacity = "0";

  setTimeout(function () {
    title.innerText = "Interés superior de la niñez";
    paragraph.innerText =
      "Significa que todas las decisiones que se tomen en relación a un niño, niña o adolecente deben ir orientadas a su bienestar y pleno ejercicio de derechos (Defensoría de la Niñez, s.f.).";
    containerInfo.style.zIndex = "999";
  }, 500);

  setTimeout(function () {
    containerInfo.style.opacity = "1";
  }, 800);
});

const letterL = document.getElementById("letter-L");
letterL.addEventListener("click", function () {
  containerLetters.style.opacity = "0";

  setTimeout(function () {
    title.innerText = "Leyes/Ley";
    paragraph.innerText =
      "Son reglas que pone la autoridad para que las personas vivan en armonía y bienestar (Real Academia Española, 2014).";
    containerInfo.style.zIndex = "999";
  }, 500);

  setTimeout(function () {
    containerInfo.style.opacity = "1";
  }, 800);
});

const letterM = document.getElementById("letter-M");
letterM.addEventListener("click", function () {
  containerLetters.style.opacity = "0";

  setTimeout(function () {
    title.innerText = "Mentira";
    paragraph.innerText =
      "Es cuando una persona dice algo que no es verdad o no pasó como él o ella dicen (Real Academia Española, s.f.)";
    containerInfo.style.zIndex = "999";
  }, 500);

  setTimeout(function () {
    containerInfo.style.opacity = "1";
  }, 800);
});

const letterN = document.getElementById("letter-N");
letterN.addEventListener("click", function () {
  containerLetters.style.opacity = "0";

  setTimeout(function () {
    title.innerText = "lorem5";
    paragraph.innerText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed finibus ante. Vestibulum suscipit convallis dolor. Nunc laoreet quis massa in vulputate.";
    containerInfo.style.zIndex = "999";
  }, 500);

  setTimeout(function () {
    containerInfo.style.opacity = "1";
  }, 800);
});

const letterJ = document.getElementById("letter-J");
letterJ.addEventListener("click", function () {
  containerLetters.style.opacity = "0";

  setTimeout(function () {
    title.innerText = "lorem5";
    paragraph.innerText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed finibus ante. Vestibulum suscipit convallis dolor. Nunc laoreet quis massa in vulputate.";
    containerInfo.style.zIndex = "999";
  }, 500);

  setTimeout(function () {
    containerInfo.style.opacity = "1";
  }, 800);
});

const letterO = document.getElementById("letter-O");
letterO.addEventListener("click", function () {
  containerLetters.style.opacity = "0";

  setTimeout(function () {
    title.innerText = "lorem5";
    paragraph.innerText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed finibus ante. Vestibulum suscipit convallis dolor. Nunc laoreet quis massa in vulputate.";
    containerInfo.style.zIndex = "999";
  }, 500);

  setTimeout(function () {
    containerInfo.style.opacity = "1";
  }, 800);
});

const letterP = document.getElementById("letter-P");
letterP.addEventListener("click", function () {
  containerLetters.style.opacity = "0";

  setTimeout(function () {
    title.innerText = "Prevención";
    paragraph.innerText =
      "Es cuando las niñas, niños y adolecentes aprenden cómo pueden cuidarse para que nadie los lastime.";
    containerInfo.style.zIndex = "999";
  }, 500);

  setTimeout(function () {
    containerInfo.style.opacity = "1";
  }, 800);
});

const letterV = document.getElementById("letter-V");
letterV.addEventListener("click", function () {
  containerLetters.style.opacity = "0";

  setTimeout(function () {
    title.innerText = "Verdad";
    paragraph.innerText =
      "Cuando una persona dice lo que realmente pasó, pensó y sintio. (Real Academia Española, 2023)";
    containerInfo.style.zIndex = "999";
  }, 500);

  setTimeout(function () {
    containerInfo.style.opacity = "1";
  }, 800);
});

const letterS = document.getElementById("letter-S");
letterS.addEventListener("click", function () {
  containerLetters.style.opacity = "0";

  setTimeout(function () {
    title.innerText = "lorem5";
    paragraph.innerText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed finibus ante. Vestibulum suscipit convallis dolor. Nunc laoreet quis massa in vulputate.";
    containerInfo.style.zIndex = "999";
  }, 500);

  setTimeout(function () {
    containerInfo.style.opacity = "1";
  }, 800);
});

const letterT = document.getElementById("letter-T");
letterT.addEventListener("click", function () {
  containerLetters.style.opacity = "0";

  setTimeout(function () {
    title.innerText = "Abdomen";
    paragraph.innerText =
      "El abdomen es la parte del cuerpo comprendida entre el tórax y la pelvis.";
    containerInfo.style.zIndex = "999";
  }, 500);

  setTimeout(function () {
    containerInfo.style.opacity = "1";
  }, 800);
});

/**
 ** All the code below is to generate movement to the letters.
 ** Don't touch it unless you want to change how long and fast the movement are.
 */

const generateMovement = function (letter, positionXLetter, positionYLetter) {
  let option = getRandomInt(1, 4);
  let x = getRandomInt(1, 6);
  let y = getRandomInt(1, 6);

  switch (option) {
    case 1:
      setTimeout(function () {
        letter.style.top = `${positionYLetter - y / 10}%`;
        letter.style.left = `${positionXLetter - x / 10}%`;
      }, 800);
      break;
    case 2:
      setTimeout(function () {
        letter.style.top = `${positionYLetter + y / 10}%`;
        letter.style.left = `${positionXLetter + x / 10}%`;
      }, 800);
      break;
    case 3:
      setTimeout(function () {
        letter.style.top = `${positionYLetter - y / 10}%`;
        letter.style.left = `${positionXLetter + x / 10}%`;
      }, 800);
      break;
    case 4:
      setTimeout(function () {
        letter.style.top = `${positionYLetter + y / 10}%`;
        letter.style.left = `${positionXLetter - x / 10}%`;
      }, 800);
      break;

    default:
      break;
  }
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const iniLetters = function () {
  //Movement fot letter A
  generateMovement(letterA, 10, 35);
  //Movement fot letter C
  generateMovement(letterC, 20, 15);
  //Movement fot letter D
  generateMovement(letterD, 34, 16);
  //Movement fot letter E
  generateMovement(letterE, 25, 34);
  //Movement fot letter I
  generateMovement(letterI, 19, 53);
  //Movement fot letter L
  generateMovement(letterL, 62, 11);
  //Movement fot letter M
  generateMovement(letterM, 75, 55);
  //Movement fot letter N
  generateMovement(letterN, 63, 38);
  //Movement fot letter J
  generateMovement(letterJ, 40, 40);
  //Movement fot letter O
  generateMovement(letterO, 60, 67);
  //Movement fot letter P
  generateMovement(letterP, 44, 73);
  //Movement fot letter V
  generateMovement(letterV, 29, 62);
  //Movement fot letter S
  generateMovement(letterS, 49, 16);
  //Movement fot letter T
  generateMovement(letterT, 50, 50);
};

setInterval(() => iniLetters(), 1000);
