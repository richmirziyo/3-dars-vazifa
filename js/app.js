// const clicks = document.querySelector("#click");
// const fonar = document.querySelector(".fonar-image");

// clicks.addEventListener("click", function () {
//   fonar.classList.click("on");
// });

toggle.addEventListener("click", function () {
  fonar.classList.toggle("on");
  if (fonar.classList.contains("on")) {
    toggle.innerText = "Chiroqni ochrish";
  } else {
    toggle.innerText = "Chroqni ochrish";
  }
});

document.addEventListener("mousemove", function ({clientX, clientY}) {
  fonar.style.cssText = `
top: ${clientY}px;
left: ${clientX}px;
transform: translate(-50%, -50%)`;
});
