window.addEventListener("scroll", function () {
    const navbar = document.getElementById("mainNav");
  
    // Check how far the user has scrolled
    if (window.scrollY > 100) {
      // If scrolled more than 50px, add a new class with a background color
      navbar.classList.add("navbar-colored");
    } else {
      // If scrolled less, make the navbar transparent again
      navbar.classList.remove("navbar-colored");
    }
  });