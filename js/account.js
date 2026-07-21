const user = JSON.parse(localStorage.getItem("user"));

if (user) {
    document.getElementById("name").textContent = user.username;
    document.getElementById("email").textContent = user.email;

    document.getElementById("display-name").textContent = user.username;
    document.getElementById("display-email").textContent = user.email;
}


const editBtn = document.getElementById("editBtn");
const editForm = document.getElementById("editForm");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");


editBtn.addEventListener("click", () => {
    editForm.style.display = "block";

    document.getElementById("editName").value =
        document.getElementById("display-name").textContent;

    document.getElementById("editEmail").value =
        document.getElementById("display-email").textContent;
});


saveBtn.addEventListener("click", () => {

    const newName = document.getElementById("editName").value;
    const newEmail = document.getElementById("editEmail").value;

    document.getElementById("name").textContent = newName;
    document.getElementById("email").textContent = newEmail;

    document.getElementById("display-name").textContent = newName;
    document.getElementById("display-email").textContent = newEmail;


    if (user) {
        user.username = newName;
        user.email = newEmail;

        localStorage.setItem("user", JSON.stringify(user));
    }

    editForm.style.display = "none";
});


cancelBtn.addEventListener("click", () => {
    editForm.style.display = "none";
});