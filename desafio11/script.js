function showPassword() {
    document
        .querySelectorAll(".eye")
        .forEach((eye) => eye.classList.toggle("hide"));

    const type =
        password.getAttribute("type") == "password" ? "text" : "password";

    password.setAttribute("type", type);
}
