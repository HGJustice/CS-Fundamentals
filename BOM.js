function printBrowserScreen() {
  function logWindowDimension() {
    console.log("Height: " + window.innerHeight, "Width: " + window.innerWidth);
  }
  window.addEventListener("resize", logWindowDimension);
}

function setURLParameter(parameter1, parameter2) {
  const currentURL = new URL(window.location.href);
  currentURL.searchParams.set(parameter1, parameter2);
  window.location.href = currentURL.href;
}

function setURLHashParameter(parameter1, parameter2) {
  const currentURL = new URL(window.location.href);
  const queryParams = new URLSearchParams(currentURL.hash.slice(1));
  queryParams.set(parameter1, parameter2);
  currentURL.hash = queryParams;
  window.location.href = currentURL.href;
}

const prev = document.getElementById("previous_button");
const next = document.getElementById("next_button");

next.addEventListener("click", () => {
  window.history.forward();
});

prev.addEventListener("click", () => {
  window.history.back();
});

function printBrowserInfo() {
  console.log(window.navigator.userAgent);
}
