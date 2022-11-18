async function signup(e){
    try{
e.preventDefault();
const form = new FormData(e.target)

const signupobj = {
    name:form.get("name"),
    email:form.get("email"),
    password:form.get("password")
}
console.log(signupobj);
const response = await axios.post("http://localhost:3000/user/signup",signupobj)

console.log(response);
alert(response.data.msg);
window.location.href="./login.html"
}
catch(err){
    console.log(err)
}
}
