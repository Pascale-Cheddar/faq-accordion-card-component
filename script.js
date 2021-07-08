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
