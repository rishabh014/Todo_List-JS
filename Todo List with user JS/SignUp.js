function Register() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    // console.log(name, email, password)

    // console.log(localStorage.getItem("users"));
    userId = Math.floor(Math.random() * 1000)
    // console.log(userId)
    const newUser = [{ userId, name, email, password }]
    // const todoObj = [{ userId }]
    if (localStorage.getItem("users") == null) {
        localStorage.setItem("users", JSON.stringify(newUser))

        // localStorage.setItem("Todos", JSON.stringify(todoObj));
        //clearing the fields
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""
        //Redirecting to Login Page
        setTimeout(() => {
            window.location.href = "Login.html"
        }, 1000);
    }
    else {
        let existingUsers = JSON.parse(localStorage.getItem("users"))
        // let existingToDos = JSON.parse(localStorage.getItem("Todos"))
        // let updatedTodo = [...existingToDos, ...todoObj]
        let updatedUsers = [...existingUsers, ...newUser]
        localStorage.setItem("users", JSON.stringify(updatedUsers))
        // localStorage.setItem("Todos", JSON.stringify(updatedTodo))
        //clearing the fields
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""
        //Redirecting to Login Page
        setTimeout(() => {
            window.location.href = "Login.html"
        }, 1000);
    }

}
