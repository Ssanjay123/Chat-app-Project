// async function signup(e){
//     try{
// e.preventDefault();
// const form = new FormData(e.target)

// const signupobj = {
//     name:form.get("name"),
//     email:form.get("email"),
//     password:form.get("password")
// }

// const response = await axios.post("http://localhost:3000/user/signup",signupobj)
// if(response.status===200){
//     console.log(response);
//     alert(response.data.message)
// }
// else{
// alert(response.data.msg);
// window.location.href="../Login/login.html"
// }
//     }
// catch(err){
//     console.log(err)
// }
// }

async function signup(e){
    try{
e.preventDefault();
const form = new FormData(e.target)

const signupobj = {
    name:form.get("name"),
    email:form.get("email"),
    password:form.get("password")
}

const response = await axios.post("http://localhost:3000/user/signup",signupobj)
if(response.status===403){
    console.log(response);
    alert(response.message)
}
else{
alert(response.data.msg);
window.location.href="../Login/login.html"
}
    }
catch(err){
    console.log(err);
   alert(err.message)
}
}

