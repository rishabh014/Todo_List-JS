function Login() {
    const loginEmail = document.getElementById("email").value
    const loginPassword = document.getElementById("password").value
    // console.log(loginName, loginPassword)

    //getting signup data from local storage
    const storedUser = JSON.parse(localStorage.getItem("users"))
    // console.log(storedUser)


    //matching login name and password through the array
    const loginUser = storedUser.find((user) => user.email === loginEmail && user.password === loginPassword);


    if (loginUser) {
        alert("🟢🟢Welcome User")
        setTimeout(() => {
            window.location.href = "Welcome.html"
        }, 1000);
        localStorage.setItem("tempUser", JSON.stringify(loginUser))
        // const LoginId = loginUser.userId
        // console.log(LoginId)



    }
    else {
        alert("❌🔴Invalid credentials")
    }

}
