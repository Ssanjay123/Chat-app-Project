async function login(e){
    try{
    e.preventDefault();
     const form = new FormData(e.target);

     const loginobj = {
        email:form.get("email"),
        password:form.get("password")
     }
     console.log(loginobj);
     const response = await axios.post("http://13.51.85.74:3000/user/login",loginobj)
     if(response.status===200){
     const token = response.data.token
     localStorage.setItem("token",token);
     alert(response.data.message);
     window.location.href = "../chat/chat.html"
     }
     else{
        throw new Error("Login Failed")
     }
}
catch(err){
    console.log(err);
}
}