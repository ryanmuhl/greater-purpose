//(PLACEHOLDER) function to gather form data and call our "POST /api/user/login" express route
const loginFormHandler = async function (event) {
  event.preventDefault();
  const username = document.getElementById("name").value.trim()
  const Password = document.getElementById("password").value.trim()
  const response = await fetch("/api/user/login",{
    method:"post",
    body:JSON.stringify({
            username,
           Password
    }),
    headers:{"Content.Type":"appliction/json"}
  })
};
const submitbutton = document.getElementById("formsubmit")
submitbutton.addEventListener("click", loginFormHandler)
