const a = document.getElementById("CD42");
const b = document.getElementById("gang");
console.log(document.getElementById("CD42"));

a.addEventListener("click", () => {
  // b.classList.add("hide");
  // a.classList.add("hide");
  console.log("asdf");
  gsap.to(b, 2, {
    display: "block",
    opacity: 1,
    marginTop: "110px",
  });
  gsap.to(a, 2, {
    // display: "none",
    opacity: 0,
  });
});
