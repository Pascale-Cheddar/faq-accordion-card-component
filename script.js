window.addEventListener("DOMContentLoaded", event => {
  let buttons = document.querySelectorAll("#accordion button");
  buttons.forEach(button => {
    let content = button.nextElementSibling;
    button.addEventListener("click", event => {
      if (button.classList.contains("active")) {
        button.classList.remove("active");
        button.setAttribute("aria-expanded", false);
        content.style.maxHeight = null;
        content.setAttribute("aria-hidden", true);
      } else {
        button.classList.add("active");
        button.setAttribute("aria-expanded", true);
        content.style.maxHeight = content.scrollHeight + "px";
        content.setAttribute("aria-hidden", false);
      }
    });
  });
});

let rotation = 0;
const rotateSvg = () => {
  rotation += 180; //add 180 degrees
  if (rotation === 360) {
    // 360 means rotate back to 0
    rotation = 0;
  }

  document.querySelector("#svg").style.transform = `rotate(${rotation}deg)`;
};

let secondRotation = 0;
const rotateSvgSecond = () => {
  secondRotation += 180; //add 180 degrees
  if (secondRotation === 360) {
    // 360 means rotate back to 0
    SecondRotation = 0;
  }

  document.querySelector(
    "#svg2"
  ).style.transform = `rotate(${secondRotation}deg)`;
};

let thirdRotation = 0;
const rotateSvgThird = () => {
  thirdRotation += 180; //add 180 degrees
  if (thirdRotation === 360) {
    // 360 means rotate back to 0
    thirdRotation = 0;
  }

  document.querySelector(
    "#svg3"
  ).style.transform = `rotate(${thirdRotation}deg)`;
};

let fourthRotation = 0;
const rotateSvgFourth = () => {
  fourthRotation += 180; //add 180 degrees
  if (fourthRotation === 360) {
    // 360 means rotate back to 0
    fourthRotation = 0;
  }

  document.querySelector(
    "#svg4"
  ).style.transform = `rotate(${fourthRotation}deg)`;
};

let fifthRotation = 0;
const rotateSvgFifth = () => {
  fifthRotation += 180; //add 180 degrees
  if (fifthRotation === 360) {
    // 360 means rotate back to 0
    fifthRotation = 0;
  }

  document.querySelector(
    "#svg5"
  ).style.transform = `rotate(${fifthRotation}deg)`;
};
