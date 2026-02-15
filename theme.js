const toggle = document.querySelector(".theme-toggle");

if (localStorage.getItem("dark")) {
  document.body.classList.add("dark");
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", true);
  } else {
    localStorage.removeItem("dark");
  }
});
