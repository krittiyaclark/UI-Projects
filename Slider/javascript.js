let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtb");
let nextBtb = document.getElementById("nextBtb");

scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextBtb.addEventListener("click", () => {
  scrollContainer.style.crollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});

backBtb.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});
