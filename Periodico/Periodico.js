
window.addEventListener("scroll", function () {
    let header = document.getElementById("header");
    let scrollHeight = document.body.scrollHeight - window.innerHeight;
    let scrollPercentage = (scrollY / scrollHeight) * 100;

    if (scrollPercentage > 30) {
        header.classList.add("absolute");
    } else {
        header.classList.remove("absolute")
    };
})

function toggleMenu() {
    let nav = document.querySelector(".nav-bar");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    let menuIcon = document.querySelector(".nav-minimize");

    nav.classList.toggle("active");
  
    if (nav.classList.contains("active")) {
      menuIcon.innerHTML = "✖"; 
    } else {
      menuIcon.innerHTML = "☰"; 
    }
  }
