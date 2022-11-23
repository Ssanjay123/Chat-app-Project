async function addChats(e){
    e.preventDefault();
    let obj = {
      msg:  document.getElementById("msg").value
    }
    
    let token = localStorage.getItem("token");

 const response = await axios.post("http://localhost:3000/chats/addchats",obj,{headers:{"authorization":token}})
console.log(response);
// localStorage.setItem(`${response.data.newMsg.name}`,response.data.newMsg.message);
   showChatsOnScreen(response.data.newMsg)
}

function showChatsOnScreen(data){
    const parentNode = document.getElementById('listOfChats')
    // parentNode.innerHTML = ''
   
   parentNode.innerHTML += `<li>${data.name}: ${data.message}</li>`
                    

}


        window.addEventListener("DOMContentLoaded",async()=>{
            try{
        const token = localStorage.getItem("token")
       const response = await axios.get("http://localhost:3000/chats/getchats",{headers:{"authorization":token}})
       console.log(response)
       
        for(let i=0;i<response.data.allMsgs.length;i++){
        const name = response.data.allMsgs[i].name
        const message = response.data.allMsgs[i].message
        const id = response.data.allMsgs[i].id
        localStorage.setItem(`${name}`,message)
        const parentNode = document.getElementById('listOfChats')
        const createNewMessage = `<div id="${id}"> ${name}: ${message}</div>`
        parentNode.innerHTML += createNewMessage

        // showChatsOnScreen(response.data.allMsgs[i])
       }
    }
    catch(err){
        console.log(err);
    }
      })
    
      function createGroup(e){
        window.location.href = "../Group/group.html"
      }
    
   

   
   