const accountMenu = document.getElementById("accountMenu");
const user = JSON.parse(localStorage.getItem("user"));

if (user) {
    accountMenu.innerHTML = `
        <a class="nav-link" href="account.html">
            <i class="bi bi-person-circle fs-3"></i>
        </a>
    `;
} else {
    accountMenu.innerHTML = `
        <div class="d-flex gap-2 mt-3 mt-lg-0">
            <a href="login.html" class="btn btn-outline btn-sm" data-bs-toggle="modal" data-bs-target="#myModal">
                Login
            </a>

            <a href="register.html" class="btn btn-outline btn-sm">
                Register
            </a>
        </div>
    `;
}