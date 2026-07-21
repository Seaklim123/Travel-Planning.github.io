 const modalElement = document.getElementById("myModal");

    const myModal = new bootstrap.Modal(modalElement);

    document.getElementById("openModal").addEventListener("click", function () {
        myModal.show();
    });
