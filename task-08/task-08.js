const formEl = document.querySelector(".login-form")


formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return console.log("Заповніть усі поля");
    }
    const Data = {
    email,
    password,
    }
    console.log(Data)
formEl.reset
}

