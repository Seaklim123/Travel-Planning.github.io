// Load Header
fetch("components/header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header-container").innerHTML = data;

        // Run active menu after header loaded
        setActiveMenu();
    });


// Active Navbar
function setActiveMenu() {

    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {

        const linkPage = link.getAttribute("href");

        // remove old active
        link.classList.remove("active");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });
}


// Load Footer
fetch("components/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer-container").innerHTML = data;
    });


// Load Auth
fetch("components/auth.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("auth-container").innerHTML = data;
    });